// mock/index.bundled_ougixu8n3xs.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkQ6XFxcXHN0dWR5XFxcXFx1NjVCMFx1NUVGQVx1NjU4N1x1NEVGNlx1NTkzOVxcXFxkZW1vXFxcXHZpdGUtdnVlLXRzLXNlZWRcXFxcbW9ja1xcXFxpbmRleC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFxzdHVkeVxcXFxcdTY1QjBcdTVFRkFcdTY1ODdcdTRFRjZcdTU5MzlcXFxcZGVtb1xcXFx2aXRlLXZ1ZS10cy1zZWVkXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3N0dWR5LyVFNiU5NiVCMCVFNSVCQiVCQSVFNiU5NiU4NyVFNCVCQiVCNiVFNSVBNCVCOS9kZW1vL3ZpdGUtdnVlLXRzLXNlZWQvbW9jay9pbmRleC50c1wiO2ltcG9ydCB7IE1vY2tNZXRob2QgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJztcbmltcG9ydCBNb2NrIGZyb20gJ21vY2tqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogJy9hcGkvZ2V0LXB1cmNoYXNlLWxpc3QnLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6ICgpID0+ICh7XG4gICAgICBjb2RlOiAwLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5Nb2NrLm1vY2soe1xuICAgICAgICAgICdsaXN0fDEtMTAwJzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbmRleDogL1MyMDIwMTIyODExNTk1MFswLTldWzAtOV1bMC05XS8sXG4gICAgICAgICAgICAgIHBkTmFtZTogJ01hY2Jvb2snLFxuICAgICAgICAgICAgICBwZE51bTogJ3BfdG1wXzYwYTYzN2NkMGQnLFxuICAgICAgICAgICAgICAncHVyY2hhc2VOdW18MS0xMDAnOiAxMDAsXG4gICAgICAgICAgICAgIGFkbWluTmFtZTogJ1x1OEQyMlx1NTJBMVx1OTBFODExMScsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIwLTA1LTIwQGRhdGUoXCJISDptbTpzc1wiKScsXG4gICAgICAgICAgICAgIHBkVHlwZTogJ1x1NzUzNVx1NUI1MFx1NEVBN1x1NTRDMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbmRleDogL1MyMDIwMTIyODExNTk1MFswLTldWzAtOV1bMC05XS8sXG4gICAgICAgICAgICAgIHBkTmFtZTogJ01hY2Jvb2snLFxuICAgICAgICAgICAgICBwZE51bTogJ3BfdG1wXzYwYTYzN2NkMGQnLFxuICAgICAgICAgICAgICAncHVyY2hhc2VOdW18MS0xMDAnOiAxMDAsXG4gICAgICAgICAgICAgIGFkbWluTmFtZTogJ1x1OEQyMlx1NTJBMVx1OTBFOCcsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIwLTA1LTIwQGRhdGUoXCJISDptbTpzc1wiKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIHVybDogJy9hcGkvZ2V0LWxpc3QnLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6ICgpID0+ICh7XG4gICAgICBjb2RlOiAwLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5Nb2NrLm1vY2soe1xuICAgICAgICAgICdsaXN0fDEtMTAwJzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaW5kZXh8KzEnOiAxLFxuICAgICAgICAgICAgICAnc3RhdHVzfDEnOiAnQG5hdHVyYWwoMCwgNCknLFxuICAgICAgICAgICAgICBubzogJ0JIMDBAbmF0dXJhbCgwMSwgMTAwKScsXG4gICAgICAgICAgICAgIG5hbWU6ICdAY2l0eSgpXHU1MjlFXHU1MTZDXHU3NTI4XHU1NEMxXHU5MUM3XHU4RDJEXHU5ODc5XHU3NkVFJyxcbiAgICAgICAgICAgICAgJ3BheW1lbnRUeXBlfDEnOiAnQG5hdHVyYWwoMCwgMSknLFxuICAgICAgICAgICAgICAnY29udHJhY3RUeXBlfDEnOiAnQG5hdHVyYWwoMCwgMiknLFxuICAgICAgICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMC0wNS0zMCBAZGF0ZShcIkhIOm1tOnNzXCIpJyxcbiAgICAgICAgICAgICAgYW1vdW50OiAnQG5hdHVyYWwoMTAsIDUwMCksMDAwLDAwMCcsXG4gICAgICAgICAgICAgIGFkbWluTmFtZTogJ0BjbmFtZSgpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgdXJsOiAnL2FwaS9kZXRhaWwtYmFzaWMnLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6ICgpID0+ICh7XG4gICAgICBjb2RlOiAwLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5Nb2NrLm1vY2soe1xuICAgICAgICAgIG5hbWU6ICd0ZF8yMDAyMzc0NycsXG4gICAgICAgICAgbG9naW5UeXBlOiAnV2ViJyxcbiAgICAgICAgICBjdXJyZW50Um9sZTogJ0FkbWluJyxcbiAgICAgICAgICByaWdodHNMaXN0OiAnXHU5MDFBXHU3NTI4XHU2NzQzXHU5NjUwJyxcbiAgICAgICAgICB1c2VyU3RhdHVzOiAnXHU1NDJGXHU3NTI4JyxcbiAgICAgICAgICBsYW5ndWFnZTogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsXG4gICAgICAgICAgdGltZVpvbmU6ICcoR01UKzA4OjAwKVx1NEUyRFx1NTZGRFx1NjVGNlx1NTMzQVx1MjAxNFx1NTMxN1x1NEVBQ1x1RkYwOEFzaWEvQmVpamluZ1x1RkYwOScsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIHVybDogJy9hcGkvZ2V0LWNhcmQtbGlzdCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKCkgPT4gKHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLk1vY2subW9jayh7XG4gICAgICAgICAgJ2xpc3R8NDgtNTAnOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpbmRleHwrMSc6IDEsXG4gICAgICAgICAgICAgIGlzU2V0dXA6ICdAYm9vbGVhbicsXG4gICAgICAgICAgICAgICd0eXBlfDEnOiAnQG5hdHVyYWwoMSwgNSknLFxuICAgICAgICAgICAgICAnYmFubmVyfDEnOiBbXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGRlc2lnbi5ndGltZy5jb20vc3RhcnRlci9jbG91ZC1kYi5qcGcnLFxuICAgICAgICAgICAgICAgICdodHRwczovL3RkZXNpZ24uZ3RpbWcuY29tL3N0YXJ0ZXIvY2xvdWQtc2VydmVyLmpwZycsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGRlc2lnbi5ndGltZy5jb20vc3RhcnRlci9zc2wuanBnJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly90ZGVzaWduLmd0aW1nLmNvbS9zdGFydGVyL3Qtc2VjLmpwZycsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGRlc2lnbi5ndGltZy5jb20vc3RhcnRlci9mYWNlLXJlY29nbml0aW9uLmpwZycsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICduYW1lfDEnOiBbJ1x1NEVCQVx1ODEzOFx1OEJDNlx1NTIyQicsICdTU0xcdThCQzFcdTRFNjYnLCAnQ1ZNJywgJ1x1NEU5MVx1NjU3MFx1NjM2RVx1NUU5MycsICdULVNlYyBcdTRFOTFcdTk2MzJcdTcwNkJcdTU4OTknXSxcbiAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9ufDEnOiBbXG4gICAgICAgICAgICAgICAgJ1x1NTdGQVx1NEU4RVx1ODE3RVx1OEJBRlx1NEYxOFx1NTZGRVx1NUYzQVx1NTkyN1x1NzY4NFx1OTc2Mlx1OTBFOFx1NTIwNlx1Njc5MFx1NjI4MFx1NjcyRlx1RkYwQ1x1NjNEMFx1NEY5Qlx1NTMwNVx1NjJFQ1x1NEVCQVx1ODEzOFx1NjhDMFx1NkQ0Qlx1NEUwRVx1NTIwNlx1Njc5MFx1MzAwMVx1NEU5NFx1NUI5OFx1NUI5QVx1NEY0RFx1MzAwMVx1NEVCQVx1ODEzOFx1NjQxQ1x1N0QyMlx1MzAwMVx1NEVCQVx1ODEzOFx1NkJENFx1NUJGOVx1MzAwMVx1NEVCQVx1ODEzOCcsXG4gICAgICAgICAgICAgICAgJ1x1NEU5MVx1Nzg2Q1x1NzZEOFx1NEUzQVx1NjBBOFx1NjNEMFx1NEY5Qlx1NzUyOFx1NEU4RUNWTVx1NzY4NFx1NjMwMVx1NEU0NVx1NjAyN1x1NjU3MFx1NjM2RVx1NTc1N1x1N0VBN1x1NUI1OFx1NTBBOFx1NjcwRFx1NTJBMVx1MzAwMlx1NEU5MVx1Nzg2Q1x1NzZEOFx1NEUyRFx1NzY4NFx1NjU3MFx1NjM2RVx1ODFFQVx1NTJBOFx1NTczMFx1NTNFRlx1NzUyOFx1NTMzQVx1NTE4NVx1NEVFNVx1NTkxQVx1NTI2Rlx1NjcyQ1x1NTE5NycsXG4gICAgICAgICAgICAgICAgJ1NTTFx1OEJDMVx1NEU2Nlx1NTNDOFx1NTNFQlx1NjcwRFx1NTJBMVx1NTY2OFx1OEJDMVx1NEU2Nlx1RkYwQ1x1ODE3RVx1OEJBRlx1NEU5MVx1NEUzQVx1NjBBOFx1NjNEMFx1NEY5Qlx1OEJDMVx1NEU2Nlx1NzY4NFx1NEUwMFx1N0FEOVx1NUYwRlx1NjcwRFx1NTJBMVx1RkYwQ1x1NTMwNVx1NjJFQ1x1NTE0RFx1OEQzOVx1MzAwMVx1NEVEOFx1OEQzOVx1OEJDMVx1NEU2Nlx1NzY4NFx1NzUzM1x1OEJGN1x1MzAwMVx1N0JBMVx1NzQwNlx1NTNDQVx1OTBFOCcsXG4gICAgICAgICAgICAgICAgJ1x1ODE3RVx1OEJBRlx1NUI4OVx1NTE2OFx1NEU5MVx1OTYzMlx1NzA2Qlx1NTg5OVx1NEVBN1x1NTRDMVx1RkYwQ1x1NjYyRlx1ODE3RVx1OEJBRlx1NEU5MVx1NUI4OVx1NTE2OFx1NTZFMlx1OTYxRlx1N0VEM1x1NTQwOFx1NEU5MVx1NTM5Rlx1NzUxRlx1NzY4NFx1NEYxOFx1NTJCRlx1RkYwQ1x1ODFFQVx1NEUzQlx1NzgxNFx1NTNEMVx1NzY4NFNhYVNcdTUzMTZcdTk2MzJcdTcwNkJcdTU4OTlcdTRFQTdcdTU0QzFcdUZGMENcdTY1RTBcdTk3MDBcdTVCQTJcdTY1RTBcdTk3MDBcdTVCQTJcdTY1RTBcdTk3MDBcdTVCQTJcdTY1RTBcdTk3MDBcdTVCQTJcdTY1RTBcdTk3MDBcdTVCQTJcdTY1RTBcdTk3MDBcdTVCQTJcdTY1RTBcdTk3MDBcdTVCQTInLFxuICAgICAgICAgICAgICAgICdcdTRFOTFcdTY1NzBcdTYzNkVcdTVFOTNNeVNRTFx1NEUzQVx1NzUyOFx1NjIzN1x1NjNEMFx1NEY5Qlx1NUI4OVx1NTE2OFx1NTNFRlx1OTc2MFx1RkYwQ1x1NjAyN1x1ODBGRFx1NTM1M1x1OEQ4QVx1MzAwMVx1NjYxM1x1NEU4RVx1N0VGNFx1NjJBNFx1NzY4NFx1NEYwMVx1NEUxQVx1N0VBN1x1NEU5MVx1NjU3MFx1NjM2RVx1NUU5M1x1NjcwRFx1NTJBMVx1MzAwMicsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIHVybDogJy9hcGkvZ2V0LXByb2plY3QtbGlzdCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKCkgPT4gKHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLk1vY2subW9jayh7XG4gICAgICAgICAgJ2xpc3R8MS01MCc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2luZGV4fCsxJzogMSxcbiAgICAgICAgICAgICAgYWRtaW5QaG9uZTogJys4NiAxMzU4NzYwOTk1NScsXG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWU6ICcyMDIwLTA1LTMwIEBkYXRlKFwiSEg6bW06c3NcIiknLFxuICAgICAgICAgICAgICAnYWRtaW5OYW1lfDEnOiBbJ1x1OTg3RVx1NUExRlx0JywgJ1x1NUUzOFx1NTIxQScsICdcdTkwRDFcdTZEMEInXSxcbiAgICAgICAgICAgICAgJ25hbWV8MSc6IFtcbiAgICAgICAgICAgICAgICAnXHU2Q0E3XHU1RERFXHU1RTAyXHU1MjlFXHU1MTZDXHU3NTI4XHU1NEMxXHU5MUM3XHU4RDJEXHU5ODc5XHU3NkVFJyxcbiAgICAgICAgICAgICAgICAnXHU3RUEyXHU2Q0IzXHU1NEM4XHU1QzNDXHU2NUNGXHU1RjVEXHU2NUNGXHU4MUVBXHU2Q0JCXHU1RERFXHU1MjlFXHU1MTZDXHU3NTI4XHU1NEMxXHU5MUM3XHU4RDJEXHU5ODc5XHU3NkVFXHQnLFxuICAgICAgICAgICAgICAgICdcdTk0RENcdTVERERcdTVFMDJcdTUyOUVcdTUxNkNcdTc1MjhcdTU0QzFcdTkxQzdcdThEMkRcdTk4NzlcdTc2RUUnLFxuICAgICAgICAgICAgICAgICdcdTk2NDdcdTUzNTdcdTVFMDJcdTUyOUVcdTUxNkNcdTc1MjhcdTU0QzFcdTkxQzdcdThEMkRcdTk4NzlcdTc2RUVcdCcsXG4gICAgICAgICAgICAgICAgJ1x1NTE2RFx1NUI4OVx1NUUwMlx1NTI5RVx1NTE2Q1x1NzUyOFx1NTRDMVx1OTFDN1x1OEQyRFx1OTg3OVx1NzZFRVx0ICcsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIHVybDogJy9hcGkvcG9zdCcsXG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdGltZW91dDogMjAwMCxcbiAgICByZXNwb25zZToge1xuICAgICAgY29kZTogMCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJ3ZiZW4nLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXSBhcyBNb2NrTWV0aG9kW107XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxVQUFVO0FBRWpCLElBQU8sZUFBUTtFQUNiO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLE9BQU87TUFDZixNQUFNO01BQ04sTUFBTTtRQUNKLEdBQUcsS0FBSyxLQUFLO1VBQ1gsY0FBYztZQUNaO2NBQ0UsT0FBTztjQUNQLFFBQVE7Y0FDUixPQUFPO2NBQ1AscUJBQXFCO2NBQ3JCLFdBQVc7Y0FDWCxZQUFZO2NBQ1osUUFBUTtZQUNWO1lBQ0E7Y0FDRSxPQUFPO2NBQ1AsUUFBUTtjQUNSLE9BQU87Y0FDUCxxQkFBcUI7Y0FDckIsV0FBVztjQUNYLFlBQVk7WUFDZDtVQUNGO1FBQ0YsQ0FBQztNQUNIO0lBQ0Y7RUFDRjtFQUNBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLE9BQU87TUFDZixNQUFNO01BQ04sTUFBTTtRQUNKLEdBQUcsS0FBSyxLQUFLO1VBQ1gsY0FBYztZQUNaO2NBQ0UsWUFBWTtjQUNaLFlBQVk7Y0FDWixJQUFJO2NBQ0osTUFBTTtjQUNOLGlCQUFpQjtjQUNqQixrQkFBa0I7Y0FDbEIsWUFBWTtjQUNaLFFBQVE7Y0FDUixXQUFXO1lBQ2I7VUFDRjtRQUNGLENBQUM7TUFDSDtJQUNGO0VBQ0Y7RUFDQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxPQUFPO01BQ2YsTUFBTTtNQUNOLE1BQU07UUFDSixHQUFHLEtBQUssS0FBSztVQUNYLE1BQU07VUFDTixXQUFXO1VBQ1gsYUFBYTtVQUNiLFlBQVk7VUFDWixZQUFZO1VBQ1osVUFBVTtVQUNWLFVBQVU7UUFDWixDQUFDO01BQ0g7SUFDRjtFQUNGO0VBQ0E7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsT0FBTztNQUNmLE1BQU07TUFDTixNQUFNO1FBQ0osR0FBRyxLQUFLLEtBQUs7VUFDWCxjQUFjO1lBQ1o7Y0FDRSxZQUFZO2NBQ1osU0FBUztjQUNULFVBQVU7Y0FDVixZQUFZO2dCQUNWO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2NBQ0Y7Y0FDQSxVQUFVLENBQUMsNEJBQVEsbUJBQVMsT0FBTyw0QkFBUSxnQ0FBWTtjQUN2RCxpQkFBaUI7Z0JBQ2Y7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Y0FDRjtZQUNGO1VBQ0Y7UUFDRixDQUFDO01BQ0g7SUFDRjtFQUNGO0VBQ0E7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsT0FBTztNQUNmLE1BQU07TUFDTixNQUFNO1FBQ0osR0FBRyxLQUFLLEtBQUs7VUFDWCxhQUFhO1lBQ1g7Y0FDRSxZQUFZO2NBQ1osWUFBWTtjQUNaLFlBQVk7Y0FDWixlQUFlLENBQUMsaUJBQU8sZ0JBQU0sY0FBSTtjQUNqQyxVQUFVO2dCQUNSO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2NBQ0Y7WUFDRjtVQUNGO1FBQ0YsQ0FBQztNQUNIO0lBQ0Y7RUFDRjtFQUNBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtNQUNSLE1BQU07TUFDTixNQUFNO1FBQ0osTUFBTTtNQUNSO0lBQ0Y7RUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
