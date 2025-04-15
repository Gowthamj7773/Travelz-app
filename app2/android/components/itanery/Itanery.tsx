import React ,{useState} from "react";
import { View,TouchableOpacity,Image,Text,StyleSheet } from "react-native";
export default function Plans(props)
{
    const [seeMore,SetSeeMore] = useState(false);
    function HandleSeeMore()
    {
        SetSeeMore(prev=>!prev)
    }
    const styles = StyleSheet.create({
        back:{
            width: 45,
            height: 45,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom:"1%",
            margin: 10,
        },
        InsideCard:{
            width:350,
            height:120,
            backgroundColor:"white",
            borderRadius:20,
            borderStyle:"solid",
            borderColor:"rgb(177, 170, 170)",
            borderWidth:1,
            marginBottom:20
        },
        Texts:{
            color:"#DAA520",
            fontWeight:"bold",
            textShadowColor: "rgba(0, 0, 0, 0.7)",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 4,
            marginTop:20
        }
        })
    return(
        <View style={[styles.InsideCard,{height:seeMore?450:120,backgroundColor:props.isDarkMode?"#2C2C2C":(seeMore?"rgb(177, 170, 170)":props.BookConfirm?"rgba(0,0,0,0)":"white")}]}>
            <View style={{flexDirection:"row"}}>
                <Image style={{width:120,height:90,margin:10,borderRadius:20,backgroundColor:props.BookConfirm?"rgba(0,0,0,0)":"white"}} source={props.url}/>
                <View style={{margin:10,}}>
                    <Text style={styles.Texts}>Day {props.day}</Text>
                    <Text style={{width:120,fontSize:12,color:props.isDarkMode?"white":"black",}}>{props.place}</Text>
                    <Text style={{color:props.isDarkMode?"white":"black"}}>Highlights</Text>
                </View>
                {props.isDarkMode && <TouchableOpacity activeOpacity={1} onPress={HandleSeeMore}>
                                <View style={styles.back}>
                                    <Image style={{width:20,height:20}} source={seeMore?require("../../../images/upW.png"):require("../../../images/downW.png")}/>
                                </View>
                </TouchableOpacity>}
                {!props.isDarkMode && <TouchableOpacity activeOpacity={1} onPress={HandleSeeMore}>
                                <View style={styles.back}>
                                    <Image style={{width:20,height:20}} source={seeMore?require("../../../images/up.png"):require("../../../images/down.png")}/>
                                </View>
                </TouchableOpacity>}
            </View>
            
            {seeMore&&
            <View style={{flex:1,margin:10}}>
                <Text style={{color:"#DAA520",fontWeight:"bold",textShadowColor: "rgba(0, 0, 0, 0.7)",textShadowOffset: { width: 1, height: 1 },textShadowRadius: 4,}}>Morning</Text>
                <Text style={{color:props.isDarkMode?"#888888":"black"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos architecto ut magnam laudantium. Eius, ipsam. Eius iste labore illum est.</Text>
                <Text style={styles.Texts}>Afternoon</Text>
                <Text style={{color:props.isDarkMode?"#888888":"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum illo molestias fuga veniam enim, cumque ex similique? Excepturi, quam!</Text>
                <Text style={styles.Texts}>Evening</Text>
                <Text style={{color:props.isDarkMode?"#888888":"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat delectus consequuntur? Enim vitae aperiam eius expedita doloremque odit molestias.</Text>
            </View>

            }
        </View>
    )
}