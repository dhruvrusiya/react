import Child3 from "./Child3"


function Child2(props){
    let {age} =props
    return(
        <>
        <h1>age is {age} </h1>
        <Child3  city="bhopal"  />
        </>
    )
}
export default Child2