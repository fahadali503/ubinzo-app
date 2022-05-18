import Lottie, { AnimatedLottieViewProps } from 'lottie-react-native';

// This will convert class Components to Functional Components
const Animated = Lottie as unknown as React.FC<AnimatedLottieViewProps>

export const LottieView = (props: AnimatedLottieViewProps) => {
    return <Animated {...props} />
}
