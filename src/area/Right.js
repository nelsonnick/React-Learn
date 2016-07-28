import StudentInfoTable from "../component/StudentInfoTable.js"
import TeacherInfoTable from "../component/TeacherInfoTable.js"
export default class Left extends React.Component {
    constructor(props){
        super(props);
        this.tables="teacher";
    };
    render() {
        let tableCase;
        if (this.tables === 'teacher'){
            tableCase=<TeacherInfoTable/>;
        }else if (this.tables === 'student'){
            tableCase=<StudentInfoTable/>;
        }else{
            tableCase=<StudentInfoTable/>;
        }
        return (
            <div>
                {tableCase}
            </div>
        )
    }
}