import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../styles/Button'

function Error() {
    return (
        <Wrapper>
            <div className='container'>
                <div>
                    <h2>404</h2>
                    <h3>UH OH! You're lost.</h3>
                    <p>
                        The page you are looking for does not exist.How you got heare is a mystery.But you can click the button below to go back homePage
                    </p>
                    <NavLink to="/">
                        <Button>Go Back to Home</Button>
                    </NavLink>
                </div>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.section`
    .container{
        padding:9rem 0;
        h2{
            font-size:10rem
        }
        h3{
            font-size:10rem
        }
        p{
            margin:2rem 0
        }
    }

`

export default Error