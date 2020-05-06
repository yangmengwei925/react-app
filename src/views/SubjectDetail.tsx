import React, { useEffect } from 'react';
import HeaderBar from '../components/headerBar';
import { connect } from 'react-redux';
let SubjectDetail: React.FC = (props) => {
  // console.log(props.match.params.id)
  
  return (
    <div>

      
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
 
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectDetail);
