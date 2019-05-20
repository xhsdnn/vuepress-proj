module.exports = {
    base: '/', // 默认
    title: '诗词鉴赏',
    description: '诗词鉴赏',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    host: '0.0.0.0', // 默认
    post: 8080, // 默认
    // temp:
    dest: '_site', // 默认
    // locales:
    // shouldPrefetch:
    cache: true, // 默认
    // theme:
    themeConfig: {
        repo: 'https://github.com/xhsdnn',
        // sidebarDepth: 1,
        // displayAllHeaders: true,
        // activeHeaderLinks: false,
        navbar: true,
        locales: {
            '/': {
                nav: [{
                    text: '唐',
                    link: '/tang/'
                }, {
                    text: '宋',
                    link: '/song/'
                }, {
                    text: '更多',
                    link: '/more/'
                }],
                sidebar: {
                    '/tang/': [
                        ['', '简介'], {
                            title: '代表人物',
                            collapsable: false,
                            children: [
                                'libai/',
                                'dufu/',
                                'baijuyi/'
                            ]
                        }
                    ],

                    '/song/': [
                        ['', '简介'], {
                            title: '代表人物',
                            collapsable: false,
                            children: [
                                'sushi/',
                                'liqingzhao/',
                                'fanzhongyan/'
                            ]
                        }
                    ]
                }
            },
            '/en/': {
                nav: [{
                    text: 'Tang',
                    link: '/en/tang/'
                }, {
                    text: 'Song',
                    link: '/en/song/'
                }, {
                    text: 'More',
                    link: '/en/more/'
                }],
                sidebar: {
                    '/en/tang/': [
                        ['', 'Introduction'], {
                            title: 'Representative',
                            collapsable: false,
                            children: [
                                'libai/',
                                'dufu/',
                                'baijuyi/'
                            ]
                        }
                    ],

                    '/en/song/': [
                        ['', 'Introduction'], {
                            title: 'Representative',
                            collapsable: false,
                            children: [
                                'sushi/',
                                'liqingzhao/',
                                'fanzhongyan/'
                            ]
                        }
                    ]
                }
            }
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '诗词鉴赏',
            description: '静态站点 诗词鉴赏'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Appreciation of poetry',
            description: 'Static Site Appreciation of poetry'
        }
    },
    // plugins:
    markdown: {
        lineNumbers: true, // 行号
        // slugify: 
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#'
        },
        externalLinks: {
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        toc: {
            includeLevel: [2, 3]
        },
        plugins: []
        // extendMarkdown:
    },
    editLinkText: '在 GitHub 上编辑此页',
    postcss: {
        plugins: [require('autoprefixer')]
    },
    stylus: {
        preferPathResolver: 'webpack'
    },
    scss: {},
    sass: {
        indentedSyntax: true
    },
    less: {},
    // configureWebpack:
    // chainWebpack:
    evergreen: false, // 默认
}