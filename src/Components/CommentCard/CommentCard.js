import React from 'react'

export default function CommentCard({name, comment, likes}) {
    return (
        <div>
             <div className="avatar"></div>


            <div>
                <div>
                    <p>{name}</p>
                    <p>08/09/2021</p>
                </div>

                <div>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}
