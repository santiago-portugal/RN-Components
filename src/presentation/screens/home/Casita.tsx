import React from 'react'
import { Text, View } from 'react-native'
import { AirplaneIcon } from '../../icons/Icons'
import { globalStyles } from '../../../config/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../components/ui/Title';
import Menuitem from '../../components/ui/Menuitem';

const Casita = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}> </View>
      <ScrollView>
        <Title text='Opciones del menú' safe />       
        {
          menuItems.map((item, index) => (
            <Menuitem key ={item.component} {...item} isFirst={index === 0} isLast={index=== menuItems.length - 1} />
          ))
        }
        <View style={{marginTop: 50}}/>
        {
          animationMenuItems.map((item, index) => (
            <Menuitem key ={item.component} {...item} isFirst={index === 0} isLast={index === animationMenuItems.length - 1} />
          ))
        }
        <View style={{marginTop: 50}}/>
        {
          uiMenuItems.map((item, index) => (
            <Menuitem key ={item.component} {...item} isFirst={index === 0} isLast={index === uiMenuItems.length - 1} />
          ))
        }
        <View style={{marginTop: 300}}/>
      </ScrollView>
      
    </View>
  )
}

const animationMenuItems = [
   // 01-animationMenuItems
   {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
]

const uiMenuItems = [// 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];



export const menuItems = [
 


  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
]

  

export default Casita
