    import React, { useState } from "react";
    import {
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    StyleSheet,
    Modal,
    Dimensions,
    SafeAreaView,
    Image,
    ScrollView
    } from "react-native";

    import { BlurView } from "@react-native-community/blur";
    import Plans from "../itanery/Itanery";


const { width, height } = Dimensions.get("window");

export default function Cards(props) {
const [seeMore, SetSeeMore] = useState(false);
const [bookNow,SetBookNow] = useState(false);
const [BookConfirm,SetBookConfirm] = useState(false);
const styles = StyleSheet.create({
cards: {
    marginRight: 20,
    height: height * 0.50,
    width: width * 0.85,
    overflow: "hidden",
    borderRadius: 30,
    alignSelf: "center",
},

cardsImg: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
},

readMore: {
    height: 60,
    borderRadius: 50,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
},

writingBox: {
    flex: 2.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    padding: 20,
},

back: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:"1%",
    margin: 10,
},
});

return (
<>
    <View style={styles.cards}>
    <ImageBackground style={styles.cardsImg} source={props.url} imageStyle={{ borderRadius: 30 }}>
        {/* Top Right Icon Placeholder */}
        <View style={{ alignItems: "flex-end" }}>
        
        <TouchableOpacity activeOpacity={1} onPress={props.toggleLike}>
        <View style={{height: 40,width: 40,backgroundColor: "rgba(0,0,0,0.5)",borderRadius: 100,paddingTop:"1%",alignItems:"center",justifyContent:"center"}}>
            <Image source={props.isLiked? require("../../../images/heartFull.png"):require('../../../images/heartEmpty.png')} style={{width:20,height:20}}/>
        </View>
        </TouchableOpacity>
        </View>

        {/* Country Info and Button */}
        <View>
        <View>
            <Text
            style={{
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                textShadowColor: "#f8f8f8",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 4,
            }}
            >
            {props.country}
            </Text>
            <Text
            style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                textShadowColor: "rgba(0, 0, 0, 0.7)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 4,
            }}
            >
            {props.about}
            </Text>
        </View>

        <View style={styles.readMore}>
            <Text style={{ color: "white", fontSize: 20 }}>See more</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => SetSeeMore(true)}>
            <View
                style={{
                width: 45,
                height: 45,
                backgroundColor: "white",
                borderRadius: 100,
                alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>{">"}</Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
    </ImageBackground>
    </View>

    {/* About the place Modal */}
    <Modal visible={seeMore} animationType="slide">
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={props.url} style={{ flex: 1 }} imageStyle={{ opacity: 0.8 }}>
        <TouchableOpacity onPress={() => SetSeeMore(false)} activeOpacity={1}>
            <View style={styles.back}>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>{"<"}</Text>
            </View>
        </TouchableOpacity>
        <Text style={{color:'#4CAF50',fontSize:20,fontWeight:"bold",paddingTop:"25%",paddingLeft:"2%",textShadowColor: "rgba(0, 0, 0, 0.7)",textShadowOffset: { width: 1, height: 1 },textShadowRadius: 4}}>$6599<Text style={{color:"white",fontSize:15,fontWeight:"condensed"}}>
            <Text style={{fontSize:20}}>/</Text>person</Text>
        </Text>
        </ImageBackground>

        <View style={[styles.writingBox,{backgroundColor:props.isDarkMode?"#1E1E1E":"white"}]}>
        <View
            style={{
            height: 4,
            width: 90,
            backgroundColor: "rgba(0,0,0,.7)",
            borderRadius: 100,
            alignSelf: "center",
            }}
            />
            <Text style={{ fontSize: 25, marginTop: 20, fontWeight: "bold", color: props.isDarkMode?"white":"black" }}>
                {props.country}
            </Text>
            <Text style={{ fontSize: 15, color: props.isDarkMode?"#888888":"#2F4F4F" }}>{props.about}</Text>
            <Text style={{ marginTop: 10 ,color: props.isDarkMode?"#888888":""}}>{props.detail}</Text>
            <View style={{width:"100%",height:"15%",alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity activeOpacity={0.6} onPress={()=>SetBookNow(true)}>
                    <View style={{backgroundColor:"black",width:270,height:60,borderRadius:100,alignItems:"center",justifyContent:"center"}}><Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Start Planning</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    </Modal>

    {/* Show Plannings  modal */}


<Modal visible={bookNow} animationType="slide">
<SafeAreaView style={[{ flex: 1},{backgroundColor:"#fff"}]}>
<ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
    <View style={{ flex: 1 }}>
    {/* top */}
    <View style={{height:100,backgroundColor:props.isDarkMode?"#2C2C2C":"rgba(0,0,0,0.2)",justifyContent: "center",}}>
        <View style={{flexDirection: "row",justifyContent: "space-between",alignItems: "center",paddingHorizontal: 10,height: 60,}}>
            <TouchableOpacity activeOpacity={1} onPress={() => SetBookNow(false)}>
                <View style={[styles.back]}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>{'<'}</Text>
                </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold", color:props.isDarkMode?"white": "black" }}>
            {props.country}
            </Text>

        <TouchableOpacity activeOpacity={1} onPress={props.toggleLike}>
            <View style={{height: 40,width: 40,backgroundColor: "rgba(0,0,0,0.5)",borderRadius: 100,alignItems: "center",justifyContent: "center",}}>
            <Image source={props.isLiked ? require("../../../images/heartFull.png") : require("../../../images/heartEmpty.png")} style={{ width: 20, height: 20 }}/>
            </View>
        </TouchableOpacity>
        </View>
    </View>

    {/* Bottom - 80% */}
    <View style={{flex: 8,marginTop: -20,backgroundColor:props.isDarkMode?"#1E1E1E":"white",borderTopRightRadius: 20,borderTopLeftRadius: 20,padding: 16, borderWidth:1,borderStyle:"solid",borderColor:props.isDarkMode?"gray":"white"}}>
        <View style={{height: 4,width: 90,backgroundColor: "rgba(0,0,0,.7)",borderRadius: 100,alignSelf: "center",marginBottom: 10,}}/>

        {/* Plans section */}
        <View style={{ flex: 1,alignItems:"center"}}>
        <Plans day={1} place={props.about} url={props.url} toggle={BookConfirm} isDarkMode={props.isDarkMode}/>
        <Plans day={2} place={props.about} url={props.url} toggle={BookConfirm} isDarkMode={props.isDarkMode}/>
        <Plans day={3} place={props.about} url={props.url} toggle={BookConfirm} isDarkMode={props.isDarkMode}/>
        <Plans day={4} place={props.about} url={props.url} toggle={BookConfirm} isDarkMode={props.isDarkMode}/>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity activeOpacity={0.6} onPress={()=>SetBookConfirm(true)}>
                <View style={{backgroundColor:"black",width:270,height:60,borderRadius:100,alignItems:"center",justifyContent:"center"}}><Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Book Now</Text></View>
            </TouchableOpacity>
        </View>
        
        
    </View>
    </View>
</ScrollView>
</SafeAreaView>
</Modal>

{/* booking confirmed popup */}
<Modal visible={BookConfirm} transparent={true} animationType="fade">

    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <BlurView
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
        />
    <View style={{width:"90%",height:"40%",backgroundColor:props.isDarkMode?"#1E1E1E":"white",borderRadius:30,elevation:10}}>
        <TouchableOpacity onPress={()=>{SetBookConfirm(false)}}>
            <View style={{height:40,alignItems:"center",justifyContent:"flex-end" ,flexDirection:"row"}}>
                <View style={{width:40,height:40,borderRadius:100,margin:8,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:30,fontWeight:"bold",color:props.isDarkMode?"white":"black"}}>x</Text>
                </View>
            </View>
            <View style={{height:100,marginTop:20,justifyContent:"center",alignItems:"center"}}>
                <Image style={{width:100,height:100}} source={require("../../../images/done.png")}/>
            </View>
            <View style={{marginTop:30,marginHorizontal:20}}>
                <Text style={{fontSize:20,textAlign:"center",color:props.isDarkMode?"white":"black",fontWeight:"bold"}}>Booking placed! Expect a call from us within 2 business days.</Text>
            </View>
            
        </TouchableOpacity>
    </View>
    </View>
    
</Modal>
</>
);
}
