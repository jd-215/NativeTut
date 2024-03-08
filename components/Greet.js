import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    padding: 10,
    // borderBlockColor: "white",
    // borderStyle: "solid",
    // borderLeftColor: "white",
    // borderRightColor: "white",
    // borderWidth: 3,
  },
  androidElevation: {
    elevation: 20,
  },
  text: {
    color: "white"
  },
  boxShadow:{
    shadowColor: "#fff",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
})
function Greet() {
  return (
    <View style={[styles.container, styles.boxShadow, styles.androidElevation]}>
        <Text style={styles.text}>Hello from Greet</Text>
        </View>
  )
}

export default Greet