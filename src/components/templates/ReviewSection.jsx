import { AiFillStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import noimagee from "/noimagee.jpg"


const ReviewSection = ({ information }) => {
  return (
    <div className="mb-16">
      <h2
        className="text-3xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] 
            bg-clip-text text-transparent mb-8"
      >
        Reviews
      </h2>

      <div className="space-y-6">
        {information.reviwes.results?.length > 0 ? (
          information.reviwes.results.slice(0, 4).map((review) => (
            <div
              key={review.id}
              className="bg-zinc-900/50 rounded-xl border border-zinc-800/50 p-6
                    hover:border-[#6556CD]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  {review.author_details.avatar_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w100${review.author_details.avatar_path}`}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-12 h-12 text-zinc-600" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">
                      {review.author}
                    </h3>
                    {review.author_details.rating && (
                      <div className="flex items-center gap-1 text-yellow-500">
                        <AiFillStar />
                        <span>{review.author_details.rating}/10</span>
                      </div>
                    )}
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">
                    {new Date(review.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 line-clamp-3">{review.content}</p>

              <button
                className="text-[#6556CD] text-sm mt-2 hover:text-[#9747FF] transition-colors duration-300"
                onClick={() => window.open(review.url, "_blank")}
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-zinc-400 py-8">
            No reviews available yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
