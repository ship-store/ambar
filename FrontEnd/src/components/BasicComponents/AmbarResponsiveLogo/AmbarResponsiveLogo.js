import React from 'react'
import classes from './AmbarResponsiveLogo.scss'
import MediaQuery from 'react-responsive'

export const AmbarResponsiveLogo = ({mode, version}) => (
    <a className={classes.ambarResponsiveLogo} title={`Ambar ${mode.toUpperCase()} ${version}`} href="/" >
        <img alt='Logo'
            src={'owl.svg'} />
    </a>)


AmbarResponsiveLogo.propTypes = {
    mode: React.PropTypes.string.isRequired,
    version: React.PropTypes.string.isRequired
}

export default AmbarResponsiveLogo