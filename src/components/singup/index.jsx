import React, {
  useRef,
} from 'react';

// Components
import SignUpButton from './SignUpButton';
import SignUpModal from './SignUpModal';

const SignUp = props => {

  const {
    CloseModalFun,
    isSignIn,
    setIsSignIn,
  } = props;

  const SignUpModalRef = useRef(null);
  

  const OpenModalFun = e => {
    SignUpModalRef.current.style.display = 'grid';
    setTimeout( () => {
      SignUpModalRef.current.style.opacity = '1';
    }, 200)
  };

  return (
    <>

      <SignUpButton OpenModalFun = { OpenModalFun }/>

      <SignUpModal SignUpModalRef = { SignUpModalRef }
                   CloseModalFun = { CloseModalFun }
                   isSignIn = {isSignIn}
                   setIsSignIn = {setIsSignIn}    />

    </>
  )
}


export default SignUp;