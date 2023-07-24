import { useSelector } from 'react-redux';

export default function About() {
    const textColor = useSelector((state) => state.theme.textColor);
    const textStyles = {
        color: textColor,
    };
  return (
      <>
          <h1 style={textStyles}>About Page</h1>
          <h3 style={textStyles}>this is about page of admin panel!</h3>
      </>
  );
}
