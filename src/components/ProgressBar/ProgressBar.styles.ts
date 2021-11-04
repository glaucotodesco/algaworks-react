import styled from "styled-components";
import { ProgressBarType } from "./ProgressBar";


const THEME = { 
   primary: {          
         color: '#0099FF'
   },
   secondary: {
         color: '#274060'
   }           
};


export const Wrapper = styled.div <{ type: ProgressBarType, witdh: number, progress: number, title: string}>`
     background-color: #E5E5E5;
     height: 24px;
     width: ${p => p.witdh}px;
     font-size: 14px;
     font-weight: bold;
     line-height: 20px;
    
     
     div.ProgressFront {
        width:100%;
        height: 24px;
        background-color: ${ p => THEME[p.type].color};
        width: ${p => p.progress}%;
        color: white;
        text-overflow: ellipsis-word;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        top: -24px;
        display: flex;
        align-items: center;
        
     }

     div.ProgressBack {
        width: ${p => p.progress}px;
        height: 24px;
        background-color: #0099FF;
        display: flex;
        align-items: center;
        
     }

`