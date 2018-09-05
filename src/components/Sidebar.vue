<template>
  <div class="Sidebar wrapper">
    <div class="wrapper">
        <nav id="sidebar">
            <div class="sidebar-sticky">
            <!-- Sidebar Header -->
                <ul class="nav flex-column">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <i class="material-icons float-left mr-2">home</i>
                        Dashboard <span class="sr-only">(current)</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons float-left mr-2">note_add</i>
                        Lectures
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons float-left mr-2">slideshow</i>
                        Resources
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons float-left mr-2">announcement</i>
                        Announcements
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons float-left mr-2">poll</i>
                        Polls
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons float-left mr-2">storage</i>
                        Storage
                    </a>
                    </li>
                </ul>
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Quick Links</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                    <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons float-left mr-2">note_add</i>
                        Add a post
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons float-left mr-2">offline_pin</i>
                        Submissions
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="content">
            <button type="button" id="sidebarCollapse" @click="sideBarCollapse" class="btn btn-light mx-2 my-2">
                <i class="material-icons float-left">menu</i>
            </button>
        </div>
    </div>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
export default {
  name: 'Sidebar',
  props: {
    
  },
  methods: {
      sideBarCollapse: function(){
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse').toggleClass('active');
    }
  }
}
</script>

<style scoped>
a.nav-link{
    color: #2c2d2e;
    font-weight: 500;
}
a.nav-link .material-icons{
    color: #898b8e;
}
.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
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
.wrapper {
    display: flex;
    align-items: stretch;
    perspective: 1500px; 
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background-color:rgba(248, 249, 250);
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: center left; /* Set the transformed position of sidebar to center left side. */
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

#sidebar.active {
    margin-left: -250px;
    transform: rotateY(100deg); /* Rotate sidebar vertically by 100 degrees. */
}
@media (max-width: 768px) {
    /* Reversing the behavior of the sidebar: 
       it'll be rotated vertically and off canvas by default, 
       collapsing in on toggle button click with removal of 
       the vertical rotation.   */
    #sidebar {
        margin-left: -250px;
        transform: rotateY(100deg);
    }
    #sidebar.active {
        margin-left: 0;
        transform: none;
    }

    /* Reversing the behavior of the bars: 
       Removing the rotation from the first,
       last bars and reappear the second bar on default state, 
       and giving them a vertical margin */
    #sidebarCollapse span:first-of-type,
    #sidebarCollapse span:nth-of-type(2),
    #sidebarCollapse span:last-of-type {
        transform: none;
        opacity: 1;
        margin: 5px auto;
    }
}

</style>
