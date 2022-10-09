{

  "web":[
    {
      "type": 1,
      "webPlay": {
        "lineContainerx": "//div[@class=\"stui-vodlist__head\"]",
        "webPlaylines": {
          "epsodeinfox": "//a/text()",
          "epsodeurlx": "//a/@href",
          "linenamex": "//h3/text()"
        }
      },
      "webSearch": {
        "apiurl": "https://libvio.fun/search/-------------.html?wd={query}&submit=",
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
      "webname": "libvio"
    },


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
    }


  ]

}
