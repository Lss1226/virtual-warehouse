<template>
  <div class="footer">
    <footer>
      <ul>
        <router-link to="/newPotentialTwo" tag="li">
          <i class="fa fa-plus-square-o" aria-hidden="true"></i>
          <span>添加潜客</span>
        </router-link>
        <router-link to="/potentialList" tag="li">
          <i class="fa fa-folder-open" aria-hidden="true"></i>
          <span>潜客列表</span>
        </router-link>
        <router-link to="/membersList" tag="li">
          <i class="fa fa-smile-o" aria-hidden="true"></i>
          <span>会员</span>
        </router-link>
        <router-link to="mine" tag="li">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <span> 我的</span>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Below"
  }
</script>

<style scoped>
  footer {
    width: 100%;
    height: 1.2rem;
    background: #f5f5f5;
    line-height: 1.1rem;
    text-align: center;
    font-size: 0.3rem;
    position: fixed;
    bottom: 0px;
    z-index: 10;
  }

  footer ul {
    list-style: none;
    display: flex;
  }
  footer ul li{
    position: relative;
    flex: 1;
    margin-top: 0.25rem;
  }
  footer ul li i{
    display: block;
    position: absolute;
    left: 0.8rem;
  }

</style>
