import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from "./CategoryCard.style"

const CategoryCard = ({ categoryName, imagesrc,onClick }) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: imagesrc }} />
                <Text style={styles.title}>{categoryName}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;