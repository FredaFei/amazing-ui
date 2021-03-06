<template>
  <div class="am-uploader">
    <div class="am-uploader-content" @click="onClickUploadFile">
      <slot></slot>
    </div>
    <ol class="am-uploader-preview-list">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status==='uploading'">
          <am-icon name="loading" class="am-uploader-spin"></am-icon>
        </template>
        <template v-if="file.type.indexOf('image')===0">
          <img :src="file.url" class="am-uploader-preview">
        </template>
        <template v-else>
          <div class="am-uploader-defaultImage"></div>
        </template>
        <span class="am-uploader-name" :class="{[file.status]: file.status}">{{file.name}}</span>
        <button class="am-uploader-remove" @click="onDeleteFile(file)">X</button>
      </li>
    </ol>
    <div class="temp" ref="temp" style="overflow:hidden;width:0;height:0;"></div>
  </div>
</template>
<script>
import AmIcon from "../icon";
import http from "../http";
export default {
  name: "amUploader",
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: "POST"
    },
    accept: {
      type: String,
      default: "image/*"
    },
    sizeLimit: {
      type: Number
    },
    fileList: {
      type: Array,
      default: () => []
    },
    parseReponse: {
      type: Function,
      required: true
    }
  },
  components: { AmIcon },
  data() {
    return {
      url: "about:blank"
    };
  },
  mounted() {},
  methods: {
    onClickUploadFile() {
      let input = this.createInput();
      input.addEventListener("change", () => {
        this.uploadFiles(input.files);
        input.remove();
      });
      input.click();
    },
    createInput() {
      this.$refs.temp.innerHTML = "";
      let input = document.createElement("input");
      input.type = "file";
      input.accept = this.accept;
      input.multiple = true;
      this.$refs.temp.appendChild(input);
      return input;
    },
    uploadFiles(rowFiles) {
      let newNames = [];
      for (let i = 0; i < rowFiles.length; i++) {
        let rowFile = rowFiles[i];
        let { name, size, type } = rowFile;
        let newName = this.generatorName(name);
        newNames[i] = newName;
      }
      if (!this.beforeUploadFiles(rowFiles, newNames)) {
        return false;
      }
      for (let i = 0; i < rowFiles.length; i++) {
        let rowFile = rowFiles[i];
        let formData = new FormData();
        formData.append(this.name, rowFile);
        this.doUploadFiles(
          formData,
          response => {
            let url = this.parseReponse(response);
            this.afterUploadFiles(newNames[i], url);
          },
          xhr => {
            this.uploadFileError(xhr, newNames[i]);
          }
        );
      }
    },
    beforeUploadFiles(rowFiles, newNames) {
      rowFiles = Array.from(rowFiles);
      for (let i = 0; i < rowFiles.length; i++) {
        let rowFile = rowFiles[i];
        let { size, type } = rowFile;
        if (size > this.sizeLimit) {
          this.$emit("error", "文件过大了哦！");
          return false;
        }
      }
      let tempFiles = rowFiles.map((rowFile, index) => {
        let { size, type } = rowFile;
        return { name: newNames[index], size, type, status: "uploading" };
      });
      this.$emit("update:fileList", [...this.fileList, ...tempFiles]);
      return true;
    },
    afterUploadFiles(name, url) {
      let file = this.fileList.filter(f => f.name === name)[0];
      let index = this.fileList.indexOf(file);
      let copyFile = { ...file };
      copyFile.url = url;
      copyFile.status = "success";
      let copyFileList = [...this.fileList];
      copyFileList.splice(index, 1, copyFile);
      this.$emit("update:fileList", copyFileList);
      this.$emit("uploaded");
    },
    uploadFileError(xhr, newName) {
      let file = this.fileList.filter(f => f.name === newName)[0];
      let index = this.fileList.indexOf(file);
      let copyFile = { ...file };
      copyFile.status = "fail";
      let copyFileList = [...this.fileList];
      copyFileList.splice(index, 1, copyFile);
      this.$emit("update:fileList", copyFileList);
      let error;
      if (xhr.status === 0) {
        error = "网络无法连接";
      }
      this.$emit("error", error);
    },
    generatorName(name) {
      while (this.fileList.filter(n => n.name === name).length > 0) {
        let dotIndex = name.lastIndexOf(".");
        let nameWithoutExtension = name.substring(0, dotIndex);
        let extension = name.substring(dotIndex);
        name = nameWithoutExtension + "(1)" + extension;
      }
      return name;
    },
    doUploadFiles(formData, success, error) {
      http[this.method.toLocaleLowerCase()](this.action, {
        data: formData,
        success,
        error
      });
    },
    onDeleteFile(file) {
      let yes = window.confirm("确定删除该文件吗？");
      if (yes) {
        let copy = [...this.fileList];
        let index = copy.indexOf(file);
        copy.splice(index, 1);
        this.$emit("update:fileList", copy);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.am-uploader {
  &-preview-list {
    list-style: none;
    > li {
      display: flex;
      align-items: center;
      border: 1px solid darken($gray, 10%);
      margin: 8px 0;
    }
  }
  &-defaultImage,
  &-preview {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  &-preview {
    border: none;
  }
  &-name {
    margin-right: auto;
    &.success {
      color: green;
    }
    &.fail {
      color: red;
    }
  }
  &-remove {
    width: 32px;
    height: 32px;
  }
  &-spin {
    width: 32px;
    height: 32px;
    @include spin;
  }
}
</style>