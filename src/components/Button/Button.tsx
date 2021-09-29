import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import * as B from './Button.styles';

export type VariantType = 'danger' | 'text' | 'primary';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant: VariantType;
    label: string;
}

export default function Button ( {variant, label, ref, ...props} : ButtonProps){
    return  <B.Wrapper 
                variant={variant}
                {...props}
            >
                {label}
            </B.Wrapper>
}