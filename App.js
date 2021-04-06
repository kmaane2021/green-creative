import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Linking } from 'react-native'
import {Text, View, ScrollView, Button, SafeAreaView, ImageBackground } from 'react-native';
import { ScaledSheet } from "react-native-size-matters";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/greencreative/tab_back.png",
  };
  const image1 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/greencreative/header.png",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentBorder}>
        <View style={styles.contentBorderTwo}>
          <View style={styles.header}>
            <LinearGradient
              colors={['#dab636', '#f2e4b6']}
              style={styles.headerBackground}
            />
            <Text style={styles.h1}>Green Creative</Text>
            <Text style={styles.subtitle}>Inspired by Creative Commons, licensed under Creative Commons.</Text>
          </View>
          <View style={styles.containerNav}>
            <ScrollView style={styles.navContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.navButton}>
                <LinearGradient

                  colors={['#806817', '#d9b436']}
                  style={styles.navButtonBkg}
                />
                <Text style={styles.navBtnTxt}>Home</Text>
              </View>
              <View style={styles.navButton}>
                <LinearGradient

                  colors={['#806817', '#d9b436']}
                  style={styles.navButtonBkg}
                />
                <Text style={styles.navBtnTxt}>About</Text>
              </View>
              <View style={styles.navButton}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={['#806817', '#d9b436']}
                  style={styles.navButtonBkg}
                />
                <Text style={styles.navBtnTxt}>Portfolio</Text>
              </View>
              <View style={styles.navButton}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={['#806817', '#d9b436']}
                  style={styles.navButtonBkg}
                />
                <Text style={styles.navBtnTxt}>Prices</Text>
              </View>
              <View style={styles.navButton}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={['#806817', '#d9b436']}
                  style={styles.navButtonBkg}
                />
                <Text style={styles.navBtnTxt}>Products</Text>
              </View>
              <View style={styles.navButton}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={['#806817', '#d9b436']}
                  style={styles.navButtonBkg}
                />
                <Text style={styles.navBtnTxt}>FAQ</Text>
              </View>
              <View style={styles.navButton}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={['#806817', '#d9b436']}
                  style={styles.navButtonBkg}
                />
                <Text style={styles.navBtnTxt}>Contact</Text>
              </View>
            </ScrollView>
          </View>
          <ScrollView horizontal={false}
            showsHorizontalScrollIndicator={true} style={styles.containerText}>
            <View style={styles.text}>
              <View style={styles.text1} >
                <ImageBackground source={image} style={styles.image}>
                  <Text style={styles.h2} >Template Usage</Text>
                  <Text style={styles.p}>{"\n"}You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy smile{"\n"}{"\n"}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
                  <Text style={styles.readme} onPress={() => Linking.openURL('')} >{"\n"}{"\n"}(read more)</Text>
                </ImageBackground>
              </View>
              <View style={styles.text2}>
                <ImageBackground source={image} style={styles.image}>
                  <Text style={styles.h2}>Another Title Goes Here!</Text>
                  <Text style={styles.p}>{"\n"}This particular template goes not have a naviagation panel; it was intended for simple sites. I am also making a version of this template with navigation, check out BryantSmith.com to get it.</Text>
                  <Text style={styles.readme} onPress={() => Linking.openURL('')}>{"\n"}{"\n"}(read more)</Text>
                </ImageBackground>
              </View>
              <View style={styles.text3}>
                <ImageBackground source={image} style={styles.image}>
                  <Text style={styles.h2}>Yet Another?</Text>
                  <Text style={styles.p}>{"\n"}Each title is an H1 tag, so choose them carefully smile</Text>
                </ImageBackground>
              </View>
            </View>
            <Text style={styles.footer} onPress={() => Linking.openURL('http://www.bryantsmith.com')}>web development by bryant smith</Text>
          </ScrollView>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#679159',
  },
  contentBorder: {
    backgroundColor: "#bed2b7",
    flexDirection: "column",
    flex: 1,
    padding: '15@s',
    borderRadius: '20@s',
    marginTop: '40@s',
    marginLeft: '10@s',
    marginRight: '10@s'
  },
  contentBorderTwo: {
    flexDirection: "column",
    flex: 1,
    borderRadius: '20@s',
    backgroundColor: "white",
    paddingBottom: 0,
  },
  header: {
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '20@s',
    flex: .3,
    justifyContent: "center",
    // height: "100%"
  },
  headerBackground: {
    position: 'absolute',
    borderRadius: 10,
    left: 0,
    right: 0,
    top: 0,
    height: "120%"
  },
  h1: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    fontSize: '30@s',
    color: "#283823"
  },
  subtitle: {
    color: "#679159",
    fontWeight: 'bold',
    fontSize: '13@s',

  },
  containerNav: {
    flex: .13,
  },
  navContainer: {
    flexDirection: "row",
    flex: 1,
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '50@s',
    paddingLeft: '10@s',
    paddingRight: '8@s'
  },
  navButtonBkg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '50@s'
  },
  navBtnTxt: {
    color: "#fff",
    fontWeight: "700",
    fontSize: '14@s'
  },
  containerText: {
    flex: .6,
  },

  text: {
    flexDirection: "column",
    flex: 1,
  },


  text1: {

    borderRadius: '30@s',
    paddingTop: '15@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '15@s',
    flex: 1,
  },
  text2: {

    borderRadius: '30@s',
    paddingTop: '15@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '15@s',
    flex: 1,

  },
  text3: {

    borderRadius: '30@s',
    paddingTop: '15@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '15@s',
    flex: 1,

  },
  image: {
    width: "100%",

    borderRadius: '20@s',
    height: "100%",

  },
  text: {
    fontFamily: 'Trebuchet MS", Arial, Helvetica, sans-serif',
    alignItems: "center",
    flex: 0.5,
    marginTop: 0,
    paddingLeft: '3@s',
    paddingRight: '10@s',

  },
  h2: {
    color: '#071027',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: '15@s',
    paddingTop: '15@s',

  },

  readme: {
    paddingLeft: '10@s',


  },
  p: {
    lineHeight: '25@s',
    paddingLeft: '10@s',
  },

  image: {
    borderRadius: '15@s',
    overflow: "hidden",
  },

  footer: {
    color: 'black',
    marginTop: '15@s',
    fontSize: '9@s',
    textAlign: 'center',


  },


});