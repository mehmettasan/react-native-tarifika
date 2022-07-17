import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native'

import useFetch from '../../hooks/useFetch';
import LoadingPage from "../LoadingPage"
import ErrorPage from "../ErrorPage"
import Config from 'react-native-config';
import styles from "./DetailPage.style"

const DetailPage = ({ route }) => {
    const idMeal = route.params.idMeal
    let mealData = null;
    const { data, loading, error } = useFetch(Config.API_URL + "/lookup.php?i=" + idMeal)
    if (data) {
        mealData = data.meals[0]
    }

    if (loading) {
        return <LoadingPage />
    }

    if (error) {
        return <ErrorPage />
    }

    const handleClick = (url) => {
        try {
            Linking.openURL(url);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: mealData.strMealThumb }} style={styles.image} />
            <Text style={styles.title} >{mealData.strMeal}</Text>
            <Text style={styles.area} >{mealData.strArea}</Text>
            <Text style={styles.description} >{mealData.strInstructions}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleClick(mealData.strYoutube)} >
                <Text style={styles.btntext}>Watch on Youtube</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default DetailPage;