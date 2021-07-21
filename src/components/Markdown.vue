<template>
  <div class="markdown-content" v-html="content"></div>
</template>

<script lang="ts">
  export default {
    props: {
      content: {
        type: String,
        required: true
      }
    },
  };
</script>
<style lang="scss">
  .markdown-content {
    overflow-x: auto;
    margin-bottom: 20px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: normal;
      margin: 10px 0;
    }
    table {
      width: 100%;
      line-height: 1.5;
      border: 1px solid #e8e8e8;
      border-collapse: collapse;
      border-spacing: 0;
      th, td {
        text-align: left;
        padding: 12px;
        color: #5c6b77;
        border-width: 0 !important;
        border-bottom: 1px solid #e8e8e8;
      }
      thead {
        th {
          padding-top: 14px;
          border-width: 0 0 2px 0;
          font-weight: 500;
          white-space: nowrap;
          background: rgba(0, 0, 0, 0.02);
        }
      }
      tbody {
        tr {transition: all .3s;
          &:hover {background: rgba(60, 90, 100, 0.04);}
        }
        td {
          font-size: 14px;
          &:first-child {
            width: 20% !important;
            color: #595959;
            font-weight: 600;
          }
          &:nth-child(3) {
            width: 22% !important;
            color: #c41d7f;
            word-break: break-all;
          }
          &:nth-child(4) {
            width: 16% !important;
          }
        }
      }
    }
    p {font-size: 16px;}
  }
</style>