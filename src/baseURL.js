let URL = ''
process.env.NODE_ENV === 'development' ? URL = process.env.REACT_APP_DEVELOPMENT_MODE_ENDPOINT : URL = process.env.REACT_APP_PRODUTION_MODE_ENDPOINT;

export default URL;