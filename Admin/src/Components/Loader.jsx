import "./Loader.css"
export default function Loader() {
  return (
    <>
    <div style={{
        position:"fixed" , top:"0" , width:"100%" , height:"100%" , background:"black" , display:"flex" , justifyContent:"center" , alignItems:"center"
    }}> <span className="loader"></span></div>
   
    </>
  )
}
