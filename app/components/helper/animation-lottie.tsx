"use client";

import Lottie from "lottie-react";

interface AnimationLottieProps {
  animationPath: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({
  animationPath,
  loop = true,
  autoplay = true,
  style,
}) => {
  const defaultOptions = {
    loop,
    autoplay,
    animationData: animationPath,
    style: {
      width: "95%",
      ...style,
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
