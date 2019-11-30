import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  WartaTasikDetail,
  Orders,
  Ngobrol,
  Inbox,
  Akun,
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
  ScreenSukapura,
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

const SreenSukapuraStack = createStackNavigator(
  {
    ScreenSukapura,
  },
  {
    headerMode: 'none',
    initialRouteName: 'ScreenSukapura',
  },
);

const OrdersStack = createStackNavigator(
  {
    Orders,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Orders',
  },
);

const NgobrolStack = createStackNavigator(
  {
    Ngobrol,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Ngobrol',
  },
);

const InboxStack = createStackNavigator(
  {
    Inbox,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Inbox',
  },
);

const AkunsStack = createStackNavigator(
  {
    Akun,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Akun',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    OrdersStack,
    SplashStack,
    NgobrolStack,
    InboxStack,
    AkunsStack,
    SreenSukapuraStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashStack',
  },
);

export default createAppContainer(Router);
