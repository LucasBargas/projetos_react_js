import DefaultInput from './Input.styles';

const Input = ({ placeholder, ...props }) => {
  return (
    <DefaultInput placeholder={placeholder} {...props} />
  )
}

export default Input;
