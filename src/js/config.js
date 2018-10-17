/**
 * Created by Administrator on 2018/9/20.
 */



export let G = {
    buttonWrapS: false,
    placeholderIndex: null,
    formData: [],
    id: 1,
}


export let borderColor = ["red", "orange", "yellow", "green", "pink", "blue", "black", "gray"]


export let typeText = {
    textbox: {
        lable: "单行输入框：",
        placeholder: "请输入",
    },
    textArea: {
        lable: "多行输入框：",
        placeholder: "请输入",
    },
    radio: {
        lable: "单选框",
        data: '[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]'
    },
    checkBox: {
        lable: "多选框",
        data: '[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3},{text:"选项4",id:4}]'
    },
    combobox: {
        lable: "下拉框",
        data: '[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]'
    },
    date: {
        lable: "日期"
    },
    file: {
        lable: "文件",
    },
    pp: {
        lable: "这是一行文字",
        fontSize: 28,
    },
    lineFeed: {}
}