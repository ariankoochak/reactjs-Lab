import { useSelector } from 'react-redux';

export default function Home() {
    const textColor = useSelector((state) => state.theme.textColor);
    const textStyles = {
    color:textColor,
  }

  return (
      <>
          <h1 style={textStyles}>Home Page</h1>
          <h3 style={textStyles}>this is home page of admin panel!</h3>
      </>
  );
}
