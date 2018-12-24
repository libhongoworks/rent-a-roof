import React, { Component } from "react";
import Head from "next/head";
import Header from "../components/header";
import Province from "../components/provinces";
import SearchInput from "../components/searchInput";
import { dbConfig } from "../static/config/db";
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(dbConfig);
  console.log("Firebase initialized");
}

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

const HeadContents = () => (
  <div>
    <title>Rent A Roof</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../static/css/index.css" />
  </div>
);

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      provinces: []
    };
  }
  render() {
    return (
      <div>
        <Head>
          <HeadContents />
        </Head>
        <Header />
        <div id="landing-bg">
          <div id="landing-text">
            <h1 id="landing-heading">A home for everyone</h1>
            <br />
            <br />
            <SearchInput />
          </div>
        </div>

        <div id="provinces-list" className="container">
          <h1 id="provinces-heading">Property by provinces</h1>
          <div className="row">
            {this.state.provinces.map(province => {
              return <Province name={province.name} key={province.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
