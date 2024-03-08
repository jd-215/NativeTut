import { View, Text, StyleSheet, Image, Platform } from "react-native";

export default function PokemonCard({ name, image, type, hp, weakness, moves }) {
	return (
		<View style={stylesCard.card}>
			<View style={stylesCard.nameContainer}>
				<Text style={stylesCard.name}>{name}</Text>
				<Text style={stylesCard.hp}> HP: {hp}</Text>
			</View>
			{/* <View> */}
				<Image
                    style={stylesCard.image}
					source={image}
                    resizeMode="contain"
					accessibilityLabel={`${name} Pokemon`}
				/>
			{/* </View>  */}
			<View>
				<Text>{type}</Text>
			</View>
            <View>
                <Text>Moves : {moves.join(", ")}</Text>
            </View>
            <View>
                <Text>weakness : {weakness.join(", ")}</Text>
            </View>
		</View>
	);
}

const stylesCard = StyleSheet.create({
	card: {
		backgroundColor: "ffffff",
		borderRadius: 10,
		borderWidth: 2,
		padding: 16,
		margin: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 4,
            height: 4
        }
	},
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
        
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    hp: {
        
        color: "red",
        fontSize: 20,
    },
    image:{
        width: "100%",
        height: 200,
        marginBottom: 16,
    }
});
