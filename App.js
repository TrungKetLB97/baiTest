import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: '',
      result: '',
    };
  }

  // handlePress(button) {
  //   if (button === '=') {
  //     this.setState({
  //       calculationText: eval(this.state.calculationText),
  //     });
  //   } else if (button === 'C') {
  //     this.setState({
  //       calculationText: '',
  //       resultText: '',
  //     });
  //   } else if (button === 'DEL') {
  //     let text = this.state.calculationText.split('');
  //     text.pop();
  //     this.setState({
  //       calculationText: text.join(''),
  //     });
  //   } else {
  //     const lastChar = this.state.calculationText.slice(-1);
  //     if (this.isOperator(lastChar) && this.isOperator(button)) {
  //       return;
  //     }
  //     this.setState({
  //       calculationText: this.state.calculationText + button,
  //     });
  //   }
  // }

  handlePress = input => {
    if (input === '=') {
      this.calculateResult();
    } else if (input === 'C') {
      this.setState({
        calculation: '',
        result: '',
      });
    } else if (input === '⌫') {
      let text = this.state.calculation.split('');
      text.pop();
      this.setState({
        calculation: text.join(''),
      });
    } else {
      const lastChar = this.state.calculation.slice(-1);
      if (isNaN(input) && isNaN(lastChar)) {
        return;
      }
      this.setState({
        calculation: this.state.calculation + input,
      });
    }
  };

  calculateResult = () => {
    const input = this.state.calculation;
    try {
      const result = eval(input);
      this.setState({
        result: result.toString(),
        calculation: '',
      });
    } catch (error) {
      this.setState({
        result: 'Invalid Calculation',
        calculation: '',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.result}>{this.state.result}</Text>
        <Text style={styles.calculation}>{this.state.calculation}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonClear}
            onPress={() => this.handlePress('C')}>
            <Text style={styles.buttonTextClear}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonClear}
            onPress={() => this.handlePress('%')}>
            <Text style={styles.buttonTextClear}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('⌫')}>
            <Text style={styles.buttonText}>⌫</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => this.handlePress('+')}
          >
            {/* <Text style={styles.buttonText}>+</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#F5F5F5',
  },
  result: {
    fontSize: 60,
    fontWeight: 'bold',
    margin: 10,
  },
  calculation: {
    fontSize: 30,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    margin: 1,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonClear: {
    flex: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    margin: 1,
  },
  buttonTextClear: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});
