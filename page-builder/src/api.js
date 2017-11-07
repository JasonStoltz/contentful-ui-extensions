let api = null;

const init =
  process.env.NODE_ENV === "development"
    ? callback => {
        const stubApi = {
          window: {
            startAutoResizer: () => {
              console.log("api:startAutoResizer");
            }
          },
          field: {
            getValue: () => {
              return {};
            },
            setValue: () => {
              console.log("api:setValue");
              return Promise.resolve();
            }
          },
          space: {
            getEntries: () => {
              return Promise.resolve({
                  "sys": {
                    "type": "Array"
                  },
                  "total": 2,
                  "skip": 0,
                  "limit": 100,
                  "items": [
                    {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "25gz1h4mryea"
                          }
                        },
                        "id": "1IrtmJR15CgK2uOcyqCIYI",
                        "type": "Entry",
                        "createdAt": "2017-11-02T04:44:01.640Z",
                        "updatedAt": "2017-11-02T04:44:07.419Z",
                        "createdBy": {
                          "sys": {
                            "type": "Link",
                            "linkType": "User",
                            "id": "0DXrYxNlpfctib05oANKAh"
                          }
                        },
                        "updatedBy": {
                          "sys": {
                            "type": "Link",
                            "linkType": "User",
                            "id": "0DXrYxNlpfctib05oANKAh"
                          }
                        },
                        "publishedCounter": 1,
                        "version": 6,
                        "publishedBy": {
                          "sys": {
                            "type": "Link",
                            "linkType": "User",
                            "id": "0DXrYxNlpfctib05oANKAh"
                          }
                        },
                        "publishedVersion": 5,
                        "firstPublishedAt": "2017-11-02T04:44:07.419Z",
                        "publishedAt": "2017-11-02T04:44:07.419Z",
                        "contentType": {
                          "sys": {
                            "type": "Link",
                            "linkType": "ContentType",
                            "id": "podcast"
                          }
                        }
                      },
                      "fields": {
                        "name": {
                          "en-US": "Podcast 2"
                        }
                      }
                    },
                    {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "25gz1h4mryea"
                          }
                        },
                        "id": "WDTjnqf1AYQE0O2ewcuGO",
                        "type": "Entry",
                        "createdAt": "2017-11-02T04:43:41.061Z",
                        "updatedAt": "2017-11-02T04:43:55.807Z",
                        "createdBy": {
                          "sys": {
                            "type": "Link",
                            "linkType": "User",
                            "id": "0DXrYxNlpfctib05oANKAh"
                          }
                        },
                        "updatedBy": {
                          "sys": {
                            "type": "Link",
                            "linkType": "User",
                            "id": "0DXrYxNlpfctib05oANKAh"
                          }
                        },
                        "publishedCounter": 1,
                        "version": 18,
                        "publishedBy": {
                          "sys": {
                            "type": "Link",
                            "linkType": "User",
                            "id": "0DXrYxNlpfctib05oANKAh"
                          }
                        },
                        "publishedVersion": 17,
                        "firstPublishedAt": "2017-11-02T04:43:55.807Z",
                        "publishedAt": "2017-11-02T04:43:55.807Z",
                        "contentType": {
                          "sys": {
                            "type": "Link",
                            "linkType": "ContentType",
                            "id": "podcast"
                          }
                        }
                      },
                      "fields": {
                        "name": {
                          "en-US": "Podcast 1"
                        },
                        "url": {
                          "en-US": "http://www.youtube.com"
                        }
                      }
                    }
                  ]
                }
              );
            }
          }
        };
        api = stubApi;
        callback(stubApi);
      }
    : callback => {
        var cfExt = window.contentfulExtension || window.contentfulWidget;
        cfExt.init(function(_api) {
          api = _api;
          callback(_api);
        });
      };

export function getPodcastEntries () {
  var query = {
    'content_type': 'podcast'
  };
  return api.space.getEntries(query).then(response => {
    return response.items;
  });
}

export function initApi(callback) {
  init(callback);
}

export function getApi() {
  return api;
}
