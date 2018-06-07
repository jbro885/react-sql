import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "./Provider";

class Mutation extends Component {
  static propTypes = {
    sql: PropTypes.string.isRequired,
    params: PropTypes.array.isRequired
  };

  static defaultProps = {
    params: []
  };

  handleMutate = (params = this.props.params) => {
    this.props.store.mutate(this.props.sql, params);
  };

  render() {
    return this.props.children(this.handleMutate);
  }
}

export default connect(Mutation);
