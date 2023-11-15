const highLightMatch = (text, searchInput) => {
    if (!searchInput) {
      return <>{text}</>; 
    }
  
    const regex = new RegExp(`(${searchInput})`, 'gi');
    const parts = text.split(regex);
  
    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <span key={index} style={{ backgroundColor: '#876d04' }}>
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
};

export default highLightMatch;