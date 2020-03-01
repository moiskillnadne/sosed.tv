import React from 'react';


const SignUpModal = props => {

  const {
    SignUpModalRef,
    CloseModalFun
  } = props;

  return (
    <div className="default-modal"
         ref = { SignUpModalRef }
         onClick = { CloseModalFun }    >
      <div className="signup-wrap"></div>
    </div>
  )
}

export default SignUpModal;