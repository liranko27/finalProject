import React from 'react'

function Category({ title, subCategories, sort }) {
    let keys = 0

    return (
        <>
            <h3 className="category_heading">{title}</h3>
            <div className="sub_categories">
                {subCategories.map(sub => {
                    keys++
                    return <p key={keys} onClick={() => { sort(title, sub) }}>{sub}</p>
                })}
            </div>
        </>
    )
}

export default Category