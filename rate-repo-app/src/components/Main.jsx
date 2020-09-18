import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import RepositoryList from './RepoList';
import AppBar from './AppBar';
import {Route, Switch} from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
  },
  signCon: {
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 100,
    borderRadius: 10
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
    <AppBar />
    <Switch>
      <Route path="/signin">
        <ScrollView>
        <View style={styles.signCon}>
        <SignIn/>
        </View>
        </ScrollView>
      </Route>
      <Route path="/" exact>
        <RepositoryList />
      </Route>
    </Switch>
    </View>
  );
};


export default Main;