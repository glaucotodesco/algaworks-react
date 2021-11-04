import * as PB from './ProgressBar.styles';

export type ProgressBarType = 'primary' | 'secondary';

export interface ProgressBarProps {
    type: ProgressBarType;
    title: string;
    progress: number;
    width: number;
}

export default function ProgressBar ({...props} : ProgressBarProps){
    return  <PB.Wrapper  type={props.type} witdh={props.width} progress={props.progress} title={props.title}>
               <div className="ProgressBack">
                  &nbsp;&nbsp;{props.title}
               </div>
               <div className="ProgressFront">
                  &nbsp;&nbsp;{props.title}
               </div>
            </PB.Wrapper>
}
