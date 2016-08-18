import React from 'react';
import Blank from '../pages/Blank.js';
import DocInfo from '../pages/DocInfo.js';
import DocChan from '../pages/DocChan.js';
import DocFlow from '../pages/DocFlow.js';
import PerInfo from '../pages/PerInfo.js';
import PerChan from '../pages/PerChan.js';
import DocAnal from '../pages/DocAnal.js';
import PerAnal from '../pages/PerAnal.js';
import OpeAnal from '../pages/OpeAnal.js';
import PasCont from '../pages/PasCont.js';
import DepCont from '../pages/DepCont.js';
import UseCont from '../pages/UseCont.js';
import RolCont from '../pages/RolCont.js';
export default class Right extends React.Component {
  render() {
    let tableCase;
    switch (this.props.menuFunctionType) {
      case 'DocInfo':
        tableCase = <DocInfo />;
        break;
      case 'DocChan':
        tableCase = <DocChan />;
        break;
      case 'DocFlow':
        tableCase = <DocFlow />;
        break;
      case 'PerInfo':
        tableCase = <PerInfo />;
        break;
      case 'PerChan':
        tableCase = <PerChan />;
        break;
      case 'DocAnal':
        tableCase = <DocAnal />;
        break;
      case 'PerAnal':
        tableCase = <PerAnal />;
        break;
      case 'OpeAnal':
        tableCase = <OpeAnal />;
        break;
      case 'PasCont':
        tableCase = <PasCont />;
        break;
      case 'DepCont':
        tableCase = <DepCont />;
        break;
      case 'UseCont':
        tableCase = <UseCont />;
        break;
      case 'RolCont':
        tableCase = <RolCont />;
        break;
      default:
        tableCase = <Blank />;
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
