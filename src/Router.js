import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesPage from "./pages/CategroiesPage"
import MealsPage from "./pages/MealsPage"
import DetailPage from './pages/DetailPage';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "#ffa500",
                        fontWeight: "bold",
                    },
                    headerTintColor: "#ffa500"
                }}>
                <Stack.Screen name='CategoriesPage' component={CategoriesPage} options={{ title: "Categories" }} />
                <Stack.Screen name='MealsPage' component={MealsPage} options={{ title: "Meals" }} />
                <Stack.Screen name='DetailPage' component={DetailPage} options={{ title: "Detail" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;