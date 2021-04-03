import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Clipboard, Image, Linking } from 'react-native';
import Button from "../Button";
import Loading from "../Loading";
import styled from 'styled-components/native';

export const QuotesStyle = styled.View`
    min-width: 330px;
    min-height: 100px;
    background-color: transparent;
    border: 2px solid #41EAD4;
    border-radius: 2px;
    align-items: center;
    padding: 20px;
`;

const Quotes = () => {

  const getQuotes = async () => {
    setQuotes({});
    setLoading(true);

    const res = await fetch("https://animechan.vercel.app/api/random");
    const body = await res.json();

    body["quote"] = `"${body["quote"]}"`;
    body["character"] = `- ${body["character"]}`;

    setLoading(false);
    setQuotes(body);
  }

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
  };

  useEffect(() => {
    getQuotes();

    console.log(quotes);
  }, []);

  const [quotes, setQuotes] = useState({});
  const [isLoading, setLoading] = useState(false);

  return (
    <QuotesStyle style={styles.quotes}>
        <Text style={styles.title}>Anime Quotes</Text>

          {
            isLoading
            ? <Loading />
            : false
          }

        <Text style={styles.anime_name}>
          {quotes["anime"]}
        </Text>

        <Text style={styles.anime_quote}>
          {quotes["quote"]}
        </Text>

        <Text style={styles.author}>
          {quotes["character"]}
        </Text>

        <Button onPress={() => getQuotes()}>
            <Text style={styles.btn_title}>
                Generate
            </Text>
        </Button>

        <Button onPress={() => copyToClipboard(quotes["quote"])}>
            <Text style={styles.btn_title}>
                Copy
            </Text>
        </Button>

        <Text style={styles.me}>
          <Text 
            style={styles.cyan}
            onPress={() => Linking.openURL("https://github.com/faintzy")}
          >
            github.com/faintzy
          </Text>
        </Text>
    </QuotesStyle>
  );
}

const styles = StyleSheet.create({
    quotes: {
        marginTop: '15%'
    },
    title: {
        color: '#41EAD4',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    btn_title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    },
    anime_name: {
      color: 'white',
      fontSize: 25,
      marginTop: 10,
      textAlign: 'center',
    },
    anime_quote: {
      color: 'white',
      marginTop: 10,
      textAlign: 'center',
      marginBottom: 10,
    },
    loading_text: {
      color: 'white',
      fontSize: 25,
      marginTop: 30,
    },
    author: {
      alignSelf: 'flex-end',
      marginRight: 50,
      color: 'white',
      marginBottom: 30,
      fontWeight: 'bold',
    },
    me: {
      color: 'white',
      marginTop: 30
    },
    cyan: {
      color: '#41EAD4',
    },
});

export default Quotes;