import * as VD from './ValueDescriptor.styles';

export type VariantType = 'default' | 'primary';

export interface ValueDescriptorProps {
    variant: VariantType;
    description: string;
    value: number;
    color: string;
    isCurrency ?: boolean;
}

export default function ValueDescriptor ({variant, ...props} : ValueDescriptorProps){
    return  <VD.Wrapper  variant={variant}>
               <span className="Descriptor">{props.description}</span>
               <div>
                  {
                       props.isCurrency &&
                       <span className="Currency">
                        {'R$'}
                       </span> 

                  }
                  
                  <span className="Value">
                     { props.value.toLocaleString('pt-br')}
                  </span>
               </div>

            </VD.Wrapper>
}

