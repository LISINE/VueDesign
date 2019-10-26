export default{
    path:'/common',
    component:() =>import('@/views/Common'),
    children : [
        {
            path : 'bigschool',
            component : () => import('@/components/Bigschool')
        },
        {
            path : 'location',
            component : () => import('@/components/Location')
        },
        {
            path : 'rankschool',
            component : () => import('@/components/Rankschool')
        },
        {
            path : 'searchschool',
            component : () => import('@/components/Searchschool')
        }
    ]
}