<style lang="postcss" scoped>
  .home-container {

  }
</style>
<template>
  <section class="home-container">
    <MasterPage title="报文测试工具">

      <div slot="searchContent" class="search-content-slot">

        <Form ref="formTestTwo" :model="formTestTwo" :label-width="100">

          <Row>
            <span>fptxx节点内容</span>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="发票请求唯一流水号 fpqqlsh" prop="fpqqlsh">
                <Input v-model="formTestTwo.fpqqlsh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="纳税人识别号 nsrsbh" prop="nsrsbh">
                <Input v-model="formTestTwo.nsrsbh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="外部系统 wbxt" prop="wbxt">
                <Input v-model="formTestTwo.wbxt" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="分机号 fjh" prop="fjh">
                <Input v-model="formTestTwo.fjh" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="终端号 zdh" prop="zdh">
                <Input v-model="formTestTwo.zdh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="开票方名称 nsrmc" prop="nsrmc">
                <Input v-model="formTestTwo.nsrmc" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="主要开票项目 kpxm" prop="kpxm">
                <Input v-model="formTestTwo.kpxm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="编码表版本号 bmbbbh" prop="bmbbbh">
                <Input v-model="formTestTwo.bmbbbh" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="销售方识别号 xsfnsrsbh" prop="xsfnsrsbh">
                <Input v-model="formTestTwo.xsfnsrsbh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="销售方名称 xsfmc" prop="xsfmc">
                <Input v-model="formTestTwo.xsfmc" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="销售方地址 xsfdz" prop="xsfdz">
                <Input v-model="formTestTwo.xsfdz" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="销售方电话 xsfdh" prop="xsfdh">
                <Input v-model="formTestTwo.xsfdh" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="销售方银行账号 xsfyhzh" prop="xsfyhzh">
                <Input v-model="formTestTwo.xsfyhzh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="购买方名称 gmfmc" prop="gmfmc">
                <Input v-model="formTestTwo.gmfmc" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="购买方识别号 gmfnsrsbh" prop="gmfnsrsbh">
                <Input v-model="formTestTwo.gmfnsrsbh" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="购买方省份 gmfsf" prop="gmfsf">
                <Input v-model="formTestTwo.gmfsf" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>

            <Col span="5">
              <FormItem label="购买方地址 gmfdz" prop="gmfdz">
                <Input v-model="formTestTwo.gmfdz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="购买方固定电话 gmfgddh" prop="gmfgddh">
                <Input v-model="formTestTwo.gmfgddh" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="购买方手机 gmfsj" prop="gmfsj">
                <Input v-model="formTestTwo.gmfsj" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="购买方微信 gmfwx" prop="gmfwx">
                <Input v-model="formTestTwo.gmfwx" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>


            <Col span="5">
              <FormItem label="购买方邮箱 gmfemail" prop="gmfemail">
                <Input v-model="formTestTwo.gmfemail" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="购买方银行账号 gmfyhzh" prop="gmfyhzh">
                <Input v-model="formTestTwo.gmfyhzh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="购买方性质 gmfxz" prop="gmfxz">
                <Input v-model="formTestTwo.gmfxz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="开票人 kpr" prop="kpr">
                <Input v-model="formTestTwo.kpr" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="收款人 skr" prop="skr">
                <Input v-model="formTestTwo.skr" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="复核人 fhr" prop="fhr">
                <Input v-model="formTestTwo.fhr" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="请求日期 qqrq" prop="qqrq">
                <Input v-model="formTestTwo.qqrq" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="开票类型（区分红蓝票，蓝1，红2） kplx" prop="kplx">
                <Input v-model="formTestTwo.kplx" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="发票种类 fpzl" prop="fpzl">
                <Input v-model="formTestTwo.fpzl" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="发票代码 fpdm" prop="fpdm">
                <Input v-model="formTestTwo.fpdm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="发票号码 fphm" prop="fphm">
                <Input v-model="formTestTwo.fphm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="原发票代码 yfpdm" prop="yfpdm">
                <Input v-model="formTestTwo.yfpdm" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="原发票号码 yfphm" prop="yfphm">
                <Input v-model="formTestTwo.yfphm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="清单标志 qdbz" prop="qdbz">
                <Input v-model="formTestTwo.qdbz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="清单发票项目名称 qdxmmc" prop="qdxmmc">
                <Input v-model="formTestTwo.qdxmmc" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="冲红原因 chyy" prop="chyy">
                <Input v-model=" formTestTwo.chyy" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="红字发票信息表编号 rednum" prop="rednum">
                <Input v-model="formTestTwo.rednum" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="含税标志 hsbz" prop="hsbz">
                <Input v-model="formTestTwo.hsbz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="合计金额 hjje" prop="hjje">
                <Input v-model="formTestTwo.hjje" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="合计税额 hjse" prop="hjse">
                <Input v-model="formTestTwo.hjse" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="备注 bz" prop="bz">
                <Input v-model="formTestTwo.bz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="电子发票地区编码 dqbm" prop="dqbm">
                <Input v-model="formTestTwo.dqbm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="订单号 ddh" prop="ddh">
                <Input v-model="formTestTwo.ddh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="开票网点编码 kpwdbm" prop="kpwdbm">
                <Input v-model="formTestTwo.kpwdbm" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="开票网点名称 kpwdmc" prop="kpwdmc">
                <Input v-model="formTestTwo.kpwdmc" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="名片来源 mply" prop="mply">
                <Input v-model="formTestTwo.mply" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="特殊需求 tsxq" prop="tsxq">
                <Input v-model="formTestTwo.tsxq" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="主要发票类型 cpybz" prop="cpybz">
                <Input v-model="formTestTwo.cpybz" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="强制冲红标识 forceflag" prop="forceflag">
                <Input v-model="formTestTwo.forceflag" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <span>xmxxs节点内容</span>
            <FormItem>
              <Button type="primary" @click="addMX()">添加明细</Button>
            </FormItem>
          </Row>

          <!--item是值，index是下标，从0开始计数-->
          <div v-for="(item,index) in formTestTwo.xmxxsList">

            <Row>
              <Col span="4">
                <FormItem label="项目名称 xmmc" :prop="'xmxxsList.'+index + '.xmmc'">
                  <Input v-model="formTestTwo.xmxxsList[index].xmmc" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="计量单位 dw" :prop="'xmxxsList.'+index + '.dw'">
                  <Input v-model="formTestTwo.xmxxsList[index].dw" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="规格型号 ggxh" :prop="'xmxxsList.'+index + '.ggxh'">
                  <Input v-model="formTestTwo.xmxxsList[index].ggxh" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="项目数量 xmsl" :prop="'xmxxsList.'+index + '.xmsl'">
                  <Input v-model="formTestTwo.xmxxsList[index].xmsl" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="项目单价 xmdj" :prop="'xmxxsList.'+index + '.xmdj'">
                  <Input v-model="formTestTwo.xmxxsList[index].xmdj" placeholder=""></Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="4">
                <FormItem label="项目金额 xmje" :prop="'xmxxsList.'+index + '.xmje'">
                  <Input v-model="formTestTwo.xmxxsList[index].xmje" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="税率 sl" :prop="'xmxxsList.'+index + '.sl'">
                  <Input v-model="formTestTwo.xmxxsList[index].sl" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="税额 se" :prop="'xmxxsList.'+index + '.se'">
                  <Input v-model="formTestTwo.xmxxsList[index].se" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="发票行性质 fphxz" :prop="'xmxxsList.'+index + '.fphxz'">
                  <Input v-model="formTestTwo.xmxxsList[index].fphxz" placeholder=""></Input>
                </FormItem>
              </Col>
              <Col span="4">
                <FormItem label="商品编码 spbm" :prop="'xmxxsList.'+index + '.spbm'">
                  <Input v-model="formTestTwo.xmxxsList[index].spbm" placeholder=""></Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="4">
                <FormItem label="自行编码 zxbm" :prop="'xmxxsList.'+index + '.zxbm'">
                  <Input v-model="formTestTwo.xmxxsList[index].zxbm" placeholder=""></Input>
                </FormItem>
              </Col>
              <Col span="4">
                <FormItem label="优惠政策标识 yhzcbs" :prop="'xmxxsList.'+index + '.yhzcbs'">
                  <Input v-model="formTestTwo.xmxxsList[index].yhzcbs" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="零税率标识 lslbs" :prop="'xmxxsList.'+index + '.lslbs'">
                  <Input v-model="formTestTwo.xmxxsList[index].lslbs" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="增值税特殊管理 zzstsgl" :prop="'xmxxsList.'+index + '.zzstsgl'">
                  <Input v-model="formTestTwo.xmxxsList[index].zzstsgl" placeholder=""></Input>
                </FormItem>
              </Col>
              <Col span="4">
                <FormItem label="扣除额（待查） kce" :prop="'xmxxsList.'+index + '.kce'">
                  <Input v-model="formTestTwo.xmxxsList[index].kce" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="3">
                <FormItem>
                  <Button type="primary" @click="deleteMX(index)">删除明细</Button>
                </FormItem>
              </Col>
            </Row>
          </div>

          <Row>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formTestTwo')">生成报文</Button>
              <Input v-model="formTestTwo.xmlMessage" type="textarea" :rows="10" clearable style="width: 600px"
                     placeholder=""/>
              <Button type="primary" @click="clearContent()">清空内容</Button>
            </FormItem>
          </Row>

          <Row>
            <FormItem>
              <Button type="primary" @click="encryptMessage()">报文加密</Button>
              <Input v-model="formTestTwo.encryptXml" type="textarea" :rows="10" style="width: 600px"
                     placeholder=""/>
            </FormItem>
          </Row>

          <Row>
            <FormItem>
              <Button type="primary" @click="endMessage()">请求报文</Button>
              <Input v-model="formTestTwo.finalMessage" type="textarea" :rows="10" style="width: 600px"
                     placeholder=""/>
            </FormItem>
          </Row>

          <Row>
            <FormItem>
              <Button type="primary" @click="handleRequest('formTestTwo')">发送请求</Button>
              <Input v-model="formTestTwo.requestURL" :rows="10" placeholder="" clearable style="width: 600px"/>
            </FormItem>
          </Row>

          <Row>
            <FormItem>
              <Button type="primary">返回报文</Button>
              <Input v-model="formTestTwo.returnXML" type="textarea" :rows="10" style="width: 600px"
                     placeholder=""/>
            </FormItem>
          </Row>

          <Row>
            <FormItem>
              <Button type="primary" @click="generateFiles()">生成文件</Button>
              <Input v-model="formTestTwo.fileName" :rows="10" placeholder="请输入文件名" clearable style="width: 600px"/>
            </FormItem>
          </Row>
        </Form>
      </div>
    </MasterPage>
  </section>
</template>
<script>
  import MasterPage from '@/components/Master'
  import vkbeautify from 'vkbeautify'

  export default {
    components: {
      MasterPage
    },
    data() {
      return {

        formTestTwo: {
          fpqqlsh: '', nsrsbh: '', wbxt: '', fjh: '', zdh: '', nsrmc: '', kpxm: '', bmbbbh: '', xsfnsrsbh: '',
          xsfmc: '', xsfdz: '', xsfdh: '', xsfyhzh: '', gmfmc: '', gmfnsrsbh: '', gmfsf: '', gmfdz: '', gmfgddh: '',
          gmfsj: '', gmfwx: '', gmfemail: '', gmfyhzh: '', gmfxz: '', kpr: '', skr: '', fhr: '', qqrq: '', kplx: '',
          fpzl: '', fpdm: '', fphm: '', yfpdm: '', yfphm: '', qdbz: '', qdxmmc: '', chyy: '', rednum: '', hsbz: '',
          hjje: '', hjse: '', bz: '', bz: '', ddh: '', dqbm: '', kpwdbm: '', kpwdmc: '', mply: '', tsxq: '', cpybz: '',
          forceflag: '', xmxxsList: [{
            xmmc: '', dw: '', ggxh: '', xmsl: '', xmdj: '', xmje: '', sl: '', se: '', fphxz: '',
            spbm: '', zxbm: '', yhzcbs: '', lslbs: '', zzstsgl: '', kce: '',
          }],
          xmlMessage: '',
          encryptXml: '',
          finalMessage: '',
          requestURL: 'http://192.168.2.144:7201/CNPC_SlProj/webService/eInvWS',
          returnXML: '',
          fileName: '',
        },
      }
    },

    methods: {
      handleSubmit(name) {
        var fptxx = "{" +
          "\"fpqqlsh\":\"" + this.formTestTwo.fpqqlsh + "\"," +
          "\"nsrsbh\":\"" + this.formTestTwo.nsrsbh + "\"," +
          "\"wbxt\":\"" + this.formTestTwo.wbxt + "\"," +
          "\"fjh\":\"" + this.formTestTwo.fjh + "\"," +
          "\"zdh\":\"" + this.formTestTwo.zdh + "\"," +
          "\"nsrmc\":\"" + this.formTestTwo.nsrmc + "\"," +
          "\"kpxm\":\"" + this.formTestTwo.kpxm + "\"," +
          "\"bmbbbh\":\"" + this.formTestTwo.bmbbbh + "\"," +
          "\"xsfnsrsbh\":\"" + this.formTestTwo.xsfnsrsbh + "\"," +
          "\"xsfmc\":\"" + this.formTestTwo.xsfmc + "\"," +
          "\"xsfdz\":\"" + this.formTestTwo.xsfdz + "\"," +
          "\"xsfdh\":\"" + this.formTestTwo.xsfdh + "\"," +
          "\"gmfmc\":\"" + this.formTestTwo.gmfmc + "\"," +
          "\"gmfnsrsbh\":\"" + this.formTestTwo.gmfnsrsbh + "\"," +
          "\"gmfsf\":\"" + this.formTestTwo.gmfsf + "\"," +
          "\"gmfdz\":\"" + this.formTestTwo.gmfdz + "\"," +
          "\"gmfsj\":\"" + this.formTestTwo.gmfsj + "\"," +
          "\"gmfwx\":\"" + this.formTestTwo.gmfwx + "\"," +
          "\"gmfemail\":\"" + this.formTestTwo.gmfemail + "\"," +
          "\"gmfyhzh\":\"" + this.formTestTwo.gmfyhzh + "\"," +
          "\"gmfxz\":\"" + this.formTestTwo.gmfxz + "\"," +
          "\"kpr\":\"" + this.formTestTwo.kpr + "\"," +
          "\"skr\":\"" + this.formTestTwo.skr + "\"," +
          "\"fhr\":\"" + this.formTestTwo.fhr + "\"," +
          "\"qqrq\":\"" + this.formTestTwo.qqrq + "\"," +
          "\"kplx\":\"" + this.formTestTwo.kplx + "\"," +
          "\"fpzl\":\"" + this.formTestTwo.fpzl + "\"," +
          "\"fpdm\":\"" + this.formTestTwo.fpdm + "\"," +
          "\"fphm\":\"" + this.formTestTwo.fphm + "\"," +
          "\"yfpdm\":\"" + this.formTestTwo.yfpdm + "\"," +
          "\"yfphm\":\"" + this.formTestTwo.yfphm + "\"," +
          "\"qdbz\":\"" + this.formTestTwo.qdbz + "\"," +
          "\"qdxmmc\":\"" + this.formTestTwo.qdxmmc + "\"," +
          "\"chyy\":\"" + this.formTestTwo.chyy + "\"," +
          "\"rednum\":\"" + this.formTestTwo.rednum + "\"," +
          "\"hsbz\":\"" + this.formTestTwo.hsbz + "\"," +
          "\"hjje\":\"" + this.formTestTwo.hjje + "\"," +
          "\"hjse\":\"" + this.formTestTwo.hjse + "\"," +
          "\"bz\":\"" + this.formTestTwo.bz + "\"," +
          "\"dqbm\":\"" + this.formTestTwo.dqbm + "\"," +
          "\"ddh\":\"" + this.formTestTwo.ddh + "\"," +
          "\"kpwdbm\":\"" + this.formTestTwo.kpwdbm + "\"," +
          "\"kpwdmc\":\"" + this.formTestTwo.kpwdmc + "\"," +
          "\"mply\":\"" + this.formTestTwo.mply + "\"," +
          "\"tsxq\":\"" + this.formTestTwo.tsxq + "\"," +
          "\"cpybz\":\"" + this.formTestTwo.cpybz + "\"," +
          "\"forceflag\":\"" + this.formTestTwo.forceflag + "\",";
        console.info("fptxx = ", fptxx);

        var xmxx = "\"xmxx\":[";
        for (var i = 0; i < this.formTestTwo.xmxxsList.length; i++) {
          xmxx = xmxx + "{" +
            "\"xmmc\": \"" + this.formTestTwo.xmxxsList[i].xmmc + "\"," +
            "\"dw\": \"" + this.formTestTwo.xmxxsList[i].dw + "\"," +
            "\"ggxh\": \"" + this.formTestTwo.xmxxsList[i].ggxh + "\"," +
            "\"xmsl\": \"" + this.formTestTwo.xmxxsList[i].xmsl + "\"," +
            "\"xmdj\": \"" + this.formTestTwo.xmxxsList[i].xmdj + "\"," +
            "\"xmje\": \"" + this.formTestTwo.xmxxsList[i].xmje + "\"," +
            "\"sl\": \"" + this.formTestTwo.xmxxsList[i].sl + "\"," +
            "\"se\": \"" + this.formTestTwo.xmxxsList[i].se + "\"," +
            "\"fphxz\": \"" + this.formTestTwo.xmxxsList[i].fphxz + "\"," +
            "\"spbm\": \"" + this.formTestTwo.xmxxsList[i].spbm + "\"," +
            "\"zxbm\": \"" + this.formTestTwo.xmxxsList[i].zxbm + "\"," +
            "\"yhzcbs\": \"" + this.formTestTwo.xmxxsList[i].yhzcbs + "\"," +
            "\"lslbs\": \"" + this.formTestTwo.xmxxsList[i].lslbs + "\"," +
            "\"zzstsgl\": \"" + this.formTestTwo.xmxxsList[i].zzstsgl + "\"," +
            "\"kce\": \"" + this.formTestTwo.xmxxsList[i].kce + "\"" +
            "},";
        }
        xmxx = xmxx + "]}";
        console.info("xmxx = " + xmxx);

        var resultJson = fptxx + xmxx;
        console.info("resultJson = " + resultJson);

        this.$refs[name].validate((valid) => {

          console.info("valid = " + valid);
          if (valid) {
            this.$axios({
              url: '/rest/generate',//请求的服务端地址
              method: 'post',//请求的方式
              data: resultJson,//请求数据

            }).then(res => {

              this.formTestTwo.xmlMessage = this.myTrim(res.data);
              console.info('后台返回的数据：', this.myTrim(res.data));

            }).catch(err => {
              console.info('报错的信息：', err);
            });
          } else {
            this.$Message.error('表单校验失败!');
          }
        })
      },

      encryptMessage() {
        const Base64 = require('js-base64').Base64;
        this.formTestTwo.encryptXml = Base64.encode(this.formTestTwo.xmlMessage);
      },

      endMessage() {

        var endXML =
          "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:cxf=\"http://cxf.aisino.com/\">" +
          "<soapenv:Header/>" +
          "<soapenv:Body>" +
          "<cxf:gomeData>" +
          "<!--Optional:-->" +
          "<arg0><![CDATA[<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
          "<einterface>" +
          "<baseInfo>" +
          "<version>1.0</version>" +
          "<interfaceCode>EIXML.FPKJ</interfaceCode>" +
          "<taxpayerId>911403012019070200</taxpayerId>" +
          "</baseInfo>" +
          "<returnInfo>" +
          "<returnCode/>" +
          "<returnMessage/>" +
          "</returnInfo>" +
          "<exData>" +
          "<zipCode>0</zipCode>" +
          "<encryptCode>0</encryptCode>" +
          "<content>" + this.formTestTwo.encryptXml +
          "</content>" +
          "</exData>" +
          "</einterface>]]>" +
          "</arg0>" +
          "</cxf:gomeData>" +
          "</soapenv:Body>" +
          "</soapenv:Envelope>";

        this.formTestTwo.finalMessage = vkbeautify.xml(endXML);
      },

      handleRequest(data) {

        this.$refs[data].validate((valid) => {

          if (valid) {
            this.$axios({
              url: '/rest/reqMes',//请求的URL
              method: 'post',//请求的方式
              data: this.formTestTwo.finalMessage,//请求数据

            }).then(res => {

              this.formTestTwo.returnXML = this.myTrim(res.data);
              console.info('请求URL返回的报文：', this.formTestTwo.returnXML);

            }).catch(err => {
              console.info('请求报错的信息：', err);
            });
          } else {
            this.$Message.error('请求失败!');
          }
        })
      },

      clearContent() {
        this.formTestTwo.xmlMessage = "";
        this.formTestTwo.encryptXml = "";
        this.formTestTwo.finalMessage = "";
      },

      generateFiles() {

        const content = this.formTestTwo.returnXML;
        const blob = new Blob([content]);
        var rowName = this.formTestTwo.fileName;
        console.info("fileName = "+rowName);
        const fileName =`${rowName}.xml`;

        if ("download" in document.createElement("a")) {
          // 非IE下载
          const elink = document.createElement("a");
          elink.download = fileName;
          elink.style.display = "none";
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href); // 释放URL 对象
          document.body.removeChild(elink);
        } else {
          // IE10+下载
          navigator.msSaveBlob(blob, fileName);
        }

      },

      addMX() {
        this.formTestTwo.xmxxsList.push({
          xmmc: '', dw: '', ggxh: '', xmsl: '', xmdj: '', xmje: '', sl: '', se: '', fphxz: '',
          spbm: '', zxbm: '', yhzcbs: '', lslbs: '', zzstsgl: '', kce: ''
        });
      },

      deleteMX(index) {
        if (this.formTestTwo.xmxxsList.length > 1) {
          this.formTestTwo.xmxxsList.splice(index, 1);  //删除index为i,位置的数组元素
        } else {
          alert("请至少保留一个明细！");
        }
      },

      myTrim(str) {
        if (String.prototype.trim) {
          return str.trim();
        }
        return str.replace(/^\s+(.*?)\s+$/g, "$1");
        //or
        //return str.replace(/^\s+/, "").replace(/\s+$/, "");
      },
    }
  }
</script>
