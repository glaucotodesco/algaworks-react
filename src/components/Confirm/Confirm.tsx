import Button from "../Button/Button";
import { ConfirmWrapper } from "./Confirm.styles";

export interface ConfirmProps {
    message: string;
    onConfirm: () => any;
    onCancel: () => any;
}

export default function Confirm( props: ConfirmProps ) {
    return <ConfirmWrapper>
        <div className="Message">
            {props.message}
            <div className="Buttons">
                <Button label="Não" variant="danger"  onClick={props.onCancel} />
                <Button label="Sim" variant="primary" onClick={props.onConfirm} />
            </div>
        </div>
    </ConfirmWrapper>
}
