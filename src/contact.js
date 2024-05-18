import React from "react";
import { CntHeading } from "./contact/cntheading";
import { CntContent } from "./contact/cntmain";
import { Booter } from "./footer";


export const Contact=()=>{
    return(<>
    <CntHeading />
    <CntContent />
    <Booter />
    </>)
}