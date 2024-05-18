import React from "react";
import { SrvHeading } from "./services/srvheading";
import { SrvContent } from "./services/srvcleaning";
import { Srvfacede } from "./services/facede.";
import { Srvmainten } from "./services/srvmainten";
import { Srvbutton } from "./services/srvbutton";
import { Booter } from "./footer";

export const Services=()=>{
    return(<>
    <SrvHeading />
    <SrvContent />
    <Srvfacede />
    <Srvmainten />
    <Srvbutton />
   <Booter />
    </>)
}