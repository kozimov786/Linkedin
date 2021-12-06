import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { getUserAuth } from './actions';
import { connect } from 'react-redux'

function App() {
  useEffect(() => {
    getUserAuth()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
