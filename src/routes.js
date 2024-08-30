import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';

import { Perfil } from "./pages/perfil"
import { Sobre } from "./pages/sobre"
import { Home } from "./pages/home"

const Tab = createBottomTabNavigator()

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Início"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons size={size} color={"#005A7D"} name="home"/>
                        }

                        return <Ionicons size={size} color={color} name="home-sharp"/>
                    }
                }}
            />

            <Tab.Screen 
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons size={size} color={"#005A7D"} name="person-circle"/>
                        }

                        return <Ionicons size={size} color={color} name="person-circle-outline"/>
                    }
                }}
            />

            <Tab.Screen 
                name="Ajuda"
                component={Sobre}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons size={size} color={"#005A7D"} name="alert-circle"/>
                        }

                        return <Ionicons size={size} color={color} name="alert-circle-outline"/>
                    }
                }}
            />

        </Tab.Navigator>
    )
}