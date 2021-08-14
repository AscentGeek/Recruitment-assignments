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
            <input v-model="search.project" type="text" class="form-control" id="project" placeholder="프로젝트명">
          </div>
          <div class="form-group col-md-2">
            <label for="cate">산업구분</label>
            <select v-model="search.used" class="form-select" id="cate">
              <option>전체</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="used">사용여부</label>
            <select v-model="search.used" class="form-select" id="used">
              <option>전체</option>
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
              <th v-for="item in theads" :key="item.id">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item }}</td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <nav>
            <ul class="pagination justify-content-center">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#">
                  <span>&raquo;</span>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectView",
  data(){
    return{
      theads: ["고객사명", "프로젝트명", "사용여부", "산업구분", "브랜드", "브랜드URL", "수정일시"],
      option: 10,
      items: [],
      search: {
        comp: "",
        project: "",
        cate: "전체",
        used: "전체"
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
</style>