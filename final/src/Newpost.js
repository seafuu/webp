import Container from '@mui/material/Container';
import React from 'react';
import './App.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { auth, db, storage } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Newpost() {
    const history = useNavigate();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [file, setFile] = React.useState(null);
    const [loading, setLoading] = React.useState("false");
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        }];
    const previewUrl = file ? URL.createObjectURL(file) : 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c';
    function onSubmit() {
        setLoading(true);
        const documentRef = db.collection("post").doc();
        const fileRef = storage.ref('post-images/' + documentRef.id);
        const metadata = {
            contentType: file.type
        }
        fileRef.put(file, metadata).then(() => {
            fileRef.getDownloadURL().then((imageUrl) => {
                
                documentRef
                    .set({
                        title,
                        content,
                        author: {
                            displayName: auth.currentUser.displayName || "",
                            photoURL: auth.currentUser.photoURL || "",
                            email: auth.currentUser.email,
                            uid: auth.currentUser.uid,
                        },imageUrl,
                        
                    }).then(() => {
                        setLoading(false);
                        history('/');
                    })
        
            })
     })


    }
    return (

        <Container className='Newpost' >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div>post</div>
                <ImageList sx={{ width: 200, height: 100 }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                className='img'
                                src={previewUrl}
                                alt={item.title}
                            />
                            <ImageListItemBar
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                <Stack direction="row" spacing={2}>
                    <Button type="button" variant="outlined" size="medium">
                        <label for="post_id">上傳文章圖片</label>
                    </Button>
                </Stack>
                <input type='file'
                    id='post_id'
                    style={{ display: 'none' }}
                    onChange={(e) => (setFile(e.target.files[0]))} />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="filled-basic" label="標題" variant="filled"
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        placeholder='輸入文章標標題'
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }} />
                    <br />
                    <TextField id="outlined-basic" label="內容" variant="outlined"
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        placeholder='輸入文章內容'
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value)
                        }} />
                    <Stack direction="row" spacing={2} className='Newpost' >
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={onSubmit} loading={loading}>送出</Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )

}
export default Newpost;