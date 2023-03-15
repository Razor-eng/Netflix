import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

    return (
        <>
            <div class="navbar">
                <li class="logo">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='' />
                </li>
                <li class="buttons" onClick={() => setSignIn(true)}>Sign In</li>
            </div>

            <div class="main">
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                        <div class="area">
                            <h1>Unlimited movies, TV <br />shows, and more.</h1>
                            <h3>Watch anywhere. Cancel anytime.</h3>
                            <div class="search">
                                <input type="text" class="box" placeholder="Email" />
                                <span class="try" onClick={() => setSignIn(true)}>
                                    Get Started <i class="fas fa-chevron-right"></i>
                                </span>
                            </div>
                            <h4>Ready to watch? Enter your email to create or access your account</h4>
                        </div>
                    </>
                )}
            </div>

            <div class="container1">
                <div class="text">
                    <h1>Enjoy on your TV.
                    </h1>
                    <p>
                        Watchx on Smart TVs, Playstation, Xbox, <br />
                        Chromecast, Apple TV, Blu-ray players, and<br />
                        more.
                    </p>
                </div>
                <div class="image">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt='' />
                </div>
            </div>

            <div class="container1">
                <div class="image">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png" alt='' />
                </div>
                <div class="text">
                    <h1>Download your shows to watch on the go.
                    </h1>
                    <p>
                        Save your data and watch all your favorites offline.
                    </p>
                </div>
            </div>

            <div class="container1">
                <div class="text">
                    <h1>Watch everywhere.</h1>
                    <p>
                        Stream unlimited movies and TV shows on <br />your phone, tablet, laptop, and TV without paying more.
                    </p>
                </div>
                <div class="image">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt='' />
                </div>
            </div>
            <div class="question">
                <h1>Frequently Asked Questions
                </h1>
                <div class="quest">
                    <div class="textbox">What is Netflix?</div>
                    <i class="las la-plus"></i>
                </div>
                <div class="quest">
                    <div class="textbox">How much does Netflix cost?</div>
                    <i class="las la-plus"></i>
                </div>
                <div class="quest">
                    <div class="textbox">Where can I watch?</div>
                    <i class="las la-plus"></i>
                </div>
                <div class="quest">
                    <div class="textbox">How do I cancel?</div>
                    <i class="las la-plus"></i>
                </div>
                <div class="quest">
                    <div class="textbox">What can I watch on Netflix??</div>
                    <i class="las la-plus"></i>
                </div>
                <div class="quest">
                    <div class="textbox">What is Netflix?</div>
                    <i class="las la-plus"></i>
                </div>
                <div class="search1">
                    <input type="text" class="box1" placeholder="Email" />
                    <span class="try1">
                        Get Started <i class="fas fa-chevron-right"></i>
                    </span>
                </div>
                <h4>Ready to watch? Enter your email to create or access your account
                </h4>
            </div>
        </>
    )
}

export default LoginScreen
