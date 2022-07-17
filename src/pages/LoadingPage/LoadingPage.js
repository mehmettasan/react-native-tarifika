import React from 'react';
import Lottie from 'lottie-react-native'

const LoadingPage=()=>{
    return(
        <Lottie source={require("../../assets/loading.json")} autoPlay loop />
    )
}

export default LoadingPage;