import React from "react";
import axios from "axios";

export default class Palindrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textWord: "",
      isPalindrome: null,
      loading: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ textWord: event.target.value });
  };

  handleValidatePalindrome = async () => {
    this.setState({ loading: true });

    try {
      const { data } = await axios.post(baseUrl + "/validatePalindrome", {
        text: this.state.textWord,
      });

      this.setState({ isPalindrome: data.hasPalindromeWord });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.textWord}
          onChange={this.handleInputChange}
          placeholder="Enter text"
        />
        <button
          onClick={this.handleValidatePalindrome}
          disabled={this.state.loading}
        >
          {this.state.loading ? "Loading..." : "Check Palindrome"}
        </button>
        {this.state.isPalindrome !== null && (
          <p>
            {this.state.isPalindrome
              ? "It is a palindrome!"
              : "It is not a palindrome."}
          </p>
        )}
      </div>
    );
  }
}
