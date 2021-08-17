<template>
  <div>
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="header">
        <nav>
          <ul class="nav nav-pills pull-right">
            <li><button type="button" class="btn btn-default col-auto" @click="out">취소</button></li>
            <li><button type="button" class="btn btn-primary col-auto" @click="addProject">저장</button></li>
          </ul>
        </nav>
        <a class="navbar-brand">프로젝트 관리</a>
        <p class="navbar-text">Home - Projects - 프로젝트 관리</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <form>
        <div class="form-row">
          <div class="form-group col-md-2">
            <label>고객사명 <span style='color:orange;'>*</span></label>
            <select v-model="project.comp" class="form-select">
              <option disabled value="">고객사 선택</option>
              <option>신한</option>
              <option>KB</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label>프로젝트명 <span style='color:orange;'>*</span></label>
            <input v-model="project.name" class="form-control" placeholder="프로젝트명 입력" maxlength="100"/>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <form>
        <div class="form-row">
          <div class="form-group col-md-2">
            <label>사용여부 <span style='color:orange;'>*</span></label>
            <div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="new" value="미사용" v-model="project.used" checked="checked"/>
                <label class="form-check-label" for="new">미사용</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="used" value="사용" v-model="project.used"/>
                <label class="form-check-label" for="used">사용</label>
              </div>
            </div>
          </div>
          <div class="form-group col-md-2">
            <label>기간 <span style='color:orange;'>*</span></label>
            <input type="date" v-model="project.dRange" class="form-control" placeholder="기간 입력" />
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <form>
        <div class="form-row">
          <div class="form-group col-md-2">
            <label>산업구분 <span style='color:orange;'>*</span></label>
            <select v-model="project.cate" class="form-select">
              <option disabled value="">산업구분 선택</option>
              <option>산업구분</option>
              <option>코드관리</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label>브랜드 <span style='color:orange;'>*</span></label>
            <input v-model="project.brand" class="form-control" placeholder="브랜드 입력" maxlength="100"/>
          </div>
          <div class="form-group col-md-2">
            <label>브랜드URL</label>
            <input v-model="project.bURL" class="form-control" placeholder="브랜드 URL 입력" maxlength="100"
                   oninput=" this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );" />
          </div>
        </div>
      </form>
    </div>

    <div class="row">
      <div>
        <h5 class="pull-left">경쟁사</h5>
        <button class="pull-right btn btn-none" @click="addERow">+ 경쟁사 추가</button>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
          <tr class="table-primary">
            <th style="border-bottom: 1px solid black"><input type="checkbox" /></th>
            <th style="border-bottom: 1px solid black" v-for="item in comp1" :key="item.id">{{ item }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in enemy" :key="item.id">
            <td><input type="checkbox" :value="item.id" @click="test()" style="margin-top: 10px"/></td>
            <td><input v-model="item.name" type="text" class="form-control" maxlength="100"/></td>
            <td><input v-model="item.eURL" type="text" class="form-control" maxlength="100"
                       oninput=" this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );" /></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row" style="margin-top: 20px">
      <div>
        <h5 class="pull-left">검색엔진 추출 설정</h5>
        <button class="pull-right btn btn-none" @click="addSERow">+ 검색엔진 추가</button>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
          <tr class="table-primary">
            <th style="border-bottom: 1px solid black"><input type="checkbox" /></th>
            <th style="border-bottom: 1px solid black" v-for="item in comp2" :key="item.id">{{ item }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in se" :key="item.id">
            <td><input type="checkbox" :value="item.id" @click="test()" style="margin-top: 10px"/></td>
            <td>
              <select v-model="item.engine" class="form-select">
                <option disabled value="">선택</option>
                <option>Google</option>
                <option>NAVER</option>
              </select>
            </td>
            <td>
              <div v-if="item.engine == 'Google'">
                <select v-model="item.keyword" class="form-select">
                  <option disabled value="">선택</option>
                  <option>Suggestion</option>
                  <option>Related</option>
                </select>
              </div>
              <div v-else>
                <select v-model="item.keyword" class="form-select" disabled>
                  <option hidden selected value="">선택</option>
                </select>
              </div>
            </td>
            <td>
              <select v-model="item.ccode" class="form-select">
                <option disabled value="">선택</option>
                <option>EN</option>
                <option>KOR</option>
              </select>
            </td>
            <td>
              <select v-model="item.lcode" class="form-select">
                <option disabled value="">선택</option>
                <option>EN</option>
                <option>KOR</option>
              </select>
            </td>
            <td>
              <select v-model="item.dRange" class="form-select">
                <option disabled value="">선택</option>
                <option>최근1개월</option>
                <option>최근3개월</option>
                <option>직접입력</option>
              </select>
              <div v-if="item.dRange == '직접입력'">
                <input type="date" v-model="item.dRange" class="form-control" placeholder="기간 입력" />
              </div>
            </td>
            <td>
              <div v-if="item.engine == 'Google'">
                <label for="g_total">연간 총 검색량</label>
                <input type="checkbox" id="g_total" value="" v-model="item.target.total" class="form-checkbox" />
                <label for="g_avg">연간 평균 검색량</label>
                <input type="checkbox" id="g_avg" value="" v-model="item.target.avg" class="form-checkbox" />
                <label for="g_month">월별 검색량</label>
                <input type="checkbox" id="g_month" value="" v-model="item.target.month" class="form-checkbox" />
                <label for="g_bmonth">전월 검색량</label>
                <input type="checkbox" id="g_bmonth" value="" v-model="item.target.bmonth" class="form-checkbox" />
                <label for="url">URL</label>
                <input type="checkbox" id="url" value="" v-model="item.target.url" class="form-checkbox" />
                <label for="mtype">Media Type</label>
                <input type="checkbox" id="mtype" value="" v-model="item.target.mtype" class="form-checkbox" />
                <label for="prank">페이지 노출 순위</label>
                <input type="checkbox" id="prank" value="" v-model="item.target.prank" class="form-checkbox" />
                <label for="avgrank">평균 노출 순위</label>
                <input type="checkbox" id="avgrank" value="" v-model="item.target.avgrank" class="form-checkbox" @click="test(item.target)"/>
              </div>
              <div v-else-if="item.engine == 'NAVER'">
                <label for="n_total">연간 총 검색량</label>
                <input type="checkbox" id="n_total" value="" v-model="item.target.total" class="form-checkbox" />
                <label for="n_avg">연간 평균 검색량</label>
                <input type="checkbox" id="n_avg" value="" v-model="item.target.avg" class="form-checkbox" />
                <label for="n_month">월별 검색량</label>
                <input type="checkbox" id="n_month" value="" v-model="item.target.month" class="form-checkbox" />
                <label for="n_bmonth">전월 검색량</label>
                <input type="checkbox" id="n_bmonth" value="" v-model="item.target.bmonth" class="form-checkbox" />
              </div>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
      </h3>
      <div slot="body">
        {{comment}}
      </div>
      <div slot="footer" v-if="btn==false">
        <button class="btn btn-default" @click="showModal = false">NO</button>
        <button class="btn btn-primary" @click="movePage">YES</button>
      </div>
      <div slot="footer" v-else>
        <button class="btn btn-primary" @click="showModal = false">OK</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal'
import {eventBus} from '../main'

export default {
  name: "AddProject",
  components: { Modal },
  data(){
    return{
      comp1: ["경쟁사명", "경쟁사URL"],
      comp2: ["검색엔진", "키워드 추출 구분", "국가코드", "언어코드", "추출기간", "추출대상"],
      theads: ["고객사명", "프로젝트명", "사용여부", "산업구분", "브랜드", "브랜드URL", "수정일시"],
      option: 5,
      soption: 2,
      project: {
        id: this.$store.getters.createdProjects.length,
        comp: "",
        name: "",
        used: "미사용",
        date: Date.now(),
        dRange: "",
        cate: "",
        brand: "",
        bURL: "",
      },
      enemy: [
        {
          name: "",
          eURL: ""
        },
        {
          name: "",
          eURL: ""
        },
        {
          name: "",
          eURL: ""
        },
        {
          name: "",
          eURL: ""
        },
        {
          name: "",
          eURL: ""
        }
      ],
      se: [{
        engine: '',
        keyword: '',
        ccode: '',
        lcode: '',
        dRange: '',
        target: []
      }],
      showModal: false,
      comment: "",
      btn: true
    }
  },

  methods:{
    addProject(){
      if(this.project.name != '' && this.project.comp != '' && this.project.cate != '' && this.project.brand != '' && this.project.cate != '' && this.project.used != '') {
        const enemy = Array()
        const project = this.project
        const se = this.se

        for (let i in this.enemy){
          if(this.enemy[i].name != "" && this.enemy[i].eURL != ""){
            enemy.push({
              name: this.enemy[i].name,
              eURL: this.enemy[i].eURL
            })
          }
        }

        for (let i in this.se){
          if(this.se[i].engine != "" && this.se[i].ccode != "" && this.se[i].lcode != "" && this.se[i].target != ""){
            se.push({
              engine: this.se[i].engine,
              keyword: this.se[i].keyword,
              ccode: this.se[i].ccode,
              lcode: this.se[i].lcode,
              dRange: this.se[i].dRange,
              target: this.se[i].target,
            })
          }
        }

        if (this.$route.params.item != undefined) {
          this.$store.commit('updateProject', {project, enemy, se});
        } else {
          this.$store.commit('addProject', {project, enemy, se});
        }
        // this.$store.commit('addProjectProperties', this.enemy);
        this.movePage();
      } else {
        this.comment = '필수 항목을 입력해주세요.'
        this.btn = true;
        this.Modal();
      }
    },
    movePage(){
      this.$router.push('/projects');
    },
    addERow() {
      if(this.option < 10) {
        this.enemy.push({
          name: "",
          eURL: ""
        })
        this.option++
      }
    },
    addSERow() {
      if(this.soption < 100) {
        this.se.push({
          engine: '',
          keyword: '',
          ccode: '',
          lcode: '',
          dRange: '',
          target: []
        })
        this.soption++
      }
    },
    out(){
      this.comment = '페이지를 벗어나시겠습니까?';
      this.btn = false;
      this.Modal();
    },
    Modal(){
      this.showModal = !this.showModal;
    },
    test(item){
      console.log(item)
      eventBus.$emit('test', this.enemy)
    }
  },

  created(){
    if(this.$route.params.item) {
      this.project = this.$route.params.item
      this.enemy = this.$route.params.item.enemy
      this.se = this.$route.params.item.se
    }
  }
}
</script>

<style scoped>
.nav{
  padding-top: 15px;
}
.navbar-brand{
  padding: 15px 15px;
  font-size: 2rem;
  font-weight: bold;
  color: gray;
}
.navbar-text{
  color: gray;
}
.btn-default{
  background-color: lightgray;
}
.btn-none{
  color: gray;
}
h5{
  margin: 5px;
  font-size: 1.25rem;
  font-weight: bold;
}
.table tr{
  text-align: center;
}
.table-striped th{
  background-color: #4285f2;
}
.table-striped tr:nth-child(odd) {
  background-color: #ced6e6;
}
.table-striped tr:nth-child(even) {
  background-color: #e7ebf2;
}

td div label{
  margin-left:10px;
}

</style>