import React from 'react'

const Nav = () => {
  return (
    <div data-w-id="dd69697e-ea7a-99a5-703b-309a70f7d2ab" data-animation="default" data-collapse="medium"
            data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
            <div className="padding-global is-navbar">
                <div className="container-medium">
                    <div className="navbar_content"><a href="/" aria-current="page"
                            className="navbar_logo-link w-nav-brand w--current" aria-label="home"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/67327310e3d9c343578d06a4_cleanest%20icon.svg"
                                alt="" className="navbar_logo" /></a>
                        <div className="nav_wrap">
                            <nav role="navigation" className="nav_mobile w-nav-menu">
                                <div className="navbar_list"><a href="/services" className="nav_links w-nav-link">Services</a><a
                                        href="/about" className="nav_links w-nav-link">About Us</a><a href="/pricing"
                                        className="nav_links w-nav-link">Pricing</a><a href="/contact"
                                        className="nav_links w-nav-link">Contact</a></div>
                            </nav>
                        </div>
                        <div className="nav_buttons-wrap">
                            <div className="login-wrap hide-mobile-landscape"><a
                                    data-w-id="2eabb143-d8bc-decd-87a7-94771f11cc8c" href="/account/sign-in"
                                    className="button is-secondary w-inline-block">
                                    <div className="button-background is-white-bg"
                                        style={{transform: 'translate3d(0%, 0rem, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}}>
                                    </div>
                                    <div className="text-block">Login</div>
                                </a></div>
                            <div className="menu-button w-nav-button" style={{WebkitUserSelect: 'text'}} aria-label="menu"
                                role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                                aria-expanded="false">
                                <div className="nav-button_component">
                                    <div className="nav-button_line is-first"
                                        style={{transform: 'translate3d(0px, -350%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                                    </div>
                                    <div className="nav-button_line is-second"></div>
                                    <div className="nav-button_line is-third"
                                        style={{transform: 'translate3d(0px, 350%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
        </div>
  )
}

export default Nav