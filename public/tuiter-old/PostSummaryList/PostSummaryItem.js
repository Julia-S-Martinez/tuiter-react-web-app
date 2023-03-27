const PostSummaryItem = (post) => {
    return(`<li class="list-group-item">
                <div class="row">
                    <div class="col-10 text-muted">
                        ${post.topic} <br>
                        <span class="fw-bold text-dark"> ${post.userName} 
                        <i class="fa-solid fa-circle-check"></i></span>${post.time!="" ? " - "+post.time : ""}<br>
                        <div class="fw-bold text-dark text-wrap">${post.title}</div>
                        ${post.tweets}
                    </div>
                    <div class="col-2 d-flex align-items-center"><img class="img-fluid" src=${post.image}></div>
                </div>
            </li>`);
}

export default PostSummaryItem;