import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import './App.css';
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();
function Sign() {
    const history = useNavigate();
    const [activeItem, SetActiveItem] = React.useState('register');
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    function onSubmit() {

        if (activeItem === 'register') {
            auth.createUserWithEmailAndPassword(email, password)

                .then(() => {
                    history('/');
                })
        } else if (activeItem === 'sign') {

            auth
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    history('/');
                })
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline /> 
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box>
                    <Button
                        active={activeItem === 'register'}
                        onClick={() => SetActiveItem('register')}
                    >註冊</Button>
                    <Button 
                        active={activeItem === 'sign'}
                        onClick={() => SetActiveItem('sign')}
                    >登入</Button>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="請輸入信箱"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="請輸入密碼"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={onSubmit}
                        >
                            {activeItem === 'register' && '註冊'}
                            {activeItem === 'sign' && '登入'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default Sign;