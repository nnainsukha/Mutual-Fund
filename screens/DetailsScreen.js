import React, { useContext, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";
import Charts from "../components/Charts";
import Table from "../components/Table";
import HoldingsTable from "../components/HoldingsTable";
import * as data from "../data/FundsData";

export default function DetailsScreen({ route, navigation }) {
  const Logo = data.Logo;

  const item = route.params;
  const name = item.name;
  const category = item.category;
  const type = item.type;
  const risk = item.risk;
  const oneyear = item.oneyear;
  const nav = item.nav;
  const rating = item.rating;
  const sip = item.sip;
  const fundsize = item.fundsize;
  const investmentobj = item.investmentobj;

  return (
    <ScrollView>
      <Card>
        <View style={styles.title}>
          <Image style={styles.logoimage} source={Logo.logos[name]} />
          <View style={styles.text}>
            <Text style={styles.titletext}>{name}</Text>
            <View style={styles.info}>
              <Text style={styles.infotext}>{type}</Text>
              <Text style={styles.infotext}>{category}</Text>
              <Text style={styles.infotext}>{risk}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.percent}>{oneyear}</Text>
        <Text style={styles.belowpercent}>1Y</Text>
        <Charts name={name} />
        <View style={styles.infoheader}>
          <Text style={styles.infoheadertext}>NAV</Text>
          <Text style={styles.infoheadertext}>Rating</Text>
          <Text style={styles.infoheadertext}>Min SIP</Text>
          <Text style={styles.infoheadertext}>Fund Size</Text>
        </View>
        <View style={styles.infoheader}>
          <Text style={styles.infoheadervalue}>{nav}</Text>
          <Text style={styles.infoheadervalue}>{rating}</Text>
          <Text style={styles.infoheadervalue}>{sip}</Text>
          <Text style={styles.infoheadervalue}>{fundsize}</Text>
        </View>
        <Text style={styles.heading}>Investment Objective</Text>
        <Text style={styles.objectivetext}>{investmentobj}</Text>
        <Text style={styles.heading}>Returns and Rankings</Text>
        <Table />
        <Text style={styles.heading}>Holdings</Text>
        <HoldingsTable />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
  },
  logoimage: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    justifyContent: "flex-start",
    borderRadius: 10,
  },
  titletext: {
    marginHorizontal: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "900",
    flexDirection: "column",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  infotext: {
    padding: 7,
    borderColor: "#444",
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  percent: {
    fontSize: 30,
    fontWeight: "900",
    marginVertical: 5,
    color: "#444",
  },
  belowpercent: {
    marginHorizontal: 25,
    color: "#A9A9A9",
  },
  infoheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  infoheadertext: {
    color: "#A9A9A9",
  },
  infoheadervalue: {
    color: "#000000",
    fontWeight: "500",
  },
  heading: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: "900",
    marginTop: 15,
    color: "#444",
    borderTopWidth: 1,
    borderTopColor: "#A9A9A9",
  },
  objectivetext: {
    color: "#444",
    textAlign: "justify",
    fontWeight: "500",
    marginVertical: 5,
  },
});
