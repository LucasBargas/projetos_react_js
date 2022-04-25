import DefaultInput from './Input.styles';

const Input = ({ placeholder, input, ...props }) => {
  return (
    <DefaultInput ref={input} placeholder={placeholder} {...props} />
  )
}

export default Input;
