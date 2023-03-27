import PostSummaryList
    from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
              <div class="row"><div class="form col-11">
            <input id="search-bar" type="text" class="form-control form-input rounded-pill ps-5" placeholder="Search Tuiter">
            <i class="fa fa-search float-left"></i>

        </div>
        <a class="primary float-end position-relative bottom-10 col-1" href="explore-settings.html"><i class="fa-solid fa-gear fa-2x"></i></a>
        </div>
        <ul class="nav nav-tabs mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
            </li>
        </ul>
        
        <div class="position-relative"><img class="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
        <h2 class="text fw-bold image-title text-light">SpaceX's Starship</h2></div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
