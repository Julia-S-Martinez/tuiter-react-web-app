import {useState} from "react";
import {Chat, ArrowRepeat, HeartFill, Heart, Share, HandThumbsDown, HandThumbsDownFill} from "react-bootstrap-icons";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
            "liked": true,
            "disliked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 0
        }
    }
) => {
    const dispatch = useDispatch();
    return(
               <div className="row">
                    <div className="col-2"> <Chat/> {tuit.replies} </div>
                    <div className="col-2"> <ArrowRepeat/> {tuit.retuits} </div>
                    <div className="col-2" onClick={()=>{
                        dispatch(updateTuitThunk({
                        ...tuit,
                            liked: !tuit.liked,
                        likes: tuit.likes + (tuit.liked? -1 : 1)
                    }))}}> {tuit.liked? <><HeartFill color="red"/> {tuit.likes} </>
                        : <><Heart/> {tuit.likes} </>} </div>
                   <div className="col-2" onClick={()=>{
                       dispatch(updateTuitThunk({
                           ...tuit,
                           disliked: !tuit.disliked,
                           dislikes: tuit.dislikes + (tuit.disliked? -1 : 1)
                       }))}}> {tuit.disliked? <><HandThumbsDownFill/> {tuit.dislikes} </>
                       : <><HandThumbsDown/> {tuit.dislikes} </>} </div>
                    <div className="col-2"><Share/> </div>
            </div>
    );
};
export default TuitStats;