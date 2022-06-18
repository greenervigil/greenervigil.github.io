import styled from '@emotion/styled';

const StyledButton = styled.button`
    background-color: #18cae6;
    border: 1px solid #18cae6;
    border-radius: 10px;
    color: #000;
    height: 30px;
    padding: 0 10px;
    text-shadow: 0 0 10px;

    &:hover {
        background-color: #000;
        border: 1px solid #18cae6;
        border-radius: 8px;
        color: #18cae6;
        text-shadow: 0 0 10px;
    }
`;

const Button = ({ label, icon }) => {
  return (
    <StyledButton
      type="button"
    >
      {icon}{label}
    </StyledButton>
  );
};

export default Button;