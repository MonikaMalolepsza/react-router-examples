import React from 'react'

function Quotes() {
    return (
        <div>
            <h1 className="m-5">Quotes</h1>

            <blockquote className="blockquote p-4">
                <p className="mb-0">"It’s not a bug – it’s an undocumented feature."</p>
            </blockquote>
            <blockquote className="blockquote p-4">
                <p className="mb-0">"All software boils down to pure binary. It works or it doesn’t."</p>
            </blockquote>
            <blockquote className="blockquote p-4">
                <p className="mb-0">"A user interface is like a joke. If you have to explain it, it’s not that good."</p>
            </blockquote>
            <blockquote className="blockquote p-4">
                <p className="mb-0">"It works on my machine!"</p>
                <p>¯\_(ツ)_/¯</p>
            </blockquote>
        </div>
    )
}

export default Quotes
