<template>
  <!-- 事件轴上方的 信息类别 -->
  <div class="timeLineTitle">
    <div class="timeLineItem">
      <div class="involved timeLineStatus" @click=""></div>
      <div>当事人\单位</div>
    </div>
    <div class="timeLineItem">
      <div class="Prerequisite  timeLineStatus"></div>
      <div>前提事件</div>
    </div>
    <div class="timeLineItem">
      <div class="position timeLineStatus"></div>
      <div>地点</div>
    </div>
    <div class="timeLineItem">
      <div class="event timeLineStatus"></div>
      <div>发生事件</div>
    </div>
  </div>
  <!-- 事件轴可视化模块 -->
  <el-timeline id="timeline_Date" :reverse="reverse">
    <!-- 事件轴 左侧的纵向时间轴 -->
    <el-timeline-item
      v-for="(events, index) in activities"
      :key="index"
      icon="el-icon-time"
      type="primary"
      size="large"
      placement="top"
      :timestamp="events.timestamp"
    >
      <!-- {{ events.info }} -->
      <!-- 横向时间线 和 事件 -->
      <div id="timeline_events">
        <!-- <EventsLine :timeLineList="events.timeLineList"></EventsLine> -->
        <EventsLineTest :timeLineList="events.timeLineList"></EventsLineTest>
      </div>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import eventsData from "./eventsData";
import EventsLine from "./eventsLine.vue";
import EventsLineTest from "./eventsLine(test).vue";

//import timeLine from './timeLine'

export default {
  components: { eventsData, EventsLine ,EventsLineTest},
  data() {
    return {
      reverse: true,
      activities: [
        {
          timestamp: "4月1日",
          timeLineList: [
            {
              status: "",
              timestamp: "10:00",
              info: "BOSS账单",
              timeLineBranch: [
                { timestamp: "10:00", status: "Prerequisite ", info: "BOSS账单" },
                {
                  timestamp: "12:00",
                  status: "position",
                  info: "CB用户资料下载",
                },
                {
                  timestamp: "4月30日 12:00",
                  status: "position",
                  info: "CB用户资料下载",
                },
              ],
            },
            {
              status: "position",
              timestamp: "12:00",
              info: "入会",
            },
            {
              status: "involved",
              timestamp: "13:00",
              info: "BOSS收入划拨",
            },
            {
              status: "position",
              timestamp: "12:00",
              info: "入会",
            },
            {
              status: "involved",
              timestamp: "13:00",
              info: "BOSS收入划拨",
            },
          ],
        },
        {
          timestamp: "4月3日",
          timeLineList: [
            {
              status: "involved",
              timestamp: "13:00",
              info: "工作室更名为:西安拓美网络科技有限公司3",
            },
            {
              status: "involved",
              timestamp: "14:00",
              info: "工作室更名为:西安拓美网络科技有限公司4",
              timeLineBranch: [
                { timestamp: "4月1日", status: "event", info: "佣金结算" },
                { timestamp: "4月1日", status: "event", info: "z端用户结算" },
                { timestamp: "10:00", status: "Prerequisite ", info: "BOSS账单" },
                {
                  timestamp: "12:00",
                  status: "position",
                  info: "CB用户资料下载",
                },
                {
                  timestamp: "4月30日 12:00",
                  status: "position",
                  info: "CB用户资料下载",
                },
              ],
            },
            {
              status: "involved",
              timestamp: "16:00",
              info: "工作室更名为:西安拓美网络科技有限公司5",
            },
            {
              status: "involved",
              timestamp: "18:00",
              info: "工作室更名为:西安拓美网络科技有限公司6",
            },
            {
              status: "involved",
              timestamp: "16:00",
              info: "工作室更名为:西安拓美网络科技有限公司5",
            },
            {
              status: "involved",
              timestamp: "18:00",
              info: "工作室更名为:西安拓美网络科技有限公司6",
            },
          ],
        },
        {
          timestamp: "4月5日",
          timeLineList: [
            {
              status: "involved",
              timestamp: "16:00",
              info: "工作室更名为:西安拓美网络科技有限公司5",
            },
            {
              status: "involved",
              timestamp: "18:00",
              info: "工作室更名为:西安拓美网络科技有限公司6",
            },
          ],
        },
        {
          timestamp: "4月6日",
          timeLineList: [
            {
              status: "involved",
              timestamp: "20:00",
              info: "工作室更名为:西安拓美网络科技有限公司03",
            },
            {
              status: "involved",
              timestamp: "22:00",
              info: "工作室更名为:西安拓美网络科技有限公司02",
            },
            {
              status: "involved",
              timestamp: "2016-10-6",
              info: "工作室更名为:西安拓美网络科技有限公司01",
              timeLineBranch: [
                { timestamp: "4月1日", status: "event", info: "z端用户结算" },
                { timestamp: "10:00", status: "Prerequisite ", info: "BOSS账单" },
                {
                  timestamp: "12:00",
                  status: "position",
                  info: "CB用户资料下载",
                },
                {
                  timestamp: "4月30日 12:00",
                  status: "position",
                  info: "CB用户资料下载",
                },
              ],
            },
            {
              status: "Prerequisite ",
              timestamp: "20:00",
              info: "工作室更名为:西安拓美网络科技有限公司03",
            },
            {
              status: "involved",
              timestamp: "22:00",
              info: "工作室更名为:西安拓美网络科技有限公司02",
            },
            {
              status: "involved",
              timestamp: "2016-10-6",
              info: "工作室更名为:西安拓美网络科技有限公司01",
            },
            {
              status: "involved",
              timestamp: "20:00",
              info: "工作室更名为:西安拓美网络科技有限公司03",
            },
            {
              status: "involved",
              timestamp: "20:00",
              info: "工作室更名为:西安拓美网络科技有限公司03",
            },
          ],
        },
      ],
    };
  },

  mounted() {},
  // created() {
  //   this.getbusinessProcess(eventsData
  //   )
  // },
};
</script>

<style>
/* 事件轴上方的 信息类别 的样式 */
.timeLineTitle {
  display: flex;
  margin-block: 50px;
  padding-inline-start: 10%;
  padding-inline-end: 10%;
  justify-content: space-evenly;
  align-items: center; /* 垂直居中 */
}

.timeLineItem {
  display: flex;
  padding: 20px;
  font-size: 14px;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.timeLineStatus {
  width: 12px;
  height: 10px;
  margin: 10px;
  border-radius: 2px;
}
.involved {
  background-color: #65bdaf;
}
.Prerequisite  {
  background-color: #eabd60;
}
.position {
  background-color: #e2e9f9;
}
.event {
  background-color: #ce3820;
}

/* 事件轴可视化模块的样式 */
/* 事件轴 整体的样式 */
#timeline_Date{
  margin-left: 30px;
}

/* 每行时间线 详细的事件轴 样式 */
.el-timeline-item {
  padding-bottom: 120px;
  /* 行间隔 */
}

.el-timeline-item__timestamp.is-top {
  position: absolute;
  left: -65px;
  top: -8px;
  color: #205081;
  /* font-weight: bold; */
  font-family: zcool-gdh;
  font-size: 16px;
  font-weight: bold;
  word-wrap: break-word; /* 文本自动换行 */
}

.el-timeline-item__wrapper {
  padding: 0px 15px;
}
</style>