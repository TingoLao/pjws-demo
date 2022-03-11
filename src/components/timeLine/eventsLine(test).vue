<template>
  <!-- 事件线 -->
  <!-- 当日 记录不超过4个，全排列 -->
  <div class="container" v-if="timeLineList.length < 5">
    <!-- 单个事件for -->
    <div class="items" v-for="(events, index) in timeLineList" :key="index">
      <div class="item_main">
        <!-- 事件信息悬浮窗 -->
        <el-tooltip
          effect="light"
          placement="top"
          class="item_info_tooltip"
          :content="events.info"
        >
          <div>
            <!-- 事件点的圆点 -->
            <div
              class="dot"
              @mouseover="changeActive(index)"
              :class="{ active: index === timeIndex }"
            ></div>
            <!-- 事件点上方的时间戳 -->
            <div class="item_timestamp">
              <span v-if="events.timestamp">
                {{ events.timestamp }}
              </span>
            </div>
          </div>
        </el-tooltip>
        <!-- 事件主体 -->
        <div class="item_event">
          <!-- 事件信息 -->
          <div class="item_info">
            {{ events.info }}
          </div>
        </div>
        <!-- 前提事件模块 -->
        <div class="item"></div>
      </div>
    </div>
  </div>
  <!-- 当日 记录超过5个，全排列 -->
  <div class="container" v-else>
    <div
      class="move-button el-icon-arrow-left"
      v-bind:class="{ active: left_button_active }"
      :disabled="left_button_disabled"
      @click="moveLeft()"
    >
      <div class="item_top">
        <span style="color: #000">左</span>
      </div>
    </div>
    <!-- 单个事件for -->
    <div class="items" v-for="(events, index) in getShowArr" :key="index">
      <div class="item_main">
        <!-- 事件悬浮窗 -->
        <el-tooltip
          effect="dark"
          placement="top"
          class="item_info_tooltip"
          :content="events.info"
        >
          <div>
            <!-- 事件圆点 -->
            <div
              class="dot"
              @mouseover="changeActive(index)"
              :class="{ active: index === timeIndex }"
            ></div>
            <!-- 事件点上方的时间戳 -->
            <div class="item_timestamp">
              <span v-if="events.timestamp">
                {{ events.timestamp }}
              </span>
            </div>
          </div>
        </el-tooltip>
        <!-- 事件信息主体 -->
        <div class="times_event">
          <!-- 事件信息 -->
          <div
            class="item_info"
            :style="checkStyle(events.categories)"
          >
            <!-- :style="{
              backgroundColor:
                timeLineList[index].categories == 0
                  ? '#65bdaf'
                  : timeLineList[index].categories == 1
                  ? '#eabd60'
                  : timeLineList[index].categories == 2
                  ? '#e2e9f9'
                  : timeLineList[index].categories == 3
                  ? '#ce3820'
                  : '',
            }" -->
            {{ events.info }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="move-button el-icon-arrow-right"
      v-bind:class="{ active: right_button_active }"
      :disabled="right_button_disabled"
      @click="moveRight()"
    ></div>
  </div>
</template>

<script>
export default {
  name: "timeLine",
  props: ["timeLineList"],

  data() {
    return {
      timeIndex: this.$props.timeLineList.length - 1, //默认当前选择的为最近的时间点
      point_star: this.$props.timeLineList.length - 4, //时间轴只展示4个,初始为最后4个
      point_end: this.$props.timeLineList.length - 1,
      left_button_active: true,
      left_button_disabled: false,
      right_button_active: false,
      right_button_disabled: true,
    };
  },

  methods: {
    // active切换效果 ？
    changeActive(index) {
      this.timeIndex = index;
      console.log("悬浮选择的时间点：", this.timeIndex);

      console.log("数组", this.indexArry);
    },
    // 很多方法
    moveLeft() {
      // this.point_star -= 1;
      this.right_button_active = true;
      this.right_button_disabled = false;
      if (this.point_star > 0) {
        this.point_star -= 1;
        this.point_end -= 1;
        this.left_button_active = true;
        this.left_button_disabled = false;

        if (this.point_star == 0) {
          this.left_button_active = false;
          this.left_button_disabled = true;
        }
      }
    },
    moveRight() {
      //this.point_star += 1;
      this.left_button_active = true;
      this.left_button_disabled = false;
      if (this.point_end < this.$props.timeLineList.length - 1) {
        this.right_button_active = true;
        this.right_button_disabled = false;
        this.point_end += 1;
        this.point_star += 1;
        if (this.point_end == this.$props.timeLineList.length - 1) {
          this.right_button_active = false;
          this.right_button_disabled = true;
        }
      }
    },
    checkStyle(a) {
      switch (a) {
        case 0:
      }
    },

    created() {},
  },
  computed: {
    getShowArr() {
      const len = 4;
      return this.timeLineList.slice(this.point_star, this.point_star + len);
    },
  },
};
</script>

<style>
.container {
  display: flex;
}

.items {
  flex: 1;
  display: flex;
  justify-content: center;
}

.el-timeline-item {
  border-top: 1px solid #dcdfe6;
}
.el-timeline-item__node {
  top: -6px;
}

.dot {
  border: 2px solid #dcdfe6;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  /*  background: white; */
  background: #499cf0;
  margin: 2px 0px;
  box-sizing: border-box;
  display: inline-flex; /* 圆点居中 */
}

/* 事件点上方的时间戳样式 */
.item_timestamp {
  /* flex: 1;  ?*/
  text-align: center;
  height: 15px;
  margin-top: -50px;
  font-size: 14px;
}

/* 时间点上方 信息悬浮窗口样式 */
.item_info_tooltip {
  text-align: center;
  height: 25px;
  margin-top: -7px;
  font-size: 14px;
}

/* 事件点下方事件主体样式 */
.item_event {
  text-align: center;
}
/* 信息样式 */
.item_info {
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #6bb9ba;
  height: 25px;
  width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
}

/* 左右滚动样式 */

.move-button {
  border: 2px solid #dcdfe6;
  width: 40px;
  height: 19px;
  border-radius: 19px;
  background: white;
  text-align: center;
  box-sizing: border-box;
}
.active {
  background-color: #fff !important;
  /* //   border: 3px solid #67c23a; */
  border: 3px solid #499cf0;
}

.item_info_kind1 {
  background-color: aqua;
}
.item_info_kind2 {
  background-color: rgb(255, 255, 255);
}
.item_info_kind3 {
  background-color: rgb(47, 0, 255);
}
.item_info_kind4 {
  background-color: rgb(255, 0, 55);
}
</style>

// v-if = calssName in visibleClassName
// @click= = visibleClassName.delte(className)
// checkStyle(cn) {

// }

//:style="checkStyle(classNAme)"