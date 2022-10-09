{
"web":[
{
	"type": 1,
	"webPlay": {
		"lineContainerx": "//ul[@class=\"stui-play__list clearfix\"]",
		"webPlaylines": {
			"epsodeinfox": "//ul/li/a/text()",
			"epsodeurlx": "//ul/li/a/@href",
			"linenamex": "//h3/text()"
		}
	},
	"webSearch": {
		"apiurl": "https://www.fantuanhd.com/search/wd/{query}.html",
		"replacement": "{query}"
	},
	"webSearchApiMv": {
		"mvItemContainer": "//div[@class=\"stui-pannel__bd clearfix\"]/ul",
		"webSearchApiMvItem": {
			"coverx": "//a[@class=\"stui-vodlist__thumb lazyload\"]/@data-original",
			"playlisturlx": "//a[@class=\"stui-vodlist__thumb lazyload\"]/@href",
			"statusx": "//a[@class=\"stui-vodlist__thumb lazyload\"]/span[2]/text()",
			"titlex": "//a[@class=\"stui-vodlist__thumb lazyload\"]/@title"
		}
	},
	"webname": "fantuanhd"
},

{
    "type": 1,
    "webPlay": {
        "lineContainerx": "//div[@class=\"stui-pannel-box b playlist mb\"]",
        "webPlaylines": {
            "epsodeinfox": "//ul/li/a/text()",
            "epsodeurlx": "//ul/li/a/@href",
            "linenamex": "//h3/text()"
        }
    },
    "webSearch": {
        "apiurl": "https://172.93.43.218.16clouds.com:4433/vodsearch/-------------.html?wd={query}&submit=",
        "replacement": "{query}"
    },
    "webSearchApiMv": {
        "mvItemContainer": "//ul[@class=\"stui-vodlist__media col-pd clearfix\"]",
        "webSearchApiMvItem": {
            "coverx": "//div[@class=\"thumb\"]/a/@data-original",
            "playlisturlx": "//div[@class=\"detail\"]/p/a[1]/@href",
            "statusx": "//div[@class=\"thumb\"]/a/span[2]/text()",
            "titlex": "//div[@class=\"thumb\"]/a/@title"
        }
    },
    "webname": "ioi"
}
]

}
