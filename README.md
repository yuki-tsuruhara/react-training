# React Training

## 1章でのメモ

### FCとVFC
関数コンポーネントに必要な型
FC：暗黙的にchildrenが渡ってくる
VFC：明示的にchildrenを定義する必要がある
特に書く必要はない

### childrenへの型指定
childrenの型指定は、React.Nodeで指定する

### Context
propsでバケツリレーをしなくても、必要なコンポーネントでデータが参照できる
・親にcreateContext()でコンテキストを作成
・Context.Provider value={text}で渡すものを指定
・受け取る側でContext.Consumerで関数を記述し、受け取る