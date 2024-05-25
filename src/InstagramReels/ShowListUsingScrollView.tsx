import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const ShowListUsingScrollView = () => {
  const city = [
    {id: 1, name: 'Indore'},
    {id: 2, name: 'Bangalore'},
    {id: 3, name: 'Jabalpur'},
    {id: 4, name: 'Patna'},
    {id: 5, name: 'bhopal'},
    {id: 6, name: 'delhi'},
    {id: 7, name: 'pune'},
    {id: 8, name: 'nagpur'},
    {id: 9, name: 'rewa'},
    {id: 10, name: 'katni'},
    {id: 11, name: 'sihore'},
  ];

  return (
    <ScrollView>
      {city.map(item => {
        return (
          <Text style={{fontSize: 20, marginBottom: 10}}>{item.name}</Text>
        );
      })}
    </ScrollView>
  );
};

export default ShowListUsingScrollView;
