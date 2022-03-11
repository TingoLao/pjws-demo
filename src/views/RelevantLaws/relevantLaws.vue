<template>
  <div class="home_container">
    <el-container>
      <el-main>
        <h2>相关法条</h2>
        <el-container class="textarea">
          <div class="text_panel">
            <div class="text_content">
              原审判决认定，2002年4月1日，被告人温海伙同王磊、马忠在青海省西宁市锦玉招待所预谋购买手枪抢劫作案，并由被告人温海托被害人钱某甲购买枪支，同年4月8日，因钱某甲没有弄到枪，被告人温海伙同王磊、马忠强行将钱某甲带至西宁市锦玉招待所，对钱某甲进行殴打并看管至4月10日18时许，因怕事情败露，被告人温海授意王磊、马忠将钱某甲杀害，二人将被害人钱某甲带至西宁市凤凰山公墓山顶杀害。经鉴定，钱某甲系被他人用领带勒颈并用锐器刺伤颈部，血液流入气管致窒息死亡。
              2002年4月中旬，被告人温海伙同王磊、马忠窜至敦煌市租住在七里镇铁家堡小康村8号楼5单元二楼出租房内预谋抢劫作案。4月29日13时许，王磊将被害人王某某骗至出租房内，被告人温海伙同王磊、马忠用尼龙绳、塑料绳勒住王某某的颈部致其死亡，王磊从王某某身上搜得人民币30元及1部三星手机后外出销赃，期间被告人温海对王某某的尸体进行了奸淫，后三人将王某某的尸体藏匿于出租房内的床柜中逃离。经鉴定，王某某系机械性窒息死亡，被抢手机价值1080元。
              原判决认定上述事实的证据有：物证、书证、证人证言、勘验、辨认笔录、鉴定意见、被告人供述、视听资料等。
            </div>
          </div>
          <div>
            <button>开始分析</button>
            <button>导入文书</button>
          </div>
        </el-container>
        <el-container class="report">
          <h3 class="report_title">法条依据</h3>
          <div
            class="report_panel"
            v-for="(item, index) in content"
            :key="index"
          >
            <h3 id="status_id">{{ item.status }}</h3>
            <el-container id="lawDetail">{{ item.details }}</el-container>
          </div>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";

defineComponent;
export default defineComponent({
  name: "App",
  data() {
    return {
      content: [
        {
          status: "第二百三十二条",
          details:
            "【故意杀人罪】故意杀人的，处死刑、无期徒刑或者十年以上有期徒刑；情节较轻的，处三年以上十年以下有期徒刑。",
        },
        {
          status: "第二百三十二条",
          details:
            "【抢劫罪】以暴力、胁迫或者其他方法抢劫公私财物的，处三年以上十年以下有期徒刑，并处罚金；有下列情形之一的，处十年以上有期徒刑、无期徒刑或者死刑，并处罚金或者没收财产：",
        },
        {
          status: "第二百三十九条",
          details:
            "【绑架罪】以勒索财物为目的绑架他人的，或者绑架他人作为人质的，处十年以上有期徒刑或者无期徒刑，并处罚金或者没收财产；情节较轻的，处五年以上十年以下有期徒刑，并处罚金。犯前款罪，杀害被绑架人的，或者故意伤害被绑架人，致人重伤、死亡的，处无期徒刑或者死刑，并处没收财产。以勒索财物为目的偷盗婴幼儿的，依照前两款的规定处罚。",
        },
        { status: "第二百三十二条", details: "aaaaaa" },
      ],
    };
  },
});
</script>


<style scoped>
.home_container {
  min-width: 200px;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  font-weight: bold;
  font-size: 32px;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
}

button {
  float: right;
  margin-right: 30px;
  width: 140px;
  height: 45px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

.textarea {
  width: 100%;
  display: inline-block;
}

.text_panel {
  width: auto;
  height: 250px;
  margin: 30px;
  background-color: #ffff;
  display: flex;
  position: inherit;
  justify-content: center;
  box-shadow: darkgrey 1px 1px 5px 1px; /* 阴影边框 */
  border-radius: 8px;
}

.text_content {
  width: 90%;
  height: 80%;
  background-color: #ffff;
  align-self: center;
  margin: 20px 0 20px 0;
  border-radius: 10px;
  border: 1px solid #cccccc; /* 边框 */
  padding: 8px;
  font-size: 24px;
  text-indent: 2em;
  word-wrap: break-word; /* 文本自动换行 */
  overflow: auto; /* 文本超出部分使用滚动条 */
}

.report {
  width: 100%;
  display: inline-block;
}

.report_title {
  margin-left: 35px;
  color: #253a57;
  font-size: 25px;
  font-weight: bold;
}

.report_panel {
  width: auto;
  height: auto;
  margin: 50px 30px;
  padding: 1%;
  background-color: #ffff;
  display: block;
  position: inherit;
  justify-content: center;
  box-shadow: darkgrey 1px 1px 5px 1px; /* 阴影边框 */
  border-radius: 3px;
  color: #505055;
}

#status_id {
  font-size: 25px;
  margin-block-start: 3px;
  margin-inline-start: 5px;
  margin-block-end: 6px;
}

#lawDetail {
  font-size: 20px;
  font-weight: bold;
  text-indent: 2em; /* 缩进两个字符长度 */
}
</style>
