import styled from "styled-components";

export const TilesSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto 16px;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
        gap: 12px;
    }
`;

export const TilesPersonSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin: auto 16px;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr 1fr;
        gap: 16px; 
    }
`;