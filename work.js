// 选择文件的input元素
var input = document.getElementById('inputFile');

// 添加事件监听，当用户选择文件后触发
input.addEventListener('change', function (e) {
  var file = e.target.files[0];

  var reader = new FileReader();
  reader.onload = function (e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, { type: 'array' });

    // 假设Excel文件的第一个Sheet是你要处理的数据
    var sheetName = workbook.SheetNames[0];
    var sheet = workbook.Sheets[sheetName];

    // 将Sheet转换成JSON格式
    var jsonData = XLSX.utils.sheet_to_json(sheet);

    // 在控制台打印JSON数据
    console.log(jsonData);
  };
  reader.readAsArrayBuffer(file);
});
