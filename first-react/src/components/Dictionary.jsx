import React from 'react'

class Dictionary extends React.Component {
    render(){
        const {user} = this.props
        return (
            // <> atau <React.Fragment> sama aja
            <>
                <li>{user.name} - {user.age}</li>
            </>
        )
    }
}

export default Dictionary