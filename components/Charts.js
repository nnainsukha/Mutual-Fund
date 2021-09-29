import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["1M", "6M", "1Y", "3Y", "5Y", "All"],
  datasets: [
    {
      data: [20, 31, 48, 51, 57, 60],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 5, // optional
    },
  ],
  legend: ["Percentage Returns"], // optional
};
const Charts = () => {
  const chartConfig = {
    // backgroundGradientFrom: "#1E2923",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#ffffff",
    // backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 15, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View>
      <LineChart
        style={styles.graph}
        data={data}
        width={screenWidth - screenWidth / 9}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  graph: {
    borderRadius: 10,
    marginHorizontal: 3,
    marginVertical: 3,
    resizeMode: "contain",
    justifyContent: "flex-start",
  },
});
