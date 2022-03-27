import { info } from "console";

export default {
    activities: [
        {
            datestamp: '6月11日',
            timeLineList: [
                {
                    categories: '',
                    timestamp: '10:00',
                    info: '郭某与李某在友谊村发生纠纷',
                },
                {
                    categories:'',
                    timestamp:'16:00',
                    info:'李某将郭某打伤'
                }
            ],
        }, {
            datestamp:'2月16日',
            timeLineList:[
                {
                    categories:'',
                    timestamp:'',
                    info:'李某赔偿受害人郭某各项经济损失共计37000元',
                },
                {
                    categories:'',
                    timestamp:'',
                    info:'郭某对被告李某表示谅解'
                }
            ]
        }
    ],
    categories: [
        { "name": '当事人' },
        { "name": '前提事件' },
        { "name": '地点' },
        { "name": '发生事件' }
    ]
}