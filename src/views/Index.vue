<template>
  <div class="box">
    <el-row class="row">
      <el-col><h2>腾讯地图坐标拾取</h2></el-col>
    </el-row>
    <el-row class="row">
      <el-col>纬度：{{ mapPosition?mapPosition[0]:'无' }}</el-col>
    </el-row>
    <el-row class="row">
      <el-col>经度：{{ mapPosition?mapPosition[1]:'无' }}</el-col>
    </el-row>
    <el-row class="row">
      <el-col>地址：{{ mapAddress?mapAddress:'无' }}</el-col>
    </el-row>
    <el-row class="row">
      <el-col>
        <el-button type="primary" size="small" @click="mapVisible=true" plain
          >坐标拾取</el-button
        ></el-col
      >
    </el-row>
    <TMap
      ref="MapWin"
      v-if="mapVisible"
      :mapPosition="mapPosition"
      @closeMapWin="mapVisible = false"
      @setMap="setMap"
    />
  </div>
</template>
<script>
import TMap from "@/components/TMap.vue";
export default {
  components: {
    TMap,
  },
  data() {
    return {
      mapVisible: false,
      mapPosition:null,
      mapAddress:''
    };
  },
  methods: {
    setMap(data) {
      console.log(data);
      this.mapPosition=data.position;
      this.mapAddress=data.address;
      this.mapVisible = false;
    }
  },
};
</script>
<style scoped>
.box {
  padding: 20px;
}
.box .row {
  padding: 10px 0;
}
</style>