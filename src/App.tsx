import React, {useState} from 'react';
import './App.css';
import {Header} from "./CustomComponents/Header/Header";
import {AppDrawer} from "./CustomComponents/Drawer/AppDrawer";

function App() {
    const [drawer, setDrawer] = useState(false)

    const showDrawer = () => {
        setDrawer(true)
    }
    const hideDrawer = () => {
        setDrawer(false)
    }

  return (
    <div className="App">
      <Header showDrawer={showDrawer}/>
      <AppDrawer drawer={drawer} hideDrawer={hideDrawer}/>
    </div>
  );
}

export default App;
