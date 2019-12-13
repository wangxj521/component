<template>
  <div id="app">
    <!-- <el-button type="primary">垃圾</el-button> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>
      <uploader @complete="setUploadedMaterial" @resetUploader="resetUploader" :fileName="standby_name" :canPreview="true" :url="standby" :valueName="'standby'"></uploader>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import $ from "jquery";
// import CONFIG from './config/hostConfig.js'
import uploader from 'components/uploader/uploader.vue'

export default {
  name: "app",
  components: {
    uploader
  },
  data() {
    return {
      standby: '',
      standby_name: '',
      standby_Data: []
    };
  },
  methods:{
    setUploadedMaterial(data){
        var dat = data.data;
        let d = Object.assign({},dat)
        let isrepeat= false;
        let md= this[data.valueName+'_Data'];
         for(let i=0;i<md.length;i++){
           if(d.url == md[i]['url']){
             isrepeat = true;
             break;
           }
         }
         if(!isrepeat){
            md.unshift(d)
          }
				if (d.url) {

					this[data.valueName]= d.url;
					this[data.valueName+'_name']= d.fileName;
					// this.trademarkData.contract_url = d.url;
				}else{
					this.uploaderErrCallback(d);
        }
        console.log(data)
    },
    resetUploader(valueName){
				this[valueName] = '';
				this[valueName+'_name'] = '';
    },
    uploaderErrCallback(data){
				this.$alert(data.msg);
    },
  },
  mounted() {
    let a = document.createElement('div')
    console.log('href' in a)
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
