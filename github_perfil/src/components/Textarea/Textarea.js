import DefaultIextarea from './Textarea.styles';

const Textarea = ({ placeholder, height, ...props }) => {
  return (
    <DefaultIextarea height={height} placeholder={placeholder} {...props} />
  )
}

export default Textarea;
