import React, {useState} from "react";
import {Header} from "../CustomComponents/Header/Header";
import {AppDrawer} from "../CustomComponents/Drawer/AppDrawer";

export const AppContainer = () => {
    const [drawer, setDrawer] = useState(false)

    const showDrawer = () => {
        setDrawer(true)
    }
    const hideDrawer = () => {
        setDrawer(false)
    }
    return(
        <div>
            <Header showDrawer={showDrawer}/>
            <AppDrawer drawer={drawer} hideDrawer={hideDrawer}/>
        </div>
    )
}