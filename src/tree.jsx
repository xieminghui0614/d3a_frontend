import * as echarts from 'echarts';
import { useEffect, useState } from 'react';
import axios from "axios";

function Tree() {

    // const [data, setData] = useState({});


    useEffect(()=>{
        var chartDom = document.getElementById('treess');
        var myChart = echarts.init(chartDom);
        var option;
        myChart.showLoading();
        axios.post("http://127.0.0.1:8080/test/gettree").then(
            (res)=> {
                console.log(res.data.data);
                const data = res.data.data.tree1;
                const data2 = res.data.data.tree2;
                myChart.hideLoading();
                myChart.setOption(
                    (option = {
                        tooltip: {
                            trigger: 'item',
                            triggerOn: 'mousemove'
                        },
                        legend: {
                            top: '2%',
                            left: '3%',
                            orient: 'vertical',
                            data: [
                                {
                                    name: 'tree1',
                                    icon: 'rectangle'
                                },
                                {
                                    name: 'tree2',
                                    icon: 'rectangle'
                                }
                            ],
                            borderColor: '#c23531'
                        },
                        series: [
                            {
                                type: 'tree',
                                name: 'tree1',
                                data: [data],
                                top: '5%',
                                left: '7%',
                                bottom: '2%',
                                right: '60%',
                                symbolSize: 7,
                                label: {
                                    position: 'left',
                                    verticalAlign: 'middle',
                                    align: 'right'
                                },
                                leaves: {
                                    label: {
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left'
                                    }
                                },
                                emphasis: {
                                    focus: 'descendant'
                                },
                                expandAndCollapse: true,
                                animationDuration: 550,
                                animationDurationUpdate: 750
                            }
                            ,
                            {
                                type: 'tree',
                                name: 'tree2',
                                data: [data2],
                                top: '20%',
                                left: '60%',
                                bottom: '22%',
                                right: '18%',
                                symbolSize: 7,
                                label: {
                                    position: 'left',
                                    verticalAlign: 'middle',
                                    align: 'right'
                                },
                                leaves: {
                                    label: {
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left'
                                    }
                                },
                                expandAndCollapse: true,
                                emphasis: {
                                    focus: 'descendant'
                                },
                                animationDuration: 550,
                                animationDurationUpdate: 750
                            }
                        ]
                    })
                );

                option && myChart.setOption(option);

            })
    },[]);

    return (
      <div id="treess" style={{height: "980%"}}>
       11112222
      </div>
    );
  }
  
  export default Tree;