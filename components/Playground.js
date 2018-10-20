import React, { Component } from "react";
import GraphiQL from "graphiql";
import styled from "styled-components";

import "graphiql/graphiql.css";

import FullWidth from "./FullWidth";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  width: 100%;
  .graphiql-container {
    height: 400px;
  }
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const graphQLFetcher = endpoint => graphQLParams => {
  return fetch(endpoint, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
};

export default class Playground extends Component {
  render() {
    return (
      <FullWidth>
        <Wrapper>
          <GraphiQL fetcher={graphQLFetcher(this.props.endpoint)} />
        </Wrapper>
      </FullWidth>
    );
  }
}
