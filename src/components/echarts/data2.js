export const relation = {
    "nodes": [
        {
            name: '李喜凤',
            des: '女，一直抚养孙子邱杰成',
            category: 3
        },
        {
            name: '戴某某',
            des: '女，28岁，与原告存在离婚纠纷',
            category: 0
        },
        {
            name: '邱杰成',
            des: '男，6岁，2007年5月13日生，一直与奶奶李喜凤生活',
            category: 3
        },
        {
            name: '邱某某',
            des: '男，34岁，与原告存在离婚纠纷',
            category: 1
        },
    ],
    "links": [
        {
            source: '李喜凤',
            target: '戴某某',
            name: '婆婆',
        },
        {
            source: '李喜凤',
            target: '邱杰成',
            name: '奶奶',
        },
        {
            source: '戴某某',
            target: '邱杰成',
            name: '母子',
        },
        {
            source: '戴某某',
            target: '邱某某',
            name: '夫妻',
        },
        {
            source: '邱某某',
            target: '邱杰成',
            name: '父子',
        },
    ],
    "categories": [
        { "name": '起诉方' },
        { "name": '应诉方' },
        { "name": '辩护人' },
        { "name": '相关人' }
    ]
}