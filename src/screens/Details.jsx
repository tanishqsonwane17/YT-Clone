import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';

const Details = () => {
  const location = useLocation();
  const { id } = useParams();
  const video = location.state;
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { user: "Bixi", text: "Loved this video!", time: "2 hours ago" },
  ]);

  if (!video) {
    return <p className='text-red-500'>Video not found for ID: {id}</p>;
  }

  const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;

  const handlePostComment = () => {
    if (comment.trim()) {
      setComments([{ user: "You", text: comment, time: "Just now" }, ...comments]);
      setComment("");
    }
  };

  return (
    <div className="py-28 bg-black text-white px-4">
      {/* Video */}
<div className="w-full mb-4">
  <iframe
    className="w-full aspect-video md:h-[500px]" // mobile me aspect ratio, desktop me fixed 500px
    src={embedUrl}
    title={video.title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2">{video.title}</h2>

      {/* Channel Info */}
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center'>
          <img src={video.userProfile} alt="User Profile" className="h-12 w-12 rounded-full mr-3" />
          <div>
            <p className='font-medium'>{video.channel}</p>
            <p className='text-gray-400 text-sm'>1.2M subscribers</p>
          </div>
        </div>
        <button className="px-4 h-10 bg-red-500 rounded-full text-white">Subscribe</button>
      </div>

      <p className='text-gray-400 text-sm mb-2'>
        {video.views || "1.5M"} views • {video.date || "2 days ago"}
      </p>

      {/* Description */}
      <div className="bg-neutral-900 p-4 rounded-lg mb-6">
        <p className='text-sm whitespace-pre-line'>
          {showFullDesc ? video.description : `${video.description?.slice(0, 100)}...`}
        </p>
        {video.description && video.description.length > 100 && (
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className='mt-2 text-blue-400 text-sm font-medium'
          >
            {showFullDesc ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      {/* Comments */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">{comments.length} Comments</h3>
        
        {/* Add Comment */}
        <div className="flex items-center mb-4">
          <img
          />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 bg-neutral-800 text-white px-4 py-2 rounded-full outline-none"
          />
          <button
            onClick={handlePostComment}
            className="ml-3 px-4 py-2 bg-blue-500 rounded-full text-white"
          >
            Post
          </button>
        </div>

        {/* Comment List */}
        <div className="space-y-4">
          {comments.map((c, index) => (
            <div key={index} className="flex items-start">
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg`}
                alt={c.user}
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium">{c.user} <span className="text-gray-400 text-xs">• {c.time}</span></p>
                <p className="text-gray-300 text-sm">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
