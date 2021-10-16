import * as P from './ProgressBar.styles';

export interface ProgressBarProps{
    text: string,
    size: number,
    bgColor: string
}

export default function ProgressBar ( {text, size, bgColor } : ProgressBarProps){
    return  <P.Wrapper>
                 {text}
            </P.Wrapper>
}