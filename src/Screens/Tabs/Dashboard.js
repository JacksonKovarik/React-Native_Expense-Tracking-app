import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '../../utils/COLORS';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


const data = [
    {
      name: "Shopping",
      population: 1,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Food & Drink",
      population: 1,
      color: "#F00FFF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13,
      
    },
    {
      name: "Rent",
      population: 1,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Bills",
      population: 1,
      color: "#fff000",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Fuel",
      population: 1,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
        name: "Other",
        population: 1,
        color: "rgb(150, 100, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 13
      },
  ];


export default function Dashboard ({navigation}) {
    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.white, alignItems: 'center',}}>
            <View style = {styles.banner}> 
                <Text style = {{color: COLORS.white, fontSize: 30, fontFamily: 'Judson-Bold'}}>
                    Welcome (First-name)
                </Text>
            </View>
            <View style = {styles.visual}>
                <PieChart
                    data={data}
                    width={300}
                    height={150}
                    chartConfig={{
                    color: (opacity)=> '#000'
                    }}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft='-10'
                    avoidFalseZero={true}
                    //center={[10, 50]}
                    absolute
                />
                <View style = {styles.circle}/>
                <Text/>
            </View>
            <View style = {styles.list}>
            
            </View>
            <View style = {styles.income}>
                <Text style = {styles.income_text}>
                    Monthly Income:         $0.00
                </Text>
            </View>
            <View style = {styles.profit}>
                <Text style = {styles.income_text}>
                    Total Profit:                  $0.00
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: '16%',
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    visual: {
        height: '25%',
        width: '85%',
        backgroundColor: COLORS.lightPrime,
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    list: {
        height: '45%',
        width: '85%',
        backgroundColor: COLORS.lightPrime,
        marginTop: 45,
        borderRadius: 20,
    },
    income: {
        height: '7%',
        width: '80%',
        backgroundColor: COLORS.lightSecondary,
        alignItems: 'left',
        justifyContent: 'center',
        borderRadius: 30,
        position: 'absolute',
        top: 110
    },
    profit: {
        height: '7%',
        width: '80%',
        backgroundColor: COLORS.lightSecondary,
        alignItems: 'left',
        justifyContent: 'center',
        borderRadius: 30,
        position: 'absolute',
        top: 310
    },
    income_text: {
        marginLeft: 15,
        fontFamily: 'Judson-Regular',
        color: COLORS.primary,
        fontSize: 24,
    },
    circle: {
        height: 100,
        width: 100,
        borderRadius: 100/2,
        backgroundColor: COLORS.lightPrime,
        position: 'absolute',
        right: 202,
        top: 45,
    }
})