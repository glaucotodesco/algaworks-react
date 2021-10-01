import styled from "styled-components";

export interface ParagraphProps {
    size ?: 'default' | 'small';
    children: React.ReactNode;
}

export default function Paragraph ( {size, children} : ParagraphProps)
{
      return <StyleParagraph size={size || 'default'} >
                {children}
            </StyleParagraph>  

}


const StyleParagraph = styled.p<{size: 'default'|'small'}> `
  
    font-size:   ${p => p.size  === 'default' ? 14: 12}px;
    line-height: ${p => p.size  === 'default' ? 25: 20}px;
    color: #274060;
`;
