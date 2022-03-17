import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md'

function Feed() {
  const [posts, setPosts] = useState([]);
  const storedToken = localStorage.getItem('authToken');
  const moment = require('moment');

  const fetchPosts = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/feed`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setPosts(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  console.log(posts)
 

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    
    <div className='container'>
      {posts && (
        <>
       {posts.map((post) => {
        return (
          <div className='post' key={post._id}>
            {post.author && 
            <>
              <div className='meta'>
                 
              <div className='location'>
                  <MdLocationOn
                size='15'
                color='rgb(81, 112, 143)'
                />
              <p>{post.location}</p>
                </div>
                
              {(moment(post.createdAt).fromNow() === 'an hour ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                } 
                {(moment(post.createdAt).fromNow() === '2 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '3 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '4 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '5 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '6 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '7 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '8 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '9 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '10 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '11 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '12 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '13 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '14 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '15 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '16 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '17 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '18 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '19 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '20 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '21 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '22 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '23 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }
                 {(moment(post.createdAt).fromNow() === '24 hours ago') && 
                <p>{moment(post.createdAt).fromNow()}</p>
                }

                {(!moment(post.createdAt).fromNow() === '24 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '23 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '22 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '21 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '20 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '19 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '18 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '17 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '16 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '15 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '14 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '13 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '12 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '11 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '10 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '9 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '8 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '7 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '6 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '5 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '4 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '3 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === '2 hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                {(!moment(post.createdAt).fromNow() === 'an hours ago') && 
                <p>{moment(post.createdAt).format('DD.MM.YY')}</p>
                }
                
              </div>
              
               <div>
                 <Link className='text-link userinfo' to={`/user/${post.author._id}`}>
                <img src={post.author.image} style={{borderRadius:50, width:30, height:30}} alt="" />
              <h6>{post.author.username}</h6>
              </Link>
            </div>
            <div className='postinfo'>
              <div className='image-description'>
                {post.image && (
             <img src={post.image} style={{borderRadius:5}}alt="" /> 
            )}  
            <article>{post.description}</article>
              </div>
            
            <div className='comments'>
            <Link className='text-link' to={`/feed/${post._id}`}>
              {post.comments.length === 1 && (
                <h6>{post.comments.length} Comment</h6>
              )}
              {post.comments.length !== 1 && (
                <h6>{post.comments.length} Comments</h6>
              )}
              </Link>
            </div>
            </div>
            </>
            }
          </div>
        );
      })} 
        </>
      )}
    </div>
  );
}

export default Feed;