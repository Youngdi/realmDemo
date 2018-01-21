/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';
import RNFS from 'react-native-fs';
import Realm from 'realm';
const Person = {
  name: 'Person',
  properties: {
    name: 'string',
    nickname: 'string',
    birthday: 'date',
    picture: 'string?'
  }
}

const bible_chs = {
  name: 'bible_chs',
  properties: {
    version: 'string?',
    testament: 'int?',
    book_ref: 'string?',
    book_name: 'string?',
    book_name_short: 'string?',
    book_nr: 'int?',
    chapter_nr: 'int?',
    verse_nr: 'int?',
    verse: 'string?'
  }
}

const bible_cht = {
  name: 'bible_cht',
  properties: {
    version: 'string?',
    testament: 'int?',
    book_ref: 'string?',
    book_name: 'string?',
    book_name_short: 'string?',
    book_nr: 'int?',
    chapter_nr: 'int?',
    verse_nr: 'int?',
    verse: 'string?'
  }
}

const bible_japan = {
  name: 'bible_japan',
  properties: {
    id: 'int?',
    version: 'string?',
    testament: 'int?',
    book_ref: 'string?',
    book_name: 'string?',
    book_name_short: 'string?',
    book_nr: 'int?',
    chapter_nr: 'int?',
    verse_nr: 'int?',
    verse: 'string?'
  }
}

const bible_kjv = {
  name: 'bible_kjv',
  properties: {
    version: 'string?',
    testament: 'int?',
    book_ref: 'string?',
    book_name: 'string?',
    book_name_short: 'string?',
    book_nr: 'int?',
    chapter_nr: 'int?',
    verse_nr: 'int?',
    verse: 'string?'
  }
}

const schedule = {
  name: 'schedule',
  properties: {
    id: 'int?',
    month: 'int?',
    day: 'int?',
    book_id: 'int?',
    chapter_from: 'int?',
    verse_from: 'int?',
    chapter_to: 'int?',
    verse_to: 'int?'
  }
}

export default class RealmModelsDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: [],
    }
    this.b = 1;
  }
  componentDidMount () {
    console.log(RNFS);
    this.realm = new Realm({
      path: RNFS.MainBundlePath + '/byt.realm',
      schema:[schedule, bible_kjv,bible_japan, bible_cht, bible_chs, Person],
      readOnly: true,
    });
    console.log(new Date().getTime());
    this.schedule_results = this.realm.objects('schedule').filtered('month = 1 AND day = 1');
    this.bible_results = this.realm.objects('bible_cht');
    const content = this.schedule_results.map(item => {
      return this.bible_results.filtered(`book_nr = ${item.book_id} AND chapter_nr >= ${item.chapter_from} AND chapter_nr <= ${item.chapter_to} AND verse_nr >= ${item.verse_from} AND verse_nr <= ${item.verse_to == 0 ? 200 : item.verse_to}`);
    });
    console.log(new Date().getTime());
    this.setState({
      content: content,
    });
    console.log(new Date().getTime());
  }
  setContent = () => {
    this.b = this.b + 1;
    console.log(new Date().getTime());
    this.schedule_results = this.realm.objects('schedule').filtered(`month = 1 AND day = ${this.b}`);
    this.bible_results = this.realm.objects('bible_cht');
    const content = this.schedule_results.map(item => {
      return this.bible_results.filtered(`book_nr = ${item.book_id} AND chapter_nr >= ${item.chapter_from} AND chapter_nr <= ${item.chapter_to} AND verse_nr >= ${item.verse_from} AND verse_nr <= ${item.verse_to == 0 ? 200 : item.verse_to}`);
    });
    this.realm.write(() => {
      let charlie = this.realm.create('bible_cht', {
        book_nr: 100,
      });
      // Charlie had an excused absense for the second test and was allowed to skip it
      charlie.book_nr.push(null);
      // And then he didn't do so well on the third test
      charlie.book_nr.push(110);
    });
    console.log(new Date().getTime());
    this.setState({
      content: content,
    });
    console.log(new Date().getTime());
  }
  render() {
    return (
      <View style={{marginTop:20}}>
        <Button onPress={() => this.setContent()} title="set"></Button>
        <Button onPress={() => this.setState({content:[]})} title="clear"></Button>
        {this.state.content.map(item => {
          return item.map((a, i) => <Text key={i} >{a.verse}</Text>);
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
 