import React, {useContext} from "react";
import { View, Text, TextInput, Pressable, Dimensions, ScrollView, SafeAreaView } from "react-native";

import { Formik } from 'formik';
import * as yup from 'yup';

import { AuthContext } from "../contexts/auth.context";
import { Authenticate } from "../requests/provider.requests"; 
import BG from '../../assets/bg3.svg';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const LoginSchema = yup.object().shape({
    email: yup.string()
    .email('Correo inválido')
    .required('Requerido'),
    password: yup.string()
    .required('Requerido')
})

const LoginScreen = ({navigation}) => {
    const { Login } = useContext(AuthContext);
    return (
        <View className="flex-1 bg-light">
            <View className="absolute">
                <BG width={width} height={height}/>
            </View>
            <ScrollView>
                <SafeAreaView className="ml-auto mr-auto w-4/5">
                    <Formik
                        validationSchema={LoginSchema}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={values=>{
                            Authenticate({
                                email: values.email,
                                password: values.password,
                            }).then(res=> {
                                if(res.status == 200){
                                    Login(res.data.token)
                                }
                            })
                            return;
                        }}
                    >    
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <View>
                        <Text className="text-5xl font-semibold pt-10">Iniciar sesión</Text>
                        <Text className="text-xl font-medium pt-5">Corro electrónico</Text>
                        <TextInput
                            className="p-2 bg-light rounded border"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        /> 
                        {errors.email &&
                            <Text className="text-error font-medium" >{errors.email}</Text>
                        }
                        <Text  className="text-xl font-medium pt-5">Contraseña</Text>
                        <TextInput
                            className="p-2 bg-light rounded border"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {errors.password &&
                            <Text className="text-error font-medium" >{errors.password}</Text>
                        }
                        <Pressable
                            onPress={() => {
                                navigation.navigate('RegisterScreen')
                            }}
                        >
                            <Text  
                                className="text-info text-base text-right underline font-medium pt-5"
                            >
                                No tengo una cuenta
                            </Text>
                        </Pressable>
                        <Pressable
                            className="p-3 bg-success mt-10 mb-5 rounded-full border-2 opacity-75"
                            disabled={!isValid}
                            onPress={() => handleSubmit()}
                        >
                            <Text className="text-center text-xl font-bold">Enviar</Text>
                        </Pressable>
                    </View>
                    )}
                    </Formik>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}
export default LoginScreen