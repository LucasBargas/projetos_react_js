import DefaultInput from './Input.styles';

const Input = ({ placeholder, type, ...props }) => {
  return (
    <DefaultInput type={type} placeholder={placeholder} {...props} />
  )
}

export default Input;
