import React from "react";
import "./PadComponent.css";

class PadComponent extends React.Component {
  render() {
    return (
      <div className="padComponent">
        <button
          name="("
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          (
        </button>
        <button
          name="CE"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          CE
        </button>
        <button
          name=")"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          )
        </button>
        <button
          style={{ backgroundColor: "#fc0505" }}
          name="C"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          C
        </button>

        <button
          name="1"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          1
        </button>
        <button
          name="2"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          2
        </button>
        <button
          name="3"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          3
        </button>
        <button
          style={{ backgroundColor: "#0c0fe8" }}
          name="+"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          +
        </button>

        <button
          name="4"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          4
        </button>
        <button
          name="5"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          5
        </button>
        <button
          name="6"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          6
        </button>
        <button
          style={{ backgroundColor: "#0ded09" }}
          name="-"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          -
        </button>

        <button
          name="7"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          7
        </button>
        <button
          name="8"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          8
        </button>
        <button
          name="9"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          9
        </button>
        <button
          style={{ backgroundColor: "#f2ee0a" }}
          name="*"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          *
        </button>

        <button
          name="."
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          .
        </button>
        <button
          name="0"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          0
        </button>
        <button
          style={{ backgroundColor: "#a110a1" }}
          name="="
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          =
        </button>
        <button
          style={{ backgroundColor: "#ad05f5" }}
          name="/"
          onClick={(event) => this.props.onClick(event.target.name)}
        >
          /
        </button>
      </div>
    );
  }
}
export default PadComponent;
