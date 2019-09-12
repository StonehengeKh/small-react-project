import React, {Component} from "react"
import {connect} from "react-redux"

import {searchLesson} from "../../actions"
import "./search.css"

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.searchLesson(this.state.value)
    }

    render() {
        return(
            <div className="search-field">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        className="search-input"
                        placeholder="Введите, что найти"
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchLesson
}

export default connect(null, mapDispatchToProps)(Search)