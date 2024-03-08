import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({onPress , title}) => {
	return (
		<Pressable
			style={{ backgroundColor: "purple", padding: 10, borderRadius: 5, alignItems: "center", justifyContent: "center" }}
			onPress={onPress}
		>
			<Text style={{ color: "white" }}>{title}</Text>
		</Pressable>
	);
};

export default CustomButton;
