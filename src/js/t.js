var rrr = [
  { 'Func': 'Doc',
    'Name': '档案管理',
    'Type': 'file',
    'Stat': true,
    'Data': [
      { 'Func': 'DocInfo', 'Name': '档案信息', 'Stat': true, 'Type': 'bars' },
      { 'Func': 'DocChan', 'Name': '档案变更', 'Stat': true, 'Type': 'book' },
      { 'Func': 'DocFlow', 'Name': '档案流动', 'Stat': true, 'Type': 'mail' },
    ],
  },
  { 'Func': 'Per',
    'Name': '人员管理',
    'Type': 'team',
    'Stat': true,
    'Data': [
      { 'Func': 'PerInfo', 'Name': '人员信息', 'Stat': true, 'Type': 'bars' },
      { 'Func': 'PerChan', 'Name': '信息变更', 'Stat': true, 'Type': 'book' },
    ],
  },
  { 'Func': 'Anal',
    'Name': '统计分析',
    'Type': 'pie-chart',
    'Stat': true,
    'Data': [
      { 'Func': 'DocAnal', 'Name': '档案分析', 'Stat': true, 'Type': 'area-chart' },
      { 'Func': 'PerAnal', 'Name': '人员分析', 'Stat': true, 'Type': 'bar-chart' },
      { 'Func': 'OpeAnal', 'Name': '业务分析', 'Stat': true, 'Type': 'line-chart' },
    ],
  },
  { 'Func': 'Cont',
    'Name': '系统管理',
    'Type': 'setting',
    'Stat': true,
    'Data': [
      { 'Func': 'PasCont', 'Name': '密码管理', 'Stat': true, 'Type': 'ellipsis' },
      { 'Func': 'DepCont', 'Name': '部门管理', 'Stat': true, 'Type': 'laptop' },
      { 'Func': 'UseCont', 'Name': '用户管理', 'Stat': true, 'Type': 'user' },
      { 'Func': 'RolCont', 'Name': '角色管理', 'Stat': true, 'Type': 'solution' },
    ],
  },
];

for (var j = 0; j < rrr.length; j++) {
  if (rrr[j].Stat) {
    console.log(rrr[j].Func, rrr[j].Name);
    for (var i = 0; i < rrr[j].Data.length; i++) {
      if (rrr[j].Data[i].Stat) {
        console.log(rrr[j].Data[i].Func , rrr[j].Data[i].Name);
      }
    }
  }
}