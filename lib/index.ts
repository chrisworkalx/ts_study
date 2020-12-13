// # 非常简单的加法函数
export function add(a:number, b:number) : number {
  return a + b + 123 + 456 + 789;
}

export const a = 123;

export const b = 666;
export const c = '哈喽';

export const demo = '<h1>ggggg</h1>';

console.log(1111, 'nnnnnnn');
export const age = () => 12;
console.log(1111);

const name = 'andy';
export const newName = name;

export const b_name = '我是b分支用于测试git命令学习';

let aName = '我是测试1分支，用于学习git命令';
export const _Ainfo = {
    name: aName
}


export const Rebase_study = {
    'git rebase': '会重新整理一条记录去合并'
}
let str = '我们在学习git rebase 和 git merge之间的真正区别';
export const finalStr = 'git merge 会将时间线全部保留到最后' + str;


// let newRebase_study = '让我们重新学习一下git rebase的真正用法！！';
export const bb = 'ymf_b分支先commit一条记录先, 但是还没有合并';
// let hello = '哈喽';
// const y1 = 107777;


let addNewHTML = '<h1>hdkhsakjdhksahdkshadsa</h1>';
let tag = `
    查看tag   git tag;

    创建分支  git tag -a <tag名称> -m '说明性语言';

    删除本地分支 git tag -d <tag名称>;

    推送到远端仓库  git push origin <tag名称>;
    强制替换，再删除原有
    git tag -f <new-tag> <old-tag>
    git tag -d <old-tag>;

    重要的事情说三遍   git tag 打标签是仓库的映射 如果想操作仓库的话 需要创建分支操作
    git checkout -b <本地分支名> <想要映射的tag名称>;
`;

console.log(tag + addNewHTML);
