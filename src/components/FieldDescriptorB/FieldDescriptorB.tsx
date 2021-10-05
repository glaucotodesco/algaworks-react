import styled from "styled-components";

export interface FieldDescriptorBProps {
   field: string;
   value: React.ReactNode;
}

export default function FieldDescriptorB ( {field, value} : FieldDescriptorBProps){
    return  <FiledDescriptorB>
               <span className="Field">
                  {field}
               </span>

               <span className="Value">
                  {value}
               </span>
            </FiledDescriptorB>
}

const FiledDescriptorB = styled.div `
      display: flex;
      flex-direction: column;
      gap:  4px;
      height: 35px;

      span.Field{
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            color: #274060;
      }
            
      span.Value{
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #274060;
      }
    
`;

