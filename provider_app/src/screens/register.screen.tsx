import React from "react";
import { View, Text, TextInput, Dimensions, Pressable } from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import { Formik } from 'formik';
import BG from '../../assets/bg3.svg';

const RegisterScreen = () => {
    return (
        <View className="flex-1">
            <View className="absolute bg-light">
                <BG width={width} height={height}/>
            </View>
            <View className="bg-light m-auto w-4/5">
                <Formik
                        initialValues={{
                            name: '',
                            tin: '',
                        }}
                        onSubmit={values=>{
                            console.log(values);
                            return;
                        }}
                    >
                        {
                            ({ handleChange, handleBlur, handleSubmit, values }) => (
                                <View>
                                    <Text>Register</Text>
                                    <Text>Name</Text>
                                    <TextInput
                                        className="bg-warning"
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                    />
                                    <Text>Email</Text>
                                    <TextInput
                                        className="bg-warning"
                                        onChangeText={handleChange('tin')}
                                        onBlur={handleBlur('tin')}
                                        value={values.tin}
                                    />
                                    <Text>Password</Text>
                                    <TextInput
                                        className="bg-warning"
                                        onChangeText={handleChange('tin')}
                                        onBlur={handleBlur('tin')}
                                        value={values.tin}
                                    />
                                    <TextInput
                                        className="bg-warning"
                                        onChangeText={handleChange('tin')}
                                        onBlur={handleBlur('tin')}
                                        value={values.tin}
                                    />
                                    <Pressable
                                        className="p-3 bg-success"
                                        onPress={() => handleSubmit()}
                                    >
                                        <Text>Press here</Text>
                                    </Pressable>
                                </View>    
                            )
                        }
                    </Formik>
            </View>
        </View>
    );
}
export default RegisterScreen