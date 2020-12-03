import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class GHSearch extends Component {
  state = {
    searchValue: "",
    gitHubUsers: [],
  };
  setInputValue(event) {
    this.setState({ searchValue: event.target.value });
  }
  async performSearch(event) {
    let q = this.state.searchValue;
    let response = await axios.get(
      `https://api.github.com/search/users?q=${q}`
    );
    this.setState({ gitHubUsers: response.data.items });
  }
  render() {
    let displayUsers = this.state.gitHubUsers.map((user) => {
      return <li key={user.id}> {user.login}</li>;
    });
    return (
      <>
        <Input
          type="text"
          data-cy="search_input"
          placeholder="Input GH username"
          onChange={(event) => this.setInputValue(event)}
        />
        <Button
          onClick={(event) => this.performSearch(event)}
          data-cy="search_button"
        >
          Search
        </Button>
        <div data-cy="search_results"></div>
        <ul>{displayUsers}</ul>
      </>
    );
  }
}

export default GHSearch;
