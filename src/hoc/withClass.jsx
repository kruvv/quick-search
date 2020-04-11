import React from 'react'

const withClass = (Componet, className) => {
    return props => {
        return (
            <div className={className}>
                <Componet {...props} />
            </div>
        )
    }
}

export default withClass