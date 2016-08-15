const fontSize = 14
const fontFamily = 'Roboto, sans-serif'
const backgroundColor = 'rgb(7, 52, 116)'

export default {
  fontSize: {
    fontSize
  },
  fullWidth: {
    float: 'left',
    width: '100%'
  },
  bodyWrapper: {
    padding: '10px 0'
  },
  wrapper: {
    paddingLeft: 24
  },
  inputField: {
    textAlign: 'left'
  },
  footer: {
    padding: '15px 0',
    background: '#f1f1f1',
    color: '#333',
    width: '100%',
    height: '50px',
    textAlign: 'left',
    fontSize: 12
  },
  appbar: {
    backgroundColor,
    height: '60px'
  },
  logo: {
    position: 'relative',
    top: '8px',
    width: '110px'
  },
  employeeProfile: {
    position: 'relative',
    marginLeft: '100px',
    top: '3px',
  },
  root: {
    display: 'inline-block',
    width: '100%',
    padding: '0px',
    textAlign: 'left',
    fontSize: 14
  },
  floatingLabel: {
    color: 'rgb(112, 110, 110)',
    top: '35px',
    width: '180%',
    fontSize
  },
  underlineFocus: {
    borderColor: '#01579b'
  },
  inputStyle: {
    fontSize
  },
  buttonLabelColor: '#FFF',
  buttonLabelStyle: {
    fontSize: 12
  },
  buttonBackgroundColor: backgroundColor,
  formHeader: {
    textAlign: 'left',
    textTransform: 'capitalize',
    fontFamily,
    fontSize: 17,
    color: 'rgb(112, 110, 110)',
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 500
  },
  innerHeader: {
    margin: 0,
    position: 'relative',
    top: 12,
    textAlign: 'center',
    color: '#fff'
  },
  font20: {
    fontSize: 20
  },
  headerBackground: {
    backgroundColor: 'rgb(237, 237, 237)',
  },
  header: {
    backgroundColor: '#706E6E',
    height: 45,
    paddingRight: 5,
    alignItems: 'center'
  },
  dialogTitleStyle: {
    fontSize: 20,
    padding: 10,
    color: 'rgb(112, 110, 110)',
    backgroundColor: '#F2F2F2'
  },
  loginfield: {
    width: '100%'
  },
  buttonWrapper: {
    textAlign: 'right'
  },
  button: {
    marginTop: '20px',
    marginLeft: '40%'
  },
  loginForm: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px'
  },
  tile: {
    wrapper: {
      height: '200px',
      textAlign: 'center',
      color: 'white',
      backgroundColor: '#4776E6'
    },
    header: {
      textTransform: 'uppercase',
      fontSize: 16,
      padding: '10px 0'
    }
  },
  addIcon: {
    width: 36,
    height: 36,
    position: 'absolute',
    top: 105,
    right: 5
  },
  line_item: {
    innerHeader: {
      marginTop: 10
    }
  },
  no_items_message: {
    wrapper: {
      marginTop: 20,
      border: '1px dotted #c1c1c1',
      minHeight: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      color: '#c1c1c1',
      fontSize: 24,
      fontFamily
    }
  }
}
