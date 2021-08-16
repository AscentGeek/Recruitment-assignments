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
        <button class="pull-right btn btn-none" @click="addRow">+ 경쟁사 추가</button>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr class="table-primary">
              <th><input type="checkbox" /></th>
              <th v-for="item in comp" :key="item.id">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="item in enemy" :key="item.id">
            <td><input type="checkbox" :value="item.id" @click="test"/></td>
            <td><input v-model="item.name" type="text" class="form-control" id="ename" maxlength="100"/></td>
            <td><input v-model="item.eURL" type="text" class="form-control" id="eURL" maxlength="100"
                       oninput=" this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );" /></td>
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

export default {
  name: "AddProject",
  components: { Modal },
  data(){
    return{
      comp: ["경쟁사명", "경쟁사URL"],
      theads: ["고객사명", "프로젝트명", "사용여부", "산업구분", "브랜드", "브랜드URL", "수정일시"],
      option: 5,
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
        for (let i in this.enemy){
          if(this.enemy[i].name != "" && this.enemy[i].eURL != ""){
            enemy.push({
              name: this.enemy[i].name,
              eURL: this.enemy[i].eURL
            })
          }
        }
        if (this.$route.params.item != undefined) {
          this.$store.commit('updateProject', {project, enemy});
        } else {
          this.$store.commit('addProject', {project, enemy});
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
    addRow() {
      if(this.option < 10) {
        this.enemy.push({
          name: "",
          eURL: ""
        })
        this.option++
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
    test(){
      // const a = this.project;
      // const b = this.enemy;
      const b = Array()
      for (let i in this.enemy){
        if(this.enemy[i].name != ""){
          b.push({
            name: this.enemy[i].name,
            eURL: this.enemy[i].eURL
          })
        }
      }
      console.log(b)
      // this.$store.commit('addProject', {a, b});
    }
  },

  computed:{
    // setRows(){
    //   for(let i in this.option){
    //     this.enemy[i].name = "";
    //     this.enemy[i].eURL = "";
    //   }
    //   return this.enemy
    // }
  },

  created(){
    if(this.$route.params.item) {
      this.project = this.$route.params.item
      this.enemy = this.$route.params.item.enemy
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
</style>