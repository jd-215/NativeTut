import {
	View,
	Text,
	Image,
	ImageBackground,
	ScrollView,
	Button,
	Pressable,
	Modal,
	StatusBar,
	ActivityIndicator,
	Alert,
	StyleSheet,
	Dimensions,
	Platform,
	SafeAreaView,
	useWindowDimensions,
} from "react-native";
const logo = require("./assets/adaptive-icon.png");

import { useState } from "react";
import Greet from "./components/Greet";
import StyleGreet from "./Style/StyleGreet";
import Box from "./components/Box";
import CustomButton from "./components/customButton/CustomButton";
import PokemonCard from "./components/CardComp/PokemonCard";

export const charmander = {
	name: "Charmander",
	image: require("./assets/charmander.png"),
	type: "Fire",
	hp: 39,
	weakness: ["Water", "Ground", "Rock"],
	moves: ["Scratch", "Ember", "Fire Spin", "Dragon Rage", "Flamethrower", "Fire Blast"],
};

export const squirtle = {
	name: "Squirtle",
	image: require("./assets/squirtle.png"),
	type: "Water",
	hp: 44,
	weakness: ["Electric", "Grass"],
	moves: ["Tackle", "Water Gun", "Bubble", "Water Pulse"],
};

export const bulbasaur = {
	name: "Bulbasaur",
	image: require("./assets/bulbasaur.png"),
	type: "Grass",
	hp: 45,
	weakness: ["Fire", "Ice", "Poison", "Flying", "Bug"],
	moves: ["Tackle", "Vine Whip", "Growl", "Razor Leaf"],
};

export const pikaachu = {
	name: "Pikachu",
	image: require("./assets/pikachu.png"),
	type: "Electric",
	hp: 35,
	weakness: ["Ground"],
	moves: ["Thunder Shock", "Spark", "Thunder Wave", "Thunderbolt"],
};

export default function App() {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	// console.log("WindowHeight",WindowHeight);
	// 	console.log("WindowWidth",WindowWidth);
	const { height, width } = useWindowDimensions();
	const handleStatusBar = () => {
		setLoading(!loading);
	};
	const toggleModal = () => setModalVisible(!modalVisible);
	return (
		// 	<View style={{ flex: 1,justifyContent: "center", padding: 30 ,backgroundColor: "plum" }}>
		// 	<ScrollView style={{ flex: 1 , padding: 30}}>
		// 		<View style={{backgroundColor: "black", width: 100, height: 100 }}>
		//     <Image source={logo} style={{ width: 100, height: 100 , }} />
		//   </View>
		//   <ImageBackground source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} style={{ width: 200, height: 100 }}>

		// 		<Text style={{ padding:10, backgroundColor: "white", margin: 20}}>
		// 			<Text style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>
		// 				Native<Text style={{ color: "blue" , fontWeight: "bold", fontSize: 30}}>Tut</Text>
		// 			</Text>
		// 		</Text>
		//   </ImageBackground>
		//   <View style={{backgroundColor: "black", width: 100, height: 100 }}>
		// 	<Pressable onLongPress={() => console.log("Hello from React Native, Image Pressed")}>
		//     <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} style={{ width: 100, height: 100 , }} />
		//   </Pressable>
		//   </View>

		// 		{/* <Text>
		// 			r adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor
		// 			sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum
		// 			dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
		// 			ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		// 			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna
		// 			aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
		// 			magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
		// 			dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
		// 			et dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
		// 			labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
		// 			ut labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
		// 			incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
		// 			tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed do
		// 			eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit sed
		// 			do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing elit
		// 			sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur adipiscing
		// 			elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur
		// 			adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet
		// 			consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit
		// 			amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor
		// 			sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		// 		</Text> */}
		// 	</ScrollView>
		// 	<Button title="Press me"
		// 	color="blue"
		// 	disabled={true}
		// 	onPress={() => console.log("Hello from React Native")} />
		// 	</View>
		// <View style={{ flex: 1,alignItems: "center", justifyContent: "center", padding: 30 }}>
		// 	<StatusBar
		// 		hidden={loading}
		// 		barStyle='dark-content'
		// 		backgroundColor='plum'
		// 	/>

		// 	<ActivityIndicator
		// 		size='large'
		// 		color='blue'
		// 		animating={true}
		// 	/>
		// 	<View style={{ padding: 10 }}>
		// 		<Button
		// 			title='Show StatusBar'
		// 			onPress={handleStatusBar}
		// 			color={"blue"}
		// 		/>
		// 	</View>
		// 	 <Button
		// 		title='Press me'
		// 		onPress={toggleModal}
		// 	/>
		// 	 <Modal
		// 		visible={modalVisible}
		// 		animationType='slide'
		// 		presentationStyle='pageSheet'
		// 	>
		// 		<View style={{ flex: 1, justifyContent: "center", padding: 60, margin: 20, backgroundColor: "plum" }}>
		// 			<Text>Modal is open</Text>
		// 			<Button
		// 				title='Close'
		// 				onPress={toggleModal}
		// 			/>
		// 		</View>
		// 	</Modal>
		// 	<Button
		// 		title='Press me'
		// 		onPress={() =>
		// 			Alert.alert("Hello from React Native", "React Native", [
		// 				{ text: "Yes", onPress: () => console.log("Yes Pressed from alert") },
		// 				{ text: "No", onPress: () => console.log("No Pressed from alert") },
		// 			])
		// 		}
		// 	/>

		// <SafeAreaView>
		// 	<ScrollView>

		// 	<View style={[style.container, style.text]}>
		// 		<Greet />
		// 		<StyleGreet />
		// 	<Box children="Box 1" style={{backgroundColor: "red"}} />
		// 		<Box children="Box 2"  style={{backgroundColor: "blue",}}/> */}
		// 		<Box children="Box 3"  style={{backgroundColor: "green"  }}/>
		// 		<Box children="Box 4"  style={{backgroundColor: "violet"}}/> */}
		// 		<Box children="B ox 1" style={{backgroundColor: "black", }} />
		// 		<Box children="Box 2"  style={{backgroundColor: "plum",}}/>
		// 		<Box children="Box 3"  style={{backgroundColor: "lightgreen"  }}/>
		// 	<Box children="Box 4"  style={{backgroundColor: "lightblue"}}/> */}
		// 	</View>
		// 	<View style={{height: height, justifyContent: "center"}}>
		// 		<CustomButton
		// 			title='Press me'
		// 			onPress={() => console.log("Hello from React Native")}
		// 		/>
		// 	</View>
		<SafeAreaView style={stylesSec.container}>
			<ScrollView>
				<PokemonCard {...charmander} />
			</ScrollView>
		</SafeAreaView>
	);
}

const stylesSec = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: "",
		backgroundColor: "f5f5f5",
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});

// const style = StyleSheet.create({
// 	container: {
// 		// flex: 1,
// 		flexDirection: "row",
// 		flexWrap: "wrap",
// 		backgroundColor: "#fff",
// 		// alignItems: 'center',
// 		// justifyContent: 'center',
// 		height: 200,
// 		// width: 300,
// 		// marginTop: 50,
// 		// alignContent: 'center',
// 		// rowGap: 4,
// 		// columnGap: 4,
// 		// gap: 4,
// 		borderWidth: 3,
// 		borderColor: "blue",
// 		borderStyle: "solid",
// 	},
// 	text: {
// 		...Platform.select({
// 			ios: {
// 				fontSize: 20,
// 			},
// 			android: {
// 				backgroundColor: "plum",
// 			},
// 		}),
// 	},
// });

// const WindowWidth = Dimensions.get("window").width;
// const WindowHeight = Dimensions.get("window").height;

