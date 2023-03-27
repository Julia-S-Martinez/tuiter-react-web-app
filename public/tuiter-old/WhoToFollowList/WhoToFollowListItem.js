const WhoToFollowListItem = (who) => {
    return(`
<li class="list-group-item"> <div class="row">
                    <div class="col-2"> <img class="rounded-circle profile-picture" height="50px" width="50px"
                                             src=${who.avatarIcon}></div>
                    <div class="col-7"> <div class="fw-bold">${who.userName} <i class="fa-solid fa-circle-check"></i> </div>
                        @${who.handle}</div>
                    <div class="col-3 d-flex align-items-center"> <button class="btn btn-primary rounded-pill">
                        Follow
                    </button></div>
                </div></li>`);
}

export default WhoToFollowListItem;