import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import EmptyCard from '../EmptyCard'
import classes from './HintCard.scss'

const HintCard = (props) => {
    const { title, description, performSearchByQuery, localization } = props

    const hintText = (<div><p>{localization.searchPage.refineTipsLabel}</p>
        <ul>
            <li><span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('*') }}>
                *
                    </span> - {localization.searchPage.allFilesQueryLabel}
            </li>
            <li><span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('Hydraulic Circuit') }}>
                    Hydraulic Circuit
                    </span> - {localization.searchPage.simpleQueryLabel}
            </li>
            <li><span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('"Hydraulic Circuit"') }}>
                "Hydraulic Circuit"
                    </span> - {localization.searchPage.pharseQueryLabel}
                </li>
            <li><span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('"Hydraulic Circuit"~10') }}>
                "Hydraulic Circuit"~10
                    </span> - {localization.searchPage.pharseQueryWithDistanceLabel}
                </li>
            <li><span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('Hydraulic~3') }}>
                Hydraulic~3
                    </span> - {localization.searchPage.fuzzyQueryLabel}
                </li>
            <li><span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('filename:*.txt') }}>
                filename:*.txt
                    </span> - {localization.searchPage.filenameQueryLabel}                
                </li>
            <li><span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('size>1M') }}>
                size>1M
                    </span> - {localization.searchPage.sizeQueryLabel}
                </li>
            <li><span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('when:today') }}>
                when:today
                    </span> - {localization.searchPage.whenQueryLabel}
                </li>
            <li>
                <span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('author:*') }}>
                    manufacturer:*
                </span> - {localization.searchPage.authorQueryLabel}
            </li>
            <li>
                <span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('brand:*') }}>
                    brand:*
                </span> - {localization.searchPage.authorQueryLabel}
            </li>
            <li>
                <span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('maker:*') }}>
                    maker:*
                </span> - {localization.searchPage.authorQueryLabel}
            </li>
            <li>
                <span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('model:*') }}>
                    model:*
                </span> - {localization.searchPage.authorQueryLabel}
            </li>
            <li>
                <span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('tags:ocr,ui-upload') }}>
                    tags:ocr,ui-upload
                </span> - {localization.searchPage.tagsQueryLabel}
            </li>          
            <li>
                <span className={classes.clickableSpan} onTouchTap={() => { performSearchByQuery('show:removed') }}>
                    show:removed
                </span> - {localization.searchPage.removedQueryLabel}
            </li>
        </ul>
    </div>)

    const emailText = (<p>
        {localization.searchPage.haveQuestionsLabel}&nbsp;<a className={classes.link} href='mailto:ship.store@outlook.com'>{localization.searchPage.dropMessageLabel}</a>
    </p>)

    const textElement = (<div>
        <p style={{ marginTop: 0 }}>{description}</p>
        {hintText}
        {emailText}
    </div>)

    return (
        <EmptyCard
            title={title}
            textElement={textElement} />
    )
}

HintCard.propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.object.isRequired,
    performSearchByQuery: React.PropTypes.func.isRequired,
    localization: React.PropTypes.object.isRequired
}

export default HintCard




