import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Switch, Route } from "react-router-dom";
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
      </div>
      {sendMessageIsOpen && < SendMail />}
    </div>
  );
}

export default App;
