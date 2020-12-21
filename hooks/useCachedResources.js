import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.Font,
          ...SimpleLineIcons.Font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });

        //Set Date
        Date.prototype.addDays = function (days) {
          this.setDate(this.getDate() + days);
          return this;
        };

        Date.prototype.format = function (fmt) {
          var o = {
            'M+': this.getMonth() + 1, //月份
            'd+': this.getDate(), //日
            'h+': this.getHours(), //小時
            'm+': this.getMinutes(), //分
            's+': this.getSeconds(), //秒
            'q+': Math.floor((this.getMonth() + 3) / 3), //季度
            S: this.getMilliseconds(), //毫秒
          };
          if (/(y+)/.test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              (this.getFullYear() + '').substr(4 - RegExp.$1.length)
            );
          for (var k in o)
            if (new RegExp('(' + k + ')').test(fmt))
              fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                  ? o[k]
                  : ('00' + o[k]).substr(('' + o[k]).length)
              );
          return fmt;
        };
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
