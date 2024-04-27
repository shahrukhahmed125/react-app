import propTypes from 'prop-types';
import Navbar from "./Navbar";

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    aboutText: propTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
};

