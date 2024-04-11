import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopMenuBar from '@/components/top-menu-bar';

/**
 * Represents the home page of the blog.
 *
 * @component
 */
const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <TopMenuBar />
      <Text style={styles.title}>Welcome to My Blog!</Text>
      <Text style={styles.subtitle}>Check out my latest posts:</Text>
      <View style={styles.postList}>
        <Text style={styles.postItem}>
          <a href="/posts/post1">Post 1</a>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  postList: {
    marginTop: 16,
  },
  postItem: {
    fontSize: 16,
    marginBottom: 8,
    color: 'blue',
  },
});

export default HomePage;
