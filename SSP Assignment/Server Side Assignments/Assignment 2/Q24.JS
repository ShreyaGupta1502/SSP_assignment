function parseJSON(jsonString) {
    try {
      var parsedData = JSON.parse(jsonString);
      return parsedData;
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.log("Invalid JSON string. Please provide a valid JSON string.");
        return null;
      } else {
        throw error;
      }
    }
  }
  
  // Example usage:
  var invalidJSONString = '{ "name": "John", "age": 30, "city": "New York", }';
  var parsedData = parseJSON(invalidJSONString);
  if (parsedData !== null) {
    console.log("Parsed JSON:", parsedData);
  }  