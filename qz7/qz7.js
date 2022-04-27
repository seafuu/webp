var data= [
    {
        stationNo: "C0AD1",
        stationName: "八里",
        recTime: "202204271600",
        rain: 0
    },
    {
        stationNo: "C0AD0",
        stationName: "三芝",
        recTime: "202204271600",
        rain: 0
    },
    {
        stationNo: "C0AD4",
        stationName: "土城",
        recTime: "202204271600",
        rain: 0
    },
    {
        stationNo: "318",
        stationName: "大安福州山",
        recTime: "202204271602",
        rain: 0
    },
    {
        stationNo: "01A17",
        stationName: "坪林",
        recTime: "201911130140",
        rain: 0
    },
    {
        stationNo: "C0AD3",
        stationName: "蘆洲",
        recTime: "202204271600",
        rain: 0
    },]
    $(document).ready(function(){
        $("button").click(function(){
            for(var i=0;i<6;i++){
            $(".a").append("<br>地點:"+data[i].stationName+"("+data[i].stationNo+")"+"</br>");
            $(".a").append("時間:"+data[i].recTime.substring(0,4)+"年"+data[i].recTime.substring(5,6)+"月"+data[i].recTime.substring(7,8)+"號"+data[i].recTime.substring(9,10)+"時"+data[i].recTime.substring(11,12)+"分")
            $(".a").append("即時雨量:"+data[i].rain);
            $(".a").append("<br></br>")
            
            }
        })
    })

    