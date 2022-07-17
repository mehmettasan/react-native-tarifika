import React from 'react';
import { View,Text,FlatList } from 'react-native'
import Config from 'react-native-config';
import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';
import LoadingPage from "../LoadingPage"
import ErrorPage from "../ErrorPage"
import styles from "./MealsPage.style"

const MealsPage=({navigation,route})=>{
    const cName = route.params.cName;

    const {data,loading,error}=useFetch(Config.API_URL+"/filter.php?c="+cName)

    if (loading) {
        return <LoadingPage />
    }

    if (error) {
        return <ErrorPage />
    }

    const handleClick=(idMeal)=>{
        navigation.navigate("DetailPage",{idMeal})
    }

    return(
        <View style={styles.container}>
            <FlatList 
            data={data.meals}
            renderItem={({item})=><MealCard title={item.strMeal} imagesrc={item.strMealThumb} onClick={()=>handleClick(item.idMeal)}/>}
            />
        </View>
    )
}

export default MealsPage;