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
  floatingLabel: {
    color: backgroundColor,
    top: '38px',
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
  line_item: {
    innerHeader: {
      marginTop: 10
    }
  },
  checkBoxStyle: {
    lineitemNotFound: {
      fontSize: 12,
    },
    iconStyle: {
      maxWidth: 15,
    }
  },
  no_items_message: {
    wrapper: {
      marginTop: 20,
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
