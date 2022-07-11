import React from 'react'
import mainPlans from './MainPlans';

const Main = () => {
    return (
        <main>
            {mainPlans.map((item, index) => {
                return (
                    <section key={index}>
                        <article>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                        <article>
                            <h5>{item.price}</h5>
                        </article>
                        <article>
                            <p>{item.featureA}</p>
                            <p>{item.featureB}</p>
                            <p>{item.featureC}</p>
                            <p>{item.featureD}</p>
                            <p>{item.featureE}</p>
                            <p>{item.featureF}</p>
                            <p>{item.featureG}</p>
                        </article>
                    </section>
                )
            })}
        </main>
    )
}

export default Main