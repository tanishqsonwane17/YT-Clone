import { nanoid } from 'nanoid'
import React from 'react'
import { Link } from 'react-router'

const Video = () => {
  const content = [
    {
      id: nanoid(),
      title: "Before & After Body Transformation | Unbelievable Change",
      channel: "Channel 1",
      views: "1M views",
      time: "1 day ago",
      thumbnail: "https://i.pinimg.com/236x/f9/46/49/f9464940227dfa14aa99a98172ea01a1.jpg"
    },
    {
      id: nanoid(),
      title: "From Doubt to Self-Confidence | Life-Changing Journey",
      channel: "Channel 2",
      views: "500K views",
      time: "2 days ago",
      thumbnail: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/311520269/original/4c5d28924e7bad5ad49683f97346bc07ff8859c2/gaming-thumbnail-thumbnail-youtube-game-thumbnail-attractive.jpg"
    },
    {
      id: nanoid(),
      title: "TURNING POINT — YOUR TEXT",
      channel: "Channel 3",
      views: "300K views",
      time: "3 days ago",
      thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnails-edits-template-design-253856dc4f67aebda0ecd733f19c5866.jpg?ts=1699128020"
    },
    {
      id: nanoid(),
      title: "I Did It Again! | The Untold Story of How I Nailed It and Kept Winning",
      channel: "Channel 3",
      views: "300K views",
      time: "3 days ago",
      thumbnail: "https://cdn.prod.website-files.com/63ff7c6ecc83f9ec7ffe916b/67103c0db8a1b3c0e6b2e306_65ca6461687b504111ee81e3_How%2520to%2520Make%2520a%2520YouTube%2520Thumbnail.webp"
    },
  ]

  return (
    <>
      {content.map((item) => {
        return (
          <div key={item.id} className='w-full pb-2'>
            <Link to={`/details/${item.id}`} className='h-[23%] w-full overflow-hidden block'>
              <img className='h-full w-full object-cover' src={item.thumbnail} alt={item.title} />
            </Link>
            <div className='py-4 px-4 flex gap-4'>
              <div className='h-8 w-13 rounded-full overflow-hidden'>
                <img
                  className='h-full w-full object-cover'
                  src="https://imgs.search.brave.com/rYjYpivXeJEibu-QG2ZZgKYUKKJOBMXwYlN_RSiRWlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8yNDkt/MjQ5MjQ3MF9mb3Jw/cmVzc3JlbGVhc2Ut/eWFzaC1yYWotZmls/bXMtbG9nby1wbmct/dHJhbnNwYXJlbnQt/cG5nLnBuZw"
                  alt="channel logo"
                />
              </div>
              <div>
                <h5 className='font-semibold text-sm'>{item.title}</h5>
                <p className='text-xs text-gray-300'>{item.views} {item.time}</p>
              </div>
              <i className="ri-more-2-line text-xl"></i>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Video
