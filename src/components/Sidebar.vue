<template>
  <div class="Sidebar">
    <div class="wrapper">
        <nav id="sidebar" class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
            <!-- Sidebar Header -->
                <ul class="nav flex-column">
                    <li class="nav-item active">
                    <li class="nav-item">
                        <router-link :to="{'name':'dashboard'}">
                            <a href="#" class="nav-link">Dashboard</a>
                        </router-link>
                    </li>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{'name':'lectures'}">
                            <a href="#" class="nav-link">Lectures</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{'name':'resources'}">
                            <a href="#" class="nav-link">Resources</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{'name':'assignments'}">
                            <a href="#" class="nav-link">Assignments</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{'name':'announcements'}">
                            <a href="#" class="nav-link">Announcements</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{'name':'polls'}">
                            <a href="#" class="nav-link">Polls</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{'name':'storagedocs'}">
                            <a href="#" class="nav-link">Storage</a>
                        </router-link>
                    </li>
                </ul>
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Quick Links</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <router-link :to="{'name':'classinfo'}">
                            <a href="#" class="nav-link">Class Info</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        Submissions
                    </a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    signedIn: Object,
    info: Object
  },
  mounted: function(){
    //   console.log(this.signedIn, "sidebar");
  }
}
</script>

<style scoped>
/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-y: auto;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .material-icons {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .material-icons,
.sidebar .nav-link.active .material-icons {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

</style>
