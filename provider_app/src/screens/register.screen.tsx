import React from "react";
import { View, Text, TextInput, Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import { Formik } from 'formik';
import * as yup from 'yup'

import { Create } from '../requests/provider.requests'
import BG from '../../assets/bg3.svg';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const RegisterSchema = yup.object().shape({
    name: yup.string()
    .min(2, 'Demasiado corto!')
    .max(50, 'Demasiado largo!')
    .required('Requerido'),
    email: yup.string()
    .email('Correo inválido')
    .required('Requerido'),
    password: yup.string()
    .required('Requerido'),
    passwordConf: yup.string()
    .required('Requerido')
  });

const RegisterScreen = () => {
    return (
        <View className="flex-1 bg-light">
            <View className="absolute">
                <BG width={width} height={height}/>
            </View>
            <ScrollView>
                <SafeAreaView className="ml-auto mr-auto w-4/5">
                    <Formik
                        validationSchema={RegisterSchema}
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            passwordConf: '',
                        }}
                        onSubmit={values=>{
                            console.log(values);
                            Create({
                                name: values.name,
                                email: values.email,
                                password: values.password
                            }).then(res=> {
                                console.log("RESPONSE IS", res)
                            })
                            return;
                        }}
                    >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <View>
                        <Text className="text-5xl font-semibold pt-10">Crear cuenta</Text>
                        <Text className="text-xl font-medium pt-10">Nombre</Text>
                        <TextInput
                            className="p-2 bg-light rounded border"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        {errors.name &&
                            <Text className="text-error font-medium" >{errors.name}</Text>
                        }
                        <Text className="text-xl font-medium pt-5">Correo electrónico</Text>
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
                        <TextInput
                            className="p-2 bg-light rounded border mt-3"
                            onChangeText={handleChange('passwordConf')}
                            onBlur={handleBlur('passwordConf')}
                            value={values.passwordConf}
                            secureTextEntry
                        />
                        {errors.passwordConf &&
                            <Text className="text-error font-medium" >{errors.passwordConf}</Text>
                        }
                        {values.password !== values.passwordConf &&
                            <Text className="text-error font-medium" >Las contraseñas no coinciden</Text>
                        }
                        <Pressable
                            className="p-3 bg-success mt-10 mb-5 rounded-full border-2 opacity-75"
                            disabled={!isValid || values.password !== values.passwordConf}
                            onPress={() => handleSubmit()}
                        >
                            <Text className="text-center text-xl font-bold">Crear</Text>
                        </Pressable>
                        </View>    
                    )}
                    </Formik>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}
export default RegisterScreen