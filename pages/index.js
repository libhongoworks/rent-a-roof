import React, { Component } from "react";
import Head from "next/head";
import Header from "../components/header";
import Province from "../components/provinces";
import SearchInput from "../components/searchInput";

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
      provinces: [
        { id: 1, name: "Gauteng" },
        { id: 2, name: "Western Cape" },
        { id: 3, name: "KwaZulu Natal" },
        { id: 4, name: "Eastern Cape" },
        { id: 5, name: "Free State" },
        { id: 6, name: "Northern Cape" },
        { id: 7, name: "North West" },
        { id: 8, name: "Mpumalanga" },
        { id: 9, name: "Limpopo" }
      ]
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
