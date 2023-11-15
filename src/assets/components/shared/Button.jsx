const Button = ({text, cs, onClick}) => {

    const defaultStyles = {
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        fontSize: ".9rem",
        fontWeight: "bold",
        cursor: "pointer",
    };

    const mergeStyles = {...defaultStyles, ...cs}

  return (
    <button onClick={onClick} style={mergeStyles}>{text}</button>
  )
}

export default Button