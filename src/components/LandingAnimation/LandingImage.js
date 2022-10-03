import React from 'react';
import Lottie from 'react-lottie';
const landingLottie = require('./landinganimation.json');

const LandingAnimationLottie = () => {
  return (
      <Lottie
          className={''}
          options={{
              loop: true,
              autoplay: true,
              animationData: landingLottie,
              rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
              }
          }} height={''} width={''} />
)
}

export default LandingAnimationLottie;
