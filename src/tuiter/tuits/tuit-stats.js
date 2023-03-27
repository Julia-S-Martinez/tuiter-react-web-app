import {useState} from "react";
import {Chat, ArrowRepeat, HeartFill, Heart, Share} from "react-bootstrap-icons";

const TuitStats = (
    {
        tuit = {
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345
        }
    }
) => {
    const [like, setLike] = useState(false);
    return(
               <div className="row">
                    <div className="col-3"> <Chat/> {tuit.replies} </div>
                    <div className="col-3"> <ArrowRepeat/> {tuit.retuits} </div>
                    <div className="col-3" onClick={()=>{setLike(!like)}}> {like? <><HeartFill color="red"/> {tuit.likes + 1} </>
                        : <><Heart/> {tuit.likes} </>} </div>
                    <div className="col-3"><Share/> </div>
            </div>
    );
};
export default TuitStats;