import React from 'react'
import { Typography } from "@material-ui/core";

const PageHeader = class extends React.Component {

    render() {
        return (
            <Typography style={{
                margin: '80px 0px', 
                textAlign: 'center',
                background: '#bb7a44',
                padding: '100px',
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
