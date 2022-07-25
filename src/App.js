import CookieConsent from "react-cookie-consent";
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Loading from "./loading/Loading";
const WatchTv = React.lazy( () => import("./tv/WatchTv"));
const Intro = React.lazy(() => import("./trivial/Intro"));
const ContactMe = React.lazy(() => import("./contact/ContactMe"));
const MainPage = React.lazy(() => import("./mainpage/MainPage"));
const ButtonList = React.lazy(() => import("./menu/ButtonList"));
const SiteDesign = React.lazy(() => import("./sitedesign/SiteDesign"));
const MyStory = React.lazy(() => import("./mystory/MyStory"));
const GameList = React.lazy(() => import("./game/GameList"));
const GameFrame = React.lazy(() => import("./game/GameFrame"));
const WebCamOfTheDay = React.lazy(() => import("./webcam/WebCamOfTheDay"));
const WorkInProgress = React.lazy(() => import("./inprogress/WorkInProgress"));
const EnterLink = React.lazy(() => import("./tv/EnterLink"));
const Platform = React.lazy(() => import("./series/Platform"));
const FilterSeries = React.lazy(() => import("./series/FilterSeries"));
const Weather = React.lazy(() => import("./weather/Weather"));
const Recipes = React.lazy(() => import("./recipes/Recipes"));
const Ktools = React.lazy(() => import("./kitchentools/Ktools"));
const SingleRecipe = React.lazy(() => import("./recipes/SingleRecipe"));
const Fart = React.lazy(() => import("./fart/Farts"));
const NotFound = React.lazy( () => import('./notfound/NotFound'));
const AlwaysOn = React.lazy( () => import('./alwayson/AlwaysOn'));
const ScoreCounter = React.lazy( () => import('./scorecounter/ScoreCounter'));
const DashBoard = React.lazy( () => import('./dashboard/DashBoard'));

class App extends React.Component{

  render() {
    return(
        <div className="App App-main-container">
          <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
          <React.Suspense fallback={<Loading/>}>
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<MainPage/>}/>
                <Route path='/menu' element={<ButtonList/>}/>
                <Route path='/design' element={<SiteDesign/>}/>
                <Route path='/mystory' element={<MyStory/>}/>
                <Route path='/contact' element={<ContactMe/>}/>
                <Route path='/emulist' element={<GameList/>}/>
                <Route path='/play/:tag' element={<GameFrame/>}/>
                <Route path='/webcams/:tag' element={<WebCamOfTheDay/>}/>
                <Route path='/filmseries/selectplatform' element={<Platform/>}/>
                <Route path='/filmseries/filter/:tag' element={<FilterSeries/>}/>
                <Route path='/enterTvLink' element={<EnterLink/>}/>
                <Route path='/watchTv' element={<WatchTv/>}/>
                <Route path='/weather' element={<Weather/>}/>
                <Route path='/trivial' element={<Intro/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/recipes' element={<Recipes/>}/>
                <Route path='/kitchenTools' element={<Ktools/>}/>
                <Route path='/recipe/:tag' element={<SingleRecipe/>}/>
                <Route path='/fartIsFun' element={<Fart/>}/>
                <Route path='/alwaysOn' element={<AlwaysOn/>}/>
                <Route path='/ps1' element={<AlwaysOn/>}/>
                <Route path='/scoreCounter' element={<ScoreCounter/>}/>
                <Route path='/boo' element={<WorkInProgress/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </BrowserRouter>
          </React.Suspense>
        </div>
    )
  }

}

export default App;
