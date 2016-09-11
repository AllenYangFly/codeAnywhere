git add .
git commit -m "new rp"
git push origin


1 git init // 初始化本地代码仓库环境

2 git clone https://github.com/csu803/test.git  // 获取远程代码仓库中 test 这个项目的所有目录

3 git pull  https://github.com/csu803/test.git  // 获取远程代码仓库中与当前工作分支关联的分支的最新代码，并自动与本地工作分支进行合并

4 git fetch https://github.com/csu803/test.git // 获取远程代码仓库中与当前工作分支关联的 分支的最新代码，但不与本地工作分支进行合并

5 git status // 查看本地仓库代码中，当前工作分支的修改情况

6 git remote -v // 查看远程代码仓库

7 git commit -m 'some text' // 将本地工作分支所做的修改，提交到本地代码仓库对应的分支上

8 git add example.txt // 在本地代码仓库中，向正在使用的分支增加一个 example.txt文件

9 git branch // 本地代码仓库，查看本地所有分支

9 git branch  -r // 远程代码仓库，查看远程仓库中的所有分支

10 git branch branch1 // 本地代码仓库 创建一个branch1的分支

11 git checkout branch1 // 本地代码仓库 切换到branch1分支源码

12 git merge shouldbemergedbranch // 本地代码仓库，将shouldbemergedbranch这个分支合并到当前工作代码分支中

13 git push origin localbranch:remotebranch // 将本地代码仓库中的 origin项目的 localbranch分支 提交到远程代码仓库，远程代码仓库对应的分支叫做remotebranch

14 git push origin branch1// 在远程代码仓库中 以本地仓库中当前分支为原本，制作一个叫做branch1的分支。

15 git branch -d bmergedbranch1 // 在本地代码仓库中，删除，已经被别的分支合并过的 bmergedbranch1 分支

16 git branch -D nomergedbranch2// 在本地代码仓库中，删除，未经合并的 nomergedbranch2分支

17 git push origin :remotebranch1//在远程代码仓库中，删除origin项目的 remotebranch1分支