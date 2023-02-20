const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <a href="/home" class="list-group-item">
                <i class="fa-solid fa-house-chimney"></i> <div class="d-none d-xl-inline"> Home </div></a>
            <a href="/explore" class="list-group-item active">
                <i class="fa-solid fa-hashtag"></i> <div class="d-none d-xl-inline"> Explore </div></a>
            <a href="/notifications" class="list-group-item">
                <i class="fa-solid fa-bell"></i> <div class="d-none d-xl-inline"> Notifications </div></a>
            <a href="/messages" class="list-group-item">
                <i class="fa-solid fa-envelope"></i> <div class="d-none d-xl-inline"> Messages </div></a>
            <a href="/bookmarks" class="list-group-item">
                <i class="fa-solid fa-bookmark"></i> <div class="d-none d-xl-inline"> Bookmarks </div></a>
            <a href="/lists" class="list-group-item"><i class="fa-solid fa-list-ul"></i> <div class="d-none d-xl-inline"> Lists </div></a>
            <a href="/profile" class="list-group-item"><i class="fa-solid fa-user"></i> <div class="d-none d-xl-inline"> Profile </div></a>
            <a href="/more" class="list-group-item"><i class="fa-solid fa-circle-minus"></i> <div class="d-none d-xl-inline"> More </div></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;