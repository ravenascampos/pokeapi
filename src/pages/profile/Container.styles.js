import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding:0;
  overflow: hidden;
`;

export const Div = styled.div`
  width: 700px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 3px 10px rgba(7, 7, 7, 0.952);
  border-radius: 20px;
  position: fixed;
`;

export const Label = styled.label`
  color: #717171;
  font-size: 14px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: block;
`;
export const Select = styled.select`
  
  width: 170px;
  height: 30px;
  background: #F0F0F0;
  border-radius: 20px;
  border: none;  
  padding-left: 15px;
`;

export const Input = styled.input`
  
  width: 170px;
  height: 30px;
  background: #F0F0F0;
  border-radius: 20px;
  border: none;
  padding: 15px
`;


export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  height: 270px;
`;

export const ErrorTip = styled.p`
  color: red;
  font-size: 12px;
`;

export const TextSuccess = styled.p`
  color: green;
  font-size: 12px;
`;

export const AlignForm = styled.div`
  padding-left:200px;
`;

export const DisplayBlock = styled.div`
  display: block;
`;

export const Img = styled.img`
  width:160px ;
  height:160px ;
  border-radius: 100%;
  border: solid 1px #717171;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  

`;
export const LabelContainer = styled.div`
  display: flex;  
  gap: 2rem;
`;

export const DivButton = styled.div`
  display: flex;  
  gap: 2rem;
  margin: 1em;
`;

export const ImgDiv = styled.section`
  padding-left: 70px;
`;

export const ErrorsDiv = styled.div`
  display: flex;
  padding:2px
`;

export const StyleLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 125.2%;
  color: #717171;
  padding-top: 20px;
`;

export const ButtonSave = styled.button`
  width: 120px;
  height: 44px;
  background: #f2db1d;
  color: #000;
  border-radius: 5px;
  border: none;

 &:hover {
  background: #292929;
  color: white;
}
`;


export const ButtonClear = styled.button`
  width: 120px;
  height: 44px;
  background-color: white;
  border-radius: 5px;
  border: solid 1px #f2db1d;

  &:hover {
  background: #F0F0F0;
}

`;
export const Title = styled.h1`
  color: #292929;
  font-size: 30px;
`;

