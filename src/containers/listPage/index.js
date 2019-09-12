import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import {fetchLessons} from "../../actions"
import {getLessons} from "../../selectors"
import "./listPage.css"

class ListPage extends Component {
    componentDidMount() {
        this.props.fetchLessons()
    }

    renderLesson(lesson, index) {
        return(
            <div className="lesson-block" key={index}>
                <img
                    className="block-img"
                    src={lesson.image}
                    alt={lesson.name}
                />
                <h4>
                    <Link className="lesson-title" to={`/content-page/${lesson.id}`}>
                        {lesson.name}
                    </Link>
                </h4>
                <Link
                    to={`/content-page/${lesson.id}`}
                    className="btn-lesson"
                >
                    Перейти к уроку
                </Link>
            </div>
        )
    }

    render() {
        const {lessons} = this.props
        return (
            <div className="list-page">
                {lessons.map((lesson, index) => this.renderLesson(lesson, index))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lessons: getLessons(state)
})

const mapDispatchToProps = {
    fetchLessons
}

export default connect (mapStateToProps, mapDispatchToProps)(ListPage)