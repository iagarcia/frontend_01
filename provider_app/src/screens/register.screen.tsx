import React from "react";
import { View, Text } from "react-native";

const RegisterScreen = () => {
    return (
        <View className="flex-1 bg-dark">
            <Text className="m-8 bg-light">REGISTER SCREEN</Text>
            <Text className="m-8 bg-success">NAME</Text>
            <Text className="m-8 bg-warning">TIN</Text>
            <Text className="m-8 bg-info color-light">EMAIL</Text>
            <Text className="m-8 color-light">PHONE</Text>
            <Text className="m-8">PASSWORD</Text>
        </View>
    );
}
export default RegisterScreen