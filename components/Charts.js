import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import * as chartdata from "../data/FundsData";

const screenWidth = Dimensions.get("window").width;

const Charts = ({ name }) => {
  const data = {
    labels: ["1M", "6M", "1Y", "3Y", "5Y", "All"],
    datasets: [
      {
        data: chartdata.GraphData.data[name],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 5,
      },
    ],
    legend: ["Percentage Returns"],
  };
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => "#64dfdf",
    strokeWidth: 40,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
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
