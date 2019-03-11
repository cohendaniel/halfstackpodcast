import React from 'react'
import { Typography } from "@material-ui/core";

const PageHeader = class extends React.Component {

    render() {
        return (
            <Typography style={{
                marginBottom: '80px', 
                textAlign: 'center',
                background: this.props.theme.palette.secondary.main,
                padding: '80px',
                color: 'white'
              }} 
              variant="h2"
            >
                {this.props.title}
            </Typography>
        )
    }
}

export default PageHeader
