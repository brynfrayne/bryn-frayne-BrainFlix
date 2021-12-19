import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from "./Components/Header/Header";
import MainPage from './Pages/MainPage/MainPage';
import VideoUploadPage from './Pages/VideoUploadPage/VideoUploadPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
         <Route path="/upload" component={VideoUploadPage} />
         <Route path="/" exact component={MainPage} />
         <Route path="/:videoId"  component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
