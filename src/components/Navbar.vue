<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Aphlabet</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline my-2 my-lg-0 col-md-12 col-sm-12 col-lg-8">
        <input class="form-control mr-sm-2 col-9" type="search" placeholder="Search" aria-label="Search">
        <button class="btn my-3 my-sm-0 btn-outline-light" type="submit">Search</button>
      </form>
      <ul class="navbar-nav mr-auto col-lg-4 col-sm-12 col-md-12">
        <li class="nav-item active">
          <a class="nav-link" href="#">{{page}} <span class="sr-only">(current)</span></a>
        </li>
        <li v-if="signedIn == true" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Profile
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">My Profile <i class="material-icons float-right">face</i> </a>
            <a class="dropdown-item" href="#">Signout <i class="material-icons float-right">exit_to_app</i></a>
            <a class="dropdown-item" data-toggle="modal" data-target="#joinClassModal" href="#">
              Join class<i class="material-icons float-right">add</i>
            </a>
          </div>
        </li>
        <li v-else class="nav-item">
          <a class="nav-link" href="#">Sign In</a>
        </li>
      </ul>
      <div class="modal" id="joinClassModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Join Class.</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Enter class code below.</p>
              <input class="form-control" v-model="classCode" placeholder="Enter Code" aria-label="Join Class">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    page: String,
    signedIn: Boolean
  },
  data: function() {
    return {
      classCode: '',
    }
  }
}
</script>
