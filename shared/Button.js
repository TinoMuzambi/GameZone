import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const Button = ({ text, pressHandler }) => {
	return (
		<TouchableOpacity onPress={pressHandler}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		paddingVertical: 14,
		paddingHorizontal: 10,
		backgroundColor: "#f01d71",
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		textTransform: "uppercase",
		fontSize: 16,
		textAlign: "center",
	},
});
