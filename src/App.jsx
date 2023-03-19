import HomeView from "./views/home/index";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return <>
    <div><Toaster containerStyle={{ zIndex: '999999999999999' }} /></div>
    <HomeView />
  </>
}

export default App;