/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = '张三'
// 1.1 获取数据
function getbooksList() {
    $.ajax({
        url: 'http://hmajax.itheima.net/api/books',
        dataType: 'json',
        data: {
            creator
        }
    }).done(function (result) {
        console.log(result)
        const booksList = result.data.data
        console.log(booksList)
    })
}

getbooksList()
