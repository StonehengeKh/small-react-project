import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import {fetchLessonById} from "../../actions"
import {getLessonById} from "../../selectors"
import "./contentPage.css"

class ContentPage extends Component {
    componentDidMount() {
        this.props.fetchLessonById(this.props.match.params.id)
    }

    renderContent() {
        const {lesson} = this.props
        return(
            <div className="lesson">
                <div className="block-text">
                    <h3 className="lesson-title">{lesson.name}</h3>
                </div>
                <div className="block-text img-center">
                    <img
                        className="lesson-img"
                        src={lesson.image}
                        alt={lesson.name}
                    />
                </div>
                <div className="block-text">
                    <p className="lesson-text">{lesson.description}</p>
                </div>
            </div>
        )
    }

    render(){
        const {lesson} = this.props
        return(
            <div className="lesson-page">
                <Link to="/list" className="lesson-btn">
                    Список уроков
                </Link>
                {lesson && this.renderContent()}
                <Link to="/list" className="lesson-btn">
                    Список уроков
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lesson: getLessonById(state, state.lessonPage.id)
    }
}

const mapDispatchToProps = {
    fetchLessonById
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage)