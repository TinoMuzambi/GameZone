import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
	const pressHandler = () => {
		navigation.openDrawer();
	};
	return (
		<View style={styles.header}>
			<MaterialIcons
				name="menu"
				size={28}
				onPress={pressHandler}
				style={styles.icon}
			/>
			<View style={styles.headerTitle}>
				<Image
					source={require("../assets/heart_logo.png")}
					style={styles.headerImage}
				/>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#333",
		letterSpacing: 1,
	},
	icon: {
		position: "absolute",
		left: 16,
	},
	headerTitle: {
		flexDirection: "row",
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
});
