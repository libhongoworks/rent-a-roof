import React, { Component } from "react";
import Link from "next/link";

export default class Province extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }
  render(props) {
    return (
      <div className="col-4">
        <Link href="">
          <a className="provinceLink">
            <h5>{this.name}</h5>
          </a>
        </Link>
      </div>
    );
  }
}
