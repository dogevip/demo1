{"web":[



    {
      "type": 1,
      "webPlay": {
        "lineContainerx": "//div[@class=\"tab-pane fade in  clearfix\"]",
        "webPlaylines": {
          "epsodeinfox": "//ul/li/a/text()",
          "epsodeurlx": "//ul/li/a/@href",
          "linenamex": "//h3/text()"
        }
      },
      "webSearch": {
        "apiurl": "https://www.txxlcdc.cn/vodsearch/{query}-------------.html",
        "replacement": "{query}"
      },
      "webSearchApiMv": {
        "mvItemContainer": "//ul[@class=\"stui-vodlist clearfix\"]",
        "webSearchApiMvItem": {
          "coverx": "//a[@class=\"stui-vodlist__thumb lazyload\"]/@data-original",
          "playlisturlx": "//a[@class=\"stui-vodlist__thumb lazyload\"]/@href",
          "statusx": "//a[@class=\"stui-vodlist__thumb lazyload\"]/span[2]/text()",
          "titlex": "//a[@class=\"stui-vodlist__thumb lazyload\"]/@title"
        }
      },
      "webname": "txxlcdc"
    },
    
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
	"webname": "fantuan"
},
{
	"type": 1,
	"webPlay": {
		"lineContainerx": "//div[@id=\"panel1\"]",
		"webPlaylines": {
			"epsodeinfox": "//a/span/text()",
			"epsodeurlx": "//a/@href",
			"linenamex": "//h3/text()"
		}
	},
	"webSearch": {
		"apiurl": "https://dsxys.pro/sb/ke7nhZe3c1-.html?wd={query}",
		"replacement": "{query}"
	},
	"webSearchApiMv": {
		"mvItemContainer": "//div[@class=\"module-items module-card-items\"]",
		"webSearchApiMvItem": {
			"coverx": "//img/@data-original",
			"playlisturlx": "//div[@class=\"module-card-item module-item\"]/a/@href",
			"statusx": "//div[@class=\"module-item-note\"]/text()",
			"titlex": "//img/@alt"
		}
	},
	"webname": "dsxysss"
},
{
	"type": 1,
	"webPlay": {
		"lineContainerx": "//div[@id=\"panel1\"]",
		"webPlaylines": {
			"epsodeinfox": "//a/span/text()",
			"epsodeurlx": "//a/@href",
			"linenamex": "//h3/text()"
		}
	},
	"webSearch": {
		"apiurl": "https://www.voflix.com/search/-------------.html?wd={query}",
		"replacement": "{query}"
	},
	"webSearchApiMv": {
		"mvItemContainer": "//div[@class=\"module-items module-card-items\"]",
		"webSearchApiMvItem": {
			"coverx": "//img/@data-original",
			"playlisturlx": "//div[@class=\"module-card-item module-item\"]/a/@href",
			"statusx": "//div[@class=\"module-item-note\"]/text()",
			"titlex": "//img/@alt"
		}
	},
	"webname": "voflix"
},
{
	"type": 1,
	"webPlay": {
		"lineContainerx": "//div[@class=\"tab-content stui-pannel_bd col-pd\"]/div",
		"webPlaylines": {
			"epsodeinfox": "//a/text()",
			"epsodeurlx": "//a/@href",
			"linenamex": "//h3/text()"
		}
	},
	"webSearch": {
		"method":"post",
		"params":"searchword={query}",
		"apiurl": "http://jxjyv.com/search.php",
		"replacement": "{query}"
	},
	"webSearchApiMv": {
		"mvItemContainer": "//ul[@class=\"stui-vodlist__media col-pd clearfix\"]",
		"webSearchApiMvItem": {
			"coverx": "//li/div/a/@data-original",
			"playlisturlx": "//p/a[@class=\"btn btn-min btn-primary\"]/@href",
			"statusx": "//li/div/a/text()",
			"titlex": "//li/div/a/@title"
		}
	},
	"webname": "jxjyv"
}


  ]

}
