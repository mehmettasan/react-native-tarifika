import React from 'react';
import { View,FlatList,Text } from 'react-native'
import useFetch from "../../hooks/useFetch"
import Config from 'react-native-config';

import LoadingPage from "../LoadingPage"
import ErrorPage from "../ErrorPage"
import CategoryCard from '../../components/CategoryCard';
import styles from "./CategoriesPage.style"

const CategoriesPage=({navigation})=>{
    const {error,loading,data}=useFetch(Config.API_URL+"/categories.php")

    const handleClick=(cName)=>{
        navigation.navigate("MealsPage",{cName})
    }

    if (loading) {
        return <LoadingPage />
    }

    if (error) {
       return <ErrorPage />
    }

    return(
        <View style={styles.container}>
            <FlatList 
            data={data.categories}
            renderItem={({item})=><CategoryCard categoryName={item.strCategory} imagesrc={item.strCategoryThumb} onClick={()=>handleClick(item.strCategory)}/>} />
        </View>
    )
}

export default CategoriesPage;