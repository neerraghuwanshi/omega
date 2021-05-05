import React, { useState } from 'react'

import styles from '../css/Demo1.module.css'


function Demo1() {

    const { container, innerContainer, textContainer, formContainer, heading, para, input, form, button, image, imageContainer } = styles

    const [companySize, setCompanySize] = useState('')
    const [yearlyBudget, setYearlyBudget] = useState('')

    const companySizeChange = (event) => {
        setCompanySize(event.target.value)
    }

    const yearlyBudgetChange = (event) => {
        setYearlyBudget(event.target.value)
    }

    return (
        <section>
            <div className={container}>
                <div className={innerContainer}>
                    <div className={textContainer}>
                        <h2 className={heading}>
                            Build your next landing page in 5 minutes!
                        </h2>
                        <p className={para}>
                            Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
                        </p>
                        <div className={imageContainer}>
                            <img 
                                className={image}
                                src='images/demos/demo1/oval.png'
                                srcSet={
                                    'images/demos/demo1/oval@2x.png 2x, images/demos/demo1/oval@3x.png 3x'
                                }
                                alt='oval'/>
                        </div>
                    </div>

                    <div className={formContainer}>
                        <form 
                            className={form}
                            onSubmit={(event)=>{event.preventDefault()}}>
                            <input 
                                required
                                className={input}
                                type='email'
                                placeholder='Email address'/>
                            <input 
                                required
                                type='text'
                                className={input}
                                placeholder='Company name'/>
                            <select
                                required
                                className={input}
                                value={companySize}
                                onChange={companySizeChange}
                                style={{color: companySize ? '#19191b' : 'grey'}}>
                                <option value='' disabled>Company size</option>
                                <option value="1 - 10">1 - 10</option>
                                <option value="11 - 100">11 - 100</option>
                                <option value="101 - 1000">101 - 1000</option>
                                <option value="1000+">1000+</option>
                            </select>
                            <select 
                                required
                                className={input}
                                value={yearlyBudget}
                                onChange={yearlyBudgetChange}
                                style={{color: yearlyBudget ? '#19191b' : 'grey'}}>
                                <option value='' disabled>Yearly budget</option>
                                <option value="100K - 1M">100K - 1M</option>
                                <option value="1M - 10M">1M - 10M</option>
                                <option value="10M - 100M">10M - 100M</option>
                                <option value="100M+">100M+</option>
                            </select>
                            
                            <button
                                type='submit'
                                className={button}>
                                Get Beta Access
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Demo1