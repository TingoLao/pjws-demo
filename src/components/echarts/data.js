export const relation = {
    "nodes": [
        {
            name: '侯亮平',
            des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',
            symbolSize: 100,

            category: 0

        }, {
            name: '李达康',
            des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',

            category: 2

        }, {
            name: '祁同伟',
            des: '汉东省公安厅厅长',
            //symbolSize: 100,
            category: 1

        }, {
            name: '陈岩石',
            des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的***人。<br/>对大老虎赵立春，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',

            category: 0

        }, {
            name: '陆亦可',
            des: '汉东省检察院反贪局一处处长',

            category: 0

        }, {
            name: '高育良',
            des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。侯亮平、陈海和祁同伟是其学生。',
            //symbolSize: 100,
            category: 1

        }, {
            name: '沙瑞金',
            des: '汉东省省委书记',

            category: 3
        }, {
            name: '高小琴',
            des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
            ,
            category: 1
        }, {
            name: '高小凤',

            category: 3
        }, {
            name: '赵东来',
            des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',


            category: 0
        }, {
            name: '程度',
            des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长侯亮平的缜密侦查下被绳之于法。',

            category: 1
        }, {
            name: '吴惠芬',
            des: '汉东省省委副书记高育良的妻子，汉东大学明史教授。',


            category: 3
        }, {
            name: '赵瑞龙',
            des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
            category: 1
        }, {
            name: '赵立春',
            des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
            category: 3
        }, {
            name: '陈海',

            category: 0
        }, {
            name: '梁璐',
            des: "汉东省公安厅长祁同伟的妻子，二人关系貌合神离",

            category: 3
        }, {
            name: '刘新建',
            category: 3
        }, {
            name: '欧阳菁',
            category: 3
        }, {
            name: '吴心怡',

            category: 3
        }, {
            name: '蔡成功',
            category: 2
        }, {
            name: '丁义珍',
            category: 2
        }
    ],
    "links": [
        {
            source: '高育良',
            target: '侯亮平',
            name: '师生',
            des: '侯亮平是高育良的得意门生'
        }, {
            source: '高育良',
            target: '祁同伟',
            name: '师生'
        }, {
            source: '赵立春',
            target: '高育良',
            name: "前领导"
        }, {
            source: '赵立春',
            target: '赵瑞龙',
            name: "父子"
        }, {
            source: '赵立春',
            target: '刘新建',
            name: "前部队下属"
        }, {
            source: '李达康',
            target: '赵立春',
            name: "前任秘书"
        }, {
            source: '祁同伟',
            target: '高小琴',
            name: "情人"
        }, {
            source: '陈岩石',
            target: '陈海',
            name: "父子"
        }, {
            source: '陆亦可',
            target: '陈海',
            name: "属下"
        }, {
            source: '沙瑞金',
            target: '陈岩石',
            name: "故人"
        }, {
            source: '祁同伟',
            target: '陈海',
            name: "师哥"
        }, {
            source: '祁同伟',
            target: '侯亮平',
            name: "师哥"
        }, {
            source: '侯亮平',
            target: '陈海',
            name: "同学，生死朋友"
        }, {
            source: '高育良',
            target: '吴惠芬',
            name: "夫妻"
        }, {
            source: '陈海',
            target: '赵东来',
            name: "朋友"
        }, {
            source: '高小琴',
            target: '高小凤',
            name: "双胞胎",
            symbolSize: '1'
        }, {
            source: '赵东来',
            target: '陆亦可',
            name: "爱慕"
        }, {
            source: '祁同伟',
            target: '程度',
            name: "领导"
        }, {
            source: '高育良',
            target: '高小凤',
            name: "情人"
        }, {
            source: '赵瑞龙',
            target: '祁同伟',
            name: "勾结",

        }, {
            source: '李达康',
            target: '赵东来',
            name: "领导"
        }, {
            source: '赵瑞龙',
            target: '程度',
            name: "领导"
        }, {
            source: '沙瑞金',
            target: '李达康',
            name: "领导"
        }, {
            source: '沙瑞金',
            target: '高育良',
            name: "领导"
        }, {
            source: '祁同伟',
            target: '梁璐',
            name: "夫妻"
        }, {
            source: '吴惠芬',
            target: '梁璐',
            name: "朋友"
        }, {
            source: '李达康',
            target: '欧阳菁',
            name: "夫妻"
        }, {
            source: '赵瑞龙',
            target: '刘新建',
            name: "洗钱工具"
        }, {
            source: '赵瑞龙',
            target: '高小琴',
            name: "勾结，腐化",

        }, {
            source: '赵瑞龙',
            target: '高小凤',
            name: "腐化"
        }, {
            source: '吴心怡',
            target: '陆亦可',
            name: "母女"
        }, {
            source: '吴心怡',
            target: '吴惠芬',
            name: "姐妹"
        }, {
            source: '蔡成功',
            target: '侯亮平',
            name: "发小"
        }, {
            source: '蔡成功',
            target: '欧阳菁',
            name: "举报",
            lineStyle: {
                normal: {
                    type: 'dotted',
                    //color: '#000'
                }
            }
        }, {
            source: '欧阳菁',
            target: '刘新建',
            name: "举报",
            lineStyle: {
                normal: {
                    type: 'dotted',
                    //color: '#000'
                }
            }
        }, {
            source: '刘新建',
            target: '赵瑞龙',
            name: "举报",
            lineStyle: {
                normal: {
                    type: 'dotted',
                    //color: '#000'
                }
            }
        }, {
            source: '李达康',
            target: '丁义珍',
            name: "领导"
        }, {
            source: '高小琴',
            target: '丁义珍',
            name: "策划出逃"
        }, {
            source: '祁同伟',
            target: '丁义珍',
            name: "勾结"
        }, {
            source: '赵瑞龙',
            target: '丁义珍',
            name: "勾结"
        }],
    "categories": [
        { "name": '正方' },
        { "name": '反派' },
        { "name": '关键线索人物' },
        { "name": '配角' }

    ]

}

// export const createOption = (showTransfer, showFullScreen, showAddNode) => ({
//     title: {
//         text: "关系网图结果",
//         subtext: "Default layout",
//         top: "bottom",
//         left: "right",
//     },
//     // 悬浮信息
//     tooltip: {
//         show: true,
//         formatter: function (param) {
//             if (param.dataType == "node") {
//                 //console.log(param.data)
//                 return (
//                     "<div>" + param.data.name + "<br/>" + param.data.des + "<div>"
//                 );
//             }
//             //console.log(param);
//             return "<div>" + param.data.name + "</div>"; // 自定义的 DOM 结构
//         },
//         backgroundColor: "#EFEFEF",
//         textStyle: {
//             fontSize: 16,
//         },
//         extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);", // 自定义的 CSS 样式
//     },
//     // 工具栏
//     toolbox: {
//         show: true,
//         feature: {
//             // dataView:{},  //// 数据视图
//             saveAsImage: {
//                 // 保存图片
//                 title: "Save As Image",
//             },
//             restore: {
//                 // 刷新图表
//             },
//             // 自定义全屏展示
//             myFull: {
//                 show: true,
//                 title: "全屏查看",
//                 icon: "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",
//                 onclick: (e) => {
//                     var opts = e.getOption();
//                     // console.log(this);
//                     showFullScreen(opts);
//                 },
//             },
//             // 自定义编辑
//             myEdit: {
//                 show: true,
//                 title: "编辑穿梭框",
//                 icon: "path://M862.709333 116.042667a32 32 0 1 1 45.248 45.248L455.445333 613.813333a32 32 0 1 1-45.258666-45.258666L862.709333 116.053333zM853.333333 448a32 32 0 0 1 64 0v352c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V224c0-64.8 52.533333-117.333333 117.333333-117.333333h341.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v576a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V448z",
//                 onclick: (e) => {
//                     var opts = e.getOption();
//                     showTransfer(opts);
//                 },
//             },
//             // 增加节点功能
//             myAdd: {
//                 show: true,
//                 title: "增加节点",
//                 icon: "M904 64c30.9 0 56 25.1 56 56v784c0 30.9-25.1 56-56 56H120c-30.9 0-56-25.1-56-56V120c0-30.9 25.1-56 56-56h784m0-64H120C53.7 0 0 53.7 0 120v784c0 66.3 53.7 120 120 120h784c66.3 0 120-53.7 120-120V120c0-66.3-53.7-120-120-120z M736 480H288c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32z,M480 288v448c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-17.7-14.3-32-32-32s-32 14.3-32 32z",
//                 onclick: (e) => {
//                     var opts = e.getOption();
//                     showAddNode(opts);
//                     // console.log(opts)
//                 },
//             },
//             // // 删除节点功能
//             // myDelet: {
//             //     show: true,
//             //     title: "删除节点",
//             //     icon: "M834.99804688 142.859375c25.46081543 0 46.14257813 20.6817627 46.14257812 46.14257813v645.99609375c0 25.46081543-20.6817627 46.14257813-46.14257813 46.14257812H189.00195312c-25.46081543 0-46.14257813-20.6817627-46.14257812-46.14257812V189.00195312c0-25.46081543 20.6817627-46.14257813 46.14257813-46.14257812h645.99609375m0-52.734375H189.00195312C134.37243652 90.125 90.125 134.37243652 90.125 189.00195312v645.99609375c0 54.62951661 44.24743653 98.87695313 98.87695313 98.87695313h645.99609375c54.62951661 0 98.87695313-44.24743653 98.87695312-98.87695313V189.00195312c0-54.62951661-44.24743653-98.87695313-98.87695312-98.87695312z,M696.5703125 485.6328125H327.4296875c-14.58435059 0-26.3671875 11.78283692-26.3671875 26.3671875s11.78283692 26.3671875 26.3671875 26.3671875h369.140625c14.58435059 0 26.3671875-11.78283692 26.3671875-26.3671875s-11.78283692-26.3671875-26.3671875-26.3671875z",

//             // }

//         },
//         orient: "vertical", // 垂直布局
//         itemGap: 25,
//         itemSize: 20,
//         iconStyle: {
//             // 工具栏样式
//             shadowOffsetX: 1,
//         },
//         top: "10%",
//     },

//     //控制组件位置
//     //dataZoom:{top: "50%", },

//     legend: [
//         {
//             // selectedMode: 'single',
//             data: relation.categories.map(function (a) {
//                 return a.name;
//             }),
//         },
//     ],
//     // 动画
//     animationDuration: 1500,
//     animationEasingUpdate: "quinticInOut",
//     series: [
//         {
//             name: "关系图标结果",
//             type: "graph",
//             // 关系图引力设定
//             layout: "force",
//             force: {
//                 repulsion: 2500,
//                 edgeLength: [20, 50],
//             },
//             symbolSize: 40,
//             edgeSymbolSize: [40, 10],

//             draggable: true,
//             data: relation.nodes,
//             links: relation.links,
//             categories: relation.categories,
//             roam: true,
//             label: {
//                 position: "inside",
//                 formatter: "{b}",
//             },
//             // 标签覆盖自动隐藏
//             // labelLayout: {
//             //    hideOverlap: true,
//             // },
//             lineStyle: {
//                 color: "source",
//                 curveness: 0.3,
//             },
//             emphasis: {
//                 focus: "adjacency",
//                 lineStyle: {
//                     width: 10,
//                 },
//             },
//             edgeLabel: {
//                 normal: {
//                     show: true,
//                     formatter: function (x) {
//                         return x.data.name;
//                     },
//                     textStyle: {
//                         fontSize: 10,
//                     },
//                 },
//             },

//             // 缩放限制
//             scaleLimit: {
//                 min: 0.4,
//                 max: 2,
//             },
//         },
//     ],
// });