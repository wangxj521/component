<template>
  <div>
      <div id="myeditor"></div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
    data() {
        return {
            editor: ''
        }
    },
    mounted(){
        let editor = new E('#myeditor');
        editor.create();
    }
}
</script>

<style lang='scss' scope>

</style>