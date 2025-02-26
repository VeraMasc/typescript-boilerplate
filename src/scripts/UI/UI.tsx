import React from "react";
import { ActionMenu } from './actionMenu';
import { EventLog } from './eventLog';
import { CatchError } from "./UIutils";

/**Base game screen component */
export function BaseScreen(){
    //TODO: Improve screen components
    let menu = new ActionMenu();
    let log = new EventLog();
    //<menu.toHTML/>
    return [<div id="sideMenu">
        <menu.toHTML/>
    </div>,
    <log.toHtml/>]
   
}