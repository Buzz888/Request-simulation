export default {
    render:
        function (createElement) {
            return createElement(
                'Menu',
                {
                    attrs: {
                        "active-name": this.active
                    },
                    style: {
                        overflow: 'auto'
                    }
                },
                this.MenuArray.map((item, index) =>
                    createElement(
                        'MenuGroup',
                        {
                            attrs: {
                                title: item.title
                            },
                        },
                        item.child.map((childitem, chidIndex) =>
                            createElement('MenuItem', {
                                attrs: { name: index * 10 + chidIndex, to: childitem.to }
                            },
                                [
                                    createElement('Icon', { attrs: { type: "md-chatbubbles" } }),
                                    childitem.name
                                ])
                        )
                    )
                )
            )
        },
    props: {
        MenuArray: Array,
        active: Number
    }
}

