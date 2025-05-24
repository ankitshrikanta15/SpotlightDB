import Loader from "/Loader.gif"


const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <img className="h-[50%] object-cover" src={Loader} alt="" />
    </div>
  )
}

export default Loading