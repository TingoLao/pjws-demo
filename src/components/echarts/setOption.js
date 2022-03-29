import { relation } from "./data";

export const createOption = (showTransfer, showFullScreen, showAddNode, deleteNode) => ({
    title: {
        text: "关系网图结果",
        subtext: "Default layout",
        top: "bottom",
        left: "right",
    },
    // 悬浮信息
    tooltip: {
        show: true,
        formatter: function (param) {
            if (param.dataType == "node") {
                //console.log(param.data)
                return (
                    "<div>" + param.data.name + "<br/>" + param.data.des + "<div>"
                );
            }
            //console.log(param);
            return "<div>" + param.data.name + "</div>"; // 自定义的 DOM 结构
        },
        backgroundColor: "#EFEFEF",
        textStyle: {
            fontSize: 16,
        },
        extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);", // 自定义的 CSS 样式
    },
    // 工具栏
    toolbox: {
        show: true,
        feature: {
            // dataView:{},  //// 数据视图
            saveAsImage: {
                // 保存图片
                title: "Save As Image",
            },
            restore: {
                // 刷新图表
            },
            // 自定义全屏展示
            myFull: {
                show: true,
                title: "全屏查看",
                icon: "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",
                onclick: (e) => {
                    var opts = e.getOption();
                    // console.log(this);
                    showFullScreen(opts);
                },
            },

            // 自定义编辑
            myEdit: {
                show: true,
                title: "编辑穿梭框",
                icon: "path://M862.709333 116.042667a32 32 0 1 1 45.248 45.248L455.445333 613.813333a32 32 0 1 1-45.258666-45.258666L862.709333 116.053333zM853.333333 448a32 32 0 0 1 64 0v352c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V224c0-64.8 52.533333-117.333333 117.333333-117.333333h341.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v576a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V448z",
                onclick: (e) => {
                    var opts = e.getOption();
                    showTransfer(opts);
                },
            },

            // 增加节点功能
            myAdd: {
                show: true,
                title: "增加节点",
                icon: "M904 64c30.9 0 56 25.1 56 56v784c0 30.9-25.1 56-56 56H120c-30.9 0-56-25.1-56-56V120c0-30.9 25.1-56 56-56h784m0-64H120C53.7 0 0 53.7 0 120v784c0 66.3 53.7 120 120 120h784c66.3 0 120-53.7 120-120V120c0-66.3-53.7-120-120-120z M736 480H288c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32z,M480 288v448c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-17.7-14.3-32-32-32s-32 14.3-32 32z",
                onclick: (e) => {
                    var opts = e.getOption();
                    // console.log(opts);
                    showAddNode(opts);
                    // console.log(opts)
                },
            },


            // 删除节点功能
            myDelet: {
                show: true,
                title: "删除节点",
                icon: "M834.99804688 142.859375c25.46081543 0 46.14257813 20.6817627 46.14257812 46.14257813v645.99609375c0 25.46081543-20.6817627 46.14257813-46.14257813 46.14257812H189.00195312c-25.46081543 0-46.14257813-20.6817627-46.14257812-46.14257812V189.00195312c0-25.46081543 20.6817627-46.14257813 46.14257813-46.14257812h645.99609375m0-52.734375H189.00195312C134.37243652 90.125 90.125 134.37243652 90.125 189.00195312v645.99609375c0 54.62951661 44.24743653 98.87695313 98.87695313 98.87695313h645.99609375c54.62951661 0 98.87695313-44.24743653 98.87695312-98.87695313V189.00195312c0-54.62951661-44.24743653-98.87695313-98.87695312-98.87695312z,M696.5703125 485.6328125H327.4296875c-14.58435059 0-26.3671875 11.78283692-26.3671875 26.3671875s11.78283692 26.3671875 26.3671875 26.3671875h369.140625c14.58435059 0 26.3671875-11.78283692 26.3671875-26.3671875s-11.78283692-26.3671875-26.3671875-26.3671875z",
                onclick: (e) => {
                    console.log(e.getOption());

                }
            }

        },
        orient: "vertical", // 垂直布局
        itemGap: 25,
        itemSize: 20,
        iconStyle: {
            // 工具栏样式
            shadowOffsetX: 1,
        },
        top: "10%",
    },

    //控制组件位置
    //dataZoom:{top: "50%", },

    legend: [
        {
            // selectedMode: 'single',
            data: relation.categories.map(function (a) {
                return a.name;
            }),
        },
    ],
    // 动画
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
        {
            name: "关系图标结果",
            type: "graph",
            // 关系图引力设定
            layout: "force",
            force: {
                repulsion: 2500,
                edgeLength: [20, 50],
            },

            // 节点大小根据各自的 target和source数量判断
            // 关系越多节点越大
            symbolSize:
                (value, params) => {

                    var node = params.data.name
                    var counter = 0;
                    for (var i = 0; i < relation.links.length; i++) {
                        if (relation.links[i].target == node || relation.links[i].source == node) { counter++ }
                    }
                    params.data.symbolSize = 15 * counter
                    // console.log(params.data)
                    return params.data.symbolSize
                },
            edgeSymbolSize: [40, 10],

            draggable: true,
            data: relation.nodes,
            links: relation.links,
            categories: relation.categories,
            roam: true,
            label: {
                position: "inside",
                formatter: "{b}",
                // show: function (params) {
                //     if (params.data.symbolSize > 80) {
                //         return true
                //     }
                // },
                // fontfamily: 'Yuanti SC'
            },
            // 标签覆盖自动隐藏
            // labelLayout: {
            //    hideOverlap: true,
            // },
            lineStyle: {
                color: "source",
                curveness: 0.3,
            },
            emphasis: {
                focus: "adjacency",
                lineStyle: {
                    width: 10,
                },
            },
            edgeLabel: {
                normal: {
                    show: true,
                    formatter: function (x) {
                        return x.data.name;
                    },
                    textStyle: {
                        fontSize: 10,
                    },
                },
            },

            // 缩放限制
            scaleLimit: {
                min: 0.5,
                max: 2,
            },
        },
    ],
});