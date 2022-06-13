import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './App.css';
const { useState, useEffect } = React;
const App = () => {
  const [name, setName] = useState('');
  const [location, setlocation] = useState('');
  const [follwing, setfollwing] = useState('');
  const [follwers, setfollwers] = useState('');
  const [avatar_url, setavatar_url] = useState('');
  const [blog, setblog] = useState('');

  useEffect(() => {
    setInterval(() => {
      fetch('https://api.github.com/users/cjwu')
        .then(res => {
          return res.json();
        })
        .then((jsonData) => {
          setName(jsonData.name);
          setlocation(jsonData.location);
          setfollwing(jsonData.following);
          setfollwers(jsonData.followers);
          setavatar_url(jsonData.avatar_url);
          setblog(jsonData.blog);

        })
    }, 1000)
  }, [])
  return (
    
    <div class="container">
      <div>
      <Stack direction="row" spacing={2}>
      <Avatar src={avatar_url} />
      </Stack>
      <h1>{name}</h1>
      
      <div>follwing:{follwing} follwers:{follwers}</div>
      <div>{location}</div>
      <a href={blog}>blog</a>
      </div>
    </div>
  )
};
export default App;

