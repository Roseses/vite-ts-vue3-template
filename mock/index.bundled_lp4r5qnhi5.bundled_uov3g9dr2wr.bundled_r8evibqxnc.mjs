// mock/index.bundled_lp4r5qnhi5.bundled_uov3g9dr2wr.mjs
import Mock from "mockjs";
var mock_default = [
  {
    url: "/api/get-purchase-list",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          "list|1-100": [
            {
              index: /S20201228115950[0-9][0-9][0-9]/,
              pdName: "Macbook",
              pdNum: "p_tmp_60a637cd0d",
              "purchaseNum|1-100": 100,
              adminName: "\u8D22\u52A1\u90E8111",
              updateTime: '2020-05-20@date("HH:mm:ss")',
              pdType: "\u7535\u5B50\u4EA7\u54C1"
            },
            {
              index: /S20201228115950[0-9][0-9][0-9]/,
              pdName: "Macbook",
              pdNum: "p_tmp_60a637cd0d",
              "purchaseNum|1-100": 100,
              adminName: "\u8D22\u52A1\u90E8",
              updateTime: '2020-05-20@date("HH:mm:ss")'
            }
          ]
        })
      }
    })
  },
  {
    url: "/api/get-list",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          "list|1-100": [
            {
              "index|+1": 1,
              "status|1": "@natural(0, 4)",
              no: "BH00@natural(01, 100)",
              name: "@city()\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE",
              "paymentType|1": "@natural(0, 1)",
              "contractType|1": "@natural(0, 2)",
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              amount: "@natural(10, 500),000,000",
              adminName: "@cname()"
            }
          ]
        })
      }
    })
  },
  {
    url: "/api/detail-basic",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          name: "td_20023747",
          loginType: "Web",
          currentRole: "Admin",
          rightsList: "\u901A\u7528\u6743\u9650",
          userStatus: "\u542F\u7528",
          language: "\u7B80\u4F53\u4E2D\u6587",
          timeZone: "(GMT+08:00)\u4E2D\u56FD\u65F6\u533A\u2014\u5317\u4EAC\uFF08Asia/Beijing\uFF09"
        })
      }
    })
  },
  {
    url: "/api/get-card-list",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          "list|48-50": [
            {
              "index|+1": 1,
              isSetup: "@boolean",
              "type|1": "@natural(1, 5)",
              "banner|1": [
                "https://tdesign.gtimg.com/starter/cloud-db.jpg",
                "https://tdesign.gtimg.com/starter/cloud-server.jpg",
                "https://tdesign.gtimg.com/starter/ssl.jpg",
                "https://tdesign.gtimg.com/starter/t-sec.jpg",
                "https://tdesign.gtimg.com/starter/face-recognition.jpg"
              ],
              "name|1": ["\u4EBA\u8138\u8BC6\u522B", "SSL\u8BC1\u4E66", "CVM", "\u4E91\u6570\u636E\u5E93", "T-Sec \u4E91\u9632\u706B\u5899"],
              "description|1": [
                "\u57FA\u4E8E\u817E\u8BAF\u4F18\u56FE\u5F3A\u5927\u7684\u9762\u90E8\u5206\u6790\u6280\u672F\uFF0C\u63D0\u4F9B\u5305\u62EC\u4EBA\u8138\u68C0\u6D4B\u4E0E\u5206\u6790\u3001\u4E94\u5B98\u5B9A\u4F4D\u3001\u4EBA\u8138\u641C\u7D22\u3001\u4EBA\u8138\u6BD4\u5BF9\u3001\u4EBA\u8138",
                "\u4E91\u786C\u76D8\u4E3A\u60A8\u63D0\u4F9B\u7528\u4E8ECVM\u7684\u6301\u4E45\u6027\u6570\u636E\u5757\u7EA7\u5B58\u50A8\u670D\u52A1\u3002\u4E91\u786C\u76D8\u4E2D\u7684\u6570\u636E\u81EA\u52A8\u5730\u53EF\u7528\u533A\u5185\u4EE5\u591A\u526F\u672C\u5197",
                "SSL\u8BC1\u4E66\u53C8\u53EB\u670D\u52A1\u5668\u8BC1\u4E66\uFF0C\u817E\u8BAF\u4E91\u4E3A\u60A8\u63D0\u4F9B\u8BC1\u4E66\u7684\u4E00\u7AD9\u5F0F\u670D\u52A1\uFF0C\u5305\u62EC\u514D\u8D39\u3001\u4ED8\u8D39\u8BC1\u4E66\u7684\u7533\u8BF7\u3001\u7BA1\u7406\u53CA\u90E8",
                "\u817E\u8BAF\u5B89\u5168\u4E91\u9632\u706B\u5899\u4EA7\u54C1\uFF0C\u662F\u817E\u8BAF\u4E91\u5B89\u5168\u56E2\u961F\u7ED3\u5408\u4E91\u539F\u751F\u7684\u4F18\u52BF\uFF0C\u81EA\u4E3B\u7814\u53D1\u7684SaaS\u5316\u9632\u706B\u5899\u4EA7\u54C1\uFF0C\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2",
                "\u4E91\u6570\u636E\u5E93MySQL\u4E3A\u7528\u6237\u63D0\u4F9B\u5B89\u5168\u53EF\u9760\uFF0C\u6027\u80FD\u5353\u8D8A\u3001\u6613\u4E8E\u7EF4\u62A4\u7684\u4F01\u4E1A\u7EA7\u4E91\u6570\u636E\u5E93\u670D\u52A1\u3002"
              ]
            }
          ]
        })
      }
    })
  },
  {
    url: "/api/get-project-list",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          "list|1-50": [
            {
              "index|+1": 1,
              adminPhone: "+86 13587609955",
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              "adminName|1": ["\u987E\u5A1F	", "\u5E38\u521A", "\u90D1\u6D0B"],
              "name|1": [
                "\u6CA7\u5DDE\u5E02\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE",
                "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE	",
                "\u94DC\u5DDD\u5E02\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE",
                "\u9647\u5357\u5E02\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE	",
                "\u516D\u5B89\u5E02\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE	 "
              ]
            }
          ]
        })
      }
    })
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2e3,
    response: {
      code: 0,
      data: {
        name: "vben"
      }
    }
  }
];
export {
  mock_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcc3R1ZHlcXFxcXHU2NUIwXHU1RUZBXHU2NTg3XHU0RUY2XHU1OTM5XFxcXGRlbW9cXFxcdml0ZS12dWUtdHMtc2VlZFxcXFxtb2NrXFxcXGluZGV4LnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXHN0dWR5XFxcXFx1NjVCMFx1NUVGQVx1NjU4N1x1NEVGNlx1NTkzOVxcXFxkZW1vXFxcXHZpdGUtdnVlLXRzLXNlZWRcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRDovc3R1ZHkvJUU2JTk2JUIwJUU1JUJCJUJBJUU2JTk2JTg3JUU0JUJCJUI2JUU1JUE0JUI5L2RlbW8vdml0ZS12dWUtdHMtc2VlZC9tb2NrL2luZGV4LnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xuaW1wb3J0IE1vY2sgZnJvbSAnbW9ja2pzJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdXJsOiAnL2FwaS9nZXQtcHVyY2hhc2UtbGlzdCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKCkgPT4gKHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLk1vY2subW9jayh7XG4gICAgICAgICAgJ2xpc3R8MS0xMDAnOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGluZGV4OiAvUzIwMjAxMjI4MTE1OTUwWzAtOV1bMC05XVswLTldLyxcbiAgICAgICAgICAgICAgcGROYW1lOiAnTWFjYm9vaycsXG4gICAgICAgICAgICAgIHBkTnVtOiAncF90bXBfNjBhNjM3Y2QwZCcsXG4gICAgICAgICAgICAgICdwdXJjaGFzZU51bXwxLTEwMCc6IDEwMCxcbiAgICAgICAgICAgICAgYWRtaW5OYW1lOiAnXHU4RDIyXHU1MkExXHU5MEU4MTExJyxcbiAgICAgICAgICAgICAgdXBkYXRlVGltZTogJzIwMjAtMDUtMjBAZGF0ZShcIkhIOm1tOnNzXCIpJyxcbiAgICAgICAgICAgICAgcGRUeXBlOiAnXHU3NTM1XHU1QjUwXHU0RUE3XHU1NEMxJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGluZGV4OiAvUzIwMjAxMjI4MTE1OTUwWzAtOV1bMC05XVswLTldLyxcbiAgICAgICAgICAgICAgcGROYW1lOiAnTWFjYm9vaycsXG4gICAgICAgICAgICAgIHBkTnVtOiAncF90bXBfNjBhNjM3Y2QwZCcsXG4gICAgICAgICAgICAgICdwdXJjaGFzZU51bXwxLTEwMCc6IDEwMCxcbiAgICAgICAgICAgICAgYWRtaW5OYW1lOiAnXHU4RDIyXHU1MkExXHU5MEU4JyxcbiAgICAgICAgICAgICAgdXBkYXRlVGltZTogJzIwMjAtMDUtMjBAZGF0ZShcIkhIOm1tOnNzXCIpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgdXJsOiAnL2FwaS9nZXQtbGlzdCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKCkgPT4gKHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLk1vY2subW9jayh7XG4gICAgICAgICAgJ2xpc3R8MS0xMDAnOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpbmRleHwrMSc6IDEsXG4gICAgICAgICAgICAgICdzdGF0dXN8MSc6ICdAbmF0dXJhbCgwLCA0KScsXG4gICAgICAgICAgICAgIG5vOiAnQkgwMEBuYXR1cmFsKDAxLCAxMDApJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0BjaXR5KClcdTUyOUVcdTUxNkNcdTc1MjhcdTU0QzFcdTkxQzdcdThEMkRcdTk4NzlcdTc2RUUnLFxuICAgICAgICAgICAgICAncGF5bWVudFR5cGV8MSc6ICdAbmF0dXJhbCgwLCAxKScsXG4gICAgICAgICAgICAgICdjb250cmFjdFR5cGV8MSc6ICdAbmF0dXJhbCgwLCAyKScsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIwLTA1LTMwIEBkYXRlKFwiSEg6bW06c3NcIiknLFxuICAgICAgICAgICAgICBhbW91bnQ6ICdAbmF0dXJhbCgxMCwgNTAwKSwwMDAsMDAwJyxcbiAgICAgICAgICAgICAgYWRtaW5OYW1lOiAnQGNuYW1lKCknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICB1cmw6ICcvYXBpL2RldGFpbC1iYXNpYycsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKCkgPT4gKHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLk1vY2subW9jayh7XG4gICAgICAgICAgbmFtZTogJ3RkXzIwMDIzNzQ3JyxcbiAgICAgICAgICBsb2dpblR5cGU6ICdXZWInLFxuICAgICAgICAgIGN1cnJlbnRSb2xlOiAnQWRtaW4nLFxuICAgICAgICAgIHJpZ2h0c0xpc3Q6ICdcdTkwMUFcdTc1MjhcdTY3NDNcdTk2NTAnLFxuICAgICAgICAgIHVzZXJTdGF0dXM6ICdcdTU0MkZcdTc1MjgnLFxuICAgICAgICAgIGxhbmd1YWdlOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAgICAgICB0aW1lWm9uZTogJyhHTVQrMDg6MDApXHU0RTJEXHU1NkZEXHU2NUY2XHU1MzNBXHUyMDE0XHU1MzE3XHU0RUFDXHVGRjA4QXNpYS9CZWlqaW5nXHVGRjA5JyxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgdXJsOiAnL2FwaS9nZXQtY2FyZC1saXN0JyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiAoe1xuICAgICAgY29kZTogMCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uTW9jay5tb2NrKHtcbiAgICAgICAgICAnbGlzdHw0OC01MCc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2luZGV4fCsxJzogMSxcbiAgICAgICAgICAgICAgaXNTZXR1cDogJ0Bib29sZWFuJyxcbiAgICAgICAgICAgICAgJ3R5cGV8MSc6ICdAbmF0dXJhbCgxLCA1KScsXG4gICAgICAgICAgICAgICdiYW5uZXJ8MSc6IFtcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly90ZGVzaWduLmd0aW1nLmNvbS9zdGFydGVyL2Nsb3VkLWRiLmpwZycsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGRlc2lnbi5ndGltZy5jb20vc3RhcnRlci9jbG91ZC1zZXJ2ZXIuanBnJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly90ZGVzaWduLmd0aW1nLmNvbS9zdGFydGVyL3NzbC5qcGcnLFxuICAgICAgICAgICAgICAgICdodHRwczovL3RkZXNpZ24uZ3RpbWcuY29tL3N0YXJ0ZXIvdC1zZWMuanBnJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly90ZGVzaWduLmd0aW1nLmNvbS9zdGFydGVyL2ZhY2UtcmVjb2duaXRpb24uanBnJyxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgJ25hbWV8MSc6IFsnXHU0RUJBXHU4MTM4XHU4QkM2XHU1MjJCJywgJ1NTTFx1OEJDMVx1NEU2NicsICdDVk0nLCAnXHU0RTkxXHU2NTcwXHU2MzZFXHU1RTkzJywgJ1QtU2VjIFx1NEU5MVx1OTYzMlx1NzA2Qlx1NTg5OSddLFxuICAgICAgICAgICAgICAnZGVzY3JpcHRpb258MSc6IFtcbiAgICAgICAgICAgICAgICAnXHU1N0ZBXHU0RThFXHU4MTdFXHU4QkFGXHU0RjE4XHU1NkZFXHU1RjNBXHU1OTI3XHU3Njg0XHU5NzYyXHU5MEU4XHU1MjA2XHU2NzkwXHU2MjgwXHU2NzJGXHVGRjBDXHU2M0QwXHU0RjlCXHU1MzA1XHU2MkVDXHU0RUJBXHU4MTM4XHU2OEMwXHU2RDRCXHU0RTBFXHU1MjA2XHU2NzkwXHUzMDAxXHU0RTk0XHU1Qjk4XHU1QjlBXHU0RjREXHUzMDAxXHU0RUJBXHU4MTM4XHU2NDFDXHU3RDIyXHUzMDAxXHU0RUJBXHU4MTM4XHU2QkQ0XHU1QkY5XHUzMDAxXHU0RUJBXHU4MTM4JyxcbiAgICAgICAgICAgICAgICAnXHU0RTkxXHU3ODZDXHU3NkQ4XHU0RTNBXHU2MEE4XHU2M0QwXHU0RjlCXHU3NTI4XHU0RThFQ1ZNXHU3Njg0XHU2MzAxXHU0RTQ1XHU2MDI3XHU2NTcwXHU2MzZFXHU1NzU3XHU3RUE3XHU1QjU4XHU1MEE4XHU2NzBEXHU1MkExXHUzMDAyXHU0RTkxXHU3ODZDXHU3NkQ4XHU0RTJEXHU3Njg0XHU2NTcwXHU2MzZFXHU4MUVBXHU1MkE4XHU1NzMwXHU1M0VGXHU3NTI4XHU1MzNBXHU1MTg1XHU0RUU1XHU1OTFBXHU1MjZGXHU2NzJDXHU1MTk3JyxcbiAgICAgICAgICAgICAgICAnU1NMXHU4QkMxXHU0RTY2XHU1M0M4XHU1M0VCXHU2NzBEXHU1MkExXHU1NjY4XHU4QkMxXHU0RTY2XHVGRjBDXHU4MTdFXHU4QkFGXHU0RTkxXHU0RTNBXHU2MEE4XHU2M0QwXHU0RjlCXHU4QkMxXHU0RTY2XHU3Njg0XHU0RTAwXHU3QUQ5XHU1RjBGXHU2NzBEXHU1MkExXHVGRjBDXHU1MzA1XHU2MkVDXHU1MTREXHU4RDM5XHUzMDAxXHU0RUQ4XHU4RDM5XHU4QkMxXHU0RTY2XHU3Njg0XHU3NTMzXHU4QkY3XHUzMDAxXHU3QkExXHU3NDA2XHU1M0NBXHU5MEU4JyxcbiAgICAgICAgICAgICAgICAnXHU4MTdFXHU4QkFGXHU1Qjg5XHU1MTY4XHU0RTkxXHU5NjMyXHU3MDZCXHU1ODk5XHU0RUE3XHU1NEMxXHVGRjBDXHU2NjJGXHU4MTdFXHU4QkFGXHU0RTkxXHU1Qjg5XHU1MTY4XHU1NkUyXHU5NjFGXHU3RUQzXHU1NDA4XHU0RTkxXHU1MzlGXHU3NTFGXHU3Njg0XHU0RjE4XHU1MkJGXHVGRjBDXHU4MUVBXHU0RTNCXHU3ODE0XHU1M0QxXHU3Njg0U2FhU1x1NTMxNlx1OTYzMlx1NzA2Qlx1NTg5OVx1NEVBN1x1NTRDMVx1RkYwQ1x1NjVFMFx1OTcwMFx1NUJBMlx1NjVFMFx1OTcwMFx1NUJBMlx1NjVFMFx1OTcwMFx1NUJBMlx1NjVFMFx1OTcwMFx1NUJBMlx1NjVFMFx1OTcwMFx1NUJBMlx1NjVFMFx1OTcwMFx1NUJBMlx1NjVFMFx1OTcwMFx1NUJBMicsXG4gICAgICAgICAgICAgICAgJ1x1NEU5MVx1NjU3MFx1NjM2RVx1NUU5M015U1FMXHU0RTNBXHU3NTI4XHU2MjM3XHU2M0QwXHU0RjlCXHU1Qjg5XHU1MTY4XHU1M0VGXHU5NzYwXHVGRjBDXHU2MDI3XHU4MEZEXHU1MzUzXHU4RDhBXHUzMDAxXHU2NjEzXHU0RThFXHU3RUY0XHU2MkE0XHU3Njg0XHU0RjAxXHU0RTFBXHU3RUE3XHU0RTkxXHU2NTcwXHU2MzZFXHU1RTkzXHU2NzBEXHU1MkExXHUzMDAyJyxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgdXJsOiAnL2FwaS9nZXQtcHJvamVjdC1saXN0JyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiAoe1xuICAgICAgY29kZTogMCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uTW9jay5tb2NrKHtcbiAgICAgICAgICAnbGlzdHwxLTUwJzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaW5kZXh8KzEnOiAxLFxuICAgICAgICAgICAgICBhZG1pblBob25lOiAnKzg2IDEzNTg3NjA5OTU1JyxcbiAgICAgICAgICAgICAgdXBkYXRlVGltZTogJzIwMjAtMDUtMzAgQGRhdGUoXCJISDptbTpzc1wiKScsXG4gICAgICAgICAgICAgICdhZG1pbk5hbWV8MSc6IFsnXHU5ODdFXHU1QTFGXHQnLCAnXHU1RTM4XHU1MjFBJywgJ1x1OTBEMVx1NkQwQiddLFxuICAgICAgICAgICAgICAnbmFtZXwxJzogW1xuICAgICAgICAgICAgICAgICdcdTZDQTdcdTVEREVcdTVFMDJcdTUyOUVcdTUxNkNcdTc1MjhcdTU0QzFcdTkxQzdcdThEMkRcdTk4NzlcdTc2RUUnLFxuICAgICAgICAgICAgICAgICdcdTdFQTJcdTZDQjNcdTU0QzhcdTVDM0NcdTY1Q0ZcdTVGNURcdTY1Q0ZcdTgxRUFcdTZDQkJcdTVEREVcdTUyOUVcdTUxNkNcdTc1MjhcdTU0QzFcdTkxQzdcdThEMkRcdTk4NzlcdTc2RUVcdCcsXG4gICAgICAgICAgICAgICAgJ1x1OTREQ1x1NURERFx1NUUwMlx1NTI5RVx1NTE2Q1x1NzUyOFx1NTRDMVx1OTFDN1x1OEQyRFx1OTg3OVx1NzZFRScsXG4gICAgICAgICAgICAgICAgJ1x1OTY0N1x1NTM1N1x1NUUwMlx1NTI5RVx1NTE2Q1x1NzUyOFx1NTRDMVx1OTFDN1x1OEQyRFx1OTg3OVx1NzZFRVx0JyxcbiAgICAgICAgICAgICAgICAnXHU1MTZEXHU1Qjg5XHU1RTAyXHU1MjlFXHU1MTZDXHU3NTI4XHU1NEMxXHU5MUM3XHU4RDJEXHU5ODc5XHU3NkVFXHQgJyxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgdXJsOiAnL2FwaS9wb3N0JyxcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB0aW1lb3V0OiAyMDAwLFxuICAgIHJlc3BvbnNlOiB7XG4gICAgICBjb2RlOiAwLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiAndmJlbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5dIGFzIE1vY2tNZXRob2RbXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxPQUFPLFVBQVU7QUFFakIsSUFBTyxlQUFRO0VBQ2I7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsT0FBTztNQUNmLE1BQU07TUFDTixNQUFNO1FBQ0osR0FBRyxLQUFLLEtBQUs7VUFDWCxjQUFjO1lBQ1o7Y0FDRSxPQUFPO2NBQ1AsUUFBUTtjQUNSLE9BQU87Y0FDUCxxQkFBcUI7Y0FDckIsV0FBVztjQUNYLFlBQVk7Y0FDWixRQUFRO1lBQ1Y7WUFDQTtjQUNFLE9BQU87Y0FDUCxRQUFRO2NBQ1IsT0FBTztjQUNQLHFCQUFxQjtjQUNyQixXQUFXO2NBQ1gsWUFBWTtZQUNkO1VBQ0Y7UUFDRixDQUFDO01BQ0g7SUFDRjtFQUNGO0VBQ0E7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsT0FBTztNQUNmLE1BQU07TUFDTixNQUFNO1FBQ0osR0FBRyxLQUFLLEtBQUs7VUFDWCxjQUFjO1lBQ1o7Y0FDRSxZQUFZO2NBQ1osWUFBWTtjQUNaLElBQUk7Y0FDSixNQUFNO2NBQ04saUJBQWlCO2NBQ2pCLGtCQUFrQjtjQUNsQixZQUFZO2NBQ1osUUFBUTtjQUNSLFdBQVc7WUFDYjtVQUNGO1FBQ0YsQ0FBQztNQUNIO0lBQ0Y7RUFDRjtFQUNBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLE9BQU87TUFDZixNQUFNO01BQ04sTUFBTTtRQUNKLEdBQUcsS0FBSyxLQUFLO1VBQ1gsTUFBTTtVQUNOLFdBQVc7VUFDWCxhQUFhO1VBQ2IsWUFBWTtVQUNaLFlBQVk7VUFDWixVQUFVO1VBQ1YsVUFBVTtRQUNaLENBQUM7TUFDSDtJQUNGO0VBQ0Y7RUFDQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxPQUFPO01BQ2YsTUFBTTtNQUNOLE1BQU07UUFDSixHQUFHLEtBQUssS0FBSztVQUNYLGNBQWM7WUFDWjtjQUNFLFlBQVk7Y0FDWixTQUFTO2NBQ1QsVUFBVTtjQUNWLFlBQVk7Z0JBQ1Y7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Y0FDRjtjQUNBLFVBQVUsQ0FBQyw0QkFBUSxtQkFBUyxPQUFPLDRCQUFRLGdDQUFZO2NBQ3ZELGlCQUFpQjtnQkFDZjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtjQUNGO1lBQ0Y7VUFDRjtRQUNGLENBQUM7TUFDSDtJQUNGO0VBQ0Y7RUFDQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxPQUFPO01BQ2YsTUFBTTtNQUNOLE1BQU07UUFDSixHQUFHLEtBQUssS0FBSztVQUNYLGFBQWE7WUFDWDtjQUNFLFlBQVk7Y0FDWixZQUFZO2NBQ1osWUFBWTtjQUNaLGVBQWUsQ0FBQyxpQkFBTyxnQkFBTSxjQUFJO2NBQ2pDLFVBQVU7Z0JBQ1I7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Y0FDRjtZQUNGO1VBQ0Y7UUFDRixDQUFDO01BQ0g7SUFDRjtFQUNGO0VBQ0E7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO01BQ1IsTUFBTTtNQUNOLE1BQU07UUFDSixNQUFNO01BQ1I7SUFDRjtFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
