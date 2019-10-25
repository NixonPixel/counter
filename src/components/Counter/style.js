import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  counter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 20px)',
    justifyContent: 'center',
    boxSizing: 'border-box',
    background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
  },
  button: {
    fontSize: '3rem',
    margin: '0 20px',
  },
  buttonGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTop: '2px solid #000',
    paddingTop: 20,
    marginTop: 20,
  },
  changeValue: {
    marginBottom: 20,
    maxWidth: 155,
  },
}));

export default useStyles;
