const ichiran = [["○","1","der","Vater","[男] 父","",""],
                ["×","2","der","Vater","[男] 父","",""],
                ["○","3","der","Vater","[男] 父","",""],
                ["×","4","der","Vater","[男] 父","",""],
                ["○","5","der","Vater","[男] 父","",""],
                ["×","6","der","Vater","[男] 父","",""],
                ["○","7","der","Vater","[男] 父","",""],
                ["×","8","der","Vater","[男] 父","",""],
                ["○","9","der","Vater","[男] 父","",""],
                ["×","10","der","Vater","[男] 父","",""],
                ["○","11","der","Vater","[男] 父","",""],
                ["×","12","der","Vater","[男] 父","",""],
                ["○","13","der","Vater","[男] 父","",""],
                ["×","14","der","Vater","[男] 父","",""],
                ["○","15","der","Vater","[男] 父","",""],
                ["×","16","der","Vater","[男] 父","",""],
                ["○","17","der","Vater","[男] 父","",""],
                ["×","18","der","Vater","[男] 父","",""],
                ["○","19","der","Vater","[男] 父","",""],
                ["×","20","der","Vater","[男] 父","",""],
                ];

$('#results').DataTable({
    "data": ichiran,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    //"displayLength": Number(10),
    "info": false,
    "paging": false,
    "language": {
       "sEmptyTable": "回答結果を取得できませんでした。",
       "sInfo": "_START_~_END_ / _TOTAL_ 件",
       "sInfoEmpty": "",
       "sZeroRecords": "一致するデータが存在しません。",
       "oPaginate": {
          "sFirst": "<<",
          "sLast": ">>",
          "sNext": ">",
          "sPrevious": "<"
        },
     },
     "columns": [
     {title: "", width:"30px", className:'dt-body-center', render:function(data){return addResultStyle(data);}},
     {title: "ID"},
     {title: "定冠詞"},
     {title: "単語"},
     {title: "意味"},
     {title: "例文"},
     {title: "例文意味"},
     ],
     scrollY: true,
     scrollX: true,
     autowidth: true,
     // 列インデックス1(ID)の昇順でデフォルトソート
     order:[1,"asc"],

});

/**
 * ○,×にstyleを適用する
 * @param {*} data 
 */
 function addResultStyle(data){
    let style = "";
    switch(data){
        case "○":
            style="text-primary";
            break;
        case "×":
            style="text-danger";
            break;
    }
    return `<span class="${style}">${data}</span>`;   
}
