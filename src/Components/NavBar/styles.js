import theme from '../ThemeChanger/Themes';

console.log(theme.palette.primary[50]);
// Navigation bar styles
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  active: {
    borderRadius: 100,
    boxShadow: '0 3px 10px 5px #888888' 
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
