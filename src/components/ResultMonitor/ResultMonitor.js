import React from "react";
import "./ResultMonitor.css";
class ResultMonitor extends React.Component {
  render() {
    let { result } = this.props;
    return (
      <div className="monitor">
        <p>{result}</p>
      </div>
    );
  }
}
export default ResultMonitor;
