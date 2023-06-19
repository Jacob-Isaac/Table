import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  white-space: nowrap; 

   * {
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle; 
  }


  .crumb:last-child:after {
    display: none;
  }

  .crumb a {
    color: white;
    text-decoration: none;
  }
`;
export const Span = styled.span`
    color: white;
`;

export const NavigationBackground = styled.div`
  background-color: #2c92bb;
  height: 54px;
  width: 100%;
  min-width: 320px;
  display: flex;
  align-items: center;
  z-index: 999;
`;
