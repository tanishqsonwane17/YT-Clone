// Video.jsx
import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from 'react-router'; // <- important

const content = [
  {
    id: nanoid(),
    title: "KR$NA - I Guess | Official Music Video",
    channel: "Channel 1",
    views: "1M views",
    time: "1 day ago",
    userProfile : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZS8Z6bhCFTDaZx7tdKlfy8ge5NrteyPArVA&s',
    thumbnail: "https://i.ytimg.com/vi/Qg9LxRHLbAk/maxresdefault.jpg",
    videoId: "Qg9LxRHLbAk",
    description:"KR$NA - I Guess | Official Music Video\n\nThis is the official music video for 'I Guess' by KR$NA. The song explores themes of self-reflection and personal growth, set against a backdrop of powerful visuals and compelling storytelling.\n\nWatch the full video to experience the journey of KR$NA as he navigates through his thoughts and emotions, delivering a performance that resonates with many.\n\nDon't forget to like, share, and subscribe for more amazing content!",
  },
  {
    id: nanoid(),
    title: "KR$NA - I Guess | Official Music Video",
    channel: "Channel 1",
    views: "1M views",
    time: "1 day ago",
    userProfile:'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846822c3d67b53c0627fb88fc3',
    thumbnail: "https://i.ytimg.com/vi/XTp5jaRU3Ws/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDkMU_KBtcd_sDC1XBU2QIyTnZzQ",
    videoId: "XTp5jaRU3Ws"
  },
  {
    id: nanoid(),
    title: "KR$NA - I Guess | Official Music Video",
    channel: "Channel 1",
    views: "1M views",
    time: "1 day ago",
    userProfile:'https://www.hindustantimes.com/ht-img/img/2023/08/11/1600x900/Badshah-feels-proud-to-be-addressed-as-an-hip-hop-_1691742757518.jpg',
    thumbnail: "https://i.ytimg.com/vi/CeFQO9MQNqs/maxresdefault.jpg",
    videoId: "CeFQO9MQNqs"
  },
  {
    id: nanoid(),
    title: "KR$NA - I Guess | Official Music Video",
    channel: "Channel 1",
    views: "1M views",
    time: "1 day ago",
    userProfile:'https://yt3.googleusercontent.com/hXT_E7EUeCD27ImQiYQHMJ5L068w2CpnfFg9VMG_Gq_1gV2iFuZoNLgqnlnphFafNGSiZmpWIQ=s900-c-k-c0x00ffffff-no-rj',
    thumbnail: "https://i.ytimg.com/vi/uiNBqLphO2Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGGmYcjdVg_pAoEKH5t5TBienjqQ",
    videoId: "XO8wew38VM8"
  },
  {
    id: nanoid(),
    title: "From Doubt to Self-Confidence | Life-Changing Journey",
    channel: "Channel 2",
    views: "500K views",
    time: "2 days ago",
    userProfile : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZS8Z6bhCFTDaZx7tdKlfy8ge5NrteyPArVA&s',
    thumbnail: "https://i.ytimg.com/vi/gpKxohYVFH8/hqdefault.jpg", // Replace with a real URL
    videoId: "gpKxohYVFH8" // Replace with a real YouTube video ID
  }
];

const Video = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {content.map((item) => (
    <div key={item.id}>
      <Link
        to={`/details/${item.id}`}
        state={item}
        className="block overflow-hidden aspect-video"
      >
        <img
          className="h-full w-full object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </Link>

      <div className="py-4 px-4 flex gap-4">
        <div className="h-9 w-9 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={item.userProfile}
            alt="channel logo"
          />
        </div>
        <div>
          <h5 className="font-semibold text-sm">{item.title}</h5>
          <p className="text-xs text-gray-300">
            {item.views} · {item.time}
          </p>
        </div>
        <i className="ri-more-2-line text-xl"></i>
      </div>
    </div>
  ))}
</div>
  );
};

export default Video;
