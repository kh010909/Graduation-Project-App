// 取得貼文資料
export const getPostData = async (setPostData: any, setMaxYear: any, period: number, kind: string) => {
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@實際使用 需改變
    setPostData(POSTDATA) // 註解掉
    setMaxYear(5) // 註解掉，下方解註解
    // // 需要回傳 當前最大已完成屆數 和 該period, 該 kind 的 PostData
    // const Url = "http://192.168.0.18:4000/api/data/getPostData";
    // try {
    //     const response = await fetch(Url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 "period": period,
    //                 "kind": kind,
    //             })
    //     }).then(response => response.json())
    //     setMaxYear(response.maxYear)
    //     setPostData(response.data)
    // }
    // catch (error) {
    //     console.error(error)
    // }
}

// 取得評論資料
export const getCommentData = async (setCommentData: any, pid: string) => {
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@實際使用 需改變
    setCommentData(COMMENTDATA) // 註解掉，下方解註解
    // const Url = "http://192.168.0.18:4000/api/data/getCommentData";
    // try {
    //     const response = await fetch(Url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ "pid": pid })
    //     }
    //     );
    //     setCommentData(response);
    // } catch (error) {
    //     console.error(error)
    // }
}

export const POSTDATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', // post id
        name: 'shelter_1022', // author's name
        title: '大大師', // author's title
        description: '這種痛苦還要持續多久', // post's description
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC28lvhB3X_P4cDQ17N2RQvttJRUYagluoPw&s', // author's avatarUrl
        image: true, // whether image or video
        contentUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreBuOexL-mU-nxKgDnvnXQfLFmar1NhcfJg&s', // contentUri
        hearts: 100 // how mant heart does the post get
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be', // post id
        name: 'shelter_1022', // author's name
        title: '大大師', // author's title
        description: '這種痛苦還要持續多久', // post's description
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC28lvhB3X_P4cDQ17N2RQvttJRUYagluoPw&s', // author's avatarUrl
        image: true, // whether image or video
        contentUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreBuOexL-mU-nxKgDnvnXQfLFmar1NhcfJg&s', // contentUri
        hearts: 100 // how mant heart does the post get
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3', // post id
        name: 'shelter_1022', // author's name
        title: '大大師', // author's title
        description: '這種痛苦還要持續多久', // post's description
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC28lvhB3X_P4cDQ17N2RQvttJRUYagluoPw&s', // author's avatarUrl
        image: true, // whether image or video
        contentUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreBuOexL-mU-nxKgDnvnXQfLFmar1NhcfJg&s', // contentUri
        hearts: 100 // how mant heart does the post get
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3', // post id
        name: 'shelter_1022', // author's name
        title: '大大師', // author's title
        description: '這種痛苦還要持續多久', // post's description
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC28lvhB3X_P4cDQ17N2RQvttJRUYagluoPw&s', // author's avatarUrl
        image: true, // whether image or video
        contentUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreBuOexL-mU-nxKgDnvnXQfLFmar1NhcfJg&s', // contentUri
        hearts: 100 // how mant heart does the post get
    },
]
export const COMMENTDATA = [
    {
        id: 1, //coment id
        username: 'Alice', //coment author
        title: '大大師', // author's title
        content: '這是一個很有幫助的帖子，感謝分享！❤️❤️❤️❤️❤️❤️', // comment content
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC28lvhB3X_P4cDQ17N2RQvttJRUYagluoPw&s', //author's avatar url
        timestamp: '2024-07-02T08:30:00Z'// timestamp
    },
    {
        id: 2,
        username: 'eromangasensei_1210',
        title: '大大師', // author's title
        content: '我也遇到過類似的問題，這些建議真的很實用。',
        avatarUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1651094778160293860/28F0B5713A2F4D69F937C017E49E2CD0AE719CE5/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        timestamp: '2024-07-02T09:15:00Z'
    },
    {
        id: 3,
        username: 'Charlie',
        title: '大大師', // author's title
        content: '我有一個疑問，能否解釋一下 useCallback 的具體使用場景？',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC28lvhB3X_P4cDQ17N2RQvttJRUYagluoPw&s',
        timestamp: '2024-07-02T10:05:00Z'
    },
    {
        id: 4,
        username: 'GrayRat',
        title: '師', // author's title
        content: '很詳細的講解，學到了很多，謝謝！',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeUFVL8Duz6mNlimoa_oyELM8wzmggFWrhA&s',
        timestamp: '2024-07-02T10:45:00Z'
    },
    {
        id: 5,
        username: 'Rem',
        title: '大大師', // author's title
        content: '請問這個方法可以在大型項目中使用嗎？',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8CBMt-r2TFvNsYIf01Dd6QjEVkmWPwb-eQ&s',
        timestamp: '2024-07-02T11:30:00Z'
    },
    {
        id: 6,
        username: '三鷹アサ',
        title: '大大師', // author's title
        content: '我只會做正確的事',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnobU2ifAGJ6doWR82Mrt-Cjih4-FKSBF1A&s',
        timestamp: '2024-07-02T12:00:00Z'
    }
];