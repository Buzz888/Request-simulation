export default {
    render:
        function (createElement) {
            return createElement('Breadcrumb', {
                style: {
                    padding: '10px'
                }
            },
                this.breadcrumb.map(item => createElement('BreadcrumbItem', item.name))
            )
        },
    props: {
        breadcrumb: Array
    }
}