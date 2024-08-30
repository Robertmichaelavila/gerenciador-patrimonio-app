import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

//import { Routes } from "../src/routes"

import { PageInitial } from "../src/pages/login/telaInicial"
import { Login } from "../src/pages/login/login"
import { Home } from "../src/pages/home"
import { Sobre } from "../src/pages/sobre"
import { Ajuda } from "../src/pages/ajuda"
import { CadastroEmail } from "../src/pages/cadastro/cadastroEmail"
import { CadastroNome } from "../src/pages/cadastro/cadastroNome"
import { CadastroSenha } from "../src/pages/cadastro/cadastroSenha"
import { AddPatrimonio } from "../src/pages/patrimonios/addPatrimonio"
//import { EditPatrimonio } from "../src/pages/patrimonios/editPatrimonio"
import { ResAddPatrimonio } from "../src/pages/ajuda/respostas/ResAddPatrimonio"
import { ResDelPatrimonio } from "../src/pages/ajuda/respostas/ResDelPatrimonio"
import { Patrimonios } from "../src/pages/patrimonios/Patrimonios"

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen 
          name="home" 
          component={PageInitial} 
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="login" 
          component={Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="cadastroNome" 
          component={CadastroNome}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="cadastroEmail" 
          component={CadastroEmail}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="cadastroSenha" 
          component={CadastroSenha}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="addPatrimonio" 
          component={AddPatrimonio}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="ResAddPatrimonio" 
          component={ResAddPatrimonio}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="ResDelPatrimonio" 
          component={ResDelPatrimonio}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="Patrimonios" 
          component={Patrimonios}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="sobre" 
          component={Sobre}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="Ajuda" 
          component={Ajuda}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="menuPrincipal" 
          component={Home}
          options={{
            headerShown: false
          }}
        />

        {/* <Stack.Screen 
          name="menu" 
          component={Routes}
          options={{
            headerShown: false
          }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}