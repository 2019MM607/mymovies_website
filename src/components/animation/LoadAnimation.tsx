import React from 'react'
import { LottieOptions, useLottie } from 'lottie-react';
import animationData from '../../../public/49799-the-panda-eats-popcorn.json';

export const LoadAnimation = () => {
    const Options: LottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        height: '20px',
        width: '20px',
    }
     const { View } = useLottie(Options);
  return (
        <>
            {View}
        </>
  )
}
