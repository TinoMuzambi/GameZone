import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../shared/Card";

import { globalStyles, images } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text>{navigation.getParam("title")}</Text>
				<Text>{navigation.getParam("body")}</Text>
				<View style={styles.rating}>
					<Text>GameZone Rating: </Text>
					<Image source={images.ratings[navigation.getParam("rating")]} />
				</View>
			</Card>
		</View>
	);
};

export default ReviewDetails;

const styles = StyleSheet.create({
	rating: {
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: 16,
		marginTop: 16,
		borderTopWidth: 1,
		borderTopColor: "#eee",
	},
});
