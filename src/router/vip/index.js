export default{
    path:'/vip',
    name:'vip',
    component:() =>import('@/views/Vip'),
    children : [
        {
            path : 'login',
            component : () => import('@/components/Login')
        },
        {
            path : 'register',
            component : () => import('@/components/Register')
        }
    ]
}