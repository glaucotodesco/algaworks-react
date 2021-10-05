import styled from "styled-components";

export const ConfirmWrapper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    background-color: #F3F8FA;
    color: #274060;
    width: 230px;

    div.Message  {
        font-size: 18px;
        font-weight: 700;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        line-clamp: 1;
        overflow: hidden;
    }

    div.Buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 12px;
        gap: 8px;
    }
`