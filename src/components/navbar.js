import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import Image from 'next/image';
import '../styles/navbar.css';
import BasicMenu from './menu';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobileScreen: false,
        };

        this.handleResize = this.handleResize.bind(this);
        this.handleScrollTop = this.handleScrollTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScrollTop);
        window.addEventListener('resize', this.handleResize);

        // Initial check on mount
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScrollTop);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScrollTop() {
        const navbarContainer = document.querySelector(".navbar-container");
        if (navbarContainer && window.scrollY > 10) {
            navbarContainer.className = "navbar-container scroll";
        } else if (navbarContainer) {
            navbarContainer.className = "navbar-container";
        }
    }

    handleResize() {
        this.setState({
            isMobileScreen: window.innerWidth < 900,
        });
    }

    render() {
        const { isMobileScreen } = this.state;

        return (
            <div className='w-full navbar-box-shadow navbar-container'>
                <div className='w-4/5 flex justify-between mx-auto items-center align-middle py-1 navbar-container-md'>
                    <div className=''>
                        <Image
                            src="/leapadvantagelogo.png"
                            alt="Example Image"
                            width={200}
                            height={100}
                        />
                    </div>
                    {isMobileScreen ? (
                        <BasicMenu />
                    ) : (
                        <button style={{ border: "2px solid rgba(68, 62, 255, 1)" }} className='w-40 h-12 px-4 flex text-center items-center justify-center text-md rounded font-bold button-text-rgba-blue'>
                            For Masters
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default Navbar;
