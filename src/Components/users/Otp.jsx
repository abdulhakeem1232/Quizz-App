import React, { useState, useRef, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Otp = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [timeLeft, setTimeLeft] = useState(0);
    const [isResendAvailable, setIsResendAvailable] = useState(false);
    const inputRefs = useRef([]);

    const OTP_EXPIRATION_TIME = 45;

    const calculateRemainingTime = () => {
        const storedExpirationTime = localStorage.getItem('otpExpirationTime');
        if (storedExpirationTime) {
            const currentTime = Math.floor(Date.now() / 1000);
            const remainingTime = storedExpirationTime - currentTime;
            return remainingTime > 0 ? remainingTime : 0;
        }
        return OTP_EXPIRATION_TIME;
    };

    useEffect(() => {
        const remainingTime = calculateRemainingTime();
        setTimeLeft(remainingTime);
        setIsResendAvailable(remainingTime === 0);

        if (remainingTime === OTP_EXPIRATION_TIME) {
            const expirationTime = Math.floor(Date.now() / 1000) + OTP_EXPIRATION_TIME;
            localStorage.setItem('otpExpirationTime', expirationTime);
        }
    }, []);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime > 1) {
                        return prevTime - 1;
                    } else {
                        clearInterval(timerId);
                        setIsResendAvailable(true);
                        localStorage.removeItem('otpExpirationTime');
                        return 0;
                    }
                });
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^\d$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < 5 && value !== '') {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '') {
                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('OTP entered:', otp.join(''));
    };

    const handleResend = () => {
        if (!isResendAvailable) return;

        setOtp(new Array(6).fill(''));
        const expirationTime = Math.floor(Date.now() / 1000) + OTP_EXPIRATION_TIME;
        localStorage.setItem('otpExpirationTime', expirationTime);

        setTimeLeft(OTP_EXPIRATION_TIME);
        setIsResendAvailable(false);
        inputRefs.current[0].focus();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <div className='flex justify-center mb-6'>
                    <img src='/images/logo.jpg' alt="Logo" className="w-24 h-24 object-cover rounded-full" />
                </div>
                <Typography variant="h5" className="font-bold text-center text-gray-700 mb-4">
                    Enter OTP
                </Typography>
                <Typography variant="subtitle1" className="text-center text-gray-500 mb-8">
                    We've sent a One-Time Password (OTP) to your registered email. Please enter it below.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate className="flex justify-center space-x-2 mb-4">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-12 border border-gray-300 rounded text-center text-xl font-semibold focus:border-yellow-500 focus:outline-none"
                        />
                    ))}
                </Box>

                <Typography variant="body1" className="text-center text-gray-700 mb-4">
                    {isResendAvailable ? (
                        <span>Didn't receive the OTP? Click Resend.</span>
                    ) : (
                        <span>Resend OTP in {timeLeft} seconds</span>
                    )}
                </Typography>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="bg-yellow-500 hover:bg-yellow-600 py-3 text-lg rounded-lg mb-4"
                    disabled={!otp.every((digit) => digit !== '')}
                >
                    Verify OTP
                </Button>

                <Button
                    onClick={handleResend}
                    variant="text"
                    className={`text-yellow-500 hover:text-yellow-600 font-bold ${!isResendAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isResendAvailable}
                >
                    Resend OTP
                </Button>
            </div>

            <footer className="py-6 text-center text-gray-600">
                <p>&copy; 2024 Quiz. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Otp;
