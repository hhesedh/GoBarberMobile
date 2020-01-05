import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  // Alterar host para o ip da máquina
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.0.103' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .use(asyncStorage())
    .connect();

  tron.clear();

  console.tron = tron;
}
