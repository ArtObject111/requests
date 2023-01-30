import React from "react";
import RequestsTable from "./RequestsTable";
import {connect} from "react-redux";
class RequestsTableContainer extends React.Component {
    render() {
        return <RequestsTable requests={this.props.requests}/>
    }
}

let mapStateToProps = (state) => ({
    requests: state.requests.requestsData
})

export default connect(mapStateToProps, {})(RequestsTableContainer)