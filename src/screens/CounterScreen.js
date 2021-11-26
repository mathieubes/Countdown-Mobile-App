import React from 'react';

import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import PagerView from 'react-native-pager-view';

export const CounterScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PagerView style={{flex: 1}} initialPage={0} showPageIndicator>
        <View key={0}>
          <Text style={styles.noCounter}>
            Pas de compteur pour le moment ! Page 1
          </Text>
        </View>
        <View key={1}>
          <Text style={styles.noCounter}>
            Pas de compteur pour le moment ! Page 2
          </Text>
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  noCounter: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});
