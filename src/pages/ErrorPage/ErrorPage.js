import React from 'react';
import Lottie from 'lottie-react-native'

const ErrorPage=()=>{
    return(
        <Lottie source={require("../../assets/error-404.json")} autoPlay loop />
    )
}

export default ErrorPage;