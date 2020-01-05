import styled from "styled-components";

export const ContentWrapperStyled = styled.div`
    .content-wrapper {
        display        : flex;
        flex-direction : column;
        width          : 100%;
        transition     : all 0.4s ease-in-out;
    }

    .sidebar-wrapper + .content-wrapper {
        width       : calc(100% - 240px);
        margin-left : 240px;
    }

    .sidebar-wrapper.collapsed + .content-wrapper {
        width       : calc(100% - 48px);
        margin-left : 48px;
    }

    @media (max-width : 900px) {
        .sidebar-wrapper + .content-wrapper {
            width       : 100%;
            margin-left : 0;
        }
    }
`
