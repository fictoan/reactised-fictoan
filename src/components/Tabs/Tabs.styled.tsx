import styled from "styled-components";

export const TabsStyled = styled.section`
    nav {
        width   : 100%;
        display : flex;

        p { position : relative; }

        p:not(last-child) {
            margin-right  : 24px;
            color         : ${props => props.theme.tabs.label.default.text};
            font-weight   : 400;
            padding       : 16px 0;
            border-bottom : 2px solid transparent;
        }
    
        p:hover { color : ${props => props.theme.tabs.label.onHover.text}; }

        p.is-active { color : ${props => props.theme.tabs.label.isActive.text}; }
        
        p.is-right-aligned {
            margin-left  : auto;
            margin-right : 0;
        }

        p.is-active::after {
            display                 : block;
            position                : absolute;
            width                   : 100%;
            height                  : 3px;
            bottom                  : -3px;
            left                    : 0;
            content                 : "";
            border-top-left-radius  : 3px;
            border-top-right-radius : 3px;
            background-color        : ${props => props.theme.tabs.label.isActive.border};
        }
    
        p.has-alert::after {
            position         : absolute;
            top              : 12px;
            left             : 94%;
            border           : 3px solid ${props => props.theme.tabs.label.hasAlert.circle.border};
            width            : 14px;
            height           : 14px;
            background-color : ${props => props.theme.tabs.label.hasAlert.circle.bg};
            border-radius    : 50%;
        }
    
        p.disabled-navlink {
            color  : ${props => props.theme.tabs.label.isDisabled.text};;
            cursor : not-allowed;
        }
    }

    hr { margin : 0 0 16px 0; }

    .tabs-content {
        opacity: 0;
        animation: fade-in 1s ease-in-out forwards;
        transition: opacity 1s ease-in-out;

        .exiting {
            opacity: 0;
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
