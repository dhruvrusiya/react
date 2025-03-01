const Event =() =>{
    function fun(){
        alert("working")
    }
    return(
   <>
   <button onClick={fun}>click me </button>
   <button onDoubleClick={fun}>on double</button>
   <button onMouseEnter={fun}>on mouse enter</button>
   
   </>
    )
}
export default Event;