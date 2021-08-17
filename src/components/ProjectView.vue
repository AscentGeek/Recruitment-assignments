<template>
  <div>
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="header">
        <a class="navbar-brand">프로젝트 관리</a>
        <p class="navbar-text">Home - Projects - 프로젝트 관리</p>
      </div>
    </div>
    <hr>

    <div class="row">
      <form>
        <div class="form-row">
          <div class="form-group col-md-2">
            <label for="comp">고객사명</label>
            <input v-model="search.comp" type="text" class="form-control" id="comp" placeholder="고객사명">
          </div>
          <div class="form-group col-md-2">
            <label for="project">프로젝트명</label>
            <input v-model="search.name" type="text" class="form-control" id="project" placeholder="프로젝트명">
          </div>
          <div class="form-group col-md-2">
            <label for="cate">산업구분</label>
            <select v-model="search.cate" class="form-select" id="cate">
              <option value="">전체</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="used">사용여부</label>
            <select v-model="search.used" class="form-select" id="used">
              <option value="">전체</option>
              <option>사용</option>
              <option>미사용</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-default col-md-2 offset-md-2">프로젝트 조회</button>
      </form>
    </div>


    <hr style="border-style: double">

    <div class="row">
      <form>
        <div class="form-row">
          <div class="form-group col-md-1">
            <select v-model="option" class="form-select">
              <option>5</option>
              <option>10</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <p class="form-label">100개의 검색결과 (1~10)</p>
          </div>
        </div>
        <button type="submit" class="btn btn-primary col-md-2 offset-md-7" @click="$router.push('/addproject')">프로젝트 등록</button>
      </form>
    </div>

    <div class="row">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
          <tr class="table-primary">
            <th style="border-bottom: 1px solid black" v-for="item in theads" :key="item.id">{{ item }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in filteredProjects" :key="index">
            <td>{{ item.comp }}</td>
            <td><router-link
                :to="{name: 'addproject', params: {item}, props: true}"
                tag="span"
                class="project_name">{{ item.name }}</router-link></td>
            <td>{{ item.used }}</td>
            <td>{{ item.cate }}</td>
            <td>{{ item.brand }}</td>
            <td>{{ item.bURL }}</td>
            <td>{{ item.date }}</td>
            <!--              <td>{{ String(item.date).format('YYYY/MM/DD hh:mm:ss') }}</td>-->
          </tr>
          </tbody>
        </table>
        <!--        <div class="row">-->
        <!--          <nav>-->
        <!--            <ul class="pagination justify-content-center">-->
        <!--              <li>-->
        <!--                <a href="#" aria-label="Previous">-->
        <!--                  <span aria-hidden="true">&laquo;</span>-->
        <!--                </a>-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <a href="#">-->
        <!--                  <span>&laquo;</span>-->
        <!--                </a>-->
        <!--              </li>-->
        <!--              <li><a href="#">1</a></li>-->
        <!--              <li><a href="#">2</a></li>-->
        <!--              <li><a href="#">3</a></li>-->
        <!--              <li><a href="#">4</a></li>-->
        <!--              <li><a href="#">5</a></li>-->
        <!--              <li>-->
        <!--                <a href="#">-->
        <!--                  <span>&raquo;</span>-->
        <!--                </a>-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <a href="#" aria-label="Next">-->
        <!--                  <span aria-hidden="true">&raquo;</span>-->
        <!--                </a>-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--          </nav>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "ProjectView",
  data(){
    return{
      theads: ["고객사명", "프로젝트명", "사용여부", "산업구분", "브랜드", "브랜드URL", "수정일시"],
      option: 10,
      search: {
        comp: "",
        name: "",
        cate: "",
        used: ""
      }
    }
  },

  methods:{
    test(){
      console.log('test')
    }
  },

  computed:{
    ...mapGetters(['createdProjects']),

    filteredProjects() {
      if (this.search) {
        return this.createdProjects.filter((item) => {
          return item.name.startsWith(this.search.name);
        })
      } else {
        return this.createdProjects;
      }
    }
  }
}
</script>

<style scoped>
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
  margin-top: 20px;
  background-color: lightgray;
}
.project_name{
  color: cornflowerblue;
  text-decoration: underline cornflowerblue;
}
.table{
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
</style>