<style lang="postcss" scoped>
  .home-container {

  }
</style>
<template>
  <section class="home-container">
    <MasterPage title="标题">

      <div slot="searchContent" class="search-content-slot">

        <Form ref="formTestTwo" :model="formTestTwo" :label-width="100">

          <Row>
            <span>fptxx节点内容</span>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="fpqqlsh" prop="fpqqlsh">
                <Input v-model="formTestTwo.fpqqlsh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="nsrsbh" prop="nsrsbh">
                <Input v-model="formTestTwo.nsrsbh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="wbxt" prop="wbxt">
                <Input v-model="formTestTwo.wbxt" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="fjh" prop="fjh">
                <Input v-model="formTestTwo.fjh" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="zdh" prop="zdh">
                <Input v-model="formTestTwo.zdh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="nsrmc" prop="nsrmc">
                <Input v-model="formTestTwo.nsrmc" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="kpxm" prop="kpxm">
                <Input v-model="formTestTwo.kpxm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="bmbbbh" prop="bmbbbh">
                <Input v-model="formTestTwo.bmbbbh" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="xsfnsrsbh" prop="xsfnsrsbh">
                <Input v-model="formTestTwo.xsfnsrsbh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="xsfmc" prop="xsfmc">
                <Input v-model="formTestTwo.xsfmc" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="xsfdz" prop="xsfdz">
                <Input v-model="formTestTwo.xsfdz" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="xsfdh" prop="xsfdh">
                <Input v-model="formTestTwo.xsfdh" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="xsfyhzh" prop="xsfyhzh">
                <Input v-model="formTestTwo.xsfyhzh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="gmfmc" prop="gmfmc">
                <Input v-model="formTestTwo.gmfmc" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="gmfnsrsbh" prop="gmfnsrsbh">
                <Input v-model="formTestTwo.gmfnsrsbh" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="gmfsf" prop="gmfsf">
                <Input v-model="formTestTwo.gmfsf" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>

            <Col span="5">
              <FormItem label="gmfdz" prop="gmfdz">
                <Input v-model="formTestTwo.gmfdz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="gmfgddh" prop="gmfgddh">
                <Input v-model="formTestTwo.gmfgddh" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="gmfsj" prop="gmfsj">
                <Input v-model="formTestTwo.gmfsj" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="gmfwx" prop="gmfwx">
                <Input v-model="formTestTwo.gmfwx" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>


            <Col span="5">
              <FormItem label="gmfemail" prop="gmfemail">
                <Input v-model="formTestTwo.gmfemail" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="gmfyhzh" prop="gmfyhzh">
                <Input v-model="formTestTwo.gmfyhzh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="gmfxz" prop="gmfxz">
                <Input v-model="formTestTwo.gmfxz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="kpr" prop="kpr">
                <Input v-model="formTestTwo.kpr" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="skr" prop="skr">
                <Input v-model="formTestTwo.skr" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="fhr" prop="fhr">
                <Input v-model="formTestTwo.fhr" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="qqrq" prop="qqrq">
                <Input v-model="formTestTwo.qqrq" placeholder=""></Input>
              </FormItem>
            </Col>
            <Col span="5">
              <FormItem label="kplx" prop="kplx">
                <Input v-model="formTestTwo.kplx" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="fpzl" prop="fpzl">
                <Input v-model="formTestTwo.fpzl" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="fpdm" prop="fpdm">
                <Input v-model="formTestTwo.fpdm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="fphm" prop="fphm">
                <Input v-model="formTestTwo.fphm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="yfpdm" prop="yfpdm">
                <Input v-model="formTestTwo.yfpdm" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="yfphm" prop="yfphm">
                <Input v-model="formTestTwo.yfphm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="qdbz" prop="qdbz">
                <Input v-model="formTestTwo.qdbz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="qdxmmc" prop="qdxmmc">
                <Input v-model="formTestTwo.qdxmmc" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="chyy" prop="chyy">
                <Input v-model=" formTestTwo.chyy" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="rednum" prop="rednum">
                <Input v-model="formTestTwo.rednum" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="hsbz" prop="hsbz">
                <Input v-model="formTestTwo.hsbz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="hjje" prop="hjje">
                <Input v-model="formTestTwo.hjje" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="hjse" prop="hjse">
                <Input v-model="formTestTwo.hjse" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="bz" prop="bz">
                <Input v-model="formTestTwo.bz" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="dqbm" prop="dqbm">
                <Input v-model="formTestTwo.dqbm" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="ddh" prop="ddh">
                <Input v-model="formTestTwo.ddh" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="kpwdbm" prop="kpwdbm">
                <Input v-model="formTestTwo.kpwdbm" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="kpwdmc" prop="kpwdmc">
                <Input v-model="formTestTwo.kpwdmc" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="mply" prop="mply">
                <Input v-model="formTestTwo.mply" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="tsxq" prop="tsxq">
                <Input v-model="formTestTwo.tsxq" placeholder=""></Input>
              </FormItem>
            </Col>

            <Col span="5">
              <FormItem label="cpybz" prop="cpybz">
                <Input v-model="formTestTwo.cpybz" placeholder=""></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="5">
              <FormItem label="forceflag" prop="forceflag">
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
                <FormItem label="xmmc" :prop="'xmxxsList.'+index + '.xmmc'">
                  <Input v-model="formTestTwo.xmxxsList[index].xmmc" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="dw" :prop="'xmxxsList.'+index + '.dw'">
                  <Input v-model="formTestTwo.xmxxsList[index].dw" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="ggxh" :prop="'xmxxsList.'+index + '.ggxh'">
                  <Input v-model="formTestTwo.xmxxsList[index].ggxh" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="xmsl" :prop="'xmxxsList.'+index + '.xmsl'">
                  <Input v-model="formTestTwo.xmxxsList[index].xmsl" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="xmdj" :prop="'xmxxsList.'+index + '.xmdj'">
                  <Input v-model="formTestTwo.xmxxsList[index].xmdj" placeholder=""></Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="4">
                <FormItem label="xmje" :prop="'xmxxsList.'+index + '.xmje'">
                  <Input v-model="formTestTwo.xmxxsList[index].xmje" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="sl" :prop="'xmxxsList.'+index + '.sl'">
                  <Input v-model="formTestTwo.xmxxsList[index].sl" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="se" :prop="'xmxxsList.'+index + '.se'">
                  <Input v-model="formTestTwo.xmxxsList[index].se" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="fphxz" :prop="'xmxxsList.'+index + '.fphxz'">
                  <Input v-model="formTestTwo.xmxxsList[index].fphxz" placeholder=""></Input>
                </FormItem>
              </Col>
              <Col span="4">
                <FormItem label="spbm" :prop="'xmxxsList.'+index + '.spbm'">
                  <Input v-model="formTestTwo.xmxxsList[index].spbm" placeholder=""></Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="4">
                <FormItem label="zxbm" :prop="'xmxxsList.'+index + '.zxbm'">
                  <Input v-model="formTestTwo.xmxxsList[index].zxbm" placeholder=""></Input>
                </FormItem>
              </Col>
              <Col span="4">
                <FormItem label="yhzcbs" :prop="'xmxxsList.'+index + '.yhzcbs'">
                  <Input v-model="formTestTwo.xmxxsList[index].yhzcbs" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="lslbs" :prop="'xmxxsList.'+index + '.lslbs'">
                  <Input v-model="formTestTwo.xmxxsList[index].lslbs" placeholder=""></Input>
                </FormItem>
              </Col>

              <Col span="4">
                <FormItem label="zzstsgl" :prop="'xmxxsList.'+index + '.zzstsgl'">
                  <Input v-model="formTestTwo.xmxxsList[index].zzstsgl" placeholder=""></Input>
                </FormItem>
              </Col>
              <Col span="4">
                <FormItem label="kce" :prop="'xmxxsList.'+index + '.kce'">
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
              <Input v-model="formTestTwo.xmlMessage" type="textarea" :rows="10" style="width: 600px"
                     placeholder=""/>
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
              <Input v-model="formTestTwo.returnXML" type="textarea" :rows="10" style="width: 600px" placeholder=""/>
            </FormItem>
          </Row>
        </Form>


        <!--<Form ref="formGenerateFiles" :model="formGenerateFiles" :label-width="100">-->
        <!--<Row>-->
        <!--<FormItem>-->
        <!--<Button type="primary" @click="handle1Submit('formInline')">生成文件</Button>-->
        <!--</FormItem>-->
        <!--</Row>-->
        <!--</Form>-->

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
          finalMessage: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cxf="http://cxf.aisino.com/">' +
          '<soapenv:Header/>' +
          '<soapenv:Body>' +
          '<cxf:gomeData>' +
          '<arg0><![CDATA[<?xml version="1.0" encoding="utf-8"?>' +
          '<einterface>' +
          '<baseInfo>' +
          '<version>1.0</version>' +
          '<interfaceCode>EIXML.FPKJ</interfaceCode>' +
          '<taxpayerId>911403012019070200</taxpayerId>' +
          '</baseInfo>' +
          '<returnInfo>' +
          '<returnCode/>' +
          '<returnMessage/>' +
          '</returnInfo>' +
          '<exData>' +
          '<zipCode>0</zipCode>' +
          '<encryptCode>0</encryptCode>' +
          '<content>PHJlcXVlc3RGcGtqeHg+CiAgICA8ZnB0eHg+CiAgICAgICAgPGZwcXFsc2g+OTExNDAzMDEyUTAxOTA3MDIwUVFRQUFBQUFBQWZwazU8L2ZwcXFsc2g+CgkJPG5zcnNiaD45MTE0MDMwMTIwMTkwNzAyMDA8L25zcnNiaD4KCQk8d2J4dD4wMTwvd2J4dD4KCQk8ZmpoPjE8L2ZqaD4KCQk8emRoPjE8L3pkaD4KCQk8bnNybWM+YWJjPC9uc3JtYz4KCQk8a3B4bT45OOi9pueUqOaxveayuTwva3B4bT4KCQk8Ym1iYmJoPjI5LjA8L2JtYmJiaD4KCQk8eHNmbnNyc2JoPjkxMTQwMzAxMjAxOTA3MDIwMDwveHNmbnNyc2JoPgoJCTx4c2ZtYz5hYmM8L3hzZm1jPgoJCTx4c2Zkej4xPC94c2Zkej4KCQk8eHNmZGg+MTwveHNmZGg+CgkJPHhzZnloemg+PC94c2Z5aHpoPgoJCTxnbWZtYz7mtYvor5XotK3mlrnlkI3np7A8L2dtZm1jPgoJCTxnbWZuc3JzYmg+MTQwMzAxMjAxODA4MDk3PC9nbWZuc3JzYmg+CgkJPGdtZnNmPjE0PC9nbWZzZj4KCQk8Z21mZHo+MTE8L2dtZmR6PgoJCTxnbWZnZGRoPjwvZ21mZ2RkaD4KCQk8Z21mc2o+MTM4MDAxMzgwMDA8L2dtZnNqPgoJCTxnbWZ3eD48L2dtZnd4PgoJCTxnbWZlbWFpbD48L2dtZmVtYWlsPgoJCTxnbWZ5aHpoPjwvZ21meWh6aD4KCQk8Z21meHo+MjwvZ21meHo+CgkJPGtwcj7lvIDnpajkuro8L2twcj4KCQk8c2tyPuaUtuasvuS6ujwvc2tyPgoJCTxmaHI+5aSN5qC45Lq6PC9maHI+CgkJPHFxcnE+MjAxOTA2MTkwODA5MTA8L3FxcnE+CgkJPGtwbHg+MTwva3BseD4KCQk8ZnB6bD4wPC9mcHpsPgoJCTxmcGRtPjwvZnBkbT4KCQk8ZnBobT48L2ZwaG0+CgkJPHlmcGRtPjwveWZwZG0+CgkJPHlmcGhtPjwveWZwaG0+CgkJPHFkYno+MDwvcWRiej4KCQk8cWR4bW1jLz4KCQk8Y2h5eS8+CgkJPHJlZG51bS8+CgkJPGhzYno+MDwvaHNiej4KCQk8aGpqZT4xMDA8L2hqamU+CgkJPGhqc2U+NjwvaGpzZT4KCQk8YnovPgoJCTxkcWJtPjE0MDA8L2RxYm0+CgkJPGRkaD48L2RkaD4KCQk8a3B3ZGJtPjEwMTAzMTgwMDAwPC9rcHdkYm0+CgkJPGtwd2RtYz7lhoXmsZ/liIblhazlj7g8L2twd2RtYz4KCQk8bXBseS8+CgkJPHRzeHEvPgoJCTxjcHliej48L2NweWJ6PgoJCTxmb3JjZWZsYWcvPgogICAgPC9mcHR4eD4KICAgIDx4bXh4cz4KCQk8eG14eD4KCQkJPHhtbWM+OTjovabnlKjmsb3msrk8L3htbWM+CgkJCTxkdz48L2R3PgoJCQk8Z2d4aD45NTwvZ2d4aD4KCQkJPHhtc2w+MTwveG1zbD4KCQkJPHhtZGo+MTAwPC94bWRqPgoJCQk8eG1qZT4xMDA8L3htamU+CgkJCTxzbD4wLjA2PC9zbD4KCQkJPHNlPjY8L3NlPgoJCQk8ZnBoeHo+MDwvZnBoeHo+CgkJCTxzcGJtPjEwMTAxMDEwMzAwMDAwMDAwMDA8L3NwYm0+CgkJCTx6eGJtPjEwMTwvenhibT4KCQkJPHloemNicz4wPC95aHpjYnM+CgkJCTxsc2xicz48L2xzbGJzPgoJCQk8enpzdHNnbD48L3p6c3RzZ2w+CgkJCTxrY2U+PC9rY2U+CgkJPC94bXh4PgogICAgPC94bXh4cz4KPC9yZXF1ZXN0RnBranh4Pg==</content>' +
          '</exData>' +
          '</einterface>]]>' +
          '</arg0>' +
          '</cxf:gomeData>' +
          '</soapenv:Body>' +
          '</soapenv:Envelope>',
          requestURL: 'http://192.168.2.144:7201/CNPC_SlProj/webService/eInvWS',
          returnXML: '',
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

              console.info('后台返回的数据', this.myTrim(res.data));

            }).catch(err => {
              console.info('报错的信息', err);
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

        // var url = "/ctx/CNPC_SlProj/webService/eInvWS";
        // var data = this.formTestTwo.finalMessage;//请求数据
        //
        // this.$api.post(url, data).then(function (response) {
        //
        //   console.log("response:" + response.status);
        //
        // }).catch(function (error) {
        //
        //   console.log("error:" + error);
        //
        // });

      this.$refs[data].validate((valid) => {

        console.info('请求报文：', this.formTestTwo.finalMessage);


        if (valid) {

          this.$axios({
            url: '/CNPC_SlProj/webService/eInvWS',//请求的URL
            method: 'post',//请求的方式
            data: this.formTestTwo.finalMessage,//请求数据

          }).then(res => {

            this.formTestTwo.returnXML = this.myTrim(res.data);
            console.info('请求URL返回的报文', this.formTestTwo.returnXML);

          }).catch(err => {
            console.info('请求报错的信息', err);
          });
        } else {
          this.$Message.error('请求失败!');
        }
      })
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
