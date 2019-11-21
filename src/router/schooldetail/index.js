export default{
    path:'/schooldetail',
    component:() =>import('@/views/Schooldetail'),
    children : [
        {
            path : '/echart1',
            component : () => import('@/components/Echart1')
        },{
            path : '/comments',
            component : () => import('@/components/Comments')
        },
        {
            path : 'gotop',
            component : () => import('@/components/Gotop')
        },
        {
            path : 'swiper2',
            component : () => import('@/components/Swiper2')
        },
        {
            path : 'addcomment',
            component : () => import('@/components/Addcomment')
        }
    ]
}