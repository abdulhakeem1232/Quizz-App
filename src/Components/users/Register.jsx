import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password, confirmPassword });
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
            <div className='w-full md:w-2/3 bg-white p-8 md:p-16 rounded-lg shadow-lg flex flex-col md:flex-row md:mt-16'>

                <div className='w-full md:w-2/3 my-auto'>
                    <img src="/images/register.jpg" alt="Register" className="w-full h-auto object-cover" />
                </div>


                <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
                    <div className='flex justify-center mb-6'>
                        <img src='/images/logo.jpg' alt="Logo" className="w-24 h-24 object-cover rounded-full" />
                    </div>

                    <Typography variant="h5" className="font-bold text-center text-gray-700 mb-4">
                        Create Your Account
                    </Typography>
                    <Typography variant="subtitle1" className="text-center text-gray-500 mb-8">
                        Join us and start your journey!
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                            InputLabelProps={{ style: { color: '#6b7280' } }}
                            InputProps={{
                                style: {
                                    borderRadius: '8px',
                                    borderColor: '#6b7280',
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#fbbf24',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#fbbf24',
                                },
                            }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            InputLabelProps={{ style: { color: '#6b7280' } }}
                            InputProps={{
                                style: {
                                    borderRadius: '8px',
                                    borderColor: '#6b7280',
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#fbbf24',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#fbbf24',
                                },
                            }}
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
                            variant="outlined"
                            InputLabelProps={{ style: { color: '#6b7280' } }}
                            InputProps={{
                                style: {
                                    borderRadius: '8px',
                                    borderColor: '#6b7280',
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#fbbf24',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#fbbf24',
                                },
                            }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirm-password"
                            autoComplete="current-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            variant="outlined"
                            InputLabelProps={{ style: { color: '#6b7280' } }}
                            InputProps={{
                                style: {
                                    borderRadius: '8px',
                                    borderColor: '#6b7280',
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#fbbf24',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#fbbf24',
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            className="bg-yellow-500 hover:bg-yellow-600 py-3 text-lg rounded-lg"
                        >
                            Register
                        </Button>
                    </Box>
                </div>
            </div>

            <footer className="py-6 text-center text-gray-600 md:mt-12">
                <p>&copy; 2024 Quiz. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Register;
