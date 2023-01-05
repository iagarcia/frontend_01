import {ReactNode, createContext, useContext, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextMethod = {
    jwt: string;
    Load: () => void;
    Login: (token:string) => void;
    Logout: () => void;
};

const authContextDefaultValues: AuthContextMethod = {
    jwt: "",
    Load: () => {},
    Login: () => {},
    Logout: () => {},
};

type AuthContextChildren = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextMethod>(authContextDefaultValues);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthContextChildren) => {
    const [jwt, setJwt] = useState<string>(authContextDefaultValues.jwt);

    const Load = async () => {
        try {
            const jwtStored = await AsyncStorage.getItem('JWT');
            if (jwtStored != null) {
                setJwt(jwtStored);
            }
            return;
        } catch (error) {
            return error;
        }
    };
    const Login = async (token:string) => {
        try {
            await AsyncStorage.setItem('JWT', token);
            setJwt(token);
            return;
        } catch (error) {
            return error;
        }
    };
    const Logout = async () => {
        try {
            await AsyncStorage.removeItem('JWT');
            setJwt("");
            return
        }
        catch (error) {
            return error;
        }
    };

    const value = {
        jwt,
        Load,
        Login,
        Logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}