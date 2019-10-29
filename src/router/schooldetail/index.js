export default{
    path:'/schooldetail',
    component:() =>import('@/views/Schooldetail'),
    children : [
        {
            path : '/',
            component : () => import('@/components/Echart1')
        }
    ]
}