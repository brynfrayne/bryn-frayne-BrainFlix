import React, { Component } from 'react'
import Header from "../../Components/Header/Header";
// import './App.scss';
import MainVideo from "../../Components/MainVideo/MainVideo";

export default class MainPage extends Component {
    render() {
        return (
    <div className="App">
        <main>
            <MainVideo />
        </main>      
    </div>
                
        )
    }
}
