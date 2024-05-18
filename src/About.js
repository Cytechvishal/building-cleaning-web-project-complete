import React from "react";
import { AbtHeading } from "./about/abouth";
import { AbtContent } from "./about/abtmain";
import { Abtpromise } from "./about/promise";
import { Abtschedule } from "./about/abtschd";
import { Abtexpert } from "./about/abtexpert";
import { Booter } from "./footer";
import { AutoplayCarousel } from "./AutoplayCarousel";
import { Wehave } from "./about/wehave";


export const About=()=>{
    return(
    <>
   
    <AbtHeading />
   
    <AbtContent />
    <Abtpromise />
    <Abtschedule />
    <Abtexpert />
    <Wehave />
    <AutoplayCarousel />
    <Booter />
    </>
    )
}