import React, { Component, Suspense, lazy } from 'react';
import Preloader from './components/preloader';
import './App.css';
// Импортируем основной компонент


const App = lazy(() => import('./App'));
export default class Cover extends Component{
    render(){
        return(


            // В fallback передаём preloder
            <Suspense fallback={<Preloader/>}>
                <App />
            </Suspense>
        );
    }
}