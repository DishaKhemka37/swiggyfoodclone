import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const LoginScreen = () => {
    const route = useRoute();
    const selectedItem = route.params.selectedItem;
    console.log("Selected item:", selectedItem);
    return (
        <View style={styles.viewStyles} >
            <Text style={styles.textStyles}> This is Login screen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor: "#FFFFFF"
    },
    textStyles: {
        fontSize: 18
    }
});

export default LoginScreen;