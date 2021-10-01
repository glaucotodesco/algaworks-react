import styled from "styled-components";
import { VariantType } from "./ValueDescriptor";

const THEME = { 
      primary: {          
            color: '#0099FF'
      },
      default: {
            color: '#274060'
      }           
};
  

export const Wrapper = styled.div <{ variant: VariantType}>`
      display:flex;
      flex-direction: column;
      height: 37px;

      span.Descriptor {
         font-size: 12px;
         font-weight: 400;
         line-height: 14.4px;
         color: ${THEME['default'].color};
      }

      span.Currency {
            font-size: 18px;
            font-weight: 400;
            line-height: 21.6px;
            color: ${p => THEME[p.variant].color};
      }

      span.Value {
            font-size: 18px;
            font-weight: 900;
            line-height: 21.6px;
            color: ${p => THEME[p.variant].color};
      }



`;