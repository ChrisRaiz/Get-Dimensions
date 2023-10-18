// Example
// On layout, finds the dimensions of the Text element and sets it to the dimensions state variable
// Style gets set for the Divider element using standard StyleSheet declaration and with the updated width from the dimensions object

// Accessing dimension
// dimensions.x
// dimensions.y
// dimensions.height
// dimensions.width

export default Component = () => {
  const [dimensions, setDimensions] = useState();

   const getDimensions = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setDimensions(event.nativeEvent.layout.width);
  };
  
  return(
        <View>
          <Text onLayout={getDimensions}>
            This is the text displayed
          </Text>
          <Divider style={[styles.example, { width: dimensions.width }]} />
        </View>
  );
};

const styles = StyleSheet.create({
  example: {
    color: "black",
    borderWidth: 0.5,
    opacity: 0.5,
});
