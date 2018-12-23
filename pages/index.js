import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

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

export default () => (
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
        <input
          id="suburb-input"
          className="form-control"
          placeholder="Type Suburb"
        />
      </div>
    </div>

    <div id="provinces-list" className="container">
      <h1 id="provinces-heading">Property by provinces</h1>
      <div className="row">
        <div className="col">
          <Link href="">
            <a className="provinceLink">
              <h4>Gauteng</h4>
            </a>
          </Link>
          <Link href="">
            <a className="provinceLink">
              <h4>Western Cape</h4>
            </a>
          </Link>
          <Link href="">
            <a className="provinceLink">
              <h4>KwaZulu Natal</h4>
            </a>
          </Link>
        </div>
        <div className="col">
          <Link href="">
            <a className="provinceLink">
              <h4>North West</h4>
            </a>
          </Link>
          <Link href="">
            <a className="provinceLink">
              <h4>Eastern Cape</h4>
            </a>
          </Link>
          <Link href="">
            <a className="provinceLink">
              <h4>Northern Cape</h4>
            </a>
          </Link>
        </div>
        <div className="col">
          <Link href="">
            <a className="provinceLink">
              <h4>Limpopo</h4>
            </a>
          </Link>
          <Link href="">
            <a className="provinceLink">
              <h4>Mpumalang</h4>
            </a>
          </Link>
          <Link href="">
            <a className="provinceLink">
              <h4>Free State</h4>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
