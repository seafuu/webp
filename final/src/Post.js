import React from 'react';
import { db } from './utils/firebase';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ItemContent, ItemHeader } from 'semantic-ui-react';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TextField from '@mui/material/TextField';
import Handclick from './Handclick'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Post() {
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    db.collection("post").get().then((collectionSnapshot) => {
      setPost(collectionSnapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {post.map(({ post }) => (

          <Grid item xs={2} sm={4} md={3} >
            <Item key={post.id}>
              <ItemContent>
                <ItemHeader>
                  <Avatar src="/static/images/avatar/1.jpg" />
                </ItemHeader>
                <Item>{post.title}</Item>
                <Item><img alt="" src={post.imageUrl} /></Item></ItemContent>

            </Item>
          </Grid>

        ))}
        {post.map(({ post }) => (
          <Grid>
           
             <Checkbox
            
                {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic" label="留言區" variant="standard" />
              </Box>
          </Grid>
        ))}

      </Grid>
                <button onSubmit={Handclick}></button>
    </Box>

  )
}
export default Post;