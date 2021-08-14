<template>
  <div>
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="header">
        <nav>
          <ul class="nav nav-pills pull-right">
            <li><button type="button" class="btn btn-default col-auto" @click="$router.push('/projects')">취소</button></li>
            <li><button type="button" class="btn btn-primary col-auto">저장</button></li>
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
              <option>고객사 선택</option>
              <option>사용</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label>프로젝트명 <span style='color:orange;'>*</span></label>
            <input v-model="project.name" class="form-control" placeholder="프로젝트명 입력" />
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
                <input class="form-check-input" type="radio" id="new" value="new" v-model="project.used">
                <label class="form-check-label" for="new">미사용</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="used" value="used" v-model="project.used">
                <label class="form-check-label" for="used">사용</label>
              </div>
            </div>
          </div>
          <div class="form-group col-md-2">
            <label>기간 <span style='color:orange;'>*</span></label>
            <input type="date" v-model="project.date" class="form-control" placeholder="기간 입력" />
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
              <option>산업구분 선택</option>
              <option>코드관리</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label>브랜드 <span style='color:orange;'>*</span></label>
            <input v-model="project.brand" class="form-control" placeholder="브랜드 입력" />
          </div>
          <div class="form-group col-md-2">
            <label>브랜드URL</label>
            <input v-model="project.bURL" class="form-control" placeholder="브랜드 URL 입력" />
          </div>
        </div>
      </form>
    </div>

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
          <tr v-for="item in comp" :key="item.id">
            <td><input type="checkbox"/></td>
            <td>{{ item }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProject",
  data(){
    return{
      comp: ["경쟁사명", "경쟁사URL"],
      theads: ["고객사명", "프로젝트명", "사용여부", "산업구분", "브랜드", "브랜드URL", "수정일시"],
      option: 10,
      items: [],
      project: {
        comp: "고객사 선택",
        name: "",
        used: "",
        date: "",
        cate: "산업구분 선택",
        brand: "",
        bURL: ""
      }
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
</style>