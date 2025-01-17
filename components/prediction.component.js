import React from "react";
import { Image, StyleSheet } from "react-native";
import { TopNav } from "./topNav.component";
import {
  Button,
  Layout,
  Icon,
  useTheme,
  Text,
  Avatar,
  Card
} from "@ui-kitten/components";

export const PredictionScreen = () => {

    const styles = StyleSheet.create({
      outerLayout:{
        display: "flex",
        alignItems: "center",
        marginTop:60,
        height:'100%'
      },
      infoText:{
        fontStyle: "italic",
        color: "gray",
        marginTop: 5,
        marginBottom:10,
        textAlign: "center",
        width: "75%"
      },
      dashedCard:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        width:'60%',
        borderWidth:1,
        borderColor:'gray',
        borderStyle:'dashed'     
      },
      amountText:{
        fontWeight:'bold',
        fontSize:26,
        justifyContent:'center',
        marginLeft:'20%'
      },
      plainCard:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        width:'60%',
        borderWidth:1,
        borderColor:'#A9A9A9'
      },
      innerLayout:{
        display:'flex',
        flexDirection:'row'
      },
      arrowIcon:{
        width: 20,
        height: 20,
        marginLeft:5,
        marginTop:8
      }
    })
    return(
        <Layout>
          <TopNav title="Predictions" />
          <Layout style={styles.outerLayout}>
            <Text style={styles.infoText}>Based on your spending patterns in the last 6 months</Text>
            
            <Card style={styles.dashedCard}>
              <Text style={{fontFamily:'JosefinSans_300Light'}}>Last month, you spent</Text>
              <Text style={styles.amountText}>$7224</Text>
            </Card>
            
            <Card style={styles.plainCard}>
              <Text style={{fontFamily:'JosefinSans_300Light'}}>This month, you'll need</Text>
              <Layout style={styles.innerLayout}>
                <Text style={styles.amountText}>$6559</Text>
                <Icon style={styles.arrowIcon} fill='green' name='arrow-down'/>
                <Text style={{fontSize:12, marginTop:10, position:'relative', color:'green'}}>-665 </Text>
              </Layout>
            </Card>

            <Card style={styles.plainCard}>
              <Text style={{fontFamily:'JosefinSans_300Light'}}>Next month, may need</Text>
              <Layout style={styles.innerLayout}>
                <Text style={styles.amountText}>$6625</Text>
                <Icon style={styles.arrowIcon} fill='red' name='arrow-up'/>
                <Text style={{fontSize:12, marginTop:10, position:'relative', color:'red'}}>+66</Text>
              </Layout>
            </Card>

          </Layout>
        </Layout>
    )
}