// /* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable no-undef */
// import React from 'react';
// import {StyleSheet} from 'react-native';

// import Navigation from './src/navigation';
// import {Block} from './src/components';
// import AppLoading from 'app-loading';

// // import all used images
// const images = [
//   require('./src/assets/icons/back.png'),
//   require('./src/assets/icons/plants.png'),
//   require('./src/assets/icons/seeds.png'),
//   require('./src/assets/icons/flowers.png'),
//   require('./src/assets/icons/sprayers.png'),
//   require('./src/assets/icons/pots.png'),
//   require('./src/assets/icons/fertilizers.png'),
//   require('./src/assets/images/plants_1.png'),
//   require('./src/assets/images/plants_2.png'),
//   require('./src/assets/images/plants_3.png'),
//   require('./src/assets/images/explore_1.png'),
//   require('./src/assets/images/explore_2.png'),
//   require('./src/assets/images/explore_3.png'),
//   require('./src/assets/images/explore_4.png'),
//   require('./src/assets/images/explore_5.png'),
//   require('./src/assets/images/explore_6.png'),
//   require('./src/assets/images/illustration_1.png'),
//   require('./src/assets/images/illustration_2.png'),
//   require('./src/assets/images/illustration_3.png'),
//   require('./src/assets/images/avatar.png'),
// ];

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false,
//   };

//   handleResourcesAsync = async () => {
//     // we're caching all the images
//     // for better performance on the app

//     const cacheImages = images.map(image => {
//       return Asset.fromModule(image).downloadAsync();
//     });

//     return Promise.all(cacheImages);
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this.handleResourcesAsync}
//           onError={error => console.warn(error)}
//           onFinish={() => this.setState({isLoadingComplete: true})}
//         />
//       );
//     }

//     return (
//       <Block white>
//         <Navigation />
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({});

/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text} from 'react-native';
import Navigation from './src/navigation';
import {creatAppContainer, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import AddUser from './TestIki';

const RootStack = createStackNavigator({
  Home: {
    screen: Navigation,
  },
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
