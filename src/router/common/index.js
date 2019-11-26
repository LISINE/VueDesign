export default{
    path:'/common',
    name:'common',
    component:() =>import('@/views/Common'),
    children : [
        {
            path : 'swiper1',
            component : () => import('@/components/Swiper1')
        },
        {
            path : 'location',
            component : () => import('@/components/Location')
        },
        {
            path : 'comments',
            component : () => import('@/components/Comments')
        },
        {
            path : 'gotop',
            component : () => import('@/components/Gotop')
        },
        {
            path : 'thumbnails1',
            component : () => import('@/components/Thumbnails1')
        }
    ]
}