//import theme from '../ThemeChanger/Themes';

// Navigation bar styles
const styles = () => ({
  root: {
    flexGrow: 1
  },
  active: {
    borderRadius: 100,
    boxShadow: '0 3px 10px 5px rgba(255, 255, 255, 0.1)'
  },
  flex: {
    // Allows next icon/elemend in Navbar to 'float right'
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  alignRight: {
    alignItems: 'right'
  }
});

export default styles;
