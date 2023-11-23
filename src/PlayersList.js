import  Players  from './Players'
import  Player  from "./Player"
const PlayerList=()=>
{
    return(
        <div  style={{display:"flex",justifyContent:"space-around",marginTop:"50px"}}>
            {
                Players.map((el)=>(
<Player  element={el}/>
                ))

            }

        </div>
    )
}
export default PlayerList
