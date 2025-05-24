import { useNavigate } from "react-router-dom";
import error from "/404.gif";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-screen bg-black flex items-center px-[10%] gap-10">
      <img className="h-[50%] object-cover rounded-s-md" src={error} alt="" />

      <div className="">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] bg-clip-text text-transparent mb-4">404</h1>
        <h1 className="text-2xl text-white font-semibold mb-4">Oops! Page Not Found</h1>
        <p className="text-zinc-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track!
        </p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6556CD] to-[#9747FF] px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(101,86,205,0.5)] text-xl"
        >
          Back to Prev
        </button>
      </div>
    </div>
  );
};

export default NotFound;
