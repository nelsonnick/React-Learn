import StudentInfoTable from '../component/StudentInfoTable.js';
import TeacherInfoTable from '../component/TeacherInfoTable.js';
import AddPerson from '../component/AddPerson7.js';
import React from 'react';

export default class Right extends React.Component {
  render() {
    let tableCase;
    if (this.props.menuFunctionType === 'teacher') {
      tableCase = <TeacherInfoTable />;
    } else if (this.props.menuFunctionType === 'student') {
      tableCase = <StudentInfoTable />;
    } else {
      tableCase = <AddPerson />;
    }
    return (
      <div>
        {tableCase}
      </div>
    );
  }
}
Right.propTypes = {
  menuFunctionType: React.PropTypes.string,
};
