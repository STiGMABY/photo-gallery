import React from "react";
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

type PropsType = {
    drawer: boolean
    hideDrawer: () => void
}

export const AppDrawer = (props: PropsType) => {
    return(
        <div>
            <Drawer open={props.drawer} onBlur={props.hideDrawer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </div>
    )
}