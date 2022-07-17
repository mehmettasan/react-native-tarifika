import React from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native'

import styles from "./MealCard.style"

const MealCard = ({ title, imagesrc, onClick }) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <ImageBackground source={{ uri: imagesrc }} resizeMode={"cover"} style={styles.image}>
                    <Text style={styles.title} numberOfLines={1} >{title}</Text>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard;