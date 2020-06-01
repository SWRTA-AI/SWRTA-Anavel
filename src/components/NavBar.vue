<template>
  <div class="NavBarContainer">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">
        <span><b-img :src="logo" class="logo"></b-img></span>
        <span>SWRTA-AI</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/tierlist">Tierlist</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/feedback">Feedback</b-nav-item>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            Using 'button-content' slot
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('@/assets/static/logo.png'),
    };
  },
};
</script>

<style scoped>
.NavBarContainer {
  margin-bottom: 10px;
}

.nav-link {
  color: #e9e9e9 !important;
}

.navbar {
  min-height: 4em;
}

.logo {
  width: 3vw;
  margin-right: 1vw;
}

@media screen and (max-width: 1199px) {
  .logo {
    width: 7vw;
    margin-right: 2vw;
  }
}

@media screen and (max-width: 991px) {
  .logo {
    width: 10vw;
    margin-right: 3vw;
  }
}

@media screen and (max-width: 767px) {
  .logo {
    width: 15vw;
    margin-right: 5vw;
  }
}
</style>
