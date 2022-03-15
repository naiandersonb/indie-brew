/* eslint-disable react/require-default-props */
import { InputStyled } from './input.styles';

type InputType = {
  type: string;
  name?: string;
  placeholder?: string;
}

function Input({ type, name, placeholder }: InputType) {
  return (
    <InputStyled type={type} name={name} placeholder={placeholder} />
  );
}

export default Input;
