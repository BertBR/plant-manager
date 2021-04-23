import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Welcome, UserIdentification, Confirmation } from '../pages';

import {colors} from '../styles'

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
 <stackRoutes.Navigator
  headerMode='none'
  screenOptions={{
    cardStyle: {
      backgroundColor: colors.white
    }
  }}
 >
   <stackRoutes.Screen
     name="Welcome"
     component={Welcome}
   />   
   
   <stackRoutes.Screen
     name="UserIdentification"
     component={UserIdentification}
   />   
   
   <stackRoutes.Screen
     name="Confirmation"
     component={Confirmation}
   />

 </stackRoutes.Navigator>
)

export default AppRoutes