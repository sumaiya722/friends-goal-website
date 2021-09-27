const tools = [
    {
        name: 'Abdullah',
        key: 'abc',
        role: 'Mechanic Engineer',
        img: 'https://scontent.fdac19-1.fna.fbcdn.net/v/t1.15752-9/186491631_306426531127812_3979824980230637615_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=v0cQmA4F8n4AX9PaaeK&_nc_oc=AQkA4P9BkyStYQDOJRibFGeX1CFsVvAyokkCb19eNSLlqysLN2mo7Y4jqHSkpARVHco&_nc_ht=scontent.fdac19-1.fna&oh=dbe02684c7297464406793483621e64c&oe=6178AF39',
        age: 25,
        country: 'USA',
        salary: 100000
    },
    {
        name: 'Sumaiya',
        role: 'Softwar Engineer',
        key: 'ab',
        img: 'https://scontent.fdac19-1.fna.fbcdn.net/v/t1.6435-9/132447986_2872641643014515_7549249298219796889_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=I2uz5c5LuPQAX_tCHnV&_nc_ht=scontent.fdac19-1.fna&oh=a37018e915dc4af923a17be3fd95188d&oe=61761556',
        age: 22,
        country: 'USA',
        salary: 90000
    },
    {
        name: 'Amir',
        role: 'Businessman',
        key: 'abd',
        img: 'https://scontent.fdac19-1.fna.fbcdn.net/v/t1.6435-9/199515878_486933245895371_5196613875501887846_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=FGgTsu8hah0AX9iMRYL&tn=n7ZoUtQl8cEmjPBv&_nc_ht=scontent.fdac19-1.fna&oh=2004f882add14453918ffd94ef3a7aad&oe=61775E7B',
        age: 23,
        country: 'USA',
        salary: 95000
    },
    {
        name: 'Suprem',
        role: 'IPE Engineer',
        key: 'ac',
        img: 'https://scontent.fdac19-1.fna.fbcdn.net/v/t1.15752-9/242593266_914914392716404_2507747981893205346_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=n24V11OiDDIAX-TZUnT&_nc_ht=scontent.fdac19-1.fna&oh=6ad8626b496a6aabffb143b63d06034d&oe=6177F886',
        age: 23,
        country: 'Canada',
        salary: 80000
    },
    {
        name: 'Pantho',
        role: 'Graphics Designeer',
        key: 'Canada',
        img: 'https://scontent.fdac19-1.fna.fbcdn.net/v/t1.15752-9/242915400_388128342794596_2336299761675294883_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=TBQyw3q636sAX9eVQ7w&_nc_ht=scontent.fdac19-1.fna&oh=5f02760d44db53637459b4a5c8bfa481&oe=61757021',
        age: 23,
        country: 'Canada',
        salary: 85000
    },
    {
        name: 'Mushfiqa',
        role: 'Business women',
        key: 'ade',
        img: 'https://scontent.fdac19-1.fna.fbcdn.net/v/t1.15752-9/242090728_936262180296527_1423149176102266535_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hnL4Xs6gRTcAX8s__na&_nc_ht=scontent.fdac19-1.fna&oh=c4f66a4cfb230042add3d75a4014fc7d&oe=6175C7F6',
        age: 23,
        country: 'Australia',
        salary: 70000
    },
    {
        name: 'Rahat',
        role: 'Market Manager',
        key: 'ef',
        img: 'https://scontent.fdac19-1.fna.fbcdn.net/v/t1.15752-9/242207045_1071379466964698_1898875906987071730_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=eOaPJYflaG8AX_oNXdR&tn=n7ZoUtQl8cEmjPBv&_nc_ht=scontent.fdac19-1.fna&oh=fb5a48018664f9acba26042fcda26479&oe=61776514',
        age: 23,
        country: 'USA',
        salary: 85000
    },
    {
        name: 'Abul',
        role: 'Civil Engineer',
        key: 'efg',
        img: 'https://media.gettyimages.com/photos/smiling-young-construction-worker-standing-in-front-of-a-warehouse-picture-id1180336584?s=2048x2048',
        age: 23,
        country: 'Spain',
        salary: 100000
    },
    {
        name: 'komola',
        role: 'Web developer',
        key: 'ahg',
        img: 'https://media.gettyimages.com/photos/young-female-worker-on-consturction-site-picture-id1030613272?s=2048x2048',
        age: 23,
        country: 'Australia',
        salary: 105000
    },
    {
        name: 'Shizuka',
        role: 'Architecture',
        key: 'vbn',
        img: 'https://media.gettyimages.com/photos/the-ultimate-product-design-professional-picture-id1164941584?s=2048x2048',
        age: 23,
        country: 'USA',
        salary: 150000
    },
    {
        name: 'Babul',
        role: 'Engineer',
        key: 'abk',
        img: 'https://media.gettyimages.com/photos/two-construction-workers-engineers-on-construction-site-agreeing-upon-picture-id658266010?s=2048x2048',
        age: 23,
        country: 'USA',
        salary: 90000
    },
    {
        name: 'Alia',
        role: 'Electrical Engineer',
        key: 'asd',
        img: 'https://media.gettyimages.com/photos/am-responsible-to-this-site-picture-id1269172374?s=2048x2048',
        age: 23,
        country: 'USA',
        salary: 10000
    },
    {
        name: 'Kabul',
        role: 'Merin Engineer',
        key: 'uij',
        img: 'https://media.gettyimages.com/photos/dream-it-and-hell-build-it-picture-id1178738303?s=2048x2048',
        age: 23,
        country: 'USA',
        salary: 79000
    }
]