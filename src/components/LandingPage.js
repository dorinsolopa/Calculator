import React from "react";
import PadComponent from "./PadComponent/PadComponent";
import ResultMonitor from "./ResultMonitor/ResultMonitor";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (event) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <ResultMonitor result={this.state.result} />
        <PadComponent onClick={this.onClick} />
      </div>
    );
  }
}
export default LandingPage;
