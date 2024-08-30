import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Text, Dimensions } from "react-native"

import { AddPatrimonio } from "../src/pages/patrimonios/addPatrimonio"
import { Ajuda } from "./pages/ajuda"
import { Home } from "./pages/home"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

const Tab = createBottomTabNavigator()

export function Routes(){
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle: {height: hp(9), borderTopLeftRadius: hp(3.2), borderTopRightRadius: hp(3.2), elevation: 30}
            }}>
            <Tab.Screen 
                name="Início"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => {
                        if(focused){
                            return <Text style={{color: "#005A7D", fontSize: hp(2), fontWeight: "600"}}>Início</Text>
                        }

                        return <Text style={{color: "#606060", fontSize: hp(2)}}>Início</Text>
                    },

                    tabBarIcon: ({ focused }) => {
                        if(focused){
                            return <Ionicons size={hp(4.5)} color={"#005A7D"} name="home"/>
                        }

                        return <Ionicons size={hp(4.5)} color={"#606060"} name="home-sharp"/>
                    }
                }}
            />

            <Tab.Screen 
                name="addpatrimonio"
                component={AddPatrimonio}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => {
                        if(focused){
                            return <Text style={{color: "#005A7D", fontSize: hp(2), fontWeight: "600"}}>Perfil</Text>
                        }

                        return <Text style={{color: "#606060", fontSize: hp(2)}}>Perfil</Text>
                    },

                    tabBarIcon: ({ focused }) => {
                        if(focused){
                            return <FontAwesome size={hp(4.3)} name="plus" color="#005A7D" />
                        }

                        return <FontAwesome size={hp(4.3)} color={"#606060"} name="plus"/>
                    }
                }}
            />

            <Tab.Screen 
                name="Ajuda"
                component={Ajuda}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => {
                        if(focused){
                            return <Text style={{color: "#005A7D", fontSize: hp(2), fontWeight: "600"}}>Ajuda</Text>
                        }

                        return <Text style={{color: "#606060", fontSize: hp(2)}}>Ajuda</Text>
                    },

                    tabBarIcon: ({ focused }) => {
                        if(focused){
                            return <AntDesign name="questioncircleo" size={hp(4.3)} color={"#005A7D"} />
                        }

                        return  <AntDesign name="questioncircleo" size={hp(4.3)} color={"#606060"} />
                    }
                }}
            />

        </Tab.Navigator>
    )
}