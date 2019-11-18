import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  WartaTasikDetail,
  Orders,
  OrdersDetail,
  KecamatanBungursari,
  KecamatanCibeureum,
  KecamatanCihideung,
  KecamatanCipedes,
  KecamatanIndihiang,
  KecamatanKawalu,
  KecamatanMangkubumi,
  KecamatanPurbaratu,
  KecamatanTamansari,
  KecamatanTawang,
  Splash,
  Login,
  SukaOjeg,
  SukaMobil,
} from '../../containers/pages';

const SplashStack = createStackNavigator(
  {
    Splash,
    Login,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash',
  },
);

const HomeStack = createStackNavigator(
  {
    Home,
    WartaTasikDetail,
    KecamatanBungursari,
    KecamatanCibeureum,
    KecamatanCihideung,
    KecamatanCipedes,
    KecamatanIndihiang,
    KecamatanKawalu,
    KecamatanMangkubumi,
    KecamatanPurbaratu,
    KecamatanTamansari,
    KecamatanTawang,
    SukaOjeg,
    SukaMobil,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const OrdersStack = createStackNavigator(
  {
    Orders,
    OrdersDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Orders',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    OrdersStack,
    SplashStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashStack',
  },
);

export default createAppContainer(Router);
