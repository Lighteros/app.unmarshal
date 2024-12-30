(self.webpackChunkunmarshal_decoder_ui =
  self.webpackChunkunmarshal_decoder_ui || []).push([
  [179],
  {
    6661: (e, t, n) => {
      "use strict";
      var a = n(7294),
        r = n(3935),
        o = n(8891),
        l = n.n(o),
        i = n(5977),
        c = n(1120),
        s = n(1749),
        d = n(1543),
        m = n(2318),
        u = n(5258),
        p = n(8358),
        f = n(7573),
        g = (0, c.Z)(function (e) {
          var t;
          return {
            toolbar:
              ((t = {}),
              (t[e.breakpoints.up("lg")] = { marginInline: "150px" }),
              t),
          };
        });
      const v = function (e) {
        var t = e.children,
          n = g();
        return a.createElement(
          u.Z,
          { position: "static", style: { background: "transparent" } },
          a.createElement(
            p.Z,
            { className: n.toolbar },
            a.createElement(
              "a",
              {
                href: "https://unmarshal.io",
                target: "_blank",
                rel: "noreferrer",
              },
              a.createElement("img", { src: f, alt: "logo" })
            ),
            t
          )
        );
      };
      var E = n(2437),
        h = n(5076),
        y = n(5806),
        b = "/",
        x = function (e, t, n) {
          return (
            void 0 === n && (n = "transactions"),
            "/transactions/" + e + "?chain=" + t + "&tab=" + n
          );
        },
        Z = function (e) {
          return "/transactions/" + e;
        },
        w = function (e, t) {
          return (
            void 0 === e && (e = " "),
            void 0 === t && (t = ""),
            "/address/" + e + "/assets?chain=" + t
          );
        },
        k = function (e, t) {
          return (
            void 0 === e && (e = " "),
            void 0 === t && (t = "ethereum"),
            "" === t
              ? "/address/" + e + "/transaction-history?chain=ethereum"
              : "/address/" + e + "/transaction-history?chain=" + t
          );
        },
        C = function (e, t) {
          return (
            void 0 === e && (e = " "),
            void 0 === t && (t = "ethereum"),
            "" === t
              ? "/address/" + e + "/nft?chain=ethereum"
              : "/address/" + e + "/nft?chain=" + t
          );
        },
        S = function (e, t, n, a) {
          return (
            void 0 === e && (e = " "),
            "/address/" + e + "/nft-metadata/" + t + "/id/" + a + "?chain=" + n
          );
        },
        N = function (e, t) {
          return (
            void 0 === e && (e = " "),
            void 0 === t && (t = "ethereum"),
            "" === t
              ? "/address/" + e + "/nft-transaction-history?chain=ethereum"
              : "/address/" + e + "/nft-transaction-history?chain=" + t
          );
        },
        F = function (e, t, n, a, r, o, l) {
          return (
            void 0 === e && (e = " "),
            void 0 === t && (t = 1),
            void 0 === n && (n = ""),
            void 0 === a && (a = ""),
            void 0 === r && (r = ""),
            void 0 === o && (o = "active"),
            void 0 === l && (l = "upvote"),
            "/address/" +
              e +
              "/recommendations?page=" +
              t +
              "&chain=" +
              n +
              "&tokenName=" +
              a +
              "&type=" +
              r +
              "&status=" +
              o +
              "&sortBy=" +
              l
          );
        },
        _ = function (e, t, n) {
          return (
            void 0 === e && (e = " "),
            void 0 === n && (n = ""),
            "/address/" + e + "/recommendation/" + t + "?status=" + n
          );
        },
        T = function (e, t, n, a, r, o) {
          if (
            (void 0 === t && (t = " "),
            void 0 === a && (a = "transactions"),
            "kadena" === e)
          ) {
            var l = r,
              i = o;
            return (
              void 0 === r && (l = ""),
              void 0 === o && (i = ""),
              "/address/" +
                t +
                "/asset/" +
                n +
                "?chain=" +
                e +
                "&tab=" +
                a +
                "&chainID=" +
                l +
                "&token=" +
                i
            );
          }
          return "/address/" + t + "/asset/" + n + "?chain=" + e + "&tab=" + a;
        },
        I = function (e, t) {
          return "/token/" + t + "?chain=" + e;
        },
        A = n(9437),
        O = n(5477),
        R = n(998),
        D = n(6869),
        L = n(5757),
        W = n(9693),
        H = n(6253),
        P = n(5849),
        M = n(282),
        B = n(2543),
        j = n(5117),
        z = n(4741);
      const U = (0, B.Z)(function (e) {
        return (0,
        j.Z)({ input: { margin: e.spacing(2), padding: e.spacing(3), borderRadius: 8, backgroundColor: "#F2F6F4", border: "1px solid #C8CCCC", height: e.spacing(5), transition: e.transitions.create(["border-color", "box-shadow"]), "&:focus": { boxShadow: (0, W.U1)(e.palette.primary.main, 0.25) + " 0 0 0 0.2rem", borderColor: e.palette.primary.main } } });
      })(z.Z);
      var V = n(2804);
      const q = {
        data: null,
        isLoading: !1,
        success: !1,
        hasError: !1,
        error: null,
      };
      var K = n(9669),
        Y = n.n(K),
        G = n(8457),
        X = "https://xscan-server.vercel.app/api",
        J = function () {
          return (J =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        $ = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        Q = function () {},
        ee = new TextEncoder().encode(
          "bED&dj^9W%gc^u3#jfFzeaq3o*^*qKJgJMu9jBLK8VP!pKZifUmCt%c4RW6NkU#vKieo9YyvJjsUWWt&tiHs!7S4@b"
        ),
        te = function (e, t) {
          ((null == t ? void 0 : t.beforeFetch) || Q)(),
            e
              .then((null == t ? void 0 : t.onSuccess) || Q)
              .catch(function (e) {
                ((null == t ? void 0 : t.onError) || Q)(e);
              })
              .then((null == t ? void 0 : t.finally) || Q);
        };
      function ne() {
        return new G.N6({ verified: !0 })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("1m")
          .sign(ee);
      }
      (Y().defaults.baseURL = X),
        (Y().defaults.headers.post["Content-Type"] = "application/json"),
        (Y().defaults.headers.put["Content-Type"] = "application/json");
      var ae = function (e) {
        ne().then(e);
      };
      const re = function () {
        return {
          get: function (e, t) {
            void 0 === t && (t = {}),
              ae(function (n) {
                var a = J(J({}, t), {
                  headers: J(J({}, t.headers), { Authorization: n }),
                });
                te(Y().get(e, a), t);
              });
          },
          post: function (e, t) {
            void 0 === t && (t = {});
            var n = t.data,
              a = void 0 === n ? {} : n,
              r = $(t, ["data"]);
            ae(function (t) {
              var n = J(J({}, r), {
                headers: J(J({}, r.headers), { Authorization: t }),
              });
              te(Y().post(e, a, n), r);
            });
          },
          put: function (e, t) {
            void 0 === t && (t = {});
            var n = t.data,
              a = void 0 === n ? {} : n,
              r = $(t, ["data"]);
            ae(function (t) {
              var n = J(J({}, r), {
                headers: J(J({}, r.headers), { Authorization: t }),
              });
              te(Y().put(e, a, n), r);
            });
          },
        };
      };
      var oe = function () {
        return (oe =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      const le = function () {
        var e = re().get;
        return function (t, n, a) {
          return (
            void 0 === a && (a = {}),
            e(
              n,
              oe(oe({}, a), {
                beforeFetch: function () {
                  return t(function (e) {
                    return oe(oe({}, e), { isLoading: !0 });
                  });
                },
                onSuccess: function (e) {
                  (null == a ? void 0 : a.onSuccess) &&
                    (null == a || a.onSuccess(e));
                  var n = e.data;
                  t(oe(oe({}, q), { data: n, success: !0 }));
                },
                onError: function (e) {
                  return t(
                    oe(oe({}, q), { hasError: !0, success: !1, error: e })
                  );
                },
              })
            )
          );
        };
      };
      var ie = (0, V.cn)({ key: "SEARCH_TOKEN_LIST", default: q });
      const ce = function () {
        var e = (0, V.FV)(ie),
          t = e[0],
          n = e[1],
          a = (0, V.rb)(ie),
          r = le();
        return {
          tokens: t,
          getTokens: function (e) {
            return r(n, "/v1/tokenstore/token/symbol/" + e, {
              params: { pageSize: 50, verified: !0 },
            });
          },
          reset: a,
        };
      };
      var se = function () {
        return (se =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      const de = function (e) {
        var t = e.src,
          n = e.alt,
          r = void 0 === n ? "" : n,
          o = (function (e, t) {
            var n = {};
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) &&
                t.indexOf(a) < 0 &&
                (n[a] = e[a]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                t.indexOf(a[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                  (n[a[r]] = e[a[r]]);
            }
            return n;
          })(e, ["src", "alt"]),
          l = (0, a.useState)(!1),
          i = l[0],
          c = l[1];
        return i
          ? a.createElement(
              "div",
              {
                style: {
                  width: "35px",
                  height: "35px",
                  background: "#F0F1F3",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                },
              },
              r
                .split(" ")
                .map(function (e) {
                  return e.slice(0, 1);
                })
                .slice(0, 2)
                .join("")
                .toUpperCase()
            )
          : a.createElement(
              "img",
              se({ src: t, alt: r }, o, {
                onError: function () {
                  return c(!0);
                },
              })
            );
      };
      var me,
        ue,
        pe,
        fe = function (e, t) {
          return e ? (e.length <= t ? e : e.slice(0, t) + "...") : "";
        },
        ge = function (e, t, n) {
          return (
            void 0 === t && (t = 6),
            void 0 === n && (n = 6),
            e
              ? e.length <= t + n
                ? e
                : e.slice(0, t) + "..." + e.slice(e.length - n)
              : ""
          );
        },
        ve = n(95),
        Ee = n(950),
        he = n(9898),
        ye = n(3929),
        be = n(3286),
        xe = "e08d0a9c1d6a260924568229709c88e5";
      l().init(xe, { api_host: "/mixpanel" }),
        (function (e) {
          (e.LandingPage = "Landing page"),
            (e.TokenBalances = "Token Balances"),
            (e.TokenHistory = "Transaction History"),
            (e.NFTs = "NFT Assets"),
            (e.NFTHistory = "NFT Transaction History"),
            (e.Decode = "Decode"),
            (e.UserTokenDetails = "User Token Details"),
            (e.MarshTopTraders = "Marsh Top Traders"),
            (e.TransactionDetails = "Transaction Details"),
            (e.ToggleAssetValueLessThanOneDollar =
              "Toggle assets valued less than one dollar view"),
            (e.AssetHiding = "Asset hiding"),
            (e.StakeOrLend = "Stake or Lend"),
            (e.DefiEarn = "Defi Earn"),
            (e.WalletConnect = "Wallet Connect"),
            (e.SocialMedia = "Social Media"),
            (e.RecommendationDetails = "Recommendation Details page"),
            (e.ShareRecommendation = "Share recommendation"),
            (e.Vote = "Vote on recommendation"),
            (e.Comment = "Comment on recommendation"),
            (e.OpenReportForm = "Open report recommendation form"),
            (e.CloseReportForm = "Close report recommendation form"),
            (e.Report = "Report Recommendation"),
            (e.NewRecommendationForm = "Open new recommendation form"),
            (e.CloseRecommendationFrom = "Close new recommendation form"),
            (e.NewRecommendation = "Submit new recommendation"),
            (e.RecommendationFilters = "Filter recommendations");
        })(me || (me = {})),
        (function (e) {
          (e.Wallet = "Wallet"),
            (e.Transaction = "Transaction"),
            (e.Contract = "Contract");
        })(ue || (ue = {})),
        (function (e) {
          e.Searches = "Number of searches";
        })(pe || (pe = {}));
      const Ze = function (e) {
          l().identify(e);
        },
        we = function (e, t) {
          l().track(e, t);
        },
        ke = function () {
          l().reset();
        },
        Ce = {
          set: function (e) {
            l().people.set(e);
          },
          append: function (e) {
            l().people.append(e);
          },
          set_once: function (e) {
            l().people.set_once(e);
          },
          increment: function (e) {
            l().people.increment(e);
          },
        };
      var Se,
        Ne,
        Fe = "USER_PREFERRED_WALLET",
        _e = Number("56"),
        Te = Number("1"),
        Ie = Number("122"),
        Ae = Number("8217"),
        Oe = Number("106"),
        Re = [_e, Te, Ie, Ae, Oe],
        De = "https://data-seed-prebsc-1-s1.binance.org:8545",
        Le = new he.BscConnector({ supportedChainIds: Re }),
        We = new Ee._k({ supportedChainIds: Re }),
        He = new ye.zw({
          rpc: ((Se = {}), (Se[_e] = De), Se),
          bridge: "https://bridge.walletconnect.org",
          qrcode: !0,
        });
      !(function (e) {
        (e.Metamask = "METAMASK"),
          (e.BscChain = "BSC_CHAIN"),
          (e.WalletConnect = "WALLET_CONNECT");
      })(Ne || (Ne = {}));
      var Pe = new Map([
          [Ne.Metamask, We],
          [Ne.BscChain, Le],
          [Ne.WalletConnect, He],
        ]),
        Me = new Map([
          [
            Ne.Metamask,
            function () {
              return null === window || void 0 === window
                ? void 0
                : window.ethereum;
            },
          ],
          [
            Ne.BscChain,
            function () {
              return null === window || void 0 === window
                ? void 0
                : window.BinanceChain;
            },
          ],
        ]);
      const Be = function () {
        var e = function () {
            var e = localStorage.getItem(Fe);
            return Pe.get(e);
          },
          t = function () {
            localStorage.clear();
          };
        return {
          setPreferredWallet: function (e) {
            localStorage.setItem(Fe, e);
          },
          getPreferredWalletConnector: e,
          handleWalletConnectionReject: function () {
            localStorage.getItem(Fe) === Ne.WalletConnect &&
              window.location.reload();
          },
          clearPreferredWallet: t,
          switchNetwork: function () {
            return (
              (e = localStorage.getItem(Fe)),
              (t = void 0),
              (n = void 0),
              (r = function () {
                var t, n, a;
                return (function (e, t) {
                  var n,
                    a,
                    r,
                    o,
                    l = {
                      label: 0,
                      sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1];
                      },
                      trys: [],
                      ops: [],
                    };
                  return (
                    (o = { next: i(0), throw: i(1), return: i(2) }),
                    "function" == typeof Symbol &&
                      (o[Symbol.iterator] = function () {
                        return this;
                      }),
                    o
                  );
                  function i(o) {
                    return function (i) {
                      return (function (o) {
                        if (n)
                          throw new TypeError(
                            "Generator is already executing."
                          );
                        for (; l; )
                          try {
                            if (
                              ((n = 1),
                              a &&
                                (r =
                                  2 & o[0]
                                    ? a.return
                                    : o[0]
                                    ? a.throw ||
                                      ((r = a.return) && r.call(a), 0)
                                    : a.next) &&
                                !(r = r.call(a, o[1])).done)
                            )
                              return r;
                            switch (
                              ((a = 0), r && (o = [2 & o[0], r.value]), o[0])
                            ) {
                              case 0:
                              case 1:
                                r = o;
                                break;
                              case 4:
                                return l.label++, { value: o[1], done: !1 };
                              case 5:
                                l.label++, (a = o[1]), (o = [0]);
                                continue;
                              case 7:
                                (o = l.ops.pop()), l.trys.pop();
                                continue;
                              default:
                                if (
                                  !(
                                    (r =
                                      (r = l.trys).length > 0 &&
                                      r[r.length - 1]) ||
                                    (6 !== o[0] && 2 !== o[0])
                                  )
                                ) {
                                  l = 0;
                                  continue;
                                }
                                if (
                                  3 === o[0] &&
                                  (!r || (o[1] > r[0] && o[1] < r[3]))
                                ) {
                                  l.label = o[1];
                                  break;
                                }
                                if (6 === o[0] && l.label < r[1]) {
                                  (l.label = r[1]), (r = o);
                                  break;
                                }
                                if (r && l.label < r[2]) {
                                  (l.label = r[2]), l.ops.push(o);
                                  break;
                                }
                                r[2] && l.ops.pop(), l.trys.pop();
                                continue;
                            }
                            o = t.call(e, l);
                          } catch (e) {
                            (o = [6, e]), (a = 0);
                          } finally {
                            n = r = 0;
                          }
                        if (5 & o[0]) throw o[1];
                        return { value: o[0] ? o[1] : void 0, done: !0 };
                      })([o, i]);
                    };
                  }
                })(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (((t = Me.get(e)), !(n = t ? t() : void 0)))
                        return [3, 5];
                      r.label = 1;
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.request({
                            method: "wallet_addEthereumChain",
                            params: [
                              {
                                chainId: be.Dv(_e),
                                chainName: "Binance Smart Chain Mainnet",
                                nativeCurrency: {
                                  name: "BNB",
                                  symbol: "bnb",
                                  decimals: 18,
                                },
                                rpcUrls: [De],
                                blockExplorerUrls: ["https://bscscan.com"],
                              },
                            ],
                          }),
                        ]
                      );
                    case 2:
                      return r.sent(), [2, !0];
                    case 3:
                      return (
                        (a = r.sent()),
                        console.error(
                          "Failed to setup the network in Metamask:",
                          a
                        ),
                        [2, !1]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      return (
                        console.error(
                          "Can't setup the BSC network on metamask because wallet provider is undefined"
                        ),
                        [2, !1]
                      );
                    case 6:
                      return [2];
                  }
                });
              }),
              new ((a = void 0) || (a = Promise))(function (e, o) {
                function l(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function i(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(t) {
                  var n;
                  t.done
                    ? e(t.value)
                    : ((n = t.value),
                      n instanceof a
                        ? n
                        : new a(function (e) {
                            e(n);
                          })).then(l, i);
                }
                c((r = r.apply(t, n || [])).next());
              })
            );
            var e, t, n, a, r;
          },
          disconnectWallet: function () {
            var n,
              a,
              r = e();
            r.deactivate(),
              (null === (n = e()) || void 0 === n ? void 0 : n.close) &&
                (null === (a = e()) || void 0 === a || a.close()),
              r instanceof ye.zw && (He.walletConnectProvider = null),
              t(),
              ke();
          },
          getChainId: function () {
            var e = localStorage.getItem(Fe),
              t = Me.get(e),
              n = t ? t() : void 0;
            return n ? n.chainId : null;
          },
        };
      };
      var je,
        ze = n(6614),
        Ue = n(1041),
        Ve = n(2990),
        qe = n(1738),
        Ke = new ve.Unmarshal({
          baseUrl: X,
          apiKey: "xscanPublicApiKey",
          authorizationHeaderHandler: ne,
        }),
        Ye = new Map([
          ["cronos", "Cronos"],
          ["kadena", "Kadena"],
          ["ethereum", "Ethereum"],
          ["bsc", "BSC"],
          ["matic", "Polygon"],
          ["avalanche", "Avalanche"],
          ["klaytn", "Klaytn"],
          ["fuse", "Fuse"],
          ["solana", "Solana"],
          ["xinfin", "XDC Network"],
          ["celo", "Celo"],
          ["fantom", "Fantom"],
          ["velas", "Velas"],
          ["arbitrum", "Arbitrum"],
          ["moonbeam", "Moonbeam"],
          ["metis", "Metis"],
          ["aurora", "Aurora"],
          ["optimism", "Optimism"],
          ["partisia", "Partisia Blockchain"],
          ["movementnetwork", "MovementNetwork"],
        ]),
        Ge = new Map([
          ["cronos", "CRO"],
          ["kadena", "KDA"],
          ["ethereum", "ETH"],
          ["bsc", "BNB"],
          ["matic", "Matic"],
          ["avalanche", "AVAX"],
          ["klaytn", "KLAY"],
          ["fuse", "FUSE"],
          ["xinfin", "XDC"],
          ["solana", "SOL"],
          ["celo", "CELO"],
          ["fantom", "FTM"],
          ["velas", "VLX"],
          ["arbitrum", "ETH"],
          ["moonbeam", "GLMR"],
          ["metis", "METIS"],
          ["aurora", "AURORA"],
          ["optimism", "ETH"],
          ["partisia", "GAS"],
          ["movementnetwork", "MOVE"],
        ]);
      !(function (e) {
        (e.Cronos = "cronos"),
          (e.Kadena = "kadena"),
          (e.Ethereum = "ethereum"),
          (e.BSC = "bsc"),
          (e.Matic = "matic"),
          (e.Avalanche = "avalanche"),
          (e.Klaytn = "klaytn"),
          (e.Fuse = "fuse"),
          (e.Solana = "solana"),
          (e.XDC = "XinFin"),
          (e.Celo = "celo"),
          (e.Fantom = "fantom"),
          (e.Velas = "velas"),
          (e.Arbitrum = "arbitrum"),
          (e.Moonbeam = "moonbeam"),
          (e.Metis = "metis"),
          (e.Aurora = "aurora"),
          (e.Optimism = "optimism"),
          (e.Partisia = "partisia"),
          (e.Movementnetwork = "movementnetwork");
      })(je || (je = {}));
      var Xe,
        Je = new Map([
          [je.Cronos, "cronos"],
          [je.Kadena, "kadena"],
          [je.Ethereum, "ethereum"],
          [je.BSC, "bsc"],
          [je.Matic, "matic"],
          [je.Avalanche, "avalanche"],
          [je.Klaytn, "klaytn"],
          [je.Fuse, "fuse"],
          [je.Solana, "solana"],
          [je.XDC, "xdc"],
          [je.Celo, "celo"],
          [je.Fantom, "fantom"],
          [je.Velas, "velas"],
          [je.Arbitrum, "arbitrum"],
          [je.Moonbeam, "moonbeam"],
          [je.Metis, "metis"],
          [je.Aurora, "aurora"],
          [je.Optimism, "optimism"],
          [je.Partisia, "partisia"],
          [je.Movementnetwork, "movementnetwork"],
        ]),
        $e = new Map([
          ["transactions", "Transaction History"],
          ["recommendations", "Recommendations"],
        ]),
        Qe = Array.from($e.keys()),
        et = new Map([
          ["ethereum", ["uniswap_v2"]],
          ["bsc", ["pancakeswap_v1", "pancakeswap_v2"]],
        ]),
        tt = "https://xscan-server.vercel.app/api/notifications/v1",
        nt = window.location.origin + "/query/recommendations/v1",
        at = new Map([
          [je.Solana, { disableUserData: !0 }],
          [je.Partisia, { disableUserData: !0 }],
          [je.Movementnetwork, { disableUserData: !0 }],
        ]),
        rt = [
          { name: je.Optimism, label: "optimism", subChains: [] },
          { name: je.Ethereum, label: "ethereum", subChains: [] },
          { name: je.BSC, label: "bsc", subChains: [] },
          { name: je.Matic, label: "matic", subChains: [] },
          { name: je.Avalanche, label: "avalanche", subChains: [] },
          { name: je.Klaytn, label: "klaytn", subChains: [] },
          {
            name: je.Kadena,
            label: "kadena",
            subChains: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19,
            ],
          },
          { name: je.Velas, label: "velas", subChains: [] },
          { name: je.Cronos, label: "cronos", subChains: [] },
          { name: je.Fuse, label: "fuse", subChains: [] },
          { name: je.Solana, label: "solana", subChains: [] },
          { name: je.XDC, label: "xinfin", subChains: [] },
          { name: je.Celo, label: "celo", subChains: [] },
          { name: je.Fantom, label: "fantom", subChains: [] },
          { name: je.Arbitrum, label: "arbitrum", subChains: [] },
          { name: je.Moonbeam, label: "moonbeam", subChains: [] },
          { name: je.Aurora, label: "aurora", subChains: [] },
          { name: je.Metis, label: "metis", subChains: [] },
          { name: je.Partisia, label: "partisia", subChains: [] },
          { name: je.Movementnetwork, label: "movementnetwork", subChains: [] },
        ],
        ot = rt.map(function (e) {
          return e.label;
        });
      new Map([
        ["0x1", "ethereum"],
        ["0x38", "bsc"],
      ]),
        (function (e) {
          (e.Listed = "active"),
            (e.Unlisted = "recommended"),
            (e.MyRecommendations = "myRecommendations"),
            (e.LeaderBoard = "leaderboard");
        })(Xe || (Xe = {}));
      var lt = new Map([
          [Xe.Listed, "Listed recommendations"],
          [Xe.Unlisted, "Unlisted recommendations"],
          [Xe.MyRecommendations, "Your requests"],
          [Xe.LeaderBoard, "Leaderboard"],
        ]),
        it = Array.from([
          "Ethereum",
          "BSC",
          "Matic",
          "Celo",
          "Arbitrum",
          "Solana",
          "Xinfin",
          "Avalanche",
          "Metis",
        ]),
        ct = Array.from(["Staking", "Lending"]),
        st = Array.from([
          "APR",
          "Token",
          "Platform",
          "Program Start/End date",
          "Other",
        ]),
        dt = new Map([
          ["upvote", "Up-Votes"],
          ["downvote", "Down-Votes"],
          ["max_apr", "Max APR"],
          ["min_apr", "Min APR"],
        ]),
        mt = new Map([
          [
            "Metamask",
            {
              description: "Connect using browser wallet",
              logo: ze,
              wallet: Ne.Metamask,
            },
          ],
          [
            "Binance Chain",
            {
              description: "Connect using browser wallet",
              logo: Ue,
              wallet: Ne.BscChain,
            },
          ],
          [
            "Trust Wallet",
            {
              description: "Connect using Trust Wallet",
              logo: Ve,
              wallet: Ne.Metamask,
            },
          ],
          [
            "Wallet Connect",
            {
              description: "Connect using Wallet Connect",
              logo: qe,
              wallet: Ne.WalletConnect,
            },
          ],
        ]),
        ut = Array.from(mt.keys()),
        pt = new Map([
          ["ethereum", ["ethereum", "eth", "ERC20"]],
          [
            "bsc",
            [
              "bsc",
              "binance",
              "binance smart chain",
              "BEP20",
              "binance-smart-chain",
            ],
          ],
          ["matic", ["matic", "polygon", "polygon-pos", "polygon pos"]],
          ["solana", ["solana"]],
          [
            "xinfin",
            [
              "xdc",
              "xdc network",
              "xin fin",
              "xinfin",
              "xin-fin",
              "xdc-network",
            ],
          ],
          ["celo", ["celo"]],
          ["fantom", ["fantom", "ftm"]],
          ["kadena", ["kadena", "kda"]],
          ["avalanche", ["avalanche", "avax"]],
          ["cronos", ["cronos"]],
          ["fuse", ["fuse"]],
          ["klaytn", ["klaytn"]],
          ["velas", ["velas", "vlx"]],
          ["arbitrum", ["arbitrum", "arb", "eth"]],
          ["moonbeam", ["moonbeam", "glmr"]],
          ["metis", ["metis"]],
          ["aurora", ["aurora"]],
          ["optimism", ["optimism", "optimistic-ethereum"]],
          ["partisia", ["partisia"]],
          ["movementnetwork", ["movementnetwork"]],
        ]),
        ft = [
          "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "0x0000000000000000000000000000000000001010",
          "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000",
        ],
        gt = n(6486),
        vt = function () {
          var e = new Map();
          return (
            ot.forEach(function (t) {
              return e.set(t, q);
            }),
            e
          );
        };
      var Et = function () {
        return (Et =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      const ht = function (e, t, n) {
          void 0 === n && (n = {}),
            e(function (e) {
              return Et(Et({}, e), { isLoading: !0 });
            });
          try {
            t()
              .then(function (t) {
                (null == n ? void 0 : n.onSuccess) &&
                  (null == n || n.onSuccess(t));
                var a = t.data;
                e(Et(Et({}, q), { data: a, success: !0 }));
              })
              .catch(function (t) {
                return e(
                  Et(Et({}, q), { hasError: !0, success: !1, error: t })
                );
              });
          } catch (t) {
            e(Et(Et({}, q), { hasError: !0, success: !1, error: t }));
          }
        },
        yt = function (e) {
          return function (t, n) {
            return (
              void 0 === n &&
                (n = function () {
                  return {};
                }),
              ot.forEach(function (a) {
                return ht(
                  (function (t) {
                    return function (n) {
                      e(
                        "function" != typeof n
                          ? function (e) {
                              return e.set(t, n), new Map(e);
                            }
                          : function (e) {
                              return e.set(t, n(e.get(t))), new Map(e);
                            }
                      );
                    };
                  })(a),
                  t(a),
                  n(a)
                );
              })
            );
          };
        };
      var bt,
        xt = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        Zt = (0, V.cn)({ key: "BSC_ASSETS", default: vt() }),
        wt = (0, V.cn)({ key: "KADENA_TOKEN_LIST", default: q }),
        kt = "HIDE_ASSETS_VALUED_LESS_THAN_ONE_DOLLAR",
        Ct = "ASSETS_TO_HIDE",
        St = (0, V.cn)({
          key: "HIDE_ASSETS_VALUED_LESS_THAN_ONE_DOLLAR",
          default: "true" === localStorage.getItem(kt),
        }),
        Nt = (0, V.cn)({
          key: "ASSETS_TO_HIDE",
          default:
            ((bt = localStorage.getItem(Ct)),
            null === bt || "" === bt ? [] : bt.split(",")),
        }),
        Ft = function () {
          var e = (0, V.FV)(St),
            t = e[0],
            n = e[1],
            a = (0, V.FV)(Nt),
            r = a[0],
            o = a[1];
          return {
            assetsToHide: r,
            addAssetsToHide: function (e, t) {
              var n = t + "_" + e,
                a = xt(xt([], r), [n]);
              we(me.AssetHiding, { type: "hide", chain: t, asset: e }),
                o(a),
                localStorage.setItem(Ct, a.join(","));
            },
            clearAssetsToHide: function (e) {
              we(me.AssetHiding, { type: "unhide", chain: e });
              for (var t = [], n = 0, a = r; n < a.length; n++) {
                var l = a[n];
                l.includes(e) || t.push(l);
              }
              localStorage.setItem(Ct, t.join(",")), o(t);
            },
            hideAssetsValuedLessThanOneDollar: t,
            toggleHideAssetsValuedLessThanOneDollar: function () {
              localStorage.setItem(kt, t ? "false" : "true"),
                we(me.ToggleAssetValueLessThanOneDollar, { hideAssets: !t }),
                n(!t);
            },
            showAssetsButtonForChain: function (e) {
              for (var t = 0, n = r; t < n.length; t++)
                if (n[t].includes(e)) return !0;
              return !1;
            },
          };
        };
      const _t = function () {
        var e = (0, V.FV)(Zt),
          t = e[0],
          n = e[1],
          a = (0, V.rb)(Zt),
          r = Ft(),
          o = r.assetsToHide,
          l = r.hideAssetsValuedLessThanOneDollar,
          i = yt(n),
          c = le(),
          s = (0, V.FV)(wt),
          d = s[0],
          m = s[1];
        return (
          (l || o.length) &&
            ot.map(function (e) {
              var n = t.get(e),
                a = [];
              if (n.success && null != n.data) {
                for (var r = 0, i = n.data; r < i.length; r++) {
                  var c = i[r];
                  (0, gt.includes)(o, e + "_" + c.contract_address) ||
                    (l ? c.quote >= 1 && a.push(c) : a.push(c));
                }
                n.data = a;
              }
              return e;
            }),
          {
            assets: t,
            getAssets: function (e, t, n) {
              return i(function (a) {
                var r = { includeLowVolume: !0 };
                return (
                  "kadena" === a &&
                    (r =
                      "" !== t
                        ? { chainId: t, token: n }
                        : { aggregatedBalance: !0, token: n }),
                  function () {
                    return Ke.WalletApi.getTokenBalances(a, e, r);
                  }
                );
              });
            },
            getKadenaAssets: function (e, t, a) {
              var r =
                "" !== t
                  ? { chainId: t, token: a }
                  : { aggregatedBalance: !0, token: a };
              ht(
                function (e) {
                  n(
                    "function" != typeof e
                      ? function (t) {
                          return t.set("kadena", e), new Map(t);
                        }
                      : function (t) {
                          return (
                            t.set("kadena", e(t.get("kadena"))), new Map(t)
                          );
                        }
                  );
                },
                function () {
                  return Ke.WalletApi.getTokenBalances(ve.Chain.kadena, e, r);
                }
              );
            },
            resetState: a,
            kadenaTokenList: d,
            getKadenaTokenList: function () {
              c(m, "/v1/kadena/tokens/list");
            },
          }
        );
      };
      var Tt = n(7044),
        It = n(1438),
        At = n(2008),
        Ot = n(2822),
        Rt = n(6353),
        Dt = n(3901),
        Lt = n(7812),
        Wt = n(5517),
        Ht = n(2285),
        Pt = n(3457),
        Mt = n(2663),
        Bt = n(6083),
        jt = n(9525),
        zt = n(8463),
        Ut = n(9912),
        Vt = n(9659),
        qt = n(5648),
        Kt = n(6251),
        Yt = n(9544),
        Gt = function () {
          return (Gt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Xt = function () {
          var e = an().connectWallet;
          return a.createElement(
            Ot.Z,
            { style: { width: "100%", maxWidth: 360 }, key: "wallet_list" },
            ut.map(function (t) {
              var n = mt.get(t);
              return a.createElement(
                a.Fragment,
                { key: t },
                a.createElement(
                  R.Z,
                  {
                    component: M.Z,
                    onClick: function () {
                      return e(n.wallet);
                    },
                    style: { backgroundColor: "white" },
                  },
                  a.createElement(
                    Rt.Z,
                    null,
                    a.createElement(Dt.Z, { src: n.logo, variant: "square" })
                  ),
                  a.createElement(L.Z, {
                    primary: a.createElement(
                      m.Z,
                      { variant: "h6", color: "secondary" },
                      t
                    ),
                    secondary: a.createElement(
                      m.Z,
                      { color: "secondary", style: { opacity: "70%" } },
                      n.description
                    ),
                  }),
                  a.createElement(
                    Lt.Z,
                    { edge: "end", "aria-label": "delete" },
                    a.createElement(Kt.Z, null)
                  )
                ),
                ut.indexOf(t) !== ut.length - 1 &&
                  a.createElement(Wt.Z, { color: "#808191" })
              );
            })
          );
        },
        Jt = (0, V.cn)({ key: "IS_WALLETS_DIALOG_OPEN", default: !1 }),
        $t = function () {
          var e = (0, V.FV)(Jt),
            t = e[0],
            n = e[1];
          return {
            isOpen: t,
            toggleMenu: function () {
              return n(!t);
            },
            closeDialog: function () {
              return n(!1);
            },
          };
        },
        Qt = a.forwardRef(function (e, t) {
          return a.createElement(Ht.Z, Gt({ direction: "up", ref: t }, e));
        }),
        en = function (e) {
          var t = e.onClose;
          return a.createElement(
            Lt.Z,
            {
              "aria-label": "close",
              onClick: t,
              style: { position: "absolute", right: 0, top: 0, color: "grey" },
            },
            a.createElement(Yt.Z, null)
          );
        };
      const tn = function () {
        var e = $t(),
          t = e.isOpen,
          n = e.closeDialog,
          r = (0, qt.Z)(),
          o = (0, Pt.Z)(r.breakpoints.down("xs"));
        return a.createElement(
          Mt.Z,
          {
            fullScreen: o,
            fullWidth: !0,
            maxWidth: "xs",
            open: t,
            TransitionComponent: Ht.Z,
            keepMounted: !0,
            onClose: n,
          },
          a.createElement(en, { onClose: n }),
          a.createElement(
            Bt.Z,
            null,
            a.createElement(
              m.Z,
              { style: { fontWeight: "bolder", textAlign: "center" } },
              "Connect To Wallet"
            )
          ),
          a.createElement(
            jt.Z,
            null,
            a.createElement(
              zt.Z,
              { variant: "outlined" },
              a.createElement(Ut.Z, null, a.createElement(Xt, null))
            ),
            a.createElement(Wt.Z, {
              color: "#808191",
              style: { marginTop: 2, marginBottom: 2 },
            }),
            a.createElement(
              m.Z,
              { style: { color: "text.disabled" } },
              "Dont have a wallet?",
              " ",
              a.createElement(
                Vt.Z,
                {
                  style: { textDecoration: "none", color: "text.secondary" },
                  target: "_blank",
                  href: "https://metamask.io/download/",
                },
                "Download here"
              )
            )
          )
        );
      };
      var nn = new It.r6(De),
        an = function () {
          var e = $t(),
            t = e.toggleMenu,
            n = e.closeDialog,
            a = Be(),
            r = a.setPreferredWallet,
            o = a.getPreferredWalletConnector,
            l = a.disconnectWallet,
            i = a.switchNetwork,
            c = a.getChainId,
            s = (0, Tt.Ge)(),
            d = s.activate,
            m = s.active,
            u = s.account,
            p = s.deactivate,
            f = s.library,
            g = (0, At.Ds)().enqueueSnackbar,
            v = function () {
              we(me.WalletConnect, { action: "disconnect", walletAddress: u }),
                p(),
                l();
            };
          function E() {
            var e = this,
              t = o();
            t &&
              d(t, void 0, !0)
                .then(n)
                .catch(function (t) {
                  return (
                    (n = e),
                    (a = void 0),
                    (o = function () {
                      var e;
                      return (function (e, t) {
                        var n,
                          a,
                          r,
                          o,
                          l = {
                            label: 0,
                            sent: function () {
                              if (1 & r[0]) throw r[1];
                              return r[1];
                            },
                            trys: [],
                            ops: [],
                          };
                        return (
                          (o = { next: i(0), throw: i(1), return: i(2) }),
                          "function" == typeof Symbol &&
                            (o[Symbol.iterator] = function () {
                              return this;
                            }),
                          o
                        );
                        function i(o) {
                          return function (i) {
                            return (function (o) {
                              if (n)
                                throw new TypeError(
                                  "Generator is already executing."
                                );
                              for (; l; )
                                try {
                                  if (
                                    ((n = 1),
                                    a &&
                                      (r =
                                        2 & o[0]
                                          ? a.return
                                          : o[0]
                                          ? a.throw ||
                                            ((r = a.return) && r.call(a), 0)
                                          : a.next) &&
                                      !(r = r.call(a, o[1])).done)
                                  )
                                    return r;
                                  switch (
                                    ((a = 0),
                                    r && (o = [2 & o[0], r.value]),
                                    o[0])
                                  ) {
                                    case 0:
                                    case 1:
                                      r = o;
                                      break;
                                    case 4:
                                      return (
                                        l.label++, { value: o[1], done: !1 }
                                      );
                                    case 5:
                                      l.label++, (a = o[1]), (o = [0]);
                                      continue;
                                    case 7:
                                      (o = l.ops.pop()), l.trys.pop();
                                      continue;
                                    default:
                                      if (
                                        !(
                                          (r =
                                            (r = l.trys).length > 0 &&
                                            r[r.length - 1]) ||
                                          (6 !== o[0] && 2 !== o[0])
                                        )
                                      ) {
                                        l = 0;
                                        continue;
                                      }
                                      if (
                                        3 === o[0] &&
                                        (!r || (o[1] > r[0] && o[1] < r[3]))
                                      ) {
                                        l.label = o[1];
                                        break;
                                      }
                                      if (6 === o[0] && l.label < r[1]) {
                                        (l.label = r[1]), (r = o);
                                        break;
                                      }
                                      if (r && l.label < r[2]) {
                                        (l.label = r[2]), l.ops.push(o);
                                        break;
                                      }
                                      r[2] && l.ops.pop(), l.trys.pop();
                                      continue;
                                  }
                                  o = t.call(e, l);
                                } catch (e) {
                                  (o = [6, e]), (a = 0);
                                } finally {
                                  n = r = 0;
                                }
                              if (5 & o[0]) throw o[1];
                              return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, i]);
                          };
                        }
                      })(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return (
                              console.warn("Failed to activate wallet", t),
                              (
                                null === (e = null == t ? void 0 : t.message) ||
                                void 0 === e
                                  ? void 0
                                  : e.includes("Unsupported")
                              )
                                ? [4, i()]
                                : [3, 2]
                            );
                          case 1:
                            if (n.sent()) return E(), [2];
                            n.label = 2;
                          case 2:
                            return (
                              (function (e) {
                                g(e.message, { variant: "warning" });
                              })(t),
                              v(),
                              [2]
                            );
                        }
                      });
                    }),
                    new ((r = void 0) || (r = Promise))(function (e, t) {
                      function l(e) {
                        try {
                          c(o.next(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function i(e) {
                        try {
                          c(o.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function c(t) {
                        t.done
                          ? e(t.value)
                          : (function (e) {
                              return e instanceof r
                                ? e
                                : new r(function (t) {
                                    t(e);
                                  });
                            })(t.value).then(l, i);
                      }
                      c((o = o.apply(n, a || [])).next());
                    })
                  );
                  var n, a, r, o;
                });
          }
          return {
            openWalletConnectOptions: t,
            connectWallet: function (e) {
              r(e), E();
            },
            isConnected: m,
            userAddress: u,
            disconnect: v,
            getSigner: function () {
              return null == f ? void 0 : f.getSigner();
            },
            tryAutoConnect: function () {
              E();
            },
            getProvider: function () {
              return nn;
            },
            getChainId: c,
          };
        };
      const rn = an;
      var on = function () {
          return (on =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        ln = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        cn = (0, c.Z)(function (e) {
          var t = e.palette,
            n = e.spacing,
            a = e.transitions;
          return {
            form: { width: "100%" },
            paper: { maxHeight: 300, overflow: "scroll", borderRadius: 10 },
            listItem: { width: "100%" },
            listItemIcon: { minWidth: 30, "& img": { borderRadius: "50%" } },
            listItemText: {
              "& .MuiListItemText-secondary": {
                color: t.text.primary,
                opacity: "0.5",
              },
            },
            Input: {},
            autoComplete: {
              "& .MuiAutocomplete-endAdornment": { display: "none" },
            },
            input: {
              backgroundColor: "#F2F6F4",
              margin: n(2),
              padding: n(3),
              height: n(5),
              borderRadius: 8,
              border: "1px solid #C8CCCC",
              transition: a.create(["border-color", "box-shadow"]),
              "&:focus": {
                boxShadow: (0, W.U1)(t.primary.main, 0.25) + " 0 0 0 0.2rem",
                borderColor: t.primary.main,
              },
            },
            progress: { position: "relative", right: 40 },
            grid: {
              display: "flex",
              flexDirection: "column",
              paddingBottom: 0,
              justifyContent: "center",
            },
            decode: {
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: n(2),
            },
          };
        }),
        sn = (0, c.Z)({
          underline: {
            "&&&:before": { borderBottom: "none" },
            "&&:after": { borderBottom: "none" },
          },
        });
      const dn = function () {
        var e = cn(),
          t = (0, i.k6)(),
          n = sn(),
          r = ce(),
          o = r.getTokens,
          l = r.tokens,
          c = r.reset,
          d = (0, a.useCallback)(
            (0, A.Z)(function (e) {
              return o(e);
            }, 300),
            []
          ),
          m = l.data || [],
          u = Xr(),
          p = (0, a.useState)(""),
          f = p[0],
          g = p[1],
          v = _t(),
          E = v.kadenaTokenList,
          h = v.getKadenaTokenList,
          y = (0, a.useState)((null == E ? void 0 : E.data) || []),
          b = y[0],
          x = y[1];
        (0, a.useEffect)(
          function () {
            var e;
            x(
              (null === (e = null == E ? void 0 : E.data) || void 0 === e
                ? void 0
                : e.filter(function (e) {
                    return e.includes(f);
                  })) || []
            );
          },
          [f, E]
        );
        var Z = rn().userAddress,
          w = function (e) {
            var t,
              n =
                null === (t = null == e ? void 0 : e.target) || void 0 === t
                  ? void 0
                  : t.value;
            g(n),
              (null == n ? void 0 : n.length) <= 10 &&
                /^[a-zA-Z]+$/.test(n) &&
                d(n);
          };
        return (
          (0, a.useEffect)(function () {
            return h(), c;
          }, []),
          (0, a.useEffect)(
            function () {
              Z && g(Z);
            },
            [Z]
          ),
          (null == f ? void 0 : f.length) > 0 &&
          /^[a-zA-Z0-9.-]*$/.test(f) &&
          !f.endsWith(".eth") &&
          (m.length > 0 || b.length > 0 || l.isLoading)
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  s.Z,
                  { className: e.grid, item: !0 },
                  a.createElement(P.ZP, {
                    fullWidth: !0,
                    autoHighlight: !0,
                    autoSelect: !0,
                    freeSolo: !0,
                    open: m.length > 0 || b.length > 0,
                    onChange: function (e, n, a) {
                      "select-option" === a &&
                        (we(me.LandingPage, { address: n.contract }),
                        we(me.Decode, {
                          address: n.contract,
                          type: ue.Contract,
                        }),
                        "string" == typeof n
                          ? t.push(I("kadena", n))
                          : t.push(I(Je.get(n.blockchain), n.contract)));
                    },
                    options: ln(ln([], m), b),
                    noOptionsText: a.createElement(a.Fragment, null),
                    className: e.autoComplete,
                    getOptionLabel: function (e) {
                      return e.symbol;
                    },
                    filterOptions: function (e) {
                      return e.filter(function (e) {
                        return (
                          "string" == typeof e ||
                          Object.values(je).includes(e.blockchain)
                        );
                      });
                    },
                    renderInput: function (t) {
                      return a.createElement(
                        H.Z,
                        on({}, t, {
                          autoFocus: !0,
                          placeholder:
                            "Search by ENS / UNS / Address / Txn Hash / Symbol",
                          onChange: w,
                          InputProps: on(on({}, t.InputProps), {
                            classes: n,
                            className: e.Input,
                            endAdornment: a.createElement(
                              a.Fragment,
                              null,
                              l.isLoading
                                ? a.createElement(O.Z, {
                                    className: e.progress,
                                    color: "primary",
                                    size: 30,
                                  })
                                : null,
                              t.InputProps.endAdornment
                            ),
                          }),
                          inputProps: on(on({}, t.inputProps), {
                            className: e.input,
                            value: f,
                          }),
                        })
                      );
                    },
                    renderOption: function (t) {
                      return "string" != typeof t
                        ? a.createElement(
                            R.Z,
                            { className: e.listItem },
                            a.createElement(
                              D.Z,
                              { className: e.listItemIcon },
                              a.createElement(de, {
                                src: null == t ? void 0 : t.image,
                                width: 20,
                                height: 20,
                              })
                            ),
                            a.createElement(L.Z, {
                              className: e.listItemText,
                              primary:
                                (null == t ? void 0 : t.name) +
                                " (" +
                                (null == t ? void 0 : t.symbol) +
                                ")",
                              secondary: ge(null == t ? void 0 : t.contract),
                            }),
                            null == t ? void 0 : t.blockchain
                          )
                        : a.createElement(
                            R.Z,
                            { className: e.listItem },
                            a.createElement(L.Z, {
                              className: e.listItemText,
                              primary: t,
                            }),
                            "kadena"
                          );
                    },
                  }),
                  a.createElement(
                    "div",
                    { className: e.decode },
                    a.createElement(M.Z, { type: "submit" }, "Decode")
                  )
                )
              )
            : a.createElement(
                "form",
                {
                  className: e.form,
                  onSubmit: function (e) {
                    e.preventDefault(), u(f);
                  },
                },
                a.createElement(
                  s.Z,
                  { className: e.grid, item: !0 },
                  a.createElement(U, {
                    fullWidth: !0,
                    autoFocus: !0,
                    value: f,
                    placeholder:
                      "Search by ENS / UNS / Address / Txn Hash / Symbol",
                    onChange: w,
                  }),
                  a.createElement(
                    "div",
                    { className: e.decode },
                    a.createElement(M.Z, { type: "submit" }, "Decode")
                  )
                )
              )
        );
      };
      var mn = n(9636),
        un = n(3727),
        pn = n(3056),
        fn = n(1225),
        gn = n(9413),
        vn = n(8068),
        En = n(8831),
        hn = n(9361),
        yn = n(7678),
        bn = n(1213),
        xn = n(6142),
        Zn = n(5968),
        wn = n(4511),
        kn = n(1005),
        Cn = function () {
          return (Cn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Sn = function () {
          var e,
            t = (0, i.$B)(),
            n =
              ((e = (0, i.TH)().search),
              (0, a.useMemo)(
                function () {
                  var t = new URLSearchParams(e),
                    n = {};
                  return (
                    t.forEach(function (e, t) {
                      n[t] = e;
                    }),
                    t.has("chain") && (n.coin = t.get("chain")),
                    n
                  );
                },
                [e]
              )),
            r = t.params;
          return Cn(Cn({}, n), r);
        },
        Nn = n(9752),
        Fn = n(3249),
        _n = n(2220),
        Tn = n(8861);
      const In = function (e) {
        return a.createElement(
          "div",
          {
            style: { display: "flex", justifyContent: "center", width: "100%" },
          },
          a.createElement(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-around",
                width: "150px",
              },
            },            
          )
        );
      };
      var An = n(1638),
        On = n(868),
        Rn = n(3832),
        Dn = n(9895),
        Ln = n(9570),
        Wn = n(4593),
        Hn = n(5639),
        Pn = n(3099),
        Mn = n(4096),
        Bn = n(1423),
        jn = (0, V.cn)({ key: "CHAINS", default: ot });
      const zn = function () {
        var e = (0, V.FV)(jn),
          t = e[0],
          n = e[1];
        return {
          chains: t,
          setChains: n,
          resetChains: function () {
            return n(ot);
          },
        };
      };
      var Un = function () {
          return (Un =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Vn = (0, B.Z)(function () {
          return (0, j.Z)({ indicator: { display: "none" } });
        })(Mn.Z),
        qn = (0, B.Z)(function (e) {
          var t = e.spacing;
          return (0,
          j.Z)({ root: { minHeight: t(5), height: t(10), minWidth: t(24), opacity: "1.0" } });
        })(Bn.Z),
        Kn = (0, c.Z)(function (e) {
          return {
            selectedLabel: {
              backgroundColor: "#34D399",
              borderRadius: e.spacing(4),
              color: "white",
              padding: e.spacing(1),
              paddingInline: e.spacing(4),
            },
            label: {
              padding: e.spacing(1),
              paddingInline: e.spacing(4),
              paddingRight: e.spacing(2),
              border: "1px solid #E4E4E4",
              borderRadius: e.spacing(4),
            },
            badge: { position: "absolute" },
            button: { background: "none", border: "0px solid", color: "black" },
          };
        });
      const Yn = function (e) {
        var t = e.link,
          n = e.assetLength,
          r = Sn().coin,
          o = Kn(),
          l = zn().chains;
        return a.createElement(
          Vn,
          { value: r, variant: "scrollable", scrollButtons: "auto" },
          l.map(function (e) {
            return a.createElement(
              qn,
              Un(
                {
                  disableRipple: !0,
                  key: e,
                  component: un.rU,
                  to: t(e),
                  label: a.createElement(
                    "div",
                    { className: r === e ? o.selectedLabel : o.label },
                    a.createElement(m.Z, { display: "inline" }, Ye.get(e)),
                    "   ",
                    a.createElement(
                      m.Z,
                      { display: "inline", style: { opacity: 0.6 } },
                      n(e)
                    ),
                    "optimism" === e &&
                      a.createElement(
                        m.Z,
                        { display: "inline", style: { color: "#FF754C" } },
                        "  New"
                      )
                  ),
                },
                { id: "chain-" + (l = e), "aria-controls": "chain-" + l }
              )
            );
            var l;
          })
        );
      };
      var Gn = n(2387),
        Xn = n(8513),
        Jn = n(6856),
        $n = n(7212),
        Qn = n(5432),
        ea = (0, c.Z)(function (e) {
          return { loadingIndicator: { padding: e.spacing(7) } };
        }),
        ta = function () {
          var e = ea();
          return a.createElement(
            s.Z,
            { className: e.loadingIndicator, container: !0, justify: "center" },
            a.createElement(s.Z, { item: !0 }, a.createElement(O.Z, null))
          );
        };
      const na = function (e) {
        var t = e.children,
          n = e.hasError,
          r = e.isLoading,
          o = e.success,
          l = e.loadingIndicator,
          i = void 0 === l ? a.createElement(ta, null) : l;
        return !o && r
          ? i
          : n
          ? a.createElement(
              m.Z,
              { color: "primary", align: "center" },
              a.createElement("br", null),
              "Data not found!",
              a.createElement("br", null)
            )
          : a.createElement(a.Fragment, null, t);
      };
      var aa = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 4,
        }),
        ra = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 10,
        }),
        oa = function (e) {
          return "number" == typeof e || "string" == typeof e
            ? Math.abs(e) < 1e-4
              ? ra.format(e)
              : aa.format(e)
            : "";
        },
        la = function (e, t) {
          return (e || 0) / Math.pow(10, t);
        },
        ia = function (e, t) {
          return void 0 === t && (t = 18), oa(la(e, t));
        },
        ca = new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }),
        sa = new Intl.NumberFormat("en-US", { maximumFractionDigits: 10 }),
        da = function (e, t) {
          if (
            (void 0 === t && (t = 18),
            "number" == typeof e || "string" == typeof e)
          ) {
            var n = la(e, t);
            return n < 1e-4 ? sa.format(n) : ca.format(n);
          }
          return "";
        },
        ma = function (e, t, n) {
          return (
            void 0 === n && (n = 18),
            "number" == typeof e || "string" == typeof e
              ? la(e, n).toFixed(t)
              : ""
          );
        };
      const ua = function (e) {
        var t = e.children,
          n = e.width;
        return a.createElement(
          "div",
          {
            className: "hello",
            style: {
              width: n,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          },
          t
        );
      };
      var pa = function () {
          return (pa =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        fa = (0, c.Z)(function (e) {
          var t,
            n,
            a,
            r,
            o,
            l,
            i,
            c = e.spacing,
            s = e.breakpoints;
          return {
            logo: { width: c(7), borderRadius: "50%" },
            assetList:
              ((t = {}),
              (t[s.down("sm")] = { paddingRight: c(1) }),
              (t.borderRadius = 12),
              (t.paddingRight = c(2)),
              (t.display = "flex"),
              (t.justifyContent = "space-between"),
              (t.border = "2px solid #ffffff"),
              (t["&:hover"] = {
                border: "2px solid #34D399",
                backgroundColor: "#ffffff",
              }),
              t),
            nativeTokenAssetList:
              ((n = {}),
              (n[s.down("sm")] = { paddingRight: c(1) }),
              (n.borderRadius = 12),
              (n.paddingRight = c(2)),
              (n.display = "flex"),
              (n.backgroundColor = "rgba(52, 211, 153, 0.1)"),
              (n.justifyContent = "space-between"),
              (n.border = "2px solid #ffffff"),
              n),
            asset:
              ((a = {}),
              (a[s.down("sm")] = { paddingRight: c(1) }),
              (a.borderRadius = 12),
              (a.paddingRight = c(8)),
              (a.border = "2px solid #ffffff"),
              (a["&.MuiListItem-root.Mui-disabled"] = {
                opacity: 1,
                border: "2px solid rgba(52, 211, 153, 0.025)",
              }),
              a),
            recommendation:
              ((r = {}),
              (r[s.down("sm")] = { margin: "0px 5px 10px 5px", padding: c(2) }),
              (r.paddingRight = c(2)),
              (r.display = "flex"),
              (r.justifyContent = "space-between"),
              (r.backgroundColor = "rgba(228,228,228,0.2)"),
              (r.border = "2px solid rgba(228,228,228,0)"),
              (r.mixBlendMode = "normal"),
              (r["&:hover"] = { border: "2px solid #34D399" }),
              (r.alignItems = "center"),
              (r.margin = "0px 40px 20px 40px"),
              (r.padding = c(2)),
              (r.borderRadius = c(2)),
              r),
            description: { fontSize: "14px" },
            platformUrl: {
              border: "1px solid #34d399",
              background: "transparent",
              float: "right",
              color: "#34D399",
              width: "max-content",
              "&:hover": { backgroundColor: "transparent" },
            },
            disclaimer:
              ((o = {}),
              (o[s.down("sm")] = { margin: "0px 5px 10px 5px", padding: c(2) }),
              (o.paddingRight = c(2)),
              (o.display = "flex"),
              (o.justifyContent = "flex-start"),
              (o.fontSize = "14px"),
              (o.color = "#87988D"),
              (o.alignItems = "center"),
              (o.margin = "0px 40px 20px 40px"),
              (o.padding = c(2)),
              (o.borderRadius = c(2)),
              o),
            disclaimerText: { marginLeft: "10px" },
            popover: { pointerEvents: "none" },
            popoverPaper: {
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)",
              borderRadius: "12px",
              padding: "24px",
              width: "271px",
            },
            popoverHeading:
              ((l = {
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "160%",
                color: "#3A413D",
              }),
              (l[s.down("sm")] = { fontSize: "12px" }),
              l),
            popoverText:
              ((i = {
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "19px",
                color: "#879880",
              }),
              (i[s.down("sm")] = { fontSize: "10px" }),
              i),
          };
        }),
        ga = (0, B.Z)(function (e) {
          var t = e.spacing,
            n = e.palette;
          return (0,
          j.Z)({ root: { paddingLeft: t(2) }, primary: { height: t(5), fontStyle: "normal", fontWeight: "bold", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.0168em", color: n.secondary.main }, secondary: { height: t(5), fontStyle: "normal", fontWeight: 500, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.0168em", color: n.secondary.main, opacity: 0.6 } });
        })(L.Z),
        va = (0, B.Z)(function (e) {
          var t = e.spacing,
            n = e.palette;
          return (0,
          j.Z)({ root: { textAlign: "right" }, primary: { height: t(5), fontStyle: "normal", fontWeight: "bold", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.0168em", color: n.secondary.main }, secondary: { height: t(5), fontStyle: "normal", fontWeight: 500, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.0168em", color: n.secondary.main, opacity: 0.6 } });
        })(L.Z);
      function Ea(e) {
        return ft.indexOf(e) > -1;
      }
      var ha = function (e) {
        var t,
          n,
          r,
          o,
          l,
          i,
          c,
          s,
          d,
          u,
          p,
          f,
          g,
          v,
          E,
          h,
          y,
          b,
          x = e.asset,
          Z = (e.tokenBalance, e.index),
          w = e.selectedKadenaChain,
          k = e.selectedKadenaToken,
          C = fa(),
          S = Sn(),
          N = S.coin,
          F = S.address,
          _ = rn().userAddress,
          I = (0, At.Ds)().enqueueSnackbar,
          A = a.useState(null),
          O = A[0],
          D = A[1],
          L = Boolean(O),
          W = (0, a.useState)(!1),
          H = W[0],
          P = W[1],
          B = Ft().addAssetsToHide,
          j = _t().assets.get(N),
          z = function () {
            D(null);
          },
          U = function () {
            P(!1);
          },
          V = a.useState(null),
          q = V[0],
          K = V[1],
          Y = function () {
            K(null);
          },
          G = Boolean(q);
        return a.createElement(
          a.Fragment,
          { key: null == x ? void 0 : x.contract_name },
          a.createElement(
            "div",
            {
              className: Ea(null == x ? void 0 : x.contract_address)
                ? C.nativeTokenAssetList
                : C.assetList,
            },
            a.createElement(
              R.Z,
              {
                style: { display: "flex", justifyContent: "space-evenly" },
                className: C.asset,
                button: !0,
                disabled: Ea(null == x ? void 0 : x.contract_address),
                component: un.rU,
                to:
                  "kadena" === N
                    ? T(
                        N,
                        F,
                        null == x ? void 0 : x.contract_address,
                        "transactions",
                        w,
                        k
                      )
                    : T(N, F, null == x ? void 0 : x.contract_address),
              },
              a.createElement(
                Rt.Z,
                null,
                a.createElement(de, {
                  className: C.logo,
                  src: null == x ? void 0 : x.logo_url,
                  alt: null == x ? void 0 : x.contract_name,
                })
              ),
              a.createElement(ga, {
                primary: a.createElement(
                  ua,
                  { width: "20vw" },
                  null == x ? void 0 : x.contract_name
                ),
                secondary:
                  da(
                    Number(null == x ? void 0 : x.balance),
                    null == x ? void 0 : x.contract_decimals
                  ) +
                  " " +
                  fe(null == x ? void 0 : x.contract_ticker_symbol, 20) +
                  " (1" +
                  fe(null == x ? void 0 : x.contract_ticker_symbol, 20) +
                  " = " +
                  oa(null == x ? void 0 : x.quote_rate) +
                  ")",
              }),
              a.createElement(va, {
                primary: a.createElement(
                  a.Fragment,
                  null,
                  ia(null == x ? void 0 : x.quote, 0),
                  " "
                ),
                secondary: a.createElement(
                  m.Z,
                  {
                    style: {
                      color:
                        (null == x ? void 0 : x.quote_pct_change_24h) < 0
                          ? "red"
                          : "#34D399",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: "0.0168em",
                      display: "inline",
                    },
                  },
                  "(",
                  null == x ? void 0 : x.quote_pct_change_24h.toFixed(3),
                  "%)"
                ),
              })
            ),
            a.createElement(
              Lt.Z,
              {
                "aria-label": "menu",
                id: "menu",
                "aria-expanded": L ? "true" : void 0,
                "aria-haspopup": "true",
                onClick: function (e) {
                  D(e.currentTarget);
                },
                style: { padding: 2, backgroundColor: "transparent" },
              },
              a.createElement(Xn.Z, null)
            ),
            a.createElement(
              Wn.Z,
              {
                id: "menu-list",
                anchorEl: O,
                keepMounted: !0,
                open: L,
                onClose: z,
              },
              a.createElement(
                Hn.Z,
                { key: "hide" },
                a.createElement(
                  M.Z,
                  {
                    variant: "text",
                    onClick: function () {
                      z(), P(!0);
                    },
                  },
                  a.createElement(m.Z, null, "Hide Asset")
                )
              ),
              (null === (t = null == x ? void 0 : x.recommendations) ||
              void 0 === t
                ? void 0
                : t.token) &&
                a.createElement(
                  Hn.Z,
                  { key: "earning" },
                  a.createElement(
                    M.Z,
                    {
                      component: un.rU,
                      variant: "text",
                      to: T(
                        N,
                        F,
                        null == x ? void 0 : x.contract_address,
                        "recommendations"
                      ),
                    },
                    a.createElement(
                      m.Z,
                      { style: { textDecoration: "none" } },
                      "Earning Options"
                    )
                  )
                )
            ),
            a.createElement(
              Mt.Z,
              {
                open: H,
                onClose: U,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
              },
              a.createElement(
                Bt.Z,
                { id: "alert-dialog-title" },
                "Hide asset?"
              ),
              a.createElement(
                jt.Z,
                null,
                a.createElement(
                  $n.Z,
                  { id: "alert-dialog-description" },
                  null == x ? void 0 : x.contract_name,
                  " will be hidden from the list"
                )
              ),
              a.createElement(
                Jn.Z,
                null,
                a.createElement(
                  M.Z,
                  { onClick: U, color: "primary" },
                  "Cancel"
                ),
                a.createElement(
                  M.Z,
                  {
                    onClick: function () {
                      U(),
                        B(null == x ? void 0 : x.contract_address, N),
                        I((null == x ? void 0 : x.contract_name) + " hidden", {
                          variant: "warning",
                        });
                    },
                    color: "primary",
                    autoFocus: !0,
                  },
                  "Hide"
                )
              )
            )
          ),
          (null === (n = null == x ? void 0 : x.recommendations) || void 0 === n
            ? void 0
            : n.token) &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                { className: C.recommendation },
                a.createElement(
                  "div",
                  {
                    style: {
                      width: "60%",
                      display: "flex",
                      alignItems: "center",
                    },
                  },
                  a.createElement(
                    m.Z,
                    {
                      "aria-owns": G ? "mouse-over-popover" : void 0,
                      "aria-haspopup": "true",
                      onMouseEnter: function (e) {
                        K(e.currentTarget);
                      },
                      onMouseLeave: Y,
                      style: { display: "flex", alignItems: "center" },
                    },
                    a.createElement(Qn.Z, null)
                  ),
                  a.createElement(
                    m.Z,
                    {
                      display: "inline",
                      className: C.description,
                      style: {
                        paddingLeft: "10px",
                        fontWeight: 500,
                        fontSize: "14px",
                      },
                    },
                    "Deposit ",
                    null === (r = null == x ? void 0 : x.recommendations) ||
                      void 0 === r
                      ? void 0
                      : r.token_name,
                    " and earn  ",
                    a.createElement(
                      m.Z,
                      {
                        display: "inline",
                        style: {
                          color: "#A5710C",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: "20px",
                          textDecoration: "underline",
                        },
                      },
                      (null === (o = null == x ? void 0 : x.recommendations) ||
                      void 0 === o
                        ? void 0
                        : o.max_apr) > 0 &&
                        ((null ===
                          (l = null == x ? void 0 : x.recommendations) ||
                        void 0 === l
                          ? void 0
                          : l.max_apr) ===
                        (null ===
                          (i = null == x ? void 0 : x.recommendations) ||
                        void 0 === i
                          ? void 0
                          : i.min_apr)
                          ? (null ===
                              (c = null == x ? void 0 : x.recommendations) ||
                            void 0 === c
                              ? void 0
                              : c.max_apr.toFixed(2)) + "% APR"
                          : (null ===
                              (s = null == x ? void 0 : x.recommendations) ||
                            void 0 === s
                              ? void 0
                              : s.min_apr.toFixed(2)) +
                            " - " +
                            (null ===
                              (d = null == x ? void 0 : x.recommendations) ||
                            void 0 === d
                              ? void 0
                              : d.max_apr.toFixed(2)) +
                            "% APR")
                    )
                  ),
                  a.createElement(
                    Gn.ZP,
                    {
                      className: C.popover,
                      open: G,
                      anchorEl: q,
                      anchorOrigin: { vertical: "bottom", horizontal: "left" },
                      transformOrigin: { vertical: "top", horizontal: "left" },
                      onClose: Y,
                      disableRestoreFocus: !0,
                    },
                    a.createElement(
                      Dn.Z,
                      { className: C.popoverPaper },
                      !(null === (u = null == x ? void 0 : x.recommendations) ||
                      void 0 === u
                        ? void 0
                        : u.centralised_exchange) &&
                        a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                            m.Z,
                            { className: C.popoverHeading },
                            "Chain"
                          ),
                          a.createElement(
                            m.Z,
                            { className: C.popoverText },
                            "" ===
                              (null ===
                                (p = null == x ? void 0 : x.recommendations) ||
                              void 0 === p
                                ? void 0
                                : p.chain)
                              ? "-"
                              : null ===
                                  (f =
                                    null == x ? void 0 : x.recommendations) ||
                                void 0 === f
                              ? void 0
                              : f.chain.toUpperCase()
                          ),
                          a.createElement("br", null)
                        ),
                      a.createElement(
                        m.Z,
                        { className: C.popoverHeading },
                        "Staking platform"
                      ),
                      a.createElement(
                        m.Z,
                        { className: C.popoverText },
                        null === (g = null == x ? void 0 : x.recommendations) ||
                          void 0 === g
                          ? void 0
                          : g.provider.toUpperCase()
                      ),
                      a.createElement("br", null),
                      a.createElement(
                        m.Z,
                        { className: C.popoverHeading },
                        "Reward token"
                      ),
                      a.createElement(
                        m.Z,
                        {
                          className: C.popoverText,
                          style: { display: "flex", alignItems: "center" },
                        },
                        a.createElement(de, {
                          className: C.logo,
                          src:
                            null ===
                              (v = null == x ? void 0 : x.recommendations) ||
                            void 0 === v
                              ? void 0
                              : v.reward_token_image,
                          alt:
                            null ===
                              (E = null == x ? void 0 : x.recommendations) ||
                            void 0 === E
                              ? void 0
                              : E.reward_token_name,
                        }),
                        "  ",
                        a.createElement(
                          m.Z,
                          { className: C.popoverText, display: "inline" },
                          ge(
                            null ===
                              (h = null == x ? void 0 : x.recommendations) ||
                              void 0 === h
                              ? void 0
                              : h.reward_token_name,
                            40,
                            0
                          )
                        )
                      )
                    )
                  )
                ),
                a.createElement(
                  M.Z,
                  {
                    className: C.platformUrl,
                    onClick: function () {
                      var e;
                      we(me.StakeOrLend, {
                        source: Zr.TokenBalances,
                        recommendation: null == x ? void 0 : x.recommendations,
                        page: 1,
                        index: Z,
                        walletAddress: _,
                      }),
                        window.open(
                          null ===
                            (e = null == x ? void 0 : x.recommendations) ||
                            void 0 === e
                            ? void 0
                            : e.platform_url,
                          "_blank"
                        );
                    },
                  },
                  "staking" ===
                    (null === (y = null == x ? void 0 : x.recommendations) ||
                    void 0 === y
                      ? void 0
                      : y.type) ||
                    "LP staking" ===
                      (null === (b = null == x ? void 0 : x.recommendations) ||
                      void 0 === b
                        ? void 0
                        : b.type)
                    ? "Stake Now"
                    : "Lend Now"
                )
              )
            ),
          j.data.length !== Z + 1 && a.createElement(Wt.Z, null)
        );
      };
      const ya = function (e) {
        var t = e.assetDetails,
          n = e.tokenBalance,
          r = e.selectedKadenaChain,
          o = e.selectedKadenaToken,
          l = (null == t ? void 0 : t.data) || [],
          i = (0, gt.find)(l, function (e) {
            return Ea(null == e ? void 0 : e.contract_address);
          });
        return a.createElement(
          na,
          pa({}, t),
          a.createElement(Wt.Z, null),
          0 === l.length &&
            a.createElement(
              m.Z,
              { color: "primary", align: "center" },
              a.createElement("br", null),
              "No Assets found!",
              a.createElement("br", null)
            ),
          a.createElement(
            Ot.Z,
            { style: { maxHeight: "50vh", overflow: "auto" } },
            i &&
              a.createElement(ha, {
                asset: i,
                tokenBalance: n,
                index: 0,
                selectedKadenaChain: r,
                selectedKadenaToken: o,
              }),
            l.map(function (e, t) {
              return (
                !Ea(null == e ? void 0 : e.contract_address) &&
                a.createElement(ha, {
                  asset: e,
                  tokenBalance: n,
                  index: t,
                  selectedKadenaChain: r,
                  selectedKadenaToken: o,
                })
              );
            })
          )
        );
      };
      var ba = (0, c.Z)(function (e) {
          var t,
            n,
            a,
            r,
            o,
            l,
            i,
            c,
            s = e.spacing,
            d = e.breakpoints;
          return {
            root: {
              height: "100rem",
              display: "flex",
              backgroundColor: "rgba(255,255,255,0.6)",
            },
            grid: {
              backgroundColor: "rgba(255,255,255,0.6)",
              minHeight: "91vh",
            },
            content:
              ((t = {}),
              (t[d.down("sm")] = { paddingTop: s(0) }),
              (t.flexGrow = 1),
              (t.display = "flex"),
              (t.justifyContent = "center"),
              t),
            container:
              ((n = {}),
              (n[d.down("sm")] = { width: "100%" }),
              (n.width = "85%"),
              (n.paddingTop = s(5)),
              (n.justifyContent = "center"),
              n),
            assetsPaper:
              ((a = {}),
              (a[d.down("sm")] = { padding: s(1) }),
              (a.borderRadius = s(5)),
              (a.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.1)"),
              (a.overflow = "hidden"),
              a),
            paper:
              ((r = {}),
              (r[d.down("sm")] = { padding: s(2) }),
              (r.padding = s(5)),
              (r.borderRadius = s(5)),
              (r.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.1)"),
              (r.maxHeight = "75vh"),
              (r.overflow = "auto"),
              r),
            tokenDetailsPaper:
              ((o = {}),
              (o[d.down("sm")] = { padding: s(2) }),
              (o.padding = s(5)),
              (o.borderRadius = s(5)),
              (o.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.1)"),
              o),
            title:
              ((l = {
                padding: s(5),
                paddingLeft: s(8),
                paddingBottom: s(2),
                display: "flex",
                justifyContent: "space-between",
              }),
              (l[d.down("xs")] = {
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "15px",
              }),
              (l.alignItems = "center"),
              l),
            search:
              ((i = {}),
              (i[d.down("sm")] = { width: "50%" }),
              (i.justifyContent = "center"),
              (i.display = "inline-block"),
              (i.marginTop = s(10)),
              i),
            divider: {
              marginLeft: "0px",
              marginRight: "0px",
              alignSelf: "stretch",
              height: "auto",
            },
            typography: ((c = {}), (c[d.down("md")] = { marginTop: s(20) }), c),
            menuButton: { border: "1px solid #34D399" },
            textField: {
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                { border: "none", backgroundColor: "rgba(52, 211, 153, 0.03)" },
              "& .MuiOutlinedInput-input": { color: "#34D399" },
              "&:hover .MuiOutlinedInput-input": { color: "#34D399" },
            },
          };
        }),
        xa = n(5503),
        Za = n(9771),
        wa = (0, xa.ZF)({
          apiKey: "AIzaSyDvvlKItXmdr50x3Yv_5bGsz2zNoXYSUdM",
          authDomain: "unmarshal-pns.firebaseapp.com",
          projectId: "unmarshal-pns",
          storageBucket: "unmarshal-pns.appspot.com",
          messagingSenderId: "838575372165",
          appId: "1:838575372165:web:fb7594eafc7eca7b4e76ec",
          measurementId: "G-SF6CQZ7M5Z",
        }),
        ka = (0, Za.KL)(wa),
        Ca = "FIREBASE_SUBSCRIBED_ADDRESSES",
        Sa = function (e) {
          var t = (localStorage.getItem(Ca) || "").split(",");
          return (0, gt.includes)(t, e);
        },
        Na = "XSCAN_DEVICE_ID",
        Fa = "XSCAN_NEXT_FCM_TOKEN_REFRESH_DATE";
      function _a() {
        return localStorage.getItem(Na);
      }
      function Ta() {
        var e = new Date();
        return (
          e.setMonth(e.getMonth() + 1),
          localStorage.setItem(Fa, e.toDateString())
        );
      }
      var Ia = function (e) {
          return _a() || (localStorage.setItem(Na, e), e);
        },
        Aa = function () {
          var e = (0, At.Ds)().enqueueSnackbar,
            t = Sn().address,
            n = re().post,
            r = (0, a.useState)(Sa(t)),
            o = r[0],
            l = r[1];
          return (
            (0, a.useEffect)(
              function () {
                l(Sa(t));
              },
              [t]
            ),
            {
              requestForNotification: function () {
                return (0, Za.LP)(ka, {
                  vapidKey:
                    "BL7vF6cf362E-hFhYIQ-AN8YgwqH4HQbuGQlgfCGeBVNa7anu00OZoqUcsRV53qgaE4ft03TVIbL_OIYBnvKndc",
                })
                  .then(function (a) {
                    a
                      ? n(tt + "/firebase/subscribe", {
                          data: {
                            fcm_token: a,
                            device_id: Ia(a),
                            wallet_ids: [t],
                          },
                          onSuccess: function (n) {
                            var a = n.data;
                            Ta(),
                              (function (e) {
                                if (!Sa(e)) {
                                  var t = (
                                    localStorage.getItem(Ca) || ""
                                  ).split(",");
                                  t.push(e),
                                    localStorage.setItem(Ca, t.join(","));
                                }
                              })(t),
                              l(!0),
                              (0, gt.isEmpty)(null == a ? void 0 : a.Success)
                                ? e("Duplicate subscription", {
                                    variant: "warning",
                                  })
                                : e(
                                    "Successfully subscribed for transaction alerts",
                                    { variant: "success" }
                                  );
                          },
                          onError: function () {
                            e("Failed to subscribe for notification", {
                              variant: "error",
                            });
                          },
                        })
                      : (e("Failed to subscribe for notification", {
                          variant: "error",
                        }),
                        console.log(
                          "No registration token available. Request permission to generate one."
                        ));
                  })
                  .catch(function () {
                    e("Failed to subscribe for notification", {
                      variant: "error",
                    });
                  });
              },
              requestForWhaleAlert: function (t, a) {
                return (0, Za.LP)(ka, {
                  vapidKey:
                    "BL7vF6cf362E-hFhYIQ-AN8YgwqH4HQbuGQlgfCGeBVNa7anu00OZoqUcsRV53qgaE4ft03TVIbL_OIYBnvKndc",
                })
                  .then(function (r) {
                    r
                      ? n(tt + "/firebase/whale-alert/subscribe", {
                          data: {
                            fcm_token: r,
                            device_id: Ia(r),
                            token_addresses: t.tokenAddresses,
                            type: t.type,
                            threshold: t.threshold,
                          },
                          onSuccess: function (t) {
                            var n = t.data;
                            Ta(),
                              (0, gt.isEmpty)(null == n ? void 0 : n.Success)
                                ? e("Duplicate subscription", {
                                    variant: "warning",
                                  })
                                : (a(),
                                  e(
                                    "Successfully subscribed for whale alerts",
                                    { variant: "success" }
                                  ));
                          },
                          onError: function () {
                            e("Failed to subscribe for notification", {
                              variant: "error",
                            });
                          },
                        })
                      : (e("Failed to subscribe for notification", {
                          variant: "error",
                        }),
                        console.log(
                          "No registration token available. Request permission to generate one."
                        ));
                  })
                  .catch(function () {
                    e("Failed to subscribe for notification", {
                      variant: "error",
                    });
                  });
              },
              refreshFCMToken: function () {
                _a() &&
                  new Date(localStorage.getItem(Fa) || new Date()) <=
                    new Date() &&
                  (0, Za.LP)(ka, {
                    vapidKey:
                      "BL7vF6cf362E-hFhYIQ-AN8YgwqH4HQbuGQlgfCGeBVNa7anu00OZoqUcsRV53qgaE4ft03TVIbL_OIYBnvKndc",
                  }).then(function (e) {
                    e &&
                      n(tt + "/firebase/refresh-token", {
                        data: { fcm_token: e, device_id: _a() },
                        onSuccess: Ta,
                      });
                  });
              },
              isSubscribed: o,
            }
          );
        };
      const Oa = function (e) {
        var t = e.children,
          n = (0, At.Ds)(),
          r = n.enqueueSnackbar,
          o = n.closeSnackbar,
          l = (0, i.k6)(),
          c = Aa().refreshFCMToken;
        return (
          (0, a.useEffect)(function () {
            c(),
              (0, Za.ps)(ka, function (e) {
                var t,
                  n,
                  i = JSON.parse(
                    null === (t = null == e ? void 0 : e.data) || void 0 === t
                      ? void 0
                      : t.transaction
                  ),
                  c =
                    (null == i ? void 0 : i.transaction_hash) ||
                    (null == i ? void 0 : i.id),
                  s =
                    (null === (n = null == e ? void 0 : e.data) || void 0 === n
                      ? void 0
                      : n.chain) || "";
                return r(e.notification.title, {
                  title: e.notification.body,
                  variant: "info",
                  action: function (e) {
                    return a.createElement(
                      "div",
                      null,
                      a.createElement(
                        M.Z,
                        {
                          size: "small",
                          variant: "text",
                          onClick: function () {
                            return o(e);
                          },
                        },
                        "Close"
                      ),
                      a.createElement(Wt.Z, null),
                      a.createElement(
                        M.Z,
                        {
                          size: "small",
                          variant: "text",
                          onClick: function () {
                            return l.push(x(c, s));
                          },
                        },
                        "View"
                      )
                    );
                  },
                });
              });
          }, []),
          t
        );
      };
      var Ra = n(8889),
        Da = n(1034),
        La = n(7397),
        Wa = function () {
          return (Wa =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Ha = function () {
          return a.createElement(
            La.Z,
            { position: "start" },
            a.createElement(
              Lt.Z,
              { type: "submit", size: "small" },
              a.createElement(
                "svg",
                {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684\n          20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726\n          21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231\n          6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908\n          16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z",
                  fill: "#11142D",
                })
              )
            )
          );
        },
        Pa = (0, B.Z)(function (e) {
          return (0,
          j.Z)({ root: { margin: e.spacing(2), background: "#F2F6F4", border: "1px solid #E2E8E5", borderRadius: "8px", padding: "14px", height: e.spacing(9), transition: e.transitions.create(["border-color", "box-shadow"]), "&:focus": { boxShadow: (0, W.U1)(e.palette.primary.main, 0.25) + " 0 0 0 0.2rem", borderColor: e.palette.primary.main } } });
        })(z.Z),
        Ma = (0, c.Z)(function (e) {
          var t = e.palette,
            n = e.spacing,
            a = e.transitions;
          return {
            form: { width: "100%" },
            paper: { maxHeight: 300, overflow: "scroll", borderRadius: 10 },
            listItem: { width: "100%" },
            listItemIcon: { minWidth: 30, "& img": { borderRadius: "50%" } },
            listItemText: {
              "& .MuiListItemText-secondary": {
                color: t.text.primary,
                opacity: "0.5",
              },
            },
            Input: {
              height: n(9),
              background: "#F2F6F4",
              border: "1px solid #E2E8E5",
              borderRadius: "8px",
              width: "300px",
            },
            autoComplete: {
              "& .MuiAutocomplete-endAdornment": {
                display: "none",
                border: "0px solid",
              },
              width: "max-content",
              margin: n(2),
            },
            input: {
              padding: n(1, 2),
              borderRadius: "4px",
              border: "0px solid",
              height: n(4),
              transition: a.create(["border-color", "box-shadow"]),
            },
            progress: { position: "relative", right: 25 },
          };
        });
      const Ba = function () {
        var e = Sn(),
          t = e.txID,
          n = e.address,
          r = Xr(),
          o = (0, a.useState)(),
          l = o[0],
          c = o[1],
          s = (0, qt.Z)(),
          m = (0, Pt.Z)(s.breakpoints.down("xs")),
          u = Ma(),
          p = (0, i.k6)(),
          f = sn(),
          g = ce(),
          v = g.getTokens,
          E = g.tokens,
          h = g.reset,
          y = E.data || [],
          b = (0, a.useState)(l),
          x = b[0],
          Z = b[1],
          w = (0, a.useCallback)(
            (0, A.Z)(function (e) {
              return v(e);
            }, 300),
            []
          ),
          k = function (e) {
            var t,
              n =
                null === (t = null == e ? void 0 : e.target) || void 0 === t
                  ? void 0
                  : t.value;
            c(n),
              Z(n),
              (null == n ? void 0 : n.length) <= 10 &&
                /^[a-zA-Z]+$/.test(n) &&
                w(n);
          };
        return (
          (0, a.useEffect)(function () {
            return h;
          }, []),
          (null == l ? void 0 : l.length) <= 10 &&
          /^[a-zA-Z]*$/.test(l) &&
          (y.length > 0 || E.isLoading)
            ? a.createElement(P.ZP, {
                fullWidth: !m,
                autoHighlight: !0,
                autoSelect: !0,
                freeSolo: !0,
                onChange: function (e, t, n) {
                  "select-option" === n &&
                    p.push(I(Je.get(t.blockchain), t.contract));
                },
                options: y,
                noOptionsText: a.createElement(a.Fragment, null),
                className: u.autoComplete,
                getOptionLabel: function (e) {
                  return e.symbol;
                },
                filterOptions: function (e) {
                  return e.filter(function (e) {
                    return Object.values(je).includes(e.blockchain);
                  });
                },
                renderInput: function (e) {
                  return a.createElement(
                    H.Z,
                    Wa({}, e, {
                      autoFocus: !0,
                      placeholder:
                        (m ? "" : "Search by ") +
                        " ENS / UNS / Address / Txn Hash",
                      fullWidth: !1,
                      onChange: k,
                      InputProps: Wa(Wa({}, e.InputProps), {
                        classes: f,
                        className: u.Input,
                        endAdornment: a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(Ha, null),
                          E.isLoading
                            ? a.createElement(O.Z, {
                                className: u.progress,
                                color: "primary",
                                size: 20,
                              })
                            : null,
                          e.InputProps.endAdornment
                        ),
                      }),
                      inputProps: Wa(Wa({}, e.inputProps), {
                        className: u.input,
                        value: l,
                      }),
                    })
                  );
                },
                renderOption: function (e) {
                  return a.createElement(
                    R.Z,
                    { className: u.listItem },
                    a.createElement(
                      D.Z,
                      { className: u.listItemIcon },
                      a.createElement(de, {
                        src: null == e ? void 0 : e.image,
                        width: 20,
                        height: 20,
                      })
                    ),
                    a.createElement(L.Z, {
                      className: u.listItemText,
                      primary:
                        (null == e ? void 0 : e.name) +
                        " (" +
                        (null == e ? void 0 : e.symbol) +
                        ")",
                      secondary: ge(null == e ? void 0 : e.contract),
                    }),
                    null == e ? void 0 : e.blockchain
                  );
                },
              })
            : a.createElement(
                "form",
                {
                  onSubmit: function (e) {
                    e.preventDefault(), r(l);
                  },
                },
                a.createElement(
                  d.Z,
                  { mdDown: !0 },
                  a.createElement(Pa, {
                    style: { width: "300px" },
                    fullWidth: !m,
                    autoFocus: !0,
                    placeholder:
                      (m ? "" : "Search by ") +
                      " ENS / UNS / Address / Txn Hash",
                    onChange: k,
                    onFocus: function () {
                      c(x || t || n);
                    },
                    onBlur: function () {
                      c(ge(l || ""));
                    },
                    defaultValue: ge(t || n),
                    value: l,
                    endAdornment: a.createElement(Ha, null),
                  })
                ),
                a.createElement(
                  d.Z,
                  { lgUp: !0 },
                  a.createElement(Pa, {
                    style: { width: "180px" },
                    fullWidth: !m,
                    autoFocus: !0,
                    placeholder:
                      (m ? "" : "Search by ") +
                      " ENS / UNS / Address / Txn Hash",
                    onChange: k,
                    onFocus: function () {
                      c(x || t || n);
                    },
                    onBlur: function () {
                      c(ge(l || ""));
                    },
                    defaultValue: ge(t || n),
                    value: l,
                    endAdornment: a.createElement(Ha, null),
                  })
                )
              )
        );
      };
      var ja = n(7982),
        za = n(1115),
        Ua = function () {
          return (Ua =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      var Va = (0, V.cn)({ key: "Marsh_Balance", default: q }),
        qa = (0, V.cn)({ key: "Wallet_Balance", default: q });
      const Ka = function () {
        var e = (0, V.FV)(Va),
          t = e[0],
          n = e[1],
          a = le(),
          r = (0, V.FV)(qa),
          o = r[0],
          l = r[1],
          i = (function () {
            var e = re().post;
            return function (t, n, a) {
              return (
                void 0 === a && (a = {}),
                e(
                  n,
                  Ua(Ua({}, a), {
                    beforeFetch: function () {
                      return t(function (e) {
                        return Ua(Ua({}, e), { isLoading: !0 });
                      });
                    },
                    onSuccess: function (e) {
                      var n = e.data;
                      return t(Ua(Ua({}, q), { data: n, success: !0 }));
                    },
                    onError: function (e) {
                      return t(
                        Ua(Ua({}, q), { hasError: !0, success: !1, error: e })
                      );
                    },
                  })
                )
              );
            };
          })();
        return {
          tokenBalance: t.data,
          getTokenBalance: function (e) {
            a(
              n,
              "https://feature-request.prod.unmarshal.com/address/" +
                e +
                "/marsh-balance"
            );
          },
          walletBalance: o,
          getWalletBalance: function (e) {
            i(l, nt + "/v1/balance", {
              params: { walletAddress: e.toLowerCase() },
            });
          },
        };
      };
      var Ya = n(6146),
        Ga = n(2727);
      const Xa = function (e) {
          var t = e.children,
            n = e.content,
            r = (0, a.useState)(!1),
            o = r[0],
            l = r[1],
            i = (0, a.useCallback)(
              (0, A.Z)(function () {
                return l(!1);
              }, 2e3),
              []
            ),
            c = function () {
              l(!0), i();
            };
          return a.createElement(
            a.Fragment,
            null,
            t,
            "" !== n &&
              null != n &&
              a.createElement(
                On.ZP,
                {
                  title: "Copy to clipboard",
                  arrow: !0,
                  interactive: !0,
                  placement: "top",
                },
                a.createElement(
                  Lt.Z,
                  {
                    size: "small",
                    onClick: function () {
                      return (
                        (e = n),
                        (t = c),
                        (a = function () {
                          return alert("Failed to copy");
                        }),
                        void (navigator.clipboard
                          ? navigator.clipboard.writeText(e).then(t, a)
                          : (function (e) {
                              var t = document.createElement("textarea");
                              (t.value = e),
                                (t.style.top = "0"),
                                (t.style.left = "0"),
                                (t.style.position = "fixed"),
                                document.body.appendChild(t),
                                t.focus(),
                                t.select();
                              try {
                                var n = document.execCommand("copy")
                                  ? "successful"
                                  : "unsuccessful";
                                console.log(
                                  "Fallback: Copying text command was " + n
                                );
                              } catch (e) {
                                console.error(
                                  "Fallback: Oops, unable to copy",
                                  e
                                );
                              }
                              document.body.removeChild(t);
                            })(e))
                      );
                      var e, t, a;
                    },
                  },
                  o
                    ? a.createElement("img", { src: Ga, alt: "copied" })
                    : a.createElement("img", { src: Ya, alt: "click to copy" })
                )
              )
          );
        },
        Ja = function () {
          var e = an(),
            t = e.isConnected,
            n = e.openWalletConnectOptions,
            r = e.userAddress,
            o = e.disconnect,
            l = Ka(),
            i = l.tokenBalance,
            c = l.getTokenBalance,
            u = a.useState(null),
            p = u[0],
            f = u[1],
            g = Boolean(p),
            v = function () {
              f(null);
            };
          return (
            (0, a.useEffect)(
              function () {
                r &&
                  (Ze(r),
                  Ce.set_once({ userAddress: r, type: ue.Wallet }),
                  we(me.WalletConnect, { action: "connect", walletAddress: r }),
                  c(r));
              },
              [r]
            ),
            a.createElement(
              s.Z,
              { direction: "row", justifyContent: "space-around" },
              !t &&
                a.createElement(
                  M.Z,
                  {
                    variant: "contained",
                    size: "small",
                    style: {
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      padding: "12px 20px",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                    },
                    onClick: function () {
                      return n();
                    },
                  },
                  "Connect Wallet"
                ),
              t &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    s.Z,
                    {
                      direction: "row",
                      style: { display: "flex" },
                      alignItems: "center",
                    },
                    a.createElement(
                      d.Z,
                      { smDown: !0 },
                      i > 0 &&
                        a.createElement(
                          m.Z,
                          {
                            style: {
                              background: "#EBF2EF",
                              border: "1px solid #E2E8E5",
                              borderRadius: "100px",
                              padding: "8px 12px",
                              display: "flex",
                              alignItems: "center",
                              marginRight: "15px",
                            },
                          },
                          a.createElement("img", {
                            src: y,
                            alt: "Marsh",
                            width: 25,
                            height: 25,
                          }),
                          "  ",
                          i.toFixed(2)
                        )
                    ),
                    a.createElement(
                      m.Z,
                      {
                        style: {
                          paddingLeft: 4,
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                        },
                      },
                      a.createElement(Xa, { content: r }, ge(r || "", 4, 4)),
                      a.createElement(
                        Lt.Z,
                        {
                          onClick: function (e) {
                            f(e.currentTarget);
                          },
                          size: "small",
                        },
                        a.createElement(za.Z, null)
                      )
                    )
                  )
                ),
              a.createElement(
                Wn.Z,
                { anchorEl: p, open: g, onClose: v },
                a.createElement(
                  Hn.Z,
                  {
                    onClick: function () {
                      v(), o();
                    },
                    disableRipple: !0,
                  },
                  a.createElement(m.Z, null, "Disconnect")
                )
              ),
              a.createElement(tn, null)
            )
          );
        };
      var $a = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        Qa = [
        ],
        er = (0, V.cn)({ key: "HiddenAdds", default: [] }),
        tr = (0, c.Z)(function (e) {
          var t;
          return (0,
          j.Z)({ advertisement: { width: "100%" }, imgContainer: { width: "100%", position: "relative", top: "0px", left: "0px", display: "flex", justifyContent: "center" }, card: { height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }, adImg: { height: "80px", position: "relative", top: "0px", left: "0px" }, closeIcon: { position: "absolute", height: "20px", top: "5%", left: "90%", "&:hover": { cursor: "pointer" } }, appbar: ((t = {}), (t[e.breakpoints.down("md")] = { padding: "2px 8px" }), (t.padding = "4px 64px"), (t.background = "#F9FCFA"), (t.boxShadow = "0px 0px 16px rgba(58, 65, 61, 0.1)"), t) });
        }),
        nr = function (e) {
          var t = e.mobileImageSource,
            n = e.navigationLink,
            r = e.name,
            o = e.backgroundColor,
            l = tr(),
            i = (0, V.FV)(er),
            c = i[0],
            s = i[1];
          return a.createElement(
            "div",
            { className: l.card, key: t },
            a.createElement(
              "div",
              { className: l.imgContainer, style: { backgroundColor: o } },
              a.createElement(
                "a",
                { href: n, target: "_blank", rel: "noreferrer" },
                a.createElement("img", { className: l.adImg, src: t, alt: r })
              ),
              a.createElement("img", {
                className: l.closeIcon,
                src: kn,
                alt: "close",
                onClick: function () {
                  s($a($a([], c), [r]));
                },
              })
            )
          );
        };
      const ar = function () {
        var e = tr(),
          t = Nr().toggleMenu,
          n = (0, V.sJ)(er),
          r = Qa.filter(function (e) {
            return -1 === n.indexOf(e.name);
          });
        return a.createElement(
          u.Z,
          { position: "sticky" },
          a.createElement(
            d.Z,
            { lgUp: !0 },
            a.createElement(
              s.Z,
              { container: !0, direction: "column", justify: "flex-end" },
              a.createElement(
                pn.Z,
                {
                  animation: "slide",
                  interval: 5e3,
                  indicators: !1,
                  navButtonsAlwaysInvisible: !0,
                },
                r.map(function (e) {
                  return a.createElement(nr, {
                    name: e.name,
                    mobileImageSource: e.mobileImageSource,
                    navigationLink: e.navigationLink,
                    key: e.mobileImageSource,
                    backgroundColor: e.backgroundColor,
                  });
                })
              )
            )
          ),
          a.createElement(
            p.Z,
            { className: e.appbar },
            a.createElement(
              s.Z,
              { container: !0, justify: "space-between", alignItems: "center" },
              a.createElement(
                d.Z,
                { mdDown: !0 },
                a.createElement(
                  s.Z,
                  { item: !0, xs: 4 },
                  a.createElement(
                    Ra.Z,
                    { display: "flex" },
                    a.createElement(
                      un.rU,
                      { to: b },
                      a.createElement("img", { src: f, alt: "logo" })
                    ),
                    a.createElement(Ra.Z, { width: 50 })
                  )
                )
              ),
              a.createElement(
                d.Z,
                { only: ["xl", "lg"] },
                a.createElement(
                  s.Z,
                  { item: !0 },
                  a.createElement(
                    Lt.Z,
                    { onClick: t },
                    a.createElement("img", {
                      src: Da,
                      alt: "menu",
                      width: "30px",
                    })
                  )
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 8,
                  style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  },
                },
                a.createElement(d.Z, { xsDown: !0 }, a.createElement(Ba, null)),
                a.createElement(Ja, null)
              )
            )
          ),
          a.createElement(Wt.Z, null)
        );
      };
      var rr = (0, c.Z)(function (e) {
        var t,
          n,
          a = e.spacing,
          r = e.breakpoints;
        return (0,
        j.Z)({ container: ((t = { display: "flex", justifyContent: "center", width: "100%", margin: "auto", marginTop: a(5) }), (t[r.down("sm")] = { marginTop: a(0) }), t), paper: ((n = {}), (n[r.down("sm")] = { padding: a(5), width: "100%" }), (n.backgroundColor = "#ffffff"), (n.padding = a(5)), (n.borderRadius = a(5)), (n.width = "70%"), (n.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.1)"), n) });
      });
      const or = function () {
        var e = rr();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            Rn.Z,
            { className: e.container },
            a.createElement(
              "div",
              { className: e.paper },
              a.createElement(xr, null)
            )
          )
        );
      };
      var lr = n(4433),
        ir = function () {
          return (ir =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        cr = Array.from(et.keys()),
        sr = new Map([]);
      cr.forEach(function (e) {
        return et.get(e).forEach(function (e) {
          return sr.set(e, q);
        });
      });
      var dr = (0, V.cn)({ key: "LP_POSITIONS", default: sr });
      var mr = (0, c.Z)(function (e) {
        var t,
          n,
          a = e.spacing,
          r = e.breakpoints;
        return {
          logo: { width: a(5), height: a(5), borderRadius: "50%" },
          container:
            ((t = {}),
            (t[r.down("sm")] = { maxHeight: "200px" }),
            (t.display = "flex"),
            (t.justifyContent = "center"),
            (t.margin = "auto"),
            (t.marginTop = a(1)),
            t),
          paper:
            ((n = {}),
            (n[r.down("sm")] = {
              padding: a(2),
              width: "100%",
              overflow: "auto",
            }),
            (n.padding = a(2)),
            (n.borderRadius = a(5)),
            (n.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.1)"),
            (n.width = "80%"),
            (n.overflowX = "auto"),
            n),
          typography: { width: "100%", marginTop: a(4), textAlign: "center" },
        };
      });
      const ur = function () {
          var e,
            t,
            n,
            r,
            o = (function () {
              var e = (0, V.FV)(dr),
                t = e[0],
                n = e[1],
                a = (0, V.rb)(dr),
                r = re().get;
              return {
                lpTokens: t,
                getLPTokens: function (e, t) {
                  return r(
                    "/v2/protocols/" + e + "/address/" + t + "/positions",
                    {
                      beforeFetch: function () {
                        return n(function (t) {
                          var n = new Map(t),
                            a = t.get(e);
                          return n.set(e, ir(ir({}, a), { isLoading: !0 })), n;
                        });
                      },
                      onSuccess: function (t) {
                        var a = t.data;
                        return n(function (t) {
                          var n = new Map(t),
                            r = t.get(e);
                          return (
                            n.set(e, ir(ir({}, r), { data: a, success: !0 })), n
                          );
                        });
                      },
                      onError: function (t) {
                        return n(function (n) {
                          var a = new Map(n),
                            r = n.get(e);
                          return (
                            a.set(
                              e,
                              ir(ir({}, r), {
                                hasError: !0,
                                success: !1,
                                isLoading: !1,
                                error: t,
                              })
                            ),
                            a
                          );
                        });
                      },
                    }
                  );
                },
                resetState: a,
              };
            })(),
            l = o.lpTokens,
            i = o.getLPTokens,
            c = o.resetState,
            s = Sn(),
            d = s.coin,
            u = s.address,
            p = mr();
          (0, a.useEffect)(
            function () {
              return (
                ot.map(function (e) {
                  if ("ethereum" === e || "bsc" === e) {
                    var t = et.get(e);
                    null == t ||
                      t.map(function (e) {
                        i(e, u);
                      });
                  }
                }),
                c
              );
            },
            [u]
          );
          var f = "ethereum";
          void 0 !== d && (f = d);
          var g =
              null === (e = et.get(d)) || void 0 === e
                ? void 0
                : e.every(function (e) {
                    var t, n;
                    return (
                      (null ===
                        (n =
                          null === (t = l.get(e)) || void 0 === t
                            ? void 0
                            : t.data) || void 0 === n
                        ? void 0
                        : n.positions.length) < 1
                    );
                  }),
            v =
              null === (t = et.get(d)) || void 0 === t
                ? void 0
                : t.every(function (e) {
                    var t;
                    return null === (t = l.get(e)) || void 0 === t
                      ? void 0
                      : t.success;
                  }),
            E =
              null === (n = et.get(d)) || void 0 === n
                ? void 0
                : n.every(function (e) {
                    var t;
                    return null === (t = l.get(e)) || void 0 === t
                      ? void 0
                      : t.isLoading;
                  }),
            h =
              null === (r = et.get(d)) || void 0 === r
                ? void 0
                : r.every(function (e) {
                    var t;
                    return null === (t = l.get(e)) || void 0 === t
                      ? void 0
                      : t.hasError;
                  });
          return g
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  m.Z,
                  { variant: "h5", className: p.typography },
                  "LP Positions"
                ),
                a.createElement(
                  Rn.Z,
                  { className: p.container, maxWidth: "md" },
                  a.createElement(
                    Dn.Z,
                    { className: p.paper },
                    a.createElement(
                      na,
                      { hasError: h, isLoading: E, success: v },
                      a.createElement(
                        m.Z,
                        { color: "primary", align: "center" },
                        "No LP Tokens found!"
                      )
                    )
                  )
                )
              )
            : a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  m.Z,
                  { variant: "h5", className: p.typography },
                  "LP Positions"
                ),
                a.createElement(
                  Rn.Z,
                  { className: p.container, maxWidth: "md", key: d },
                  a.createElement(
                    Dn.Z,
                    { className: p.paper },
                    a.createElement(
                      na,
                      { hasError: h, isLoading: E, success: v },
                      (et.get(f) || []).map(function (e) {
                        var t;
                        return (
                          l.get(e).success &&
                          (null === (t = l.get(e)) || void 0 === t
                            ? void 0
                            : t.data.positions.map(function (e) {
                                var t,
                                  n,
                                  r,
                                  o,
                                  l,
                                  i,
                                  c,
                                  s,
                                  d,
                                  m,
                                  u = ia(
                                    null === (t = e.pool_token) || void 0 === t
                                      ? void 0
                                      : t.quote,
                                    0
                                  ).split("."),
                                  f = u[0] + "." + u[1].substring(0, 3);
                                return a.createElement(
                                  a.Fragment,
                                  { key: e.pool_token.contract_name },
                                  a.createElement(
                                    R.Z,
                                    {
                                      style: {
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                      },
                                    },
                                    a.createElement(
                                      lr.Z,
                                      { max: 2 },
                                      a.createElement(Dt.Z, {
                                        className: p.logo,
                                        alt:
                                          null === (n = e.token_0) ||
                                          void 0 === n
                                            ? void 0
                                            : n.contract_name,
                                        src:
                                          null === (r = e.token_0) ||
                                          void 0 === r
                                            ? void 0
                                            : r.logo_url,
                                      }),
                                      a.createElement(Dt.Z, {
                                        className: p.logo,
                                        alt:
                                          null === (o = e.token_1) ||
                                          void 0 === o
                                            ? void 0
                                            : o.contract_name,
                                        src:
                                          null === (l = e.token_1) ||
                                          void 0 === l
                                            ? void 0
                                            : l.logo_url,
                                      })
                                    ),
                                    a.createElement(
                                      On.ZP,
                                      {
                                        title:
                                          (null === (i = e.pool_token) ||
                                          void 0 === i
                                            ? void 0
                                            : i.contract_name) +
                                          " " +
                                          e.token_0.contract_name +
                                          "/" +
                                          e.token_1.contract_name,
                                      },
                                      a.createElement(ga, {
                                        primary: a.createElement(
                                          ua,
                                          { width: "15vw" },
                                          fe(
                                            (null === (c = e.pool_token) ||
                                            void 0 === c
                                              ? void 0
                                              : c.contract_name) +
                                              " " +
                                              e.token_0.contract_name +
                                              "/" +
                                              e.token_1.contract_name,
                                            20
                                          )
                                        ),
                                        secondary:
                                          Number(
                                            null === (s = e.pool_token) ||
                                              void 0 === s
                                              ? void 0
                                              : s.balance
                                          ).toFixed(3) +
                                          " " +
                                          fe(
                                            null === (d = e.pool_token) ||
                                              void 0 === d
                                              ? void 0
                                              : d.contract_ticker_symbol,
                                            20
                                          ) +
                                          " . " +
                                          oa(
                                            null === (m = e.pool_token) ||
                                              void 0 === m
                                              ? void 0
                                              : m.quote_rate
                                          ),
                                      })
                                    ),
                                    a.createElement(va, { primary: f })
                                  )
                                );
                              }))
                        );
                      })
                    )
                  )
                )
              );
        },
        pr = (0, c.Z)(function (e) {
          var t,
            n,
            a,
            r,
            o,
            l,
            i,
            c,
            s,
            d,
            m,
            u,
            p,
            f,
            g,
            v,
            E,
            h,
            y,
            b,
            x,
            Z,
            w;
          return {
            table:
              ((t = {}),
              (t[e.breakpoints.down("sm")] = {
                padding: "4px 6px",
                margin: "6px 0",
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
              }),
              (t.backgroundColor = "#e3e7e5"),
              (t.border = "1px solid #e2e8e5"),
              (t.borderRadius = "12px"),
              (t.color = "text.disabled"),
              (t.display = "flex"),
              (t.padding = "16px 32px"),
              (t.alignItems = "center"),
              (t.margin = "12px 0"),
              t),
            box:
              ((n = {}),
              (n[e.breakpoints.down("sm")] = { width: "100%" }),
              (n.width = "70%"),
              (n.margin = "auto"),
              n),
            tableHeader: { display: "flex", alignItems: "center" },
            container:
              ((a = {}),
              (a[e.breakpoints.down("sm")] = { width: "100%", padding: "0px" }),
              (a.backgroundColor = "#F9FCFA"),
              (a.marginLeft = 0),
              (a.display = "flex"),
              (a.flexDirection = "column"),
              a),
            detailsContainer:
              ((r = {}),
              (r[e.breakpoints.down("sm")] = { width: "100%" }),
              (r.display = "flex"),
              (r.flexDirection = "column"),
              r),
            grid:
              ((o = {
                backgroundColor: "rgba(255,255,255,0.6)",
                minHeight: "91vh",
                display: "flex",
                justifyContent: "center",
              }),
              (o[e.breakpoints.down("md")] = {
                flexDirection: "column",
                justifyContent: "flex-start",
              }),
              o),
            search:
              ((l = {}),
              (l[e.breakpoints.down("sm")] = { width: "50%" }),
              (l.justifyContent = "center"),
              (l.marginTop = e.spacing(10)),
              l),
            content:
              ((i = {}),
              (i[e.breakpoints.down("md")] = {
                paddingTop: e.spacing(0),
                maxWidth: "95vw",
              }),
              (i.flexGrow = 1),
              (i.maxWidth = "68vw"),
              (i.margin = "auto"),
              i),
            recommendationHeaderFont:
              ((c = { fontSize: "16px", fontWeight: 500, color: "#3A413D" }),
              (c[e.breakpoints.down("md")] = { fontSize: "14px" }),
              (c[e.breakpoints.down("sm")] = { fontSize: "12px" }),
              c),
            recommendationListFont:
              ((s = { color: "#879880", textDecoration: "none" }),
              (s[e.breakpoints.down("md")] = {
                fontSize: "14px",
                color: "#87988D",
              }),
              (s[e.breakpoints.down("sm")] = { fontSize: "12px" }),
              s),
            recommendationMobileCard: {
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            },
            dropdown: {
              background: "#F9FCFA",
              border: "1px solid #E2E8E5",
              borderRadius: "100px",
              color: "#87988D",
              "&:hover": { background: "#F9FCFA" },
            },
            menuButton: { fontSize: "12px" },
            replyButton: {
              backgroundColor: "#34D399",
              padding: "2 3",
              "&:hover": { backgroundColor: "#12B177" },
              height: 46,
              ":disabled": { backgroundColor: "text.disabled" },
            },
            recommendationComment: {
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: "15px 0",
            },
            replyText:
              ((d = {}),
              (d[e.breakpoints.down("sm")] = { width: "70%" }),
              (d.width = "80%"),
              d),
            recommendationButton: {
              backgroundColor: "#34D399",
              "&:hover": { backgroundColor: "#12B177" },
              height: 46,
              width: "max-content",
            },
            formText: {
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "160%",
              color: "#3A413D",
              marginTop: "8px",
            },
            textField: {
              marginTop: "8px",
              marginBottom: "16px",
              background: "#F2F6F4",
              boxSizing: "border-box",
              borderRadius: "8px",
            },
            logo:
              ((m = { width: e.spacing(7), borderRadius: "40%" }),
              (m[e.breakpoints.down("sm")] = { width: e.spacing(5) }),
              m),
            lpLogo:
              ((u = {
                width: e.spacing(5),
                height: e.spacing(5),
                borderRadius: "50%",
              }),
              (u[e.breakpoints.down("sm")] = {
                width: e.spacing(3),
                height: e.spacing(3),
              }),
              u),
            recommendation: {
              display: "flex",
              alignItems: "center",
              width: "100%",
            },
            recommendationList:
              ((p = {
                backgroundColor: "#f2f6f4",
                border: "1px solid #e2e8e5",
                borderRadius: "12px",
                color: "text.primary",
                display: "flex",
                padding: "16px 32px",
                margin: "12px 0",
                alignItems: "center",
              }),
              (p[e.breakpoints.down("sm")] = {
                padding: "4px 8px",
                width: "97%",
              }),
              p),
            recommendationHeader:
              ((f = {}),
              (f[e.breakpoints.down("sm")] = {
                display: "flex",
                alignItems: "center",
                padding: "4px 8px",
                width: "97%",
              }),
              f),
            promotedRecommendationList:
              ((g = {
                backgroundColor: "rgba(52, 211, 153, 0.1)",
                border: "1px solid #e2e8e5",
                borderRadius: "12px",
                color: "text.primary",
                display: "flex",
                padding: "16px 32px",
                margin: "12px 0",
                alignItems: "center",
              }),
              (g[e.breakpoints.down("sm")] = {
                padding: "4px 8px",
                width: "95%",
              }),
              g),
            recommendationDiv:
              ((v = { maxHeight: "60vh", overflowY: "auto", width: "100%" }),
              (v[e.breakpoints.down("sm")] = { width: "fit-content" }),
              v),
            platformUrl: {
              textDecoration: "none",
              color: "#ffffff",
              padding: e.spacing(1.5),
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
            button: {
              borderRadius: e.spacing(2),
              padding: e.spacing(1.5),
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
              width: "103px",
              height: "40px",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "19px",
            },
            mobileButton: {
              borderRadius: e.spacing(2),
              width: "93px",
              height: "32px",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
            },
            like: { padding: 0 },
            shake: { width: "20px", height: "20px" },
            heading:
              ((E = { fontSize: "24px", fontWeight: 600 }),
              (E[e.breakpoints.down("md")] = {
                fontSize: "20px",
                wrap: "no-wrap",
              }),
              E),
            disclaimer: {
              borderRadius: "8px",
              fontSize: "14px",
              color: "#c2c8c5",
              padding: "8px 16px",
            },
            tokenSearch:
              ((h = {
                width: "300px",
                height: "44px",
                background: "#F9FCFA",
                border: "1px solid #E2E8E5",
                borderRadius: "8px",
              }),
              (h[e.breakpoints.down("sm")] = { width: "70vw" }),
              h),
            tokenSearchInput: { border: "0px" },
            tooltipPaper: {
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)",
              borderRadius: "12px",
              padding: "24px",
              width: "330px",
            },
            radio: {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            },
            filterCategory: {
              fontWeight: 700,
              fontSize: "16px",
              color: "#3A413D",
            },
            filterButton:
              ((y = {
                background: "#F2F6F4",
                marginLeft: e.spacing(3),
                border: "1px solid #E2E8E5",
                borderRadius: "100px",
                color: "#87988D",
                display: "flex",
                alignItems: "center",
                "&:hover": { background: "#F2F6F4" },
              }),
              (y[e.breakpoints.down("sm")] = {
                marginLeft: e.spacing(1),
                width: "max-content",
              }),
              y),
            filterSection: { display: "flex", justifyContent: "flex-start" },
            connectWallet: {
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              padding: "12px 20px",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            },
            recommendationTeaser:
              ((b = { display: "flex", justifyContent: "space-evenly" }),
              (b[e.breakpoints.down("sm")] = { flexDirection: "column" }),
              b),
            teaserHeader:
              ((x = { fontWeight: 700, fontSize: "36px", color: "#3A413D" }),
              (x[e.breakpoints.down("sm")] = { fontSize: "24px" }),
              x),
            teaserText:
              ((Z = { fontWeight: 600, fontSize: "16px", color: "#87988D" }),
              (Z[e.breakpoints.down("sm")] = { fontSize: "12px" }),
              Z),
            promoted: {
              fontSize: "12px",
              background: "#FFF1D6",
              border: "1px solid #CEB37E",
              borderRadius: "6px",
              width: "max-content",
              paddingInline: "5px",
              color: "#A5710C",
              display: "flex",
              alignItems: "center",
            },
            page: {
              background: "#F9FCFA",
              border: "1px solid #E2E8E5",
              padding: "12px",
              height: "40px",
              borderRadius: "8px",
            },
            selectedPage: {
              background: "rgba(13, 182, 120, 0.1)",
              border: "1px solid #0DB678",
              padding: "12px",
              height: "40px",
              borderRadius: "8px",
            },
            popoverPaper: { boxShadow: "none", borderRadius: "12px" },
            comingSoonText:
              ((w = {
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#87988D",
                width: "50%",
                textAlign: "center",
              }),
              (w[e.breakpoints.down("md")] = { width: "90%" }),
              w),
            leaderHeader: {
              backgroundColor: "#24956C",
              color: "#ffffff",
              "& .MuiCardHeader-title": {
                textAlign: "right",
                fontWeight: 700,
                fontSize: "28px",
              },
            },
          };
        }),
        fr = function () {
          return a.createElement("iframe", {
            id: "twitter-widget-4",
            scrolling: "no",
            frameBorder: "0",
            allowTransparency: !0,
            allowFullScreen: !0,
            style: {
              visibility: "visible",
              width: "75%",
              height: "500px",
              display: "block",
              flexGrow: 1,
              marginInline: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            },
            title: "Twitter Timeline",
            src: "",
          });
        };
      var gr = function () {
          return (gr =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        vr = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        };
      function Er(e) {
        var t;
        return (0, gt.sum)(
          (null === (t = null == e ? void 0 : e.data) || void 0 === t
            ? void 0
            : t.map(function (e) {
                return Number(e.quote);
              })) || []
        );
      }
      const hr = function () {
        var e = _t(),
          t = e.assets,
          n = e.getAssets,
          r = e.getKadenaAssets,
          o = e.resetState,
          l = e.kadenaTokenList,
          c = e.getKadenaTokenList,
          u = ba(),
          p = Sn().address,
          f = (0, a.useState)(),
          g = f[0],
          v = f[1],
          E = Sn().coin,
          h = Aa(),
          y = h.requestForNotification,
          x = h.isSubscribed,
          Z = Ft(),
          k = Z.hideAssetsValuedLessThanOneDollar,
          C = Z.toggleHideAssetsValuedLessThanOneDollar,
          S = Z.assetsToHide,
          N = Z.clearAssetsToHide,
          F = Z.showAssetsButtonForChain,
          _ = (0, a.useState)(F(E)),
          T = _[0],
          I = _[1],
          A = t.get(E),
          O = Ka().tokenBalance,
          R = zn().setChains,
          D = pr(),
          L = (0, i.k6)(),
          W = (0, a.useState)(!1),
          B = W[0],
          j = W[1],
          z = (0, a.useState)(
            p.startsWith("k:") || p.startsWith("w:") ? "" : "0"
          ),
          U = z[0],
          V = z[1],
          q = (0, a.useState)(
            p.startsWith("k:") || p.startsWith("w:") ? "" : "coin"
          ),
          K = q[0],
          Y = q[1],
          G = a.useState(null),
          X = G[0],
          J = G[1],
          $ = Boolean(X);
        function Q() {
          J(null);
        }
        (0, a.useEffect)(function () {
          return c();
        }, []);
        var ee = (0, At.Ds)().enqueueSnackbar;
        (0, a.useEffect)(
          function () {
            return (
              " " === p &&
                (ee(
                  "Try connecting your wallet or search for a wallet to view balances",
                  { variant: "warning" }
                ),
                L.push(b),
                p.startsWith("k:") || p.startsWith("w:")
                  ? (Y(""), V(""))
                  : ("" === K && Y("coin"), "" === U && V("0"))),
              o
            );
          },
          [p]
        ),
          (0, a.useEffect)(
            function () {
              return n(p, U, K), o;
            },
            [k, S, p]
          ),
          (0, a.useEffect)(
            function () {
              var e = Er(A);
              v(ia(e, 0)), I(F(E));
            },
            [A]
          );
        var te = rn().isConnected;
        function ne() {
          return (0, gt.every)(ot, function (e) {
            return (
              (t.get(e).success || t.get(e).hasError) && !t.get(e).isLoading
            );
          });
        }
        function ae(e, t) {
          Q(), r(p, t, K), V(t);
        }
        return (
          (0, a.useEffect)(
            function () {
              we(me.TokenBalances, {
                tab: Zr.TokenBalances,
                address: p,
                chain: E,
              });
            },
            [E]
          ),
          (0, a.useEffect)(
            function () {
              var e;
              "" === E && j(!1),
                ne() &&
                  ((e = (0, gt.orderBy)(
                    ot,
                    function (e) {
                      return Er(t.get(e));
                    },
                    "desc"
                  )),
                  R(e));
            },
            [t]
          ),
          B ||
            "" !== E ||
            (function () {
              if (ne()) {
                j(!0);
                var e = (0, gt.maxBy)(ot, function (e) {
                  var n, a;
                  return (0, gt.sum)(
                    (null ===
                      (a =
                        null === (n = t.get(e)) || void 0 === n
                          ? void 0
                          : n.data) || void 0 === a
                      ? void 0
                      : a.map(function (e) {
                          return Number(e.quote);
                        })) || []
                  );
                });
                L.push(w(p, e));
              }
            })(),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(ar, null),
            a.createElement(
              s.Z,
              { container: !0, className: u.grid },
              a.createElement(
                s.Z,
                { item: !0, lg: 2, style: { zIndex: 0 } },
                a.createElement(Or, { selectedItem: Zr.TokenBalances })
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 12, lg: 6 },
                a.createElement(
                  "main",
                  { className: u.content },
                  a.createElement(
                    Rn.Z,
                    { className: u.container, maxWidth: "md" },
                    a.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          height: "88vh",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        },
                      },
                      a.createElement(
                        "div",
                        null,
                        !x &&
                          a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                              Dn.Z,
                              { className: u.paper },
                              a.createElement(
                                s.Z,
                                {
                                  container: !0,
                                  spacing: 3,
                                  justify: "space-between",
                                },
                                a.createElement(
                                  s.Z,
                                  { item: !0, xs: 9 },
                                  a.createElement(
                                    m.Z,
                                    { color: "primary" },
                                    "Subscribe for transaction alerts for address:",
                                    " ",
                                    a.createElement(
                                      On.ZP,
                                      { title: p },
                                      a.createElement("span", null, ge(p))
                                    )
                                  )
                                ),
                                a.createElement(
                                  s.Z,
                                  { item: !0, xs: "auto" },
                                  a.createElement(Ln.Z, {
                                    onChange: function () {
                                      return y();
                                    },
                                    color: "primary",
                                  })
                                )
                              )
                            ),
                            a.createElement("br", null),
                            a.createElement("br", null)
                          ),
                        a.createElement(
                          d.Z,
                          { lgUp: !0 },
                          a.createElement(or, null),
                          (E === je.Ethereum || E === je.BSC) &&
                            a.createElement(ur, null),
                          a.createElement("br", null),
                          a.createElement("br", null)
                        ),
                        a.createElement(Yn, {
                          assetLength: function (e) {
                            return null !== t.get(e).data
                              ? t.get(e).data.length
                              : 0;
                          },
                          link: function (e) {
                            return w(p, e);
                          },
                        }),
                        a.createElement("br", null),
                        a.createElement("br", null),
                        a.createElement(
                          Dn.Z,
                          { className: u.assetsPaper },
                          a.createElement(
                            "div",
                            { className: u.title },
                            a.createElement(
                              "div",
                              null,
                              a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                  },
                                },
                                a.createElement(
                                  m.Z,
                                  {
                                    color: "secondary",
                                    style: {
                                      opacity: "0.6",
                                      fontSize: "14px",
                                      display: "inline",
                                    },
                                  },
                                  "Token Balances"
                                )
                              ),
                              a.createElement(m.Z, { variant: "h4" }, g)
                            ),
                            a.createElement(
                              "div",
                              null,
                              a.createElement(
                                s.Z,
                                {
                                  container: !0,
                                  spacing: 3,
                                  justify: "space-between",
                                },
                                a.createElement(
                                  s.Z,
                                  { item: !0, xs: "auto" },
                                  a.createElement(
                                    m.Z,
                                    {
                                      color: "secondary",
                                      style: {
                                        opacity: "0.6",
                                        fontSize: "14px",
                                      },
                                    },
                                    "Hide tokens with less than $1 in value:"
                                  )
                                ),
                                a.createElement(
                                  s.Z,
                                  { item: !0, xs: "auto" },
                                  a.createElement(Ln.Z, {
                                    onChange: C,
                                    color: "primary",
                                    size: "small",
                                    defaultChecked:
                                      "true" === localStorage.getItem(kt),
                                  })
                                )
                              ),
                              T &&
                                a.createElement(
                                  M.Z,
                                  {
                                    onClick: function () {
                                      N(E);
                                    },
                                  },
                                  "Show hidden assets"
                                )
                            )
                          ),
                          "kadena" === E &&
                            a.createElement(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  justifyContent: "space-evenly",
                                  marginBottom: 5,
                                },
                              },
                              a.createElement(
                                M.Z,
                                {
                                  onClick: function (e) {
                                    J(e.currentTarget);
                                  },
                                  variant: "outlined",
                                  className: u.menuButton,
                                  disableRipple: !0,
                                  size: "small",
                                  disableFocusRipple: !0,
                                  disableTouchRipple: !0,
                                },
                                "" === U ? "All chains" : "Chain " + U,
                                a.createElement(Pn.Z, null)
                              ),
                              a.createElement(
                                Wn.Z,
                                {
                                  onClose: Q,
                                  anchorEl: X,
                                  getContentAnchorEl: null,
                                  anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                  },
                                  transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                  },
                                  open: $,
                                  style: { maxHeight: 500 },
                                },
                                (p.startsWith("k:") || p.startsWith("w:")) &&
                                  a.createElement(
                                    Hn.Z,
                                    {
                                      value: "aggregate",
                                      onClick: function (e) {
                                        ae(0, "");
                                      },
                                    },
                                    "All chains"
                                  ),
                                rt[6].subChains.map(function (e) {
                                  return a.createElement(
                                    Hn.Z,
                                    {
                                      value: e,
                                      onClick: function (t) {
                                        ae(0, e.toString());
                                      },
                                    },
                                    e
                                  );
                                })
                              ),
                              a.createElement(P.ZP, {
                                style: {
                                  width: "70%",
                                  border: "1px solid #34D399",
                                  borderRadius: "4px",
                                },
                                size: "small",
                                defaultValue:
                                  p.startsWith("k:") || p.startsWith("w:")
                                    ? "All tokens"
                                    : "coin",
                                disableClearable: !0,
                                onChange: function (e, t) {
                                  "All tokens" === t || null === t
                                    ? (r(p, U, ""), Y(""))
                                    : (r(p, U, t), Y(t));
                                },
                                renderInput: function (e) {
                                  return a.createElement(
                                    H.Z,
                                    gr(
                                      {
                                        className: u.textField,
                                        placeholder: "Select token",
                                        variant: "outlined",
                                        color: "primary",
                                      },
                                      e
                                    )
                                  );
                                },
                                options:
                                  p.startsWith("k:") || p.startsWith("w:")
                                    ? vr(
                                        ["All tokens"],
                                        (null == l ? void 0 : l.data) || []
                                      )
                                    : (null == l ? void 0 : l.data) || [],
                                loading: null == l ? void 0 : l.isLoading,
                                loadingText: "Fetching tokens",
                              })
                            ),
                          a.createElement(ya, {
                            assetDetails: t.get(E),
                            tokenBalance: O,
                            selectedKadenaChain: U,
                            selectedKadenaToken: K,
                          })
                        )
                      ),
                      te &&
                        a.createElement(
                          "footer",
                          null,
                          a.createElement(
                            m.Z,
                            { className: D.disclaimer },
                            "Disclaimer: The website is for general informational purposes only, it is not a substitute for professional financial advice. The Site may contain links to affiliate platforms originating from the blockchains or sourced from third parties. It is important that you should take independent financial decision based on your research and verify any information that you find here."
                          )
                        )
                    )
                  )
                )
              ),
              a.createElement(Wt.Z, {
                className: u.divider,
                orientation: "vertical",
                variant: "middle",
                flexItem: !0,
              }),
              a.createElement(
                d.Z,
                { mdDown: !0 },
                a.createElement(
                  s.Z,
                  {
                    item: !0,
                    lg: !0,
                    style: { maxHeight: "91vh", overflow: "scroll" },
                  },
                  a.createElement(or, null),
                  (E === je.Ethereum || E === je.BSC) &&
                    a.createElement(ur, null),
                  a.createElement(fr, null)
                )
              )
            )
          )
        );
      };
      var yr = (0, c.Z)(function () {
        return (0,
        j.Z)({ typography: { display: "flex", justifyContent: "center" } });
      });
      function br(e) {
        return Math.abs(e) > 1e15
          ? (e / 1e15).toFixed(2) + "q"
          : Math.abs(e) > 999999999999.99
          ? (e / 1e12).toFixed(2) + "t"
          : Math.abs(e) > 999999999.99
          ? (e / 1e9).toFixed(2) + "b"
          : Math.abs(e) > 999999.99
          ? (e / 1e6).toFixed(2) + "m"
          : Math.abs(e) > 999.99
          ? (e / 1e3).toFixed(2) + "k"
          : e.toFixed(2);
      }
      const xr = function () {
        var e = _t().assets,
          t = (0, a.useState)(),
          n = t[0],
          r = t[1],
          o = yr(),
          l = (0, a.useState)(!1),
          i = l[0],
          c = l[1];
        return (
          (0, a.useEffect)(
            function () {
              var t = (0, gt.sum)(
                ot.map(function (t) {
                  return Er(e.get(t));
                })
              );
              r(t), c(!1);
            },
            [e]
          ),
          i ||
            ((0, gt.every)(ot, function (t) {
              return e.get(t).success || e.get(t).hasError;
            }) &&
              (n
                ? localStorage.setItem("totalBalance", JSON.stringify(n))
                : localStorage.setItem("totalBalance", JSON.stringify(0)),
              c(!0))),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              m.Z,
              { className: o.typography, variant: "h6" },
              "Total Balance"
            ),
            a.createElement(
              m.Z,
              { className: o.typography },
              "(Across multiple chains)"
            ),
            a.createElement("br", null),
            a.createElement(
              m.Z,
              { className: o.typography, variant: "h3", color: "primary" },
              a.createElement(
                On.ZP,
                {
                  title: JSON.parse(localStorage.getItem("totalBalance"))
                    ? "$" +
                      JSON.parse(localStorage.getItem("totalBalance")).toFixed(
                        4
                      )
                    : 0,
                  placement: "bottom",
                },
                a.createElement(
                  "b",
                  null,
                  "$",
                  JSON.parse(localStorage.getItem("totalBalance"))
                    ? br(JSON.parse(localStorage.getItem("totalBalance")))
                    : 0
                )
              )
            )
          )
        );
      };
      var Zr,
        wr = function () {
          return (wr =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        kr = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        Cr = (0, V.cn)({ key: "ASSETS_SIDE_NAVBAR_OPEN", default: !1 }),
        Sr = (0, V.cn)({ key: "HiddenAdds", default: [] }),
        Nr = function () {
          var e = (0, V.FV)(Cr),
            t = e[0],
            n = e[1];
          return {
            isOpen: t,
            toggleMenu: function () {
              return n(!t);
            },
            closeMenu: function () {
              return n(!1);
            },
          };
        };
      !(function (e) {
        (e.TokenBalances = "Wallet Balance"),
          (e.TokenHistory = "Transaction History"),
          (e.NFT = "NFTs"),
          (e.NFTTransactionHistory = "NFT History"),
          (e.DefiEarn = "DeFi Earn"),
          (e.None = "");
      })(Zr || (Zr = {}));
      var Fr = [
          {
            label: Zr.TokenBalances,
            icon: fn,
            selectedIcon: gn,
            router: w,
            type: "chain tab navigations",
          },
          {
            label: Zr.TokenHistory,
            icon: vn,
            selectedIcon: En,
            router: k,
            type: "chain tab navigations",
          },
          {
            label: Zr.NFT,
            icon: bn,
            selectedIcon: xn,
            router: C,
            type: "chain tab navigations",
          },
          {
            label: Zr.NFTTransactionHistory,
            icon: hn,
            selectedIcon: yn,
            router: N,
            type: "chain tab navigations",
          },
          {
            label: Zr.DefiEarn,
            icon: Zn,
            selectedIcon: wn,
            router: F,
            type: "recommendation",
          },
        ],
        _r = (0, c.Z)(function (e) {
          var t, n;
          return (0,
          j.Z)({ drawer: ((t = { zIndex: 0 }), (t[e.breakpoints.up("sm")] = { width: 280, flexShrink: 0 }), (t.display = "flex"), (t.alignItems = "flex-end"), (t.justifyContent = "center"), t), toolbar: wr(wr({}, e.mixins.toolbar), { display: "flex", alignItems: "center", justifyContent: "center" }), unmarshalLogo: { display: "flex", justifyContent: "center" }, selectedNavItem: { backgroundColor: "rgba(52, 211, 153, 0.1)", color: "#24956C", borderRadius: "10px", marginLeft: "15px", marginRight: "15px", paddingLeft: "0px", paddingRight: "0px", height: "55px", width: "90%" }, walletDetails: { color: "#3A413D", marginLeft: "15px", marginRight: "15px", height: "55px", width: "auto" }, navItem: { color: "#3A413D", marginLeft: "15px", marginRight: "15px", paddingLeft: "0px", paddingRight: "0px", height: "55px", width: "auto" }, navItemIcon: { display: "flex", justifyContent: "center" }, navItemLabel: { height: "20px", fontStyle: "normal", fontWeight: "bold", fontSize: "10px", lineHeight: "20px", letterSpacing: "0.0168em", color: "secondary" }, typography: { display: "flex", justifyContent: "center", color: "#555555", fontSize: "12px" }, drawerPaper: ((n = {}), (n[e.breakpoints.up("md")] = { paddingTop: e.spacing(15) }), (n.width = 280), (n.overflow = "auto"), (n.background = "#F9FCFA"), (n.boxShadow = "0px 0px 16px rgba(58, 65, 61, 0.1)"), n), adds: { height: "100%", paddingBottom: e.spacing(20) }, card: { width: "280px", display: "flex", justifyContent: "center", alignItems: "center" }, imgContainer: { height: "auto", position: "relative", top: "0px", left: "0px" }, adImg: { borderRadius: e.spacing(2), maxWidth: "200px", maxHeight: "264px", position: "relative", top: "0px", left: "0px", "&:hover": { cursor: "pointer" } }, closeIcon: { position: "absolute", height: "8%", maxWidth: "20px", top: "4%", left: "84%", "&:hover": { cursor: "pointer" } }, buy: { backgroundColor: "#ffffff", color: "#000000", paddingLeft: e.spacing(10), paddingRight: e.spacing(10) }, close: { float: "right", display: "flex", zIndex: 10 }, walletBalanceStyles: { background: "#EBF2EF", border: "1px solid #E2E8E5", borderRadius: "100px", padding: "8px 12px", display: "flex", alignItems: "center", marginRight: "15px" } });
        }),
        Tr = [
        ],
        Ir = function (e) {
          var t = e.desktopImageSource,
            n = e.navigationLink,
            r = e.name,
            o = _r(),
            l = (0, V.FV)(Sr),
            i = l[0],
            c = l[1];
          return a.createElement(
            "div",
            { className: o.card, key: t },
            a.createElement(
              "div",
              { className: o.imgContainer },
              a.createElement(
                "a",
                { href: n, target: "_blank", rel: "noreferrer" },
                a.createElement("img", { className: o.adImg, src: t, alt: r })
              ),
              a.createElement("img", {
                className: o.closeIcon,
                src: kn,
                alt: "close",
                onClick: function () {
                  c(kr(kr([], i), [r]));
                },
              })
            )
          );
        },
        Ar = function (e) {
          var t,
            n = e.selectedItem,
            r = _r(),
            o = r.navItemIcon,
            l = r.selectedNavItem,
            i = r.navItem,
            c = r.toolbar,
            u = r.unmarshalLogo,
            p = r.walletDetails,
            g = r.walletBalanceStyles,
            v = Sn(),
            E = v.coin,
            h = v.address,
            x = Nr().closeMenu,
            Z = (0, V.sJ)(Sr),
            w = Tr.filter(function (e) {
              return -1 === Z.indexOf(e.name);
            }),
            k = rn(),
            C = k.isConnected,
            S = k.userAddress,
            N = Ka(),
            F = N.tokenBalance,
            _ = N.getTokenBalance,
            T = N.walletBalance,
            I = N.getWalletBalance;
          (0, a.useEffect)(
            function () {
              S && (_(S), I(S));
            },
            [C]
          );
          var A = h;
          void 0 === h && C && (A = S);
          var L = _r();
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              null,
              a.createElement(
                Ot.Z,
                null,
                a.createElement(
                  d.Z,
                  { lgUp: !0 },
                  a.createElement(
                    R.Z,
                    { className: u },
                    a.createElement(
                      "div",
                      { className: c },
                      a.createElement(
                        un.rU,
                        { to: b },
                        a.createElement("img", { src: f, alt: "logo" })
                      )
                    )
                  )
                ),
                a.createElement(
                  d.Z,
                  { mdUp: !0 },
                  C &&
                    a.createElement(
                      R.Z,
                      { className: p },
                      a.createElement(
                        m.Z,
                        { className: g },
                        a.createElement("img", {
                          src: An,
                          alt: "Wallet",
                          width: 25,
                          height: 25,
                        }),
                        "  ",
                        (null == T ? void 0 : T.data) && !T.isLoading
                          ? "$ " +
                              br(
                                null === (t = null == T ? void 0 : T.data) ||
                                  void 0 === t
                                  ? void 0
                                  : t.total_quote
                              )
                          : a.createElement(O.Z, { size: 14 })
                      ),
                      a.createElement(
                        m.Z,
                        { className: g },
                        a.createElement("img", {
                          src: y,
                          alt: "Marsh",
                          width: 25,
                          height: 25,
                        }),
                        "  ",
                        F > 0 ? F.toFixed(2) : F
                      )
                    )
                ),
                Fr.map(function (e) {
                  var t = n === e.label;
                  return a.createElement(
                    R.Z,
                    {
                      button: !0,
                      component: un.rU,
                      onClick: x,
                      to:
                        "recommendation" === e.type
                          ? e.router(A)
                          : e.router(A, E),
                      key: e.label,
                      className: t ? l : i,
                    },
                    a.createElement(
                      D.Z,
                      { className: o },
                      a.createElement("img", {
                        src: t ? e.selectedIcon : e.icon,
                        alt: e.label,
                      })
                    ),
                    e.label === Zr.DefiEarn
                      ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                            m.Z,
                            { display: "inline", variant: "h6" },
                            "DeFi Earn  ",
                            " "
                          ),
                          a.createElement(
                            m.Z,
                            {
                              style: {
                                borderRadius: "5px",
                                border: "2px solid #A5710C",
                                fontWeight: 600,
                                paddingInline: "5px",
                                color: "#A5710C",
                                backgroundColor: "#FFF1D6",
                              },
                            },
                            "New"
                          )
                        )
                      : a.createElement(m.Z, { variant: "h6" }, e.label)
                  );
                })
              ),
              a.createElement("br", null),
              a.createElement("br", null)
            ),
            a.createElement(d.Z, { lgUp: !0 }, a.createElement(fr, null)),
            a.createElement(
              d.Z,
              { mdDown: !0 },
              a.createElement(
                s.Z,
                {
                  container: !0,
                  className: L.adds,
                  direction: "column",
                  justify: "flex-end",
                },
                a.createElement(
                  pn.Z,
                  {
                    animation: "slide",
                    interval: 5e3,
                    navButtonsAlwaysInvisible: !0,
                    indicators: !1,
                  },
                  w.map(function (e) {
                    return a.createElement(Ir, {
                      name: e.name,
                      desktopImageSource: e.desktopImageSource,
                      navigationLink: e.navigationLink,
                      key: e.desktopImageSource,
                    });
                  })
                ),
                a.createElement("br", null),
                a.createElement(In, { source: n })
              )
            )
          );
        };
      const Or = function (e) {
        var t = e.selectedItem,
          n = _r(),
          r = (0, qt.Z)(),
          o = Nr(),
          l = o.isOpen,
          i = o.toggleMenu;
        return a.createElement(
          "nav",
          { className: n.drawer, "aria-label": "mailbox folders" },
          a.createElement(
            d.Z,
            { lgUp: !0 },
            a.createElement(
              mn.ZP,
              {
                variant: "temporary",
                anchor: "rtl" === r.direction ? "right" : "left",
                open: l,
                onClose: i,
                classes: { paper: n.drawerPaper },
                ModalProps: { keepMounted: !0 },
              },
              a.createElement(Ar, { selectedItem: t })
            )
          ),
          a.createElement(
            d.Z,
            { mdDown: !0 },
            a.createElement(
              mn.ZP,
              {
                classes: { paper: n.drawerPaper },
                variant: "permanent",
                open: !0,
              },
              a.createElement(Ar, { selectedItem: t })
            )
          )
        );
      };
      var Rr = n(7005),
        Dr = (0, V.cn)({ key: "CHAINS_BLOCK_TRANSACTIONS", default: vt() });
      const Lr = function () {
        var e = (0, V.FV)(Dr),
          t = e[0],
          n = e[1],
          a = le();
        return {
          chainsLatestTransactions: t,
          getLatestTransactions: function (e, t) {
            return a(function (e) {
              n(function (n) {
                var a;
                return (
                  (a = "function" == typeof e ? e(n.get(t)) : e),
                  new Map(n.set(t, a))
                );
              });
            }, "/v1/" + t + "/" + e + "/latest-transactions");
          },
        };
      };
      var Wr = (0, V.cn)({ key: "TOP_INDEXED_BLOCK", default: vt() });
      const Hr = function () {
        var e,
          t,
          n = Lr().getLatestTransactions,
          a = (0, V.FV)(Wr),
          r = a[0],
          o = a[1],
          l = (0, V.rb)(Wr),
          i =
            ((e = o),
            (t = le()),
            function (n, a) {
              return (
                void 0 === a &&
                  (a = function () {
                    return {};
                  }),
                ot.forEach(function (r) {
                  return t(
                    (function (t) {
                      return function (n) {
                        e(
                          "function" != typeof n
                            ? function (e) {
                                return e.set(t, n), new Map(e);
                              }
                            : function (e) {
                                return e.set(t, n(e.get(t))), new Map(e);
                              }
                        );
                      };
                    })(r),
                    n(r),
                    a(r)
                  );
                })
              );
            });
        return {
          topIndexedBlock: r,
          getTopIndexedBlock: function () {
            return i(
              function (e) {
                return "/v1/" + e + "/top-indexed-block";
              },
              function (e) {
                return {
                  onSuccess: function (t) {
                    var a = t.data;
                    n(null == a ? void 0 : a.block_number, e);
                  },
                };
              }
            );
          },
          reset: l,
        };
      };
      var Pr = n(6444),
        Mr = (0, c.Z)(function (e) {
          var t, n, a;
          return {
            typography: { padding: e.spacing(3) },
            blocks:
              ((t = {
                border: "1px solid rgba(0, 0, 0, 0.1)",
                background: "#F9FCFA",
                borderRadius: e.spacing(1.5),
                paddingInline: e.spacing(2),
                marginInline: e.spacing(3),
                marginBottom: e.spacing(3),
              }),
              (t[e.breakpoints.down("md")] = {
                marginInline: e.spacing(1.5),
                marginBottom: e.spacing(1.5),
              }),
              t),
            linearProgress: { marginTop: e.spacing(4) },
            label:
              ((n = {
                padding: e.spacing(2),
                color: "#000000BF",
                fontWeight: 500,
              }),
              (n[e.breakpoints.down("md")] = { padding: e.spacing(1.5) }),
              n),
            blockNumber:
              ((a = { padding: e.spacing(2), color: "#00000099" }),
              (a[e.breakpoints.down("md")] = { padding: e.spacing(1.5) }),
              a),
            divider: {
              color: "1px solid #0000000D",
              marginInline: e.spacing(2),
            },
          };
        });
      const Br = function (e) {
          var t = e.block,
            n = e.chain,
            r = Mr(),
            o = (0, a.useState)("0"),
            l = o[0],
            i = o[1];
          return (
            (0, a.useEffect)(
              function () {
                null != t.data && i(t.data.block_number);
              },
              [t]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                { className: r.blocks, key: n },
                a.createElement(m.Z, { className: r.label }, "Top Block"),
                a.createElement(Wt.Z, { className: r.divider }),
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "div",
                    null,
                    a.createElement(
                      m.Z,
                      { className: r.blockNumber },
                      "0" !== l
                        ? l
                        : a.createElement(Pr.Z, { className: r.linearProgress })
                    )
                  )
                )
              )
            )
          );
        },
        jr = function (e) {
          var t = e.children,
            n = e.to;
          return a.createElement(
            Vt.Z,
            { color: "inherit", component: un.rU, to: n },
            t
          );
        };
      var zr = (0, c.Z)(function (e) {
        var t, n, a;
        return {
          typography: { padding: e.spacing(3) },
          blocks:
            ((t = {
              border: "1px solid rgba(0, 0, 0, 0.1)",
              background: "#F9FCFA",
              borderRadius: e.spacing(1.5),
              paddingInline: e.spacing(2),
              marginInline: e.spacing(3),
              marginBottom: e.spacing(3),
            }),
            (t[e.breakpoints.down("md")] = {
              marginInline: e.spacing(1.5),
              marginBottom: e.spacing(1.5),
            }),
            t),
          linearProgress: { marginTop: e.spacing(4) },
          label:
            ((n = {
              padding: e.spacing(2),
              color: "#000000BF",
              fontWeight: 500,
            }),
            (n[e.breakpoints.down("md")] = { padding: e.spacing(1.5) }),
            n),
          blockNumber:
            ((a = { padding: e.spacing(2), color: "#00000099" }),
            (a[e.breakpoints.down("md")] = { padding: e.spacing(1.5) }),
            a),
          divider: { color: "1px solid #0000000D", marginInline: e.spacing(2) },
        };
      });
      const Ur = function (e) {
        var t = e.transactions,
          n = e.chain,
          r = (0, a.useState)(""),
          o = r[0],
          l = r[1],
          i = a.createElement(
            Xa,
            { content: o },
            a.createElement(jr, { to: x(o, n) }, ge(o, 6, 4))
          );
        (0, a.useEffect)(
          function () {
            var e, n;
            void 0 !==
              (null === (e = (0, gt.first)(t.data)) || void 0 === e
                ? void 0
                : e.tx_hash) &&
              l(
                null === (n = (0, gt.first)(t.data)) || void 0 === n
                  ? void 0
                  : n.tx_hash
              );
          },
          [t, n]
        );
        var c = zr();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            { className: c.blocks, key: n },
            a.createElement(m.Z, { className: c.label }, "Latest Transaction"),
            a.createElement(Wt.Z, { className: c.divider }),
            a.createElement(
              "div",
              null,
              a.createElement(
                m.Z,
                { className: c.blockNumber },
                "" !== o
                  ? i
                  : a.createElement(Pr.Z, { className: c.linearProgress })
              )
            )
          )
        );
      };
      var Vr = function () {
          return a.createElement(
            La.Z,
            { position: "end" },
            a.createElement(
              Lt.Z,
              { type: "submit", size: "small" },
              a.createElement(
                "svg",
                {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                a.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684\n          20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726\n          21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231\n          6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908\n          16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z",
                  fill: "#11142D",
                })
              )
            )
          );
        },
        qr = (0, c.Z)(function (e) {
          var t, n;
          return {
            paper:
              ((t = {
                borderRadius: e.spacing(2),
                width: "250px",
                padding: e.spacing(2),
                marginTop: e.spacing(5),
                marginRight: e.spacing(5),
                border: "1px solid rgba(0, 0, 0, 0.15)",
                boxShadow: "none",
              }),
              (t[e.breakpoints.down("md")] = {
                padding: e.spacing(1),
                width: "225px",
                marginTop: e.spacing(3),
                marginRight: e.spacing(3),
              }),
              t),
            chainLogo: { height: e.spacing(4) },
            typography:
              ((n = {
                padding: e.spacing(3),
                color: "#34D399",
                display: "flex",
                alignItems: "center",
              }),
              (n[e.breakpoints.down("md")] = { padding: e.spacing(1.5) }),
              n),
            newBadge: {
              float: "right",
              backgroundColor: "#FF754C",
              color: "white",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "3px",
            },
            grid: { display: "flex", justifyContent: "center" },
            input: {
              backgroundColor: "#F2F6F4",
              margin: e.spacing(2),
              padding: e.spacing(3),
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              height: e.spacing(5),
              border: "1px solid #C8CCCC",
              transition: e.transitions.create(["border-color", "box-shadow"]),
              "&:focus": {
                boxShadow:
                  (0, W.U1)(e.palette.primary.main, 0.25) + " 0 0 0 0.2rem",
                borderColor: e.palette.primary.main,
              },
            },
            search: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            mobileSearch: { justifyContent: "center", alignItems: "center" },
            inputAdornment: { cursor: "pointer" },
            chains: {
              display: "flex",
              justifyContent: "center",
              fontWeight: 500,
              color: "rgba(0, 0, 0, 0.75)",
            },
          };
        }),
        Kr = function (e) {
          var t = e.block,
            n = e.chain,
            r = Lr().chainsLatestTransactions.get(n),
            o = qr();
          return a.createElement(
            Dn.Z,
            { className: o.paper },
            a.createElement(
              m.Z,
              { className: o.typography, variant: "h6" },
              a.createElement("img", {
                className: o.chainLogo,
                src:
                  "https://assets.unmarshal.io/tokens/" +
                  n.split("-")[0] +
                  ".png",
                alt: "",
              }),
              "  ",
              Ye.get(n),
              "  ",
              "Optimism" === Ye.get(n) &&
                a.createElement(
                  m.Z,
                  { display: "inline", className: o.newBadge },
                  "New"
                )
            ),
            a.createElement(Br, { block: t, chain: n, key: n + "Block" }),
            a.createElement(Ur, {
              transactions: r,
              chain: n,
              key: n + "Transaction",
            })
          );
        };
      const Yr = function () {
        var e = qr(),
          t = Hr(),
          n = t.topIndexedBlock,
          r = t.getTopIndexedBlock,
          o = sn(),
          l = (0, a.useState)(""),
          i = l[0],
          c = l[1],
          s = (0, a.useState)(ot),
          d = s[0],
          u = s[1],
          p = (0, qt.Z)(),
          f = (0, Pt.Z)(p.breakpoints.down("sm"), { noSsr: !0 }),
          g = (0, Pt.Z)(p.breakpoints.only("md"), { noSsr: !0 }),
          v = (0, Pt.Z)(p.breakpoints.up("lg"), { noSsr: !0 }),
          E = (0, a.useState)(!1),
          h = E[0],
          y = E[1];
        return (
          (0, a.useEffect)(
            function () {
              (f && d.length > 1) || (g && d.length > 2) || (v && d.length > 4)
                ? y(!0)
                : y(!1);
            },
            [d]
          ),
          (0, a.useEffect)(function () {
            r();
            var e = setInterval(function () {
              r();
            }, 1e4);
            return function () {
              return clearInterval(e);
            };
          }, []),
          a.createElement(
            Rn.Z,
            { maxWidth: "lg" },
            a.createElement(
              "div",
              { className: f ? e.mobileSearch : e.search },
              a.createElement(
                m.Z,
                { className: e.chains, variant: "h6" },
                "Chains we support"
              ),
              a.createElement(H.Z, {
                className: e.input,
                onChange: function (e) {
                  var t,
                    n = [],
                    a =
                      null === (t = null == e ? void 0 : e.target) ||
                      void 0 === t
                        ? void 0
                        : t.value;
                  if ((c(a), "" !== a)) {
                    for (
                      var r = new RegExp(a.trimEnd().toLowerCase()), o = 0;
                      o < ot.length;
                      o += 1
                    )
                      for (var l = 0; l < pt.get(ot[o]).length; l += 1)
                        if (pt.get(ot[o])[l].toLowerCase().match(r)) {
                          n.push(ot[o]);
                          break;
                        }
                    u(n);
                  } else u(ot);
                },
                value: i,
                placeholder: "Search chain",
                InputProps: {
                  classes: o,
                  endAdornment: a.createElement(
                    La.Z,
                    { position: "end", className: e.inputAdornment },
                    a.createElement(Vr, null)
                  ),
                },
              })
            ),
            a.createElement(
              "div",
              { style: { height: "350px" } },
              h &&
                a.createElement(
                  Rr.Z,
                  { speed: 50, gradient: !1, pauseOnClick: !1 },
                  d.map(function (e) {
                    return a.createElement(Kr, {
                      block: n.get(e),
                      chain: e,
                      key: e,
                    });
                  })
                ),
              !h &&
                a.createElement(
                  Rr.Z,
                  {
                    speed: 50,
                    gradient: !1,
                    pauseOnHover: !0,
                    pauseOnClick: !0,
                    play: !1,
                  },
                  d.map(function (e) {
                    return a.createElement(Kr, {
                      block: n.get(e),
                      chain: e,
                      key: e,
                    });
                  })
                ),
              0 === d.length &&
                a.createElement(
                  m.Z,
                  { color: "primary", align: "center" },
                  a.createElement("br", null),
                  "Oops! We don't have data for that chain",
                  a.createElement("br", null)
                )
            )
          )
        );
      };
      var Gr = (0, c.Z)(function (e) {
          var t, n;
          return {
            placeHolder:
              ((t = {}),
              (t[e.breakpoints.down("sm")] = { width: 150 }),
              (t.width = 300),
              t),
            container: {
              position: "absolute",
              top: 70,
              bottom: 50,
              background:
                "linear-gradient(180deg, #F9FCFA 0%, rgba(249, 252, 250, 0) 100%)",
            },
            header: {
              fontWeight: 500,
              fontSize: e.spacing(7),
              lineHeight: "45px",
              marginLeft: "5px",
            },
            mainItem:
              ((n = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: e.spacing(10),
              }),
              (n[e.breakpoints.down("md")] = { marginTop: e.spacing(5) }),
              n),
            poweredBy: {
              display: "flex",
              justifyContent: "center",
              fontWeight: 500,
              marginTop: e.spacing(2),
              marginBottom: e.spacing(5),
              color: "rgba(0, 0, 0, 0.75)",
            },
            newBadge: {
              float: "right",
              backgroundColor: "#FF754C",
              color: "white",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "3px",
            },
          };
        }),
        Xr = function () {
          var e = (0, i.k6)();
          return function (t) {
            if (t) {
              if (
                (t.length > 45 && t.startsWith("0x")) ||
                (43 === t.length && !t.startsWith("0x"))
              )
                return (
                  Ze(t),
                  Ce.set_once({ address: t, type: ue.Transaction }),
                  we(me.LandingPage, { address: t }),
                  we(me.Decode, { address: t, type: ue.Transaction }),
                  void e.push(Z(t))
                );
              if (64 === t.length && !t.startsWith("0x"))
                return (
                  Ze(t),
                  Ce.set_once({ address: t, type: ue.Transaction }),
                  we(me.LandingPage, { address: t }),
                  we(me.Decode, { address: t, type: ue.Transaction }),
                  void e.push(Z(t))
                );
              we(me.LandingPage, { address: t }),
                we(me.Decode, { address: t, type: ue.Wallet }),
                e.push(w(t));
            }
          };
        };
      const Jr = function () {
        var e = Gr(),
          t = zn().resetChains,
          n = Nr().closeMenu;
        return (
          (0, a.useEffect)(function () {
            n(), we(me.LandingPage), t();
          }, []),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              v,
              null,
              a.createElement(
                s.Z,
                {
                  container: !0,
                  justify: "flex-end",
                  alignItems: "center",
                  spacing: 6,
                },
                a.createElement(s.Z, { item: !0 }, a.createElement(Ja, null)),
                a.createElement(
                  d.Z,
                  { xsDown: !0 },
                  a.createElement(s.Z, { item: !0 })
                )
              )
            ),
            a.createElement(
              s.Z,
              {
                className: e.container,
                container: !0,
                justify: "space-between",
                alignItems: "stretch",
              },
              a.createElement(
                d.Z,
                { xsDown: !0 },
                a.createElement(
                  s.Z,
                  { item: !0 },
                  a.createElement("img", {
                    className: e.placeHolder,
                    src: E,
                    alt: "",
                  })
                )
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 12, sm: 5, md: 4 },
                a.createElement(
                  s.Z,
                  { container: !0, direction: "column", justify: "center" },
                  a.createElement(
                    s.Z,
                    { className: e.mainItem, item: !0 },
                    a.createElement("img", {
                      width: "56px",
                      src: y,
                      alt: "unmarshal",
                    }),
                    a.createElement(
                      m.Z,
                      {
                        align: "center",
                        className: e.header,
                        variant: "h1",
                        display: "inline",
                      },
                      "Xscan"
                    )
                  ),
                  a.createElement(
                    s.Z,
                    { className: e.poweredBy, item: !0 },
                    a.createElement(
                      "div",
                      null,
                      a.createElement(
                        m.Z,
                        { align: "center", variant: "h6" },
                        "Powered by Unmarshal"
                      ),
                      a.createElement("br", null),
                      a.createElement(In, { source: "Landing Page" })
                    )
                  ),
                  a.createElement(dn, null),
                  a.createElement("br", null)
                )
              ),
              a.createElement(
                d.Z,
                { xsDown: !0 },
                a.createElement(
                  s.Z,
                  { item: !0 },
                  a.createElement("img", {
                    className: e.placeHolder,
                    src: h,
                    alt: "",
                  })
                )
              ),
              a.createElement(Yr, null)
            )
          )
        );
      };
      var $r = n(7394),
        Qr = n(7196),
        eo = n(2302),
        to = n(9613),
        no = n(2227),
        ao = (0, V.cn)({ key: "TRANSACTION_DETAILS", default: q });
      var ro = n(5656),
        oo = n(6038),
        lo = n(8545),
        io = (0, V.cn)({ key: "CHAINS_TRANSACTION_DETAILS", default: vt() });
      var co = n(5837),
        so = n.n(co),
        mo = n(1311),
        uo = function () {
          return (uo =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        po = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        fo = (0, V.cn)({ key: "NFT_ASSETS", default: vt() }),
        go = (0, V.cn)({ key: "NFT_ASSET_DETAILS", default: q });
      const vo = function () {
        var e = (0, V.FV)(fo),
          t = e[0],
          n = e[1],
          a = (0, V.rb)(fo),
          r = yt(n),
          o = (0, V.FV)(go),
          l = o[0],
          i = o[1],
          c = (0, V.rb)(go),
          s = le();
        return {
          assets: t,
          getAssets: function (e) {
            return r(function (t) {
              return function () {
                return Ke.NFT.getAssets(t, e);
              };
            });
          },
          loadMore: function (e, t, a) {
            Ke.NFT.getAssets(e, t, { offset: a.toString() })
              .then(function (t) {
                n(function (n) {
                  var a,
                    r,
                    o = n.get(e);
                  return (
                    n.set(
                      e,
                      uo(uo({}, o), {
                        data: uo(uo({}, t.data), {
                          nft_assets:
                            null === t.data.nft_assets
                              ? null === (a = null == o ? void 0 : o.data) ||
                                void 0 === a
                                ? void 0
                                : a.nft_assets
                              : po(
                                  po(
                                    [],
                                    null ===
                                      (r = null == o ? void 0 : o.data) ||
                                      void 0 === r
                                      ? void 0
                                      : r.nft_assets
                                  ),
                                  t.data.nft_assets
                                ),
                        }),
                      })
                    ),
                    new Map(n)
                  );
                });
              })
              .catch(function (t) {
                n(function (n) {
                  var a = n.get(e);
                  return (
                    n.set(
                      e,
                      uo(uo({}, a), {
                        isLoading: !1,
                        success: !1,
                        hasError: !0,
                        error: t,
                      })
                    ),
                    new Map(n)
                  );
                });
              });
          },
          resetState: a,
          NFTAssetDetails: l,
          getNFTDetails: function (e, t, n) {
            return s(i, "/v2/" + t + "/address/" + e + "/details?tokenId=" + n);
          },
          reset: c,
        };
      };
      var Eo,
        ho = function () {
          return (ho =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      !(function (e) {
        (e[(e.IMAGE = 0)] = "IMAGE"),
          (e[(e.VIDEO = 1)] = "VIDEO"),
          (e[(e.AUDIO = 2)] = "AUDIO"),
          (e[(e.UNKNOWN = 3)] = "UNKNOWN");
      })(Eo || (Eo = {}));
      var yo,
        bo = (0, c.Z)(function (e) {
          var t,
            n,
            a,
            r = e.spacing,
            o = e.breakpoints;
          return {
            assetMediaLarge:
              ((t = {
                borderRadius: r(2),
                width: "350px",
                height: "350px",
                boxShadow: "2px 2px 10px rgba(0,0,0,.075)",
              }),
              (t[o.down("xs")] = { width: "85vw", height: "85vw" }),
              t),
            assetMediaMedium:
              ((n = {
                borderRadius: r(2),
                marginRight: r(5),
                width: "300px",
                height: "300px",
                boxShadow: "2px 2px 10px rgba(0,0,0,.075)",
              }),
              (n[o.down("sm")] = {
                width: "40vw",
                height: "40vw",
                marginRight: r(0),
              }),
              n),
            assetMediaSmall:
              ((a = {
                borderRadius: r(0.5),
                width: "40px",
                height: "40px",
                boxShadow: "2px 2px 10px rgba(0,0,0,.075)",
              }),
              (a[o.down("xs")] = { width: "18vw", height: "18vw" }),
              a),
            title: {
              marginTop: r(1),
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "17px",
              color: "#111111",
            },
            subTitle: {
              fontSize: "12px",
              lineHeight: "21px",
              letterSpacing: "0.0168em",
              color: "#111111",
              opacity: 0.6,
            },
            price: {
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "17px",
              color: "#111111",
              float: "right",
            },
            priceInUSD: {
              float: "right",
              fontSize: "12px",
              lineHeight: "21px",
              letterSpacing: "0.0168em",
              color: "#111111",
            },
          };
        }),
        xo = function (e) {
          var t = e.src,
            n = e.alt,
            r = (function (e, t) {
              var n = {};
              for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) &&
                  t.indexOf(a) < 0 &&
                  (n[a] = e[a]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                  t.indexOf(a[r]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                    (n[a[r]] = e[a[r]]);
              }
              return n;
            })(e, ["src", "alt"]),
            o = (0, a.useState)(t),
            l = o[0],
            i = o[1];
          return a.createElement(
            "img",
            ho({ src: l, alt: n }, r, {
              onError: function () {
                return l === t && i(mo);
              },
            })
          );
        };
      function Zo(e) {
        var t = e.media,
          n = e.name,
          r = e.size,
          o = bo(),
          l = o.assetMediaLarge;
        switch (
          (r === yo.Medium && (l = o.assetMediaMedium),
          r === yo.Small && (l = o.assetMediaSmall),
          (function (e) {
            if (!e) return Eo.UNKNOWN;
            switch (e.split(".").pop()) {
              case "jpg":
              case "gif":
              case "bmp":
              case "png":
              case "svg":
                return Eo.IMAGE;
              case "m4v":
              case "avi":
              case "mpg":
              case "mp4":
              case "wmv":
              case "m1v":
              case "mpeg":
              case "mov":
              case "qt":
              case "mpa":
              case "mpe":
              case "movie":
                return Eo.VIDEO;
              case "ra":
              case "aif":
              case "aiff":
              case "aifc":
              case "wav":
              case "au":
              case "snd":
              case "mp3":
              case "mp2":
                return Eo.AUDIO;
              default:
                return Eo.UNKNOWN;
            }
          })(t))
        ) {
          case Eo.VIDEO:
            return a.createElement(
              "video",
              { className: l, controls: !0 },
              a.createElement("track", { kind: "captions" }),
              a.createElement("source", { src: t })
            );
          case Eo.AUDIO:
            return a.createElement(
              "audio",
              { className: l, controls: !0 },
              a.createElement("track", { kind: "captions" }),
              a.createElement("source", { src: t })
            );
          case Eo.IMAGE:
          case Eo.UNKNOWN:
          default:
            return a.createElement(xo, { className: l, src: t, alt: n });
        }
      }
      !(function (e) {
        (e.Large = "Large"), (e.Medium = "Medium"), (e.Small = "Small");
      })(yo || (yo = {}));
      const wo = function (e) {
        var t,
          n,
          r,
          o,
          l = e.assetDetails,
          c = bo(),
          d =
            (null === (t = null == l ? void 0 : l.data) || void 0 === t
              ? void 0
              : t.nft_assets) || [],
          u = Sn(),
          p = u.address,
          f = u.coin,
          g = ((0, i.k6)(), vo().loadMore);
        return a.createElement(
          na,
          ho({}, l),
          a.createElement(
            so(),
            {
              pageStart: 0,
              useWindow: !1,
              getScrollParent: function () {
                return document.getElementById("nft-assets-scroll-paper");
              },
              loadMore: function () {
                var e;
                return g(
                  f,
                  p,
                  null === (e = null == l ? void 0 : l.data) || void 0 === e
                    ? void 0
                    : e.next_offset
                );
              },
              hasMore:
                null !==
                  (null === (n = null == l ? void 0 : l.data) || void 0 === n
                    ? void 0
                    : n.nft_assets) &&
                (null ===
                  (o =
                    null === (r = null == l ? void 0 : l.data) || void 0 === r
                      ? void 0
                      : r.nft_assets) || void 0 === o
                  ? void 0
                  : o.length) %
                  100 ==
                  0,
              loader: a.createElement(ta, null),
            },
            a.createElement(
              s.Z,
              { container: !0, spacing: 10, justify: "space-evenly" },
              0 === d.length &&
                a.createElement(
                  s.Z,
                  { item: !0 },
                  a.createElement(
                    m.Z,
                    { color: "primary", align: "center" },
                    a.createElement("br", null),
                    "No Assets found!",
                    a.createElement("br", null)
                  )
                ),
              (d || []).map(function (e) {
                var t,
                  n,
                  r,
                  o,
                  l,
                  i,
                  d,
                  u,
                  g,
                  v,
                  E = ge(
                    null ===
                      (t = null == e ? void 0 : e.issuer_specific_data) ||
                      void 0 === t
                      ? void 0
                      : t.name,
                    12,
                    12
                  );
                return a.createElement(
                  s.Z,
                  { item: !0, key: null == e ? void 0 : e.asset_contract },
                  a.createElement(
                    un.rU,
                    {
                      to: S(
                        p,
                        null == e ? void 0 : e.asset_contract,
                        f,
                        null == e ? void 0 : e.token_id
                      ),
                      style: { textDecoration: "none" },
                    },
                    a.createElement(Zo, {
                      media:
                        (null ===
                          (r =
                            null ===
                              (n =
                                null == e ? void 0 : e.issuer_specific_data) ||
                            void 0 === n
                              ? void 0
                              : n.image_url) || void 0 === r
                          ? void 0
                          : r.includes("ethercb")) ||
                        (null ===
                          (l =
                            null ===
                              (o =
                                null == e ? void 0 : e.issuer_specific_data) ||
                            void 0 === o
                              ? void 0
                              : o.image_url) || void 0 === l
                          ? void 0
                          : l.includes("LP-rewards")) ||
                        (null ===
                          (d =
                            null ===
                              (i =
                                null == e ? void 0 : e.issuer_specific_data) ||
                            void 0 === i
                              ? void 0
                              : i.image_url) || void 0 === d
                          ? void 0
                          : d.includes("etherbycb"))
                          ? ""
                          : null ===
                              (u =
                                null == e ? void 0 : e.issuer_specific_data) ||
                            void 0 === u
                          ? void 0
                          : u.image_url,
                      name:
                        null ===
                          (g = null == e ? void 0 : e.issuer_specific_data) ||
                        void 0 === g
                          ? void 0
                          : g.name,
                      size: yo.Large,
                    }),
                    a.createElement(m.Z, { className: c.title }, E),
                    a.createElement(
                      m.Z,
                      { className: c.subTitle },
                      E +
                        " #" +
                        (30,
                        (v = null == e ? void 0 : e.token_id)
                          ? v.length <= 30
                            ? v
                            : "..." + v.slice(v.length - 30)
                          : "")
                    ),
                    a.createElement(
                      m.Z,
                      { className: c.subTitle },
                      "Token Standard:",
                      a.createElement(
                        "b",
                        null,
                        "ERC-",
                        "" + (null == e ? void 0 : e.type)
                      )
                    )
                  )
                );
              })
            )
          )
        );
      };
      var ko = function () {
          return (ko =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Co = function (e) {
          var t = e.label,
            n = e.value;
          return a.createElement(
            $r.Z,
            null,
            a.createElement(Qr.Z, null, a.createElement(m.Z, null, t)),
            a.createElement(Qr.Z, null, a.createElement(m.Z, null, n))
          );
        },
        So = (0, c.Z)(function (e) {
          return {
            overView: {
              marginBottom: e.spacing(4),
              "& .MuiFab-label": {
                fontSize: "14px",
                lineHeight: "20px",
                margin: "0px 10px",
              },
            },
            title: {
              marginTop: e.spacing(5),
              height: 25,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "24px",
            },
            subTitle: { color: e.palette.primary.main },
            description: { marginBottom: e.spacing(5) },
            paper: {
              padding: e.spacing(5),
              marginTop: e.spacing(5),
              borderRadius: e.spacing(4),
              boxShadow: "none",
              "& .completed": { color: e.palette.primary.main },
              "& .error": { color: "red" },
            },
            chainLogo: { height: e.spacing(4) },
          };
        }),
        No = function (e) {
          var t = e.transaction,
            n = e.chain,
            r = null == t ? void 0 : t.data,
            o = So(),
            l = Sn(),
            i = l.coin,
            c = l.tab,
            s = function (e, t) {
              return "nft-transactions" === c ? N(e, t) : k(e, t);
            };
          (0, a.useEffect)(
            function () {
              null !== r &&
                "" !== n &&
                we(me.TransactionDetails, {
                  address: null == r ? void 0 : r.id,
                  chain: n,
                });
            },
            [r]
          );
          var d,
            u = (0, no.Z)(null == r ? void 0 : r.date);
          return a.createElement(
            "div",
            { style: { overflowX: "auto" } },
            a.createElement(
              eo.Z,
              null,
              a.createElement(
                to.Z,
                null,
                a.createElement(Co, {
                  label: "Transaction Hash",
                  value: a.createElement(
                    Xa,
                    { content: null == r ? void 0 : r.id },
                    null == r ? void 0 : r.id
                  ),
                }),
                a.createElement(Co, {
                  label: "Status",
                  value: a.createElement(
                    "strong",
                    { className: null == r ? void 0 : r.status },
                    null == r ? void 0 : r.status
                  ),
                }),
                a.createElement(Co, {
                  label: "Block",
                  value: null == r ? void 0 : r.block,
                }),
                a.createElement(
                  $r.Z,
                  null,
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(m.Z, null, "Chain")
                  ),
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(
                      "div",
                      { style: { display: "flex", alignItems: "center" } },
                      a.createElement("img", {
                        className: o.chainLogo,
                        src:
                          "https://assets.unmarshal.io/tokens/" +
                          (n ? n.split("-")[0] : "") +
                          ".png",
                        alt: Ye.get(n),
                      })
                    )
                  )
                ),
                (null == r ? void 0 : r.chain_id) &&
                  (null == r ? void 0 : r.target_chain_id) &&
                  a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(Co, {
                      label: "Chain ID ",
                      value: null == r ? void 0 : r.chain_id,
                    }),
                    a.createElement(Co, {
                      label: "Target Chain ID ",
                      value: null == r ? void 0 : r.target_chain_id,
                    })
                  ),
                a.createElement(Co, {
                  label: "Timestamp",
                  value:
                    ((d = null == r ? void 0 : r.date),
                    ("number" == typeof d
                      ? (0, ro.Z)((0, no.Z)(d), { addSuffix: !0 })
                      : "") +
                      " (" +
                      u.toTimeString() +
                      ")"),
                }),
                a.createElement(Co, {
                  label: "From",
                  value: a.createElement(
                    Xa,
                    { content: null == r ? void 0 : r.from },
                    a.createElement(
                      jr,
                      { to: s(null == r ? void 0 : r.from, i) },
                      null == r ? void 0 : r.from
                    )
                  ),
                }),
                a.createElement(Co, {
                  label: "To",
                  value: a.createElement(
                    Xa,
                    { content: null == r ? void 0 : r.to },
                    a.createElement(
                      jr,
                      { to: s(null == r ? void 0 : r.to, i) },
                      null == r ? void 0 : r.to
                    )
                  ),
                }),
                "partisia" === i &&
                  a.createElement(Co, {
                    label: "Event/Transaction",
                    value: (null == r ? void 0 : r.isEvent)
                      ? "Event"
                      : "Transaction",
                  }),
                (null == r ? void 0 : r.nft_events) &&
                  a.createElement(
                    $r.Z,
                    null,
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(m.Z, null, "Tokens Transferred")
                    ),
                    a.createElement(
                      Qr.Z,
                      null,
                      ((null == r ? void 0 : r.nft_events) || []).map(function (
                        e
                      ) {
                        var t, o, l;
                        return a.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            },
                          },
                          a.createElement(
                            m.Z,
                            { style: { marginRight: "5px" } },
                            ((null === (t = null == e ? void 0 : e.metadata) ||
                            void 0 === t
                              ? void 0
                              : t.name) || "") + " [Token ID: ",
                            a.createElement(
                              Xa,
                              { content: e.token_id },
                              a.createElement(
                                jr,
                                {
                                  to: S(
                                    r.from,
                                    e.contract_address,
                                    n,
                                    e.token_id
                                  ),
                                },
                                a.createElement(
                                  m.Z,
                                  {
                                    display: "inline",
                                    style: { color: "#34d399" },
                                  },
                                  null == e ? void 0 : e.token_id
                                )
                              )
                            ),
                            " ",
                            "]   ",
                            " ",
                            a.createElement(
                              m.Z,
                              { display: "inline", color: "secondary" },
                              "From:",
                              " ",
                              a.createElement(
                                Xa,
                                { content: null == e ? void 0 : e.from },
                                a.createElement(
                                  jr,
                                  { to: s(null == e ? void 0 : e.from, i) },
                                  a.createElement(
                                    m.Z,
                                    { display: "inline", color: "primary" },
                                    ge(null == e ? void 0 : e.from)
                                  )
                                ),
                                " "
                              ),
                              "   To:",
                              " ",
                              a.createElement(
                                Xa,
                                { content: null == e ? void 0 : e.to },
                                a.createElement(
                                  jr,
                                  { to: s(null == e ? void 0 : e.to, i) },
                                  a.createElement(
                                    m.Z,
                                    { display: "inline", color: "primary" },
                                    ge(null == e ? void 0 : e.to)
                                  )
                                )
                              )
                            )
                          ),
                          a.createElement(
                            jr,
                            {
                              to: S(r.from, e.contract_address, n, e.token_id),
                            },
                            a.createElement(Zo, {
                              media:
                                (null ===
                                  (o = null == e ? void 0 : e.metadata) ||
                                void 0 === o
                                  ? void 0
                                  : o.image_url) || "",
                              name:
                                null ===
                                  (l = null == e ? void 0 : e.metadata) ||
                                void 0 === l
                                  ? void 0
                                  : l.name,
                              size: yo.Small,
                            })
                          )
                        );
                      })
                    )
                  ),
                a.createElement(
                  $r.Z,
                  null,
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(m.Z, null, "Sent")
                  ),
                  a.createElement(
                    Qr.Z,
                    null,
                    ((null == r ? void 0 : r.sent) || []).map(function (e) {
                      return a.createElement(
                        m.Z,
                        null,
                        da(
                          Number(null == e ? void 0 : e.value),
                          null == e ? void 0 : e.decimals
                        ) +
                          " " +
                          (null == e ? void 0 : e.symbol),
                        "  ",
                        " ",
                        a.createElement(
                          m.Z,
                          { display: "inline", color: "secondary" },
                          "From:",
                          " ",
                          a.createElement(
                            Xa,
                            { content: null == e ? void 0 : e.from },
                            a.createElement(
                              jr,
                              { to: s(null == e ? void 0 : e.from, i) },
                              a.createElement(
                                m.Z,
                                { display: "inline", color: "primary" },
                                ge(null == e ? void 0 : e.from)
                              )
                            ),
                            " "
                          ),
                          "   To:",
                          " ",
                          a.createElement(
                            Xa,
                            { content: null == e ? void 0 : e.to },
                            a.createElement(
                              jr,
                              { to: s(null == e ? void 0 : e.to, i) },
                              a.createElement(
                                m.Z,
                                { display: "inline", color: "primary" },
                                ge(null == e ? void 0 : e.to)
                              )
                            )
                          )
                        )
                      );
                    })
                  )
                ),
                a.createElement(
                  $r.Z,
                  null,
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(m.Z, null, "Received")
                  ),
                  a.createElement(
                    Qr.Z,
                    null,
                    ((null == r ? void 0 : r.received) || []).map(function (e) {
                      return a.createElement(
                        m.Z,
                        { color: "primary" },
                        "+ " +
                          da(
                            Number(null == e ? void 0 : e.value),
                            null == e ? void 0 : e.decimals
                          ) +
                          " " +
                          (null == e ? void 0 : e.symbol) +
                          " ",
                        "  ",
                        a.createElement(
                          m.Z,
                          { display: "inline", color: "secondary" },
                          "From:",
                          " ",
                          a.createElement(
                            Xa,
                            { content: null == e ? void 0 : e.from },
                            a.createElement(
                              jr,
                              { to: s(null == e ? void 0 : e.from, i) },
                              a.createElement(
                                m.Z,
                                { display: "inline", color: "primary" },
                                ge(null == e ? void 0 : e.from)
                              )
                            ),
                            " "
                          ),
                          "   To:",
                          " ",
                          a.createElement(
                            Xa,
                            { content: null == e ? void 0 : e.to },
                            a.createElement(
                              jr,
                              { to: s(null == e ? void 0 : e.to, i) },
                              a.createElement(
                                m.Z,
                                { display: "inline", color: "primary" },
                                ge(null == e ? void 0 : e.to)
                              )
                            )
                          )
                        )
                      );
                    })
                  )
                ),
                "partisia" === i &&
                  a.createElement(
                    $r.Z,
                    null,
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(m.Z, null, "Events")
                    ),
                    a.createElement(
                      Qr.Z,
                      null,
                      ((null == r ? void 0 : r.events) || []).map(function (e) {
                        return a.createElement(
                          Xa,
                          { content: null == e ? void 0 : e.identifier },
                          a.createElement(
                            jr,
                            { to: x(null == e ? void 0 : e.identifier, i) },
                            a.createElement(
                              m.Z,
                              { display: "inline", color: "primary" },
                              null == e ? void 0 : e.identifier
                            )
                          )
                        );
                      })
                    )
                  ),
                "partisia" !== i &&
                  a.createElement(Co, {
                    label: "Value",
                    value:
                      ma(
                        null == r ? void 0 : r.value,
                        4,
                        null == r ? void 0 : r.native_token_decimals
                      ) +
                      " " +
                      Ge.get(i),
                  }),
                a.createElement(Co, {
                  label: "Transaction Fee",
                  value:
                    ma(
                      null == r ? void 0 : r.fee,
                      9,
                      null == r ? void 0 : r.native_token_decimals
                    ) +
                    " " +
                    Ge.get(i),
                }),
                a.createElement(Co, {
                  label: "Transaction Type",
                  value: null == r ? void 0 : r.type,
                }),
                (null == r ? void 0 : r.transfer_type) &&
                  a.createElement(Co, {
                    label: "Transfer Type",
                    value: null == r ? void 0 : r.transfer_type,
                  }),
                "partisia" === i &&
                  a.createElement(Co, {
                    label: "Shard",
                    value: null == r ? void 0 : r.shardId,
                  }),
                "partisia" === i &&
                  a.createElement(Co, {
                    label: "Arguments",
                    value: a.createElement(
                      "div",
                      null,
                      a.createElement(
                        "pre",
                        null,
                        JSON.stringify(
                          null == r ? void 0 : r.arguments,
                          null,
                          2
                        )
                      )
                    ),
                  })
              )
            )
          );
        },
        Fo = function () {
          var e,
            t = So(),
            n = Sn().txID,
            r = Sn().coin,
            o = (function () {
              var e = (0, V.FV)(ao),
                t = e[0],
                n = e[1],
                a = (0, V.rb)(ao),
                r = t,
                o = !1;
              t.hasError && (o = !0);
              var l = !1;
              return (
                t.isLoading && (l = !0),
                {
                  resetState: a,
                  getTransaction: function (e, t) {
                    return ht(n, function () {
                      return Ke.WalletApi.getTransactionDetails(t, e, {
                        nft: !0,
                      });
                    });
                  },
                  transactionDetails: {
                    data: null == r ? void 0 : r.data,
                    success: null == r ? void 0 : r.success,
                    isLoading: l,
                    hasError: !(null == r ? void 0 : r.success) && o,
                    error: null,
                  },
                }
              );
            })(),
            l = o.transactionDetails,
            i = o.getTransaction,
            c = o.resetState;
          return (
            (0, a.useEffect)(
              function () {
                return i(n, r), c;
              },
              [n]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(ar, null),
              a.createElement(
                Rn.Z,
                null,
                a.createElement(
                  m.Z,
                  { className: t.title },
                  "Transaction Details -",
                  " ",
                  a.createElement(
                    "span",
                    { className: t.subTitle },
                    a.createElement(
                      "b",
                      null,
                      null === (e = null == l ? void 0 : l.data) || void 0 === e
                        ? void 0
                        : e.description
                    )
                  )
                ),
                a.createElement(
                  Dn.Z,
                  { className: t.paper },
                  a.createElement(Wt.Z, { variant: "fullWidth" }),
                  a.createElement(
                    na,
                    ko({}, l),
                    a.createElement(No, { transaction: l, chain: r })
                  )
                )
              )
            )
          );
        },
        _o = function () {
          var e,
            t = (function () {
              var e = (0, V.FV)(io),
                t = e[0],
                n = e[1],
                a = (0, V.rb)(io),
                r = yt(n),
                o = t.get(
                  (0, gt.find)(ot, function (e) {
                    return t.get(e).success;
                  })
                ),
                l = (0, gt.find)(ot, function (e) {
                  return t.get(e).success;
                }),
                i = !1;
              ot.forEach(function (e) {
                t.get(e).hasError && (i = !0);
              });
              var c = !1;
              return (
                ot.forEach(function (e) {
                  t.get(e).isLoading && (c = !0);
                }),
                {
                  reset: a,
                  currentChain: l,
                  getTransactions: function (e) {
                    return r(function (t) {
                      return function () {
                        return Ke.WalletApi.getTransactionDetails(t, e, {
                          nft: !0,
                        });
                      };
                    });
                  },
                  transactionsDetails: {
                    data: null == o ? void 0 : o.data,
                    success: null == o ? void 0 : o.success,
                    isLoading: c,
                    hasError: !(null == o ? void 0 : o.success) && i,
                    error: null,
                  },
                }
              );
            })(),
            n = t.currentChain,
            r = t.transactionsDetails,
            o = t.getTransactions,
            l = t.reset,
            c = (0, i.k6)(),
            s = So(),
            d = Sn().txID;
          return (
            (0, a.useEffect)(
              function () {
                return o(d), l;
              },
              [d]
            ),
            (0, a.useEffect)(
              function () {
                void 0 !== n && c.replace(x(d, n));
              },
              [n]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(ar, null),
              a.createElement(
                Rn.Z,
                null,
                a.createElement(
                  m.Z,
                  { className: s.title },
                  "Transaction Details -",
                  " ",
                  a.createElement(
                    "span",
                    { className: s.subTitle },
                    a.createElement(
                      "b",
                      null,
                      null === (e = null == r ? void 0 : r.data) || void 0 === e
                        ? void 0
                        : e.description
                    )
                  )
                ),
                a.createElement(m.Z, {
                  className: s.description,
                  color: "primary",
                }),
                a.createElement(
                  Dn.Z,
                  { className: s.paper },
                  a.createElement(Wt.Z, { variant: "fullWidth" }),
                  a.createElement(
                    na,
                    ko({}, r),
                    a.createElement(No, { transaction: r, chain: n })
                  )
                )
              )
            )
          );
        },
        To = function () {
          return Sn().chain
            ? a.createElement(Fo, null)
            : a.createElement(_o, null);
        },
        Io = n(3750),
        Ao = function () {
          return (Ao =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Oo = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        Ro = (0, V.cn)({ key: "ETHEREUM_TRANSACTIONS_HISTORY", default: vt() });
      const Do = function () {
        re().get;
        var e = (0, V.FV)(Ro),
          t = e[0],
          n = e[1],
          a = (0, V.rb)(Ro),
          r = yt(n);
        return {
          loadMore: function (e, a, r) {
            var o, l, i;
            void 0 === r && (r = ""),
              Ke.WalletApi.getTransactionHistoryWithoutTotalCount(e, a, {
                page: Math.ceil(
                  (null ===
                    (i =
                      null ===
                        (l =
                          null === (o = t.get(e)) || void 0 === o
                            ? void 0
                            : o.data) || void 0 === l
                        ? void 0
                        : l.transactions) || void 0 === i
                    ? void 0
                    : i.length) /
                    50 +
                    1
                ),
                pageSize: 50,
                chainId: r,
              })
                .then(function (t) {
                  n(function (n) {
                    var a,
                      r = n.get(e);
                    return (
                      n.set(
                        e,
                        Ao(Ao({}, r), {
                          data: Ao(Ao({}, t.data), {
                            transactions: Oo(
                              Oo(
                                [],
                                null === (a = null == r ? void 0 : r.data) ||
                                  void 0 === a
                                  ? void 0
                                  : a.transactions
                              ),
                              t.data.transactions
                            ),
                          }),
                        })
                      ),
                      new Map(n)
                    );
                  });
                })
                .catch(function (t) {
                  n(function (n) {
                    var a = n.get(e);
                    return (
                      n.set(
                        e,
                        Ao(Ao({}, a), {
                          isLoading: !1,
                          success: !1,
                          hasError: !0,
                          error: t,
                        })
                      ),
                      new Map(n)
                    );
                  });
                });
          },
          resetState: a,
          getTransactionsHistory: function (e) {
            return r(function (t) {
              return function () {
                return Ke.WalletApi.getTransactionHistoryWithoutTotalCount(
                  t,
                  e,
                  { page: 1, pageSize: 50 }
                );
              };
            });
          },
          getKadenaTransactionHistory: function (e, t) {
            void 0 === t && (t = ""),
              ht(
                function (e) {
                  n(
                    "function" != typeof e
                      ? function (t) {
                          return t.set("kadena", e), new Map(t);
                        }
                      : function (t) {
                          return (
                            t.set("kadena", e(t.get("kadena"))), new Map(t)
                          );
                        }
                  );
                },
                function () {
                  return Ke.WalletApi.getTransactionHistoryWithoutTotalCount(
                    ve.Chain.kadena,
                    e,
                    { pageSize: 50, page: 1, chainId: t }
                  );
                }
              );
          },
          transactions: t,
        };
      };
      var Lo = n(2377),
        Wo = n(5995),
        Ho = n(1323),
        Po = n(8193),
        Mo = n(9037),
        Bo = function () {
          return (Bo =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        jo = (0, c.Z)(function (e) {
          var t,
            n = e.spacing,
            a = e.breakpoints;
          return {
            typeIcon: {
              padding: n(0.75),
              borderRadius: "50%",
              height: n(3),
              width: n(3),
              marginRight: n(1),
            },
            swapArrowIcon: { margin: n(2), height: n(3), width: n(3) },
            date: {
              margin: n(3),
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "14px",
              color: "#050533",
            },
            listItem:
              ((t = {}),
              (t[a.down("sm")] = {
                paddingLeft: "0px",
                overflowX: "auto",
                paddingRight: "0px",
              }),
              t),
          };
        }),
        zo = function (e) {
          var t = e.type,
            n = jo();
          return "send" === t
            ? a.createElement("img", {
                sizes: "small",
                className: n.typeIcon,
                style: { backgroundColor: "#FFF1D6" },
                src: Lo,
                alt: "",
              })
            : "receive" === t
            ? a.createElement("img", {
                className: n.typeIcon,
                style: { backgroundColor: "rgba(52, 211, 153, 0.1)" },
                src: Wo,
                alt: "",
              })
            : "contract_execution" === t
            ? a.createElement("img", {
                className: n.typeIcon,
                style: { backgroundColor: "rgba(52, 211, 153, 0.1)" },
                src: Ho,
                alt: "",
              })
            : "swap" === t
            ? a.createElement("img", {
                className: n.typeIcon,
                style: { backgroundColor: "rgba(52, 211, 153, 0.1)" },
                src: Po,
                alt: "",
              })
            : a.createElement("img", {
                className: n.typeIcon,
                style: { backgroundColor: "rgba(52, 211, 153, 0.1)" },
                src: Mo,
                alt: "",
              });
        },
        Uo = function (e) {
          var t = e.transactions,
            n = Sn().coin;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              eo.Z,
              null,
              a.createElement(
                Io.Z,
                {
                  style: {
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    backgroundColor: "#ffffff",
                  },
                },
                a.createElement(
                  $r.Z,
                  null,
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(
                      m.Z,
                      { style: { fontWeight: 600 } },
                      "Tx hash"
                    )
                  ),
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(
                      m.Z,
                      { style: { fontWeight: 600 } },
                      "Method"
                    )
                  ),
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(
                      m.Z,
                      { style: { fontWeight: 600 } },
                      "Block"
                    )
                  ),
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(m.Z, { style: { fontWeight: 600 } }, "Time")
                  ),
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(m.Z, { style: { fontWeight: 600 } }, "From")
                  ),
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(m.Z, { style: { fontWeight: 600 } }, "To")
                  ),
                  "partisia" !== n &&
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(
                        m.Z,
                        { style: { fontWeight: 600 } },
                        "Value"
                      )
                    ),
                  a.createElement(
                    Qr.Z,
                    null,
                    a.createElement(
                      m.Z,
                      { style: { fontWeight: 600 } },
                      "Tx Fee"
                    )
                  )
                )
              ),
              a.createElement(
                to.Z,
                null,
                t.map(function (e) {
                  return a.createElement(
                    $r.Z,
                    { key: null == e ? void 0 : e.id },
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(
                        jr,
                        { to: x(null == e ? void 0 : e.id, n) },
                        a.createElement(
                          "span",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              color: "#24956C",
                              textDecoration: "underline",
                              textDecorationColor: "#24956C",
                            },
                          },
                          a.createElement(
                            Xa,
                            { content: null == e ? void 0 : e.id },
                            ge(null == e ? void 0 : e.id)
                          )
                        )
                      )
                    ),
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(
                        "span",
                        { style: { display: "flex", alignItems: "center" } },
                        a.createElement(zo, {
                          type: null == e ? void 0 : e.type,
                        }),
                        a.createElement(
                          On.ZP,
                          {
                            title: null == e ? void 0 : e.type,
                            placement: "top",
                          },
                          a.createElement(
                            "span",
                            {
                              style: {
                                whiteSpace: "nowrap",
                                width: "100px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              },
                            },
                            null == e ? void 0 : e.type
                          )
                        )
                      )
                    ),
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(
                        "span",
                        null,
                        null == e ? void 0 : e.block
                      )
                    ),
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(
                        "span",
                        {
                          style: {
                            width: "max-content",
                            display: "flex",
                            flexWrap: "nowrap",
                          },
                        },
                        (function (e) {
                          if ("number" == typeof e) {
                            var t = (0, no.Z)(e);
                            return (0, oo.Z)(
                              (0, lo.Z)(t, t.getTimezoneOffset()),
                              "MMM-dd-yyyy hh:mm:ss a"
                            );
                          }
                          return "";
                        })(null == e ? void 0 : e.date)
                      )
                    ),
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(
                        jr,
                        { to: w(null == e ? void 0 : e.from, n) },
                        a.createElement(
                          "span",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              color: "#24956C",
                              textDecoration: "underline",
                              textDecorationColor: "#24956C",
                            },
                          },
                          a.createElement(
                            Xa,
                            { content: null == e ? void 0 : e.from },
                            ge(null == e ? void 0 : e.from)
                          )
                        )
                      )
                    ),
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(
                        jr,
                        { to: w(null == e ? void 0 : e.to, n) },
                        a.createElement(
                          "span",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              color: "#24956C",
                              textDecoration: "underline",
                              textDecorationColor: "#24956C",
                            },
                          },
                          a.createElement(
                            Xa,
                            { content: null == e ? void 0 : e.to },
                            ge(null == e ? void 0 : e.to)
                          )
                        )
                      )
                    ),
                    "partisia" !== n &&
                      a.createElement(
                        Qr.Z,
                        null,
                        a.createElement(
                          "span",
                          {
                            style: {
                              width: "max-content",
                              display: "flex",
                              flexWrap: "nowrap",
                            },
                          },
                          ma(
                            Number(null == e ? void 0 : e.value),
                            4,
                            null == e ? void 0 : e.native_token_decimals
                          ) +
                            " " +
                            Ge.get(n)
                        )
                      ),
                    a.createElement(
                      Qr.Z,
                      null,
                      a.createElement(
                        "span",
                        {
                          style: {
                            width: "max-content",
                            display: "flex",
                            flexWrap: "nowrap",
                          },
                        },
                        ma(
                          Number(null == e ? void 0 : e.fee),
                          4,
                          null == e ? void 0 : e.native_token_decimals
                        ) +
                          " " +
                          Ge.get(n)
                      )
                    )
                  );
                })
              )
            )
          );
        };
      const Vo = function (e) {
          var t,
            n,
            r = e.history,
            o = e.chainId,
            l =
              (null === (t = null == r ? void 0 : r.data) || void 0 === t
                ? void 0
                : t.transactions) || [],
            i = Do().loadMore,
            c = Sn(),
            s = c.address,
            d = c.coin;
          return a.createElement(
            na,
            Bo({}, r),
            0 === l.length &&
              a.createElement(
                m.Z,
                { color: "primary", align: "center" },
                a.createElement("br", null),
                "No Transactions found!",
                a.createElement("br", null)
              ),
            a.createElement(
              so(),
              {
                pageStart: 0,
                useWindow: !1,
                getScrollParent: function () {
                  return document.getElementById("scroll-paper");
                },
                loadMore: function () {
                  return i(d, s, o);
                },
                hasMore:
                  null === (n = null == r ? void 0 : r.data) || void 0 === n
                    ? void 0
                    : n.has_next,
                loader: a.createElement(ta, null),
              },
              a.createElement(Uo, { transactions: l })
            )
          );
        },
        qo = function () {
          var e = Do(),
            t = e.transactions,
            n = e.resetState,
            r = e.getTransactionsHistory,
            o = e.getKadenaTransactionHistory,
            l = ba(),
            c = Sn().address,
            d = Sn().coin,
            u = (0, i.k6)(),
            p = (0, a.useState)(!1),
            f = p[0],
            g = p[1],
            v = zn().setChains,
            E = (0, a.useState)(""),
            h = E[0],
            y = E[1],
            x = a.useState(null),
            Z = x[0],
            w = x[1],
            C = Boolean(Z);
          function S() {
            w(null);
          }
          function N(e, t) {
            S(), y(t), o(c, t);
          }
          var F = (0, At.Ds)().enqueueSnackbar;
          function _() {
            return (0, gt.every)(ot, function (e) {
              return t.get(e).success || t.get(e).hasError;
            });
          }
          return (
            (0, a.useEffect)(
              function () {
                return " " === c
                  ? (F(
                      "Try connecting your wallet or search for a wallet to view transaction history",
                      { variant: "warning" }
                    ),
                    u.push(b),
                    n)
                  : (r(c), n);
              },
              [c]
            ),
            (0, a.useEffect)(
              function () {
                we(me.TokenHistory, {
                  tab: Zr.TokenHistory,
                  address: c,
                  chain: d,
                });
              },
              [d]
            ),
            f ||
              "" !== d ||
              (function () {
                if (_() && !d) {
                  g(!0);
                  var e = (0, gt.maxBy)(ot, function (e) {
                    if (t.get(e).data)
                      return (t.get(e).data.transactions || []).length;
                  });
                  u.push(k(c, e));
                }
              })(),
            (0, a.useEffect)(
              function () {
                var e;
                "" === d && g(!1),
                  _() &&
                    ((e = (0, gt.orderBy)(
                      ot,
                      function (e) {
                        var n;
                        return (
                          (null === (n = t.get(e).data) || void 0 === n
                            ? void 0
                            : n.transactions) || []
                        ).length;
                      },
                      "desc"
                    )),
                    v(e));
              },
              [t]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(ar, null),
              a.createElement(
                s.Z,
                { container: !0, className: l.grid },
                a.createElement(
                  s.Z,
                  { item: !0, lg: 2, style: { zIndex: 0 } },
                  a.createElement(Or, { selectedItem: Zr.TokenHistory })
                ),
                a.createElement(
                  s.Z,
                  { item: !0, xs: 12, lg: 10 },
                  a.createElement(
                    "main",
                    { className: l.content },
                    a.createElement(
                      Rn.Z,
                      { className: l.container },
                      a.createElement(Yn, {
                        assetLength: function (e) {
                          var n,
                            a = t.get(e).data;
                          return null !== a && a.transactions
                            ? (
                                null === (n = t.get(e).data) || void 0 === n
                                  ? void 0
                                  : n.has_next
                              )
                              ? a.transactions.length + " +"
                              : a.transactions.length
                            : 0;
                        },
                        link: function (e) {
                          return k(c, e);
                        },
                      }),
                      a.createElement(
                        "div",
                        { style: { display: "flex", alignItems: "center" } },
                        a.createElement(
                          m.Z,
                          { variant: "h6", display: "inline" },
                          "Transaction History"
                        ),
                        "kadena" === d &&
                          a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                              M.Z,
                              {
                                onClick: function (e) {
                                  w(e.currentTarget);
                                },
                                variant: "text",
                                disableRipple: !0,
                                disableFocusRipple: !0,
                                disableTouchRipple: !0,
                              },
                              "" === h ? "All chains" : "Chain " + h,
                              a.createElement(Pn.Z, null)
                            ),
                            a.createElement(
                              Wn.Z,
                              {
                                onClose: S,
                                anchorEl: Z,
                                open: C,
                                style: { maxHeight: 500 },
                              },
                              a.createElement(
                                Hn.Z,
                                {
                                  value: "aggregate",
                                  onClick: function (e) {
                                    N(0, "");
                                  },
                                },
                                "All chains"
                              ),
                              rt[6].subChains.map(function (e) {
                                return a.createElement(
                                  Hn.Z,
                                  {
                                    value: e,
                                    onClick: function (t) {
                                      N(0, e.toString());
                                    },
                                  },
                                  e
                                );
                              })
                            )
                          )
                      ),
                      a.createElement("br", null),
                      a.createElement(
                        Dn.Z,
                        {
                          className: l.paper,
                          style: { paddingTop: "0px" },
                          id: "scroll-paper",
                        },
                        a.createElement(Vo, { history: t.get(d), chainId: h })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ko = function () {
          var e = vo(),
            t = e.assets,
            n = e.getAssets,
            r = e.resetState,
            o = ba(),
            l = Sn().address,
            c = (0, i.k6)(),
            d = Sn().coin,
            u = (0, a.useState)(!1),
            p = u[0],
            f = u[1],
            g = (0, At.Ds)().enqueueSnackbar,
            v = zn().setChains;
          function E() {
            return (0, gt.every)(ot, function (e) {
              var n, a;
              return (
                (null === (n = t.get(e)) || void 0 === n
                  ? void 0
                  : n.success) ||
                (null === (a = t.get(e)) || void 0 === a ? void 0 : a.hasError)
              );
            });
          }
          return (
            (0, a.useEffect)(
              function () {
                return " " === l
                  ? (g(
                      "Try connecting your wallet or search for a wallet to view nft assets",
                      { variant: "warning" }
                    ),
                    c.push(b),
                    r)
                  : (n(l), r);
              },
              [l]
            ),
            (0, a.useEffect)(
              function () {
                we(me.NFTs, { tab: Zr.NFT, address: l, chain: d });
              },
              [d]
            ),
            p ||
              "" !== d ||
              (function () {
                if (E() && !d) {
                  f(!0);
                  var e = (0, gt.maxBy)(ot, function (e) {
                    var n, a;
                    return (
                      (null ===
                        (a =
                          null === (n = t.get(e)) || void 0 === n
                            ? void 0
                            : n.data) || void 0 === a
                        ? void 0
                        : a.nft_assets) || []
                    ).length;
                  });
                  c.push(C(l, e));
                }
              })(),
            (0, a.useEffect)(
              function () {
                var e;
                "" === d && f(!1),
                  E() &&
                    ((e = (0, gt.orderBy)(
                      ot,
                      function (e) {
                        var n;
                        return (
                          (null === (n = t.get(e).data) || void 0 === n
                            ? void 0
                            : n.nft_assets) || []
                        ).length;
                      },
                      "desc"
                    )),
                    v(e));
              },
              [t]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(ar, null),
              a.createElement(
                s.Z,
                { container: !0, className: o.grid },
                a.createElement(
                  s.Z,
                  { lg: 2, style: { zIndex: 0 } },
                  a.createElement(Or, { selectedItem: Zr.NFT })
                ),
                a.createElement(
                  s.Z,
                  { item: !0, xs: 12, lg: 10 },
                  a.createElement(
                    "main",
                    { className: o.content },
                    a.createElement(
                      Rn.Z,
                      { className: o.container, maxWidth: "lg" },
                      a.createElement(Yn, {
                        assetLength: function (e) {
                          var n, a, r, o;
                          return (
                            null ===
                              (a =
                                null === (n = t.get(e)) || void 0 === n
                                  ? void 0
                                  : n.data) || void 0 === a
                              ? void 0
                              : a.nft_assets
                          )
                            ? null ===
                                (o =
                                  null === (r = t.get(e)) || void 0 === r
                                    ? void 0
                                    : r.data) || void 0 === o
                              ? void 0
                              : o.nft_assets.length
                            : 0;
                        },
                        link: function (e) {
                          return C(l, e);
                        },
                      }),
                      a.createElement(m.Z, { variant: "h6" }, "NFT Assets"),
                      a.createElement("br", null),
                      a.createElement(
                        Dn.Z,
                        { className: o.paper, id: "nft-assets-scroll-paper" },
                        a.createElement(wo, { assetDetails: t.get(d) })
                      )
                    )
                  )
                )
              )
            )
          );
        };
      var Yo = function () {
          return (Yo =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Go = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        Xo = (0, V.cn)({ key: "NFT_TRANSACTIONS_HISTORY", default: vt() });
      const Jo = function () {
        var e = (0, V.FV)(Xo),
          t = e[0],
          n = e[1],
          a = (0, V.rb)(Xo),
          r = yt(n);
        return {
          transactionsHistory: t,
          resetState: a,
          getTransactionsHistory: function (e) {
            return r(function (t) {
              return function () {
                return Ke.NFT.getTransactions(t, e, { pageSize: 50, page: 1 });
              };
            });
          },
          loadMore: function (e, a) {
            var r, o, l;
            Ke.NFT.getTransactions(e, a, {
              page: Math.ceil(
                (null ===
                  (l =
                    null ===
                      (o =
                        null === (r = t.get(e)) || void 0 === r
                          ? void 0
                          : r.data) || void 0 === o
                      ? void 0
                      : o.transactions) || void 0 === l
                  ? void 0
                  : l.length) /
                  50 +
                  1
              ),
              pageSize: 50,
            })
              .then(function (t) {
                n(function (n) {
                  var a,
                    r,
                    o = n.get(e);
                  return (
                    n.set(
                      e,
                      Yo(Yo({}, o), {
                        data: Yo(Yo({}, t.data), {
                          next_page: null !== t.data.transactions,
                          transactions:
                            null === t.data.transactions
                              ? null === (a = null == o ? void 0 : o.data) ||
                                void 0 === a
                                ? void 0
                                : a.transactions
                              : Go(
                                  Go(
                                    [],
                                    null ===
                                      (r = null == o ? void 0 : o.data) ||
                                      void 0 === r
                                      ? void 0
                                      : r.transactions
                                  ),
                                  t.data.transactions
                                ),
                        }),
                      })
                    ),
                    new Map(n)
                  );
                });
              })
              .catch(function (t) {
                n(function (n) {
                  var a = n.get(e);
                  return (
                    n.set(
                      e,
                      Yo(Yo({}, a), {
                        isLoading: !1,
                        success: !1,
                        hasError: !0,
                        error: t,
                      })
                    ),
                    new Map(n)
                  );
                });
              });
          },
        };
      };
      var $o = function () {
          return ($o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Qo = (0, c.Z)(function () {
          return { table: { minWidth: 650 } };
        }),
        el = function (e) {
          var t = e.transactions,
            n = Qo(),
            r = Sn().coin;
          return a.createElement(
            eo.Z,
            { className: n.table },
            a.createElement(
              Io.Z,
              {
                style: {
                  position: "sticky",
                  top: 0,
                  zIndex: 100,
                  backgroundColor: "#ffffff",
                },
              },
              a.createElement(
                $r.Z,
                null,
                a.createElement(Qr.Z, { align: "justify" }, "Token"),
                a.createElement(Qr.Z, { align: "justify" }, "Transaction Id"),
                a.createElement(Qr.Z, { align: "justify" }, "Sender"),
                a.createElement(Qr.Z, { align: "justify" }, "To")
              )
            ),
            a.createElement(
              to.Z,
              null,
              t.map(function (e) {
                return a.createElement(
                  $r.Z,
                  { key: e.contact_address },
                  a.createElement(
                    Qr.Z,
                    { align: "justify" },
                    ge(e.token_id, 5, 5)
                  ),
                  a.createElement(
                    Qr.Z,
                    { align: "justify" },
                    a.createElement(
                      Xa,
                      { content: e.transaction_hash },
                      a.createElement(
                        jr,
                        { to: x(e.transaction_hash, r, "nft-transactions") },
                        ge(e.transaction_hash, 5, 5)
                      )
                    )
                  ),
                  a.createElement(
                    Qr.Z,
                    { align: "justify" },
                    a.createElement(
                      Xa,
                      { content: e.sender },
                      a.createElement(
                        jr,
                        { to: C(e.sender, r) },
                        ge(e.sender, 5, 5)
                      )
                    )
                  ),
                  a.createElement(
                    Qr.Z,
                    { align: "justify" },
                    a.createElement(
                      Xa,
                      { content: e.to },
                      a.createElement(jr, { to: C(e.to, r) }, ge(e.to, 5, 5))
                    )
                  )
                );
              })
            )
          );
        };
      const tl = function (e) {
          var t,
            n,
            r = e.history,
            o =
              (null === (t = null == r ? void 0 : r.data) || void 0 === t
                ? void 0
                : t.transactions) || [],
            l = Sn(),
            i = l.coin,
            c = l.address,
            s = Jo().loadMore;
          return a.createElement(
            na,
            $o({}, r),
            a.createElement(
              so(),
              {
                pageStart: 0,
                useWindow: !1,
                getScrollParent: function () {
                  return document.getElementById("nft-history-scroll-paper");
                },
                loadMore: function () {
                  return s(i, c);
                },
                hasMore:
                  null === (n = null == r ? void 0 : r.data) || void 0 === n
                    ? void 0
                    : n.next_page,
                loader: a.createElement(ta, null),
              },
              a.createElement(el, { transactions: o })
            ),
            0 === o.length &&
              a.createElement(
                m.Z,
                { color: "primary", align: "center" },
                a.createElement("br", null),
                "No Transactions found!"
              )
          );
        },
        nl = function () {
          var e = Jo(),
            t = e.getTransactionsHistory,
            n = e.transactionsHistory,
            r = e.resetState,
            o = ba(),
            l = Sn().address,
            c = (0, i.k6)(),
            d = Sn().coin,
            u = zn().setChains,
            p = (0, At.Ds)().enqueueSnackbar;
          (0, a.useEffect)(
            function () {
              return " " === l
                ? (p(
                    "Try connecting your wallet or search for a wallet to nft transaction history",
                    { variant: "warning" }
                  ),
                  c.push(b),
                  r)
                : (t(l), r);
            },
            [l]
          );
          var f = (0, a.useState)(!1),
            g = f[0],
            v = f[1];
          function E() {
            return (0, gt.every)(ot, function (e) {
              return n.get(e).success || n.get(e).hasError;
            });
          }
          return (
            (0, a.useEffect)(
              function () {
                we(me.NFTHistory, {
                  tab: Zr.NFTTransactionHistory,
                  address: l,
                  chain: d,
                });
              },
              [d]
            ),
            g ||
              "" !== d ||
              (function () {
                if (E() && !d) {
                  v(!0);
                  var e = (0, gt.maxBy)(ot, function (e) {
                    var t;
                    return (
                      (null === (t = n.get(e).data) || void 0 === t
                        ? void 0
                        : t.transactions) || []
                    ).length;
                  });
                  c.push(N(l, e));
                }
              })(),
            (0, a.useEffect)(
              function () {
                var e;
                "" === d && v(!1),
                  E() &&
                    ((e = (0, gt.orderBy)(
                      ot,
                      function (e) {
                        var t;
                        return (
                          (null === (t = n.get(e).data) || void 0 === t
                            ? void 0
                            : t.transactions) || []
                        ).length;
                      },
                      "desc"
                    )),
                    u(e));
              },
              [n]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(ar, null),
              a.createElement(
                s.Z,
                { container: !0, className: o.grid },
                a.createElement(
                  s.Z,
                  { item: !0, lg: 2, style: { zIndex: 0 } },
                  a.createElement(Or, {
                    selectedItem: Zr.NFTTransactionHistory,
                  })
                ),
                a.createElement(
                  s.Z,
                  { item: !0, xs: 12, lg: 10 },
                  a.createElement(
                    "main",
                    { className: o.content },
                    a.createElement(
                      Rn.Z,
                      { className: o.container },
                      a.createElement(Yn, {
                        assetLength: function (e) {
                          var t, a, r, o;
                          return (
                            null ===
                              (a =
                                null === (t = n.get(e)) || void 0 === t
                                  ? void 0
                                  : t.data) || void 0 === a
                              ? void 0
                              : a.transactions
                          )
                            ? null ===
                                (o =
                                  null === (r = n.get(e)) || void 0 === r
                                    ? void 0
                                    : r.data) || void 0 === o
                              ? void 0
                              : o.transactions.length
                            : 0;
                        },
                        link: function (e) {
                          return N(l, e);
                        },
                      }),
                      a.createElement(
                        m.Z,
                        { variant: "h6" },
                        "NFT Transaction History"
                      ),
                      a.createElement("br", null),
                      a.createElement(
                        Dn.Z,
                        {
                          className: o.paper,
                          style: { paddingTop: "0px" },
                          id: "nft-history-scroll-paper",
                        },
                        a.createElement(tl, { history: n.get(d) })
                      )
                    )
                  )
                )
              )
            )
          );
        };
      var al = (0, V.cn)({ key: "TOKEN_PROFIT_AND_LOSS", default: q });
      var rl = function () {
          return (rl =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        ol = (0, c.Z)(function (e) {
          var t,
            n = e.spacing,
            a = e.breakpoints;
          return {
            loss: { color: "#ff0000" },
            profit: { color: "#34D399" },
            logo: { width: n(10), borderRadius: "50%" },
            asset: { borderRadius: 10, marginTop: n(2), marginBottom: n(1) },
            profitAndLossCard:
              ((t = {
                borderRadius: 15,
                border: "1px solid #cccccc",
                paddingInline: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
                marginTop: "10px",
                width: "65%",
              }),
              (t[a.down("sm")] = { padding: "5px", width: "80%" }),
              t),
            title: {
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.0168em",
              opacity: 0.6,
            },
            value: { fontSize: "18px", lineHeight: "30px" },
          };
        }),
        ll = (0, B.Z)(function (e) {
          var t = e.spacing,
            n = e.palette;
          return (0,
          j.Z)({ primary: { height: t(5), fontStyle: "normal", fontWeight: "bold", fontSize: "26px", lineHeight: "30px", marginBottom: "5px", letterSpacing: "0.0168em", color: n.secondary.main }, secondary: { height: t(5), fontStyle: "normal", fontWeight: 500, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.0168em", color: n.secondary.main, opacity: 0.6 } });
        })(L.Z),
        il = (0, B.Z)(function (e) {
          var t,
            n,
            a = e.spacing,
            r = e.palette,
            o = e.breakpoints;
          return (0,
          j.Z)({ root: { textAlign: "right" }, primary: ((t = { height: a(5), fontStyle: "normal", fontWeight: "bold", fontSize: "20px", lineHeight: "20px", letterSpacing: "0.0168em", color: r.secondary.main }), (t[o.up("md")] = { display: "inline", fontSize: "44px", lineHeight: "44px" }), t), secondary: ((n = { height: a(5), fontStyle: "normal", fontWeight: 500, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.0168em" }), (n[o.up("md")] = { display: "inline", fontSize: "18px", lineHeight: "44px" }), n) });
        })(L.Z);
      function cl(e) {
        var t = e.asset,
          n = ol();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            null,
            a.createElement(
              R.Z,
              null,
              a.createElement(
                Rt.Z,
                null,
                a.createElement(de, {
                  className: n.logo,
                  src: null == t ? void 0 : t.logo_url,
                  alt: null == t ? void 0 : t.contract_name,
                })
              ),
              a.createElement(ll, {
                primary: a.createElement(
                  ua,
                  { width: "25vw" },
                  null == t ? void 0 : t.contract_name
                ),
                secondary:
                  da(
                    Number(null == t ? void 0 : t.balance),
                    null == t ? void 0 : t.contract_decimals
                  ) +
                  " " +
                  fe(null == t ? void 0 : t.contract_ticker_symbol, 20) +
                  " . " +
                  oa(null == t ? void 0 : t.quote_rate),
              }),
              a.createElement(il, {
                primary: ia(null == t ? void 0 : t.quote, 0),
                secondary: a.createElement(
                  "span",
                  {
                    className:
                      (null == t ? void 0 : t.quote_pct_change_24h) < 0
                        ? n.loss
                        : n.profit,
                  },
                  "  ",
                  ((null == t ? void 0 : t.quote_pct_change_24h.toFixed(3)) ||
                    "0") + " %"
                ),
              })
            )
          )
        );
      }
      const sl = function (e) {
        var t,
          n,
          r,
          o,
          l,
          i,
          c = e.chain,
          d = e.contractAddress,
          u = e.address,
          p = e.asset,
          f = (function () {
            var e = (0, V.FV)(al),
              t = e[0],
              n = e[1],
              a = (0, V.rb)(al),
              r = le();
            return {
              profitAndLoss: t,
              getProfitAndLoss: function (e, t, a) {
                return r(n, "/v2/" + e + "/address/" + t + "/userData", {
                  params: { contract: a },
                });
              },
              reset: a,
            };
          })(),
          g = f.getProfitAndLoss,
          v = f.profitAndLoss,
          E = f.reset,
          h = ol();
        return (
          (0, a.useEffect)(
            function () {
              return g(c, u, d), E;
            },
            [c, d, u]
          ),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(cl, { asset: p }),
            a.createElement(Wt.Z, null),
            a.createElement("br", null),
            a.createElement(
              m.Z,
              { variant: "h6" },
              a.createElement("b", null, "Profit and Loss")
            ),
            Ea(d) ||
              (null === (t = at.get(c)) || void 0 === t
                ? void 0
                : t.disableUserData)
              ? a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    m.Z,
                    { color: "primary", align: "center" },
                    a.createElement("br", null),
                    "Coming soon!",
                    a.createElement("br", null)
                  )
                )
              : a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    na,
                    rl({}, v),
                    a.createElement(
                      s.Z,
                      { container: !0, alignItems: "stretch" },
                      a.createElement(
                        s.Z,
                        { item: !0, xs: 6, lg: 3 },
                        a.createElement(
                          "div",
                          { className: h.profitAndLossCard },
                          a.createElement(
                            m.Z,
                            { className: h.title },
                            "Profit/Loss"
                          ),
                          a.createElement(
                            m.Z,
                            { className: h.value },
                            a.createElement(
                              "span",
                              {
                                className:
                                  (null === (n = null == v ? void 0 : v.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.overall_profit_loss) < 0
                                    ? h.loss
                                    : h.profit,
                              },
                              oa(
                                null === (r = null == v ? void 0 : v.data) ||
                                  void 0 === r
                                  ? void 0
                                  : r.overall_profit_loss
                              )
                            )
                          )
                        )
                      ),
                      a.createElement(
                        s.Z,
                        { item: !0, xs: 6, lg: 3 },
                        a.createElement(
                          "div",
                          { className: h.profitAndLossCard },
                          a.createElement(
                            m.Z,
                            { className: h.title },
                            "Average Price"
                          ),
                          a.createElement(
                            m.Z,
                            { className: h.value },
                            a.createElement(
                              "span",
                              null,
                              oa(
                                null === (o = null == v ? void 0 : v.data) ||
                                  void 0 === o
                                  ? void 0
                                  : o.average_token_price
                              )
                            )
                          )
                        )
                      ),
                      a.createElement(
                        s.Z,
                        { item: !0, xs: 6, lg: 3 },
                        a.createElement(
                          "div",
                          { className: h.profitAndLossCard },
                          a.createElement(
                            m.Z,
                            { className: h.title },
                            "Total Fee Paid USD"
                          ),
                          a.createElement(
                            m.Z,
                            { className: h.value },
                            a.createElement(
                              "span",
                              null,
                              (null === (l = null == v ? void 0 : v.data) ||
                              void 0 === l
                                ? void 0
                                : l.total_fees_paid_usd.toFixed(4)) + " (USD)"
                            )
                          )
                        )
                      ),
                      a.createElement(
                        s.Z,
                        { item: !0, xs: 6, lg: 3 },
                        a.createElement(
                          "div",
                          { className: h.profitAndLossCard },
                          a.createElement(
                            m.Z,
                            { className: h.title },
                            "Total Fee Paid"
                          ),
                          a.createElement(
                            m.Z,
                            { className: h.value },
                            a.createElement(
                              "span",
                              null,
                              (null === (i = null == v ? void 0 : v.data) ||
                              void 0 === i
                                ? void 0
                                : i.total_fees_paid.toFixed(4)) +
                                " " +
                                Ge.get(c)
                            )
                          )
                        )
                      )
                    )
                  )
                )
          )
        );
      };
      var dl = function () {
          return (dl =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        ml = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        ul = (0, V.cn)({ key: "TOKEN_TRANSACTIONS", default: q });
      var pl = function () {
        return (pl =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      const fl = function (e) {
        var t,
          n,
          r,
          o = e.chain,
          l = e.contractAddress,
          i = e.address,
          c = (function () {
            var e = (0, V.FV)(ul),
              t = e[0],
              n = e[1],
              a = (0, V.rb)(ul),
              r = le(),
              o = re().get;
            return {
              transactions: t,
              getTokenTransactions: function (e, t, a, o) {
                return (
                  void 0 === o && (o = ""),
                  r(n, "/v3/" + e + "/address/" + t + "/transactions", {
                    params: { contract: a, chainId: o },
                  })
                );
              },
              loadMore: function (e, a, r, l) {
                var i, c;
                void 0 === l && (l = "");
                var s = "/v3/" + e + "/address/" + a + "/transactions";
                "kadena" === e &&
                  (s =
                    "/v3/" +
                    e +
                    "/address/" +
                    a +
                    "/transactions?chainId=" +
                    l),
                  o(s, {
                    onSuccess: function (e) {
                      n(function (t) {
                        var n,
                          a = t;
                        return dl(dl({}, a), {
                          data: dl(dl({}, e.data), {
                            transactions: ml(
                              ml(
                                [],
                                null === (n = null == a ? void 0 : a.data) ||
                                  void 0 === n
                                  ? void 0
                                  : n.transactions
                              ),
                              e.data.transactions
                            ),
                          }),
                        });
                      });
                    },
                    params: {
                      contract: r,
                      page: Math.ceil(
                        (null ===
                          (c =
                            null === (i = null == t ? void 0 : t.data) ||
                            void 0 === i
                              ? void 0
                              : i.transactions) || void 0 === c
                          ? void 0
                          : c.length) /
                          25 +
                          1
                      ),
                      pageSize: 25,
                    },
                  });
              },
              reset: a,
            };
          })(),
          s = c.getTokenTransactions,
          d = c.transactions,
          u = c.reset,
          p = c.loadMore,
          f = Sn().chainId;
        return (
          (0, a.useEffect)(
            function () {
              return s(o, i, l), u;
            },
            [o, l, i]
          ),
          null === (t = null == d ? void 0 : d.data) ||
            void 0 === t ||
            t.transactions,
          a.createElement(
            "div",
            {
              style: { maxHeight: "75vh", overflow: "auto" },
              id: "scroll-token-transactions",
            },
            Ea(l)
              ? a.createElement(
                  m.Z,
                  { color: "primary", align: "center" },
                  a.createElement("br", null),
                  "Coming soon!",
                  a.createElement("br", null)
                )
              : a.createElement(
                  na,
                  pl({}, d),
                  a.createElement(
                    so(),
                    {
                      useWindow: !1,
                      getScrollParent: function () {
                        return document.getElementById(
                          "scroll-token-transactions"
                        );
                      },
                      pageStart: 0,
                      loadMore: function () {
                        return p(o, i, l, f);
                      },
                      hasMore:
                        null === (n = null == d ? void 0 : d.data) ||
                        void 0 === n
                          ? void 0
                          : n.has_next,
                      loader: a.createElement(ta, null),
                    },
                    a.createElement(Uo, {
                      transactions:
                        (null === (r = null == d ? void 0 : d.data) ||
                        void 0 === r
                          ? void 0
                          : r.transactions) || [],
                    })
                  )
                )
          )
        );
      };
      var gl = function () {
          return (gl =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        vl = (0, B.Z)(function () {
          return (0, j.Z)({ indicator: { display: "none" } });
        })(Mn.Z),
        El = (0, B.Z)(function (e) {
          var t = e.spacing;
          return (0,
          j.Z)({ root: { minHeight: t(5), height: t(10), minWidth: t(24), opacity: "1.0" } });
        })(Bn.Z),
        hl = (0, c.Z)(function (e) {
          return {
            selectedLabel: {
              backgroundColor: "rgba(52, 211, 153, 0.1)",
              border: "1px solid #34D399",
              borderRadius: "6px",
              color: "#34D399",
              minWidth: e.spacing(16),
              padding: e.spacing(1),
              paddingLeft: e.spacing(4),
              paddingRight: e.spacing(4),
              fontSize: "18px",
            },
            label: {
              fontSize: "18px",
              borderRadius: "6px",
              minWidth: e.spacing(16),
              padding: e.spacing(1),
              paddingLeft: e.spacing(4),
              paddingRight: e.spacing(4),
              border: "1px solid #e2e8e5",
            },
          };
        });
      const yl = function (e) {
        var t = e.link,
          n = Sn().tab,
          r = (0, gt.indexOf)(Qe, n),
          o = hl();
        return a.createElement(
          vl,
          { value: r, variant: "scrollable", scrollButtons: "auto" },
          Qe.map(function (e, n) {
            return a.createElement(
              El,
              gl(
                {
                  disableRipple: !0,
                  key: e,
                  component: un.rU,
                  to: t(e),
                  label: a.createElement(
                    m.Z,
                    { className: r === n ? o.selectedLabel : o.label },
                    $e.get(e)
                  ),
                },
                { id: "tab-" + (l = n), "aria-controls": "tab-" + l }
              )
            );
            var l;
          })
        );
      };
      var bl = (0, V.cn)({ key: "LISTED_RECOMMENDATION", default: q }),
        xl = (0, V.cn)({ key: "MARSH_RECOMMENDATIONS", default: q }),
        Zl = (0, V.cn)({ key: "TOKEN_RECOMMENDATIONS", default: q });
      const wl = function () {
        var e = le(),
          t = (0, V.FV)(bl),
          n = t[0],
          a = t[1],
          r = (0, V.rb)(bl),
          o = (0, V.FV)(Zl),
          l = o[0],
          i = o[1],
          c = (0, V.rb)(Zl),
          s = (0, V.FV)(xl),
          d = s[0],
          m = s[1];
        return {
          recommendations: n,
          getListedRecommendations: function (t, n, r, o, l) {
            void 0 === r && (r = 20),
              void 0 === o && (o = ""),
              void 0 === l && (l = ""),
              e(a, nt + "/v1/recommendations/list", {
                params: {
                  chain: n,
                  page: t,
                  pageSize: r,
                  recommendationType: o,
                  tokenName: l,
                },
              });
          },
          tokenRecommendations: l,
          getRecommendationsForToken: function (t) {
            e(i, nt + "/v1/recommendations/list/tokenId/" + t, {
              params: { page: 1, pageSize: 20 },
            });
          },
          resetTokenRecommendations: c,
          resetState: r,
          marshRecommendations: d,
          getMarshRecommendations: function () {
            e(m, nt + "/v1/recommendations/list", {
              params: {
                chain: "",
                page: 1,
                pageSize: 20,
                recommendationType: "",
                tokenName: "MARSH",
              },
            });
          },
        };
      };
      var kl = function () {
        return (kl =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      (0, c.Z)(function (e) {
        var t = e.spacing;
        return {
          platformUrl: {
            textDecoration: "none",
            color: "#ffffff",
            padding: t(1.5),
            paddingLeft: t(3),
            paddingRight: t(3),
          },
          button: {
            borderRadius: t(2),
            width: "max-content",
            "&:hover": { backgroundColor: "#34D399" },
          },
          oddRecommendation: {
            backgroundColor: "rgba(228,228,228,0.3)",
            borderRadius: t(1),
          },
          evenRecommendation: {
            backgroundColor: "#ffffff",
            borderRadius: t(1),
          },
          logo: { width: t(7), borderRadius: "40%" },
        };
      });
      const Cl = function (e) {
          var t = e.coingeckoID,
            n = pr(),
            r = wl(),
            o = r.tokenRecommendations,
            l = r.getRecommendationsForToken,
            i = r.resetTokenRecommendations,
            c = (0, a.useState)([]),
            u = c[0],
            p = c[1],
            f = Sn().coin,
            g = (0, a.useState)(!1),
            v = g[0],
            E = g[1],
            h = rn().userAddress;
          return (
            (0, a.useEffect)(
              function () {
                var e, t, n;
                p(
                  v
                    ? null ===
                        (t =
                          null === (e = null == o ? void 0 : o.data) ||
                          void 0 === e
                            ? void 0
                            : e.data) || void 0 === t
                      ? void 0
                      : t.filter(function (e) {
                          return e.chain === f && !e.centralised_exchange;
                        })
                    : null === (n = null == o ? void 0 : o.data) || void 0 === n
                    ? void 0
                    : n.data
                );
              },
              [o, v]
            ),
            (0, a.useEffect)(
              function () {
                return l(t), i;
              },
              [t]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement("br", null),
              a.createElement(Ln.Z, {
                color: "primary",
                checked: v,
                onChange: function () {
                  E(!v);
                },
              }),
              a.createElement(
                m.Z,
                { display: "inline" },
                "Show Recommendations only on ",
                f
              ),
              a.createElement(
                s.Z,
                { className: n.table },
                a.createElement(
                  s.Z,
                  { item: !0, xs: 5, md: 3, className: n.tableHeader },
                  a.createElement(
                    m.Z,
                    { className: n.recommendationHeaderFont },
                    "REWARD TOKEN"
                  )
                ),
                a.createElement(
                  d.Z,
                  { smDown: !0 },
                  a.createElement(
                    s.Z,
                    { item: !0, xs: 3, className: n.tableHeader },
                    a.createElement(
                      m.Z,
                      { className: n.recommendationHeaderFont },
                      "PROVIDER"
                    )
                  )
                ),
                a.createElement(
                  s.Z,
                  { item: !0, xs: 2, className: n.tableHeader },
                  a.createElement(
                    m.Z,
                    { className: n.recommendationHeaderFont },
                    "APR"
                  )
                ),
                a.createElement(
                  s.Z,
                  { item: !0, xs: 3, md: 2, className: n.tableHeader },
                  a.createElement(
                    m.Z,
                    { className: n.recommendationHeaderFont },
                    "Chain"
                  )
                ),
                a.createElement(s.Z, { item: !0, xs: 2 })
              ),
              a.createElement(
                na,
                kl({}, o),
                u
                  ? a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(
                        "div",
                        { style: { maxHeight: "60vh", overflow: "auto" } },
                        null == u
                          ? void 0
                          : u.map(function (e, t) {
                              return a.createElement(
                                s.Z,
                                { className: n.recommendationList, key: e.id },
                                a.createElement(
                                  s.Z,
                                  {
                                    item: !0,
                                    xs: 5,
                                    md: 3,
                                    key: e.token_name,
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                    },
                                  },
                                  a.createElement(de, {
                                    className: n.logo,
                                    src: e.reward_token_image,
                                    alt: e.reward_token_name,
                                  }),
                                  "  ",
                                  a.createElement(
                                    m.Z,
                                    {
                                      display: "inline",
                                      className: n.recommendationListFont,
                                    },
                                    e.reward_token_name
                                  )
                                ),
                                a.createElement(
                                  d.Z,
                                  { smDown: !0 },
                                  a.createElement(
                                    s.Z,
                                    {
                                      item: !0,
                                      xs: 3,
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                      },
                                    },
                                    a.createElement(de, {
                                      className: n.logo,
                                      src:
                                        "https://assets.unmarshal.io/providers/" +
                                        e.provider
                                          .toLowerCase()
                                          .split(" ")
                                          .join("_") +
                                        ".png",
                                      alt: e.provider,
                                    }),
                                    "  ",
                                    a.createElement(
                                      m.Z,
                                      {
                                        display: "inline",
                                        className: n.recommendationListFont,
                                      },
                                      e.provider.toUpperCase()
                                    )
                                  )
                                ),
                                a.createElement(
                                  s.Z,
                                  { item: !0, xs: 2 },
                                  a.createElement(
                                    m.Z,
                                    { className: n.recommendationListFont },
                                    e.max_apr < 0.01
                                      ? "<0.01%"
                                      : e.max_apr.toFixed(2) + "%"
                                  )
                                ),
                                a.createElement(
                                  s.Z,
                                  {
                                    item: !0,
                                    xs: 3,
                                    md: 2,
                                    className: n.recommendationListFont,
                                  },
                                  a.createElement(
                                    m.Z,
                                    { className: n.recommendationListFont },
                                    e.centralised_exchange
                                      ? "--"
                                      : e.chain.toUpperCase()
                                  )
                                ),
                                a.createElement(
                                  s.Z,
                                  {
                                    item: !0,
                                    xs: 2,
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                    },
                                  },
                                  a.createElement(
                                    M.Z,
                                    {
                                      className: n.button,
                                      onClick: function () {
                                        we(me.StakeOrLend, {
                                          source: "User token details",
                                          recommendation: e,
                                          page: 1,
                                          index: t,
                                          walletAddress: h,
                                        }),
                                          window.open(
                                            null == e ? void 0 : e.platform_url,
                                            "_blank"
                                          );
                                      },
                                    },
                                    "staking" === e.type ||
                                      "LP staking" === e.type
                                      ? "Stake Now"
                                      : "Lend Now"
                                  )
                                )
                              );
                            })
                      )
                    )
                  : a.createElement(
                      m.Z,
                      { color: "primary", align: "center" },
                      a.createElement("br", null),
                      "No Recommendations found!",
                      a.createElement("br", null)
                    )
              )
            )
          );
        },
        Sl = function () {
          var e,
            t,
            n,
            r,
            o = ba(),
            l = ba(),
            i = Sn(),
            c = i.coin,
            d = i.contractAddress,
            u = i.address,
            p = i.tab,
            f = i.chainID,
            g = i.token,
            v = _t(),
            E = v.getAssets,
            h = v.assets,
            y = v.getKadenaAssets,
            b = h.get(c).data,
            x = (0, gt.find)(b, function (e) {
              return (null == e ? void 0 : e.contract_address) === d;
            }),
            Z = rn().isConnected;
          return (
            (0, a.useEffect)(
              function () {
                "kadena" === c ? y(u, f, g) : E(u, f, g);
              },
              [u]
            ),
            (0, a.useEffect)(
              function () {
                we(me.UserTokenDetails, {
                  address: u,
                  contractAddress: d,
                  tab: p,
                  chain: c,
                  walletConnected: Z,
                });
              },
              [p]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(ar, null),
              a.createElement(
                s.Z,
                { container: !0, className: o.grid },
                a.createElement(
                  s.Z,
                  { item: !0, lg: 2, style: { zIndex: 0 } },
                  a.createElement(Or, { selectedItem: Zr.None })
                ),
                a.createElement(
                  s.Z,
                  { item: !0, xs: 12, lg: 10 },
                  a.createElement(
                    "main",
                    { className: o.content },
                    a.createElement(
                      Rn.Z,
                      { className: o.container, maxWidth: "lg" },
                      a.createElement(
                        Dn.Z,
                        {
                          className: l.paper,
                          style: { paddingTop: "10px", paddingBottom: "10px" },
                        },
                        a.createElement(sl, {
                          chain: c,
                          address: u,
                          contractAddress: d,
                          asset: x,
                        }),
                        a.createElement("br", null)
                      ),
                      a.createElement("br", null),
                      "kadena" === c &&
                        a.createElement(
                          Dn.Z,
                          { className: l.paper },
                          a.createElement(
                            eo.Z,
                            {
                              style: { borderTopWidth: 1, borderColor: "red" },
                            },
                            a.createElement(
                              $r.Z,
                              null,
                              a.createElement(
                                Qr.Z,
                                null,
                                a.createElement(m.Z, null, "Predicate")
                              ),
                              a.createElement(
                                Qr.Z,
                                null,
                                a.createElement(
                                  m.Z,
                                  null,
                                  null === (e = null == x ? void 0 : x.guard) ||
                                    void 0 === e
                                    ? void 0
                                    : e.pred
                                )
                              )
                            ),
                            a.createElement(
                              $r.Z,
                              null,
                              a.createElement(
                                Qr.Z,
                                null,
                                a.createElement(m.Z, null, "Keys")
                              ),
                              a.createElement(
                                Qr.Z,
                                null,
                                null ===
                                  (n =
                                    null ===
                                      (t = null == x ? void 0 : x.guard) ||
                                    void 0 === t
                                      ? void 0
                                      : t.keys) || void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return a.createElement(m.Z, null, e);
                                    })
                              )
                            )
                          )
                        ),
                      a.createElement("br", null),
                      a.createElement(yl, {
                        link: function (e) {
                          return T(c, u, d, e);
                        },
                      }),
                      "transactions" === p &&
                        a.createElement(fl, {
                          chain: c,
                          address: u,
                          contractAddress: d,
                        }),
                      "recommendations" === p &&
                        a.createElement(Cl, {
                          coingeckoID:
                            null ===
                              (r = null == x ? void 0 : x.recommendations) ||
                            void 0 === r
                              ? void 0
                              : r.token_coin_gecko_id,
                        })
                    )
                  )
                )
              )
            )
          );
        };
      var Nl = n(6037),
        Fl = n(4086),
        _l = n(8140),
        Tl = n(5914),
        Il = (0, V.cn)({ key: "TOKEN_DETAILS", default: q });
      var Al = (0, V.cn)({ key: "PRICE_DETAILS", default: q });
      var Ol = function () {
        return a.createElement(a.Fragment, null);
      };
      const Rl = function (e) {
        var t = e.children,
          n = e.hasError,
          r = e.isLoading,
          o = e.success,
          l = e.loadingIndicator,
          i = void 0 === l ? a.createElement(Ol, null) : l;
        return !o && r
          ? i
          : n
          ? a.createElement(a.Fragment, null)
          : a.createElement(a.Fragment, null, t);
      };
      var Dl = function () {
          return (Dl =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Ll = function (e, t) {
          for (var n = 0, a = t.length, r = e.length; n < a; n++, r++)
            e[r] = t[n];
          return e;
        },
        Wl = (0, V.cn)({ key: "TOKEN_TRANSACTIONS", default: q });
      var Hl = function () {
        return (Hl =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      const Pl = function (e) {
        var t,
          n,
          r,
          o = e.chain,
          l = e.contractAddress,
          i = e.address,
          c = e.chainId,
          s = (function () {
            var e = (0, V.FV)(Wl),
              t = e[0],
              n = e[1],
              a = (0, V.rb)(Wl),
              r = le(),
              o = re().get;
            return {
              transactions: t,
              getTokenTransactions: function (e, t, a, o) {
                void 0 === o && (o = "");
                var l = { contract: a };
                e === je.Kadena && (l = Dl(Dl({}, l), { chainId: o })),
                  r(n, "/v2/" + e + "/token/" + t + "/transactions", {
                    params: l,
                  });
              },
              loadMore: function (e, a, r, l) {
                var i, c;
                void 0 === l && (l = "");
                var s = {
                  contract: r,
                  page: Math.ceil(
                    (null ===
                      (c =
                        null === (i = null == t ? void 0 : t.data) ||
                        void 0 === i
                          ? void 0
                          : i.transactions) || void 0 === c
                      ? void 0
                      : c.length) /
                      25 +
                      1
                  ),
                  pageSize: 25,
                };
                e === je.Kadena && (s = Dl(Dl({}, s), { chainId: l })),
                  o("/v2/" + e + "/token/" + a + "/transactions", {
                    onSuccess: function (e) {
                      n(function (t) {
                        var n,
                          a = t;
                        return Dl(Dl({}, a), {
                          data: Dl(Dl({}, e.data), {
                            transactions: Ll(
                              Ll(
                                [],
                                null === (n = null == a ? void 0 : a.data) ||
                                  void 0 === n
                                  ? void 0
                                  : n.transactions
                              ),
                              e.data.transactions
                            ),
                          }),
                        });
                      });
                    },
                    params: s,
                  });
              },
              reset: a,
            };
          })(),
          d = s.getTokenTransactions,
          u = s.transactions,
          p = s.loadMore,
          f = s.reset;
        return (
          null === (t = null == u ? void 0 : u.data) ||
            void 0 === t ||
            t.transactions,
          (0, a.useEffect)(
            function () {
              return d(o, i, l, c), f;
            },
            [o, l, i, c]
          ),
          a.createElement(
            "div",
            {
              style: { maxHeight: "75vh", overflow: "auto" },
              id: "scroll-contract-transactions",
            },
            a.createElement(
              m.Z,
              { variant: "h6" },
              a.createElement("b", null, "Transaction History")
            ),
            a.createElement(
              na,
              Hl({}, u),
              a.createElement(
                so(),
                {
                  useWindow: !1,
                  getScrollParent: function () {
                    return document.getElementById(
                      "scroll-contract-transactions"
                    );
                  },
                  pageStart: 0,
                  loadMore: function () {
                    return p(o, i, l, c);
                  },
                  hasMore:
                    null === (n = null == u ? void 0 : u.data) || void 0 === n
                      ? void 0
                      : n.has_next,
                  loader: a.createElement(ta, null),
                },
                a.createElement(Uo, {
                  transactions:
                    (null === (r = null == u ? void 0 : u.data) || void 0 === r
                      ? void 0
                      : r.transactions) || [],
                })
              )
            )
          )
        );
      };
      var Ml = (0, V.cn)({ key: "CONTRACT_CODE", default: q });
      var Bl = function () {
          return (Bl =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        jl = (0, c.Z)(function (e) {
          var t = e.spacing;
          return {
            tokenLogo: {
              background: e.palette.background.default,
              padding: 5,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              "& img": { width: 35, height: 35, borderRadius: "50%" },
            },
            divider: { margin: t(3, 0) },
          };
        });
      const zl = function () {
          var e = jl(),
            t = ba(),
            n = Sn(),
            r = n.coin,
            o = n.address,
            l = (function () {
              var e = (0, V.FV)(Al),
                t = e[0],
                n = e[1],
                a = (0, V.rb)(Al),
                r = le();
              return {
                price: t,
                getPriceDetails: function (e, t) {
                  return r(n, "/v1/pricestore/chain/" + e + "/" + t);
                },
                reset: a,
              };
            })(),
            i = l.getPriceDetails,
            c = l.price,
            u = l.reset,
            p = (function () {
              var e = (0, V.FV)(Il),
                t = e[0],
                n = e[1],
                a = (0, V.rb)(Il),
                r = le();
              return {
                token: t,
                getTokenDetails: function (e, t) {
                  return r(n, "/v1/tokenstore/token/address/" + t, {
                    params: { chain: e },
                  });
                },
                reset: a,
              };
            })(),
            f = p.getTokenDetails,
            g = p.token,
            v = p.reset;
          (0, a.useEffect)(
            function () {
              return (
                i(r, o),
                f(r, o),
                function () {
                  u(), v();
                }
              );
            },
            [r, o]
          );
          var E = (0, a.useState)(""),
            h = E[0],
            y = E[1],
            b = null == g ? void 0 : g.data;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(ar, null),
            a.createElement(
              s.Z,
              { container: !0, className: t.grid },
              a.createElement(
                s.Z,
                { item: !0, xs: 2, style: { zIndex: 0 } },
                a.createElement(Or, { selectedItem: Zr.None })
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 12, lg: 10 },
                a.createElement(
                  "main",
                  { className: t.content },
                  a.createElement(
                    Rn.Z,
                    { className: t.container },
                    a.createElement(
                      s.Z,
                      {
                        container: !0,
                        justify: "space-between",
                        alignItems: "center",
                      },
                      a.createElement(
                        d.Z,
                        { xsDown: !0 },
                        a.createElement(
                          s.Z,
                          { item: !0 },
                          a.createElement(Ra.Z, { display: "flex" })
                        )
                      ),
                      a.createElement(
                        d.Z,
                        { xsDown: !0 },
                        a.createElement(s.Z, { item: !0 })
                      )
                    ),
                    a.createElement(
                      Dn.Z,
                      { className: t.tokenDetailsPaper },
                      a.createElement(
                        Rl,
                        Bl({}, g),
                        a.createElement(function () {
                          var t;
                          return a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                              m.Z,
                              { variant: "h5" },
                              a.createElement(
                                "b",
                                null,
                                null == b ? void 0 : b.name
                              )
                            ),
                            a.createElement("br", null),
                            a.createElement(
                              s.Z,
                              { container: !0, justify: "space-between" },
                              a.createElement(
                                s.Z,
                                { item: !0 },
                                a.createElement(
                                  s.Z,
                                  {
                                    container: !0,
                                    spacing: 3,
                                    justify: "flex-start",
                                    alignItems: "center",
                                  },
                                  a.createElement(
                                    s.Z,
                                    { item: !0 },
                                    a.createElement(
                                      "div",
                                      { className: e.tokenLogo },
                                      a.createElement(de, {
                                        src: null == b ? void 0 : b.image,
                                      })
                                    )
                                  ),
                                  a.createElement(
                                    s.Z,
                                    { item: !0 },
                                    a.createElement(
                                      m.Z,
                                      { variant: "h6" },
                                      null == b ? void 0 : b.symbol
                                    ),
                                    a.createElement(
                                      m.Z,
                                      { variant: "button", color: "primary" },
                                      a.createElement(
                                        "b",
                                        null,
                                        oa(
                                          null ===
                                            (t = null == c ? void 0 : c.data) ||
                                            void 0 === t
                                            ? void 0
                                            : t.price
                                        )
                                      )
                                    )
                                  )
                                )
                              ),
                              a.createElement(
                                s.Z,
                                { item: !0 },
                                a.createElement(
                                  Ra.Z,
                                  { display: "flex" },
                                  a.createElement(
                                    Xa,
                                    {
                                      content: null == b ? void 0 : b.contract,
                                    },
                                    a.createElement(
                                      On.ZP,
                                      {
                                        title: null == b ? void 0 : b.contract,
                                      },
                                      a.createElement(
                                        "div",
                                        null,
                                        ge(null == b ? void 0 : b.contract)
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          );
                        }, null),
                        a.createElement(Wt.Z, { className: e.divider }),
                        "kadena" !== r &&
                          a.createElement(function () {
                            var e = (0, a.useState)(!1),
                              t = e[0],
                              n = e[1];
                            return a.createElement(
                              a.Fragment,
                              null,
                              a.createElement(
                                m.Z,
                                {
                                  variant: "h6",
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                  },
                                },
                                a.createElement(
                                  "b",
                                  null,
                                  "About ",
                                  null == b ? void 0 : b.name
                                ),
                                " ",
                                t
                                  ? a.createElement(_l.Z, {
                                      onClick: function () {
                                        return n(!1);
                                      },
                                    })
                                  : a.createElement(Fl.Z, {
                                      onClick: function () {
                                        return n(!0);
                                      },
                                    })
                              ),
                              a.createElement(
                                Nl.Z,
                                { style: { overflowX: "auto" }, in: t },
                                a.createElement(
                                  eo.Z,
                                  null,
                                  a.createElement(
                                    Io.Z,
                                    null,
                                    a.createElement(
                                      $r.Z,
                                      null,
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement(
                                          "b",
                                          null,
                                          "Total Supply"
                                        )
                                      ),
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement(
                                          "b",
                                          null,
                                          "Block Chain"
                                        )
                                      ),
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement("b", null, "Decimal")
                                      ),
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement("b", null, "Website")
                                      ),
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement("b", null, "Explorer")
                                      )
                                    )
                                  ),
                                  a.createElement(
                                    to.Z,
                                    null,
                                    a.createElement(
                                      $r.Z,
                                      null,
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        da(
                                          null == b ? void 0 : b.total_supply,
                                          0
                                        )
                                      ),
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        null == b ? void 0 : b.blockchain
                                      ),
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        null == b ? void 0 : b.decimal
                                      ),
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement(
                                          Vt.Z,
                                          {
                                            href:
                                              null == b ? void 0 : b.website,
                                          },
                                          fe(null == b ? void 0 : b.website, 21)
                                        )
                                      ),
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement(
                                          Vt.Z,
                                          {
                                            href:
                                              null == b ? void 0 : b.explorer,
                                          },
                                          fe(
                                            null == b ? void 0 : b.explorer,
                                            21
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            );
                          }, null)
                      ),
                      "kadena" === r &&
                        a.createElement(function () {
                          var e,
                            t = (function () {
                              var e = (0, V.FV)(Ml),
                                t = e[0],
                                n = e[1],
                                a = (0, V.rb)(Ml),
                                r = le();
                              return {
                                contractCodeDetails: t,
                                getContractCodeDetails: function (e, t) {
                                  var a = {};
                                  "" !== t && (a = { chainId: t }),
                                    r(
                                      n,
                                      "/v1/kadena/contract/" + e + "/details",
                                      { params: a }
                                    );
                                },
                                reset: a,
                              };
                            })(),
                            n = t.contractCodeDetails,
                            r = t.getContractCodeDetails,
                            l = t.reset,
                            i = a.useState(null),
                            c = i[0],
                            s = i[1],
                            d = Boolean(c);
                          function u() {
                            s(null);
                          }
                          var p = (null == n ? void 0 : n.data)
                            ? null === (e = null == n ? void 0 : n.data) ||
                              void 0 === e
                              ? void 0
                              : e.map(function (e) {
                                  return {
                                    name: e.name,
                                    code: e.code,
                                    interfaces: e.interfaces,
                                    chain_id: e.chain_id,
                                    module_hash: e.module_hash,
                                    blessed: e.blessed,
                                  };
                                })
                            : [];
                          return (
                            (0, a.useEffect)(
                              function () {
                                return r(o, h), l;
                              },
                              [o, h]
                            ),
                            a.createElement(
                              a.Fragment,
                              null,
                              a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                  },
                                },
                                a.createElement(
                                  m.Z,
                                  { style: { marginRight: "10px" } },
                                  "Contract code"
                                ),
                                a.createElement(
                                  M.Z,
                                  {
                                    onClick: function (e) {
                                      s(e.currentTarget);
                                    },
                                    variant: "outlined",
                                    disableRipple: !0,
                                    disableFocusRipple: !0,
                                    disableTouchRipple: !0,
                                  },
                                  "" === h ? "All chains" : "Chain " + h,
                                  a.createElement(Pn.Z, null)
                                )
                              ),
                              a.createElement(
                                Wn.Z,
                                {
                                  onClose: u,
                                  anchorEl: c,
                                  open: d,
                                  style: { maxHeight: 500 },
                                },
                                a.createElement(
                                  Hn.Z,
                                  {
                                    value: "aggregate",
                                    onClick: function () {
                                      y("");
                                    },
                                  },
                                  "All chains"
                                ),
                                rt[6].subChains.map(function (e) {
                                  return a.createElement(
                                    Hn.Z,
                                    {
                                      value: e,
                                      onClick: function () {
                                        y(e.toString()), u();
                                      },
                                    },
                                    e
                                  );
                                })
                              ),
                              a.createElement(
                                na,
                                Bl({}, n),
                                a.createElement(
                                  "div",
                                  {
                                    style: {
                                      maxWidth: "100%",
                                      maxHeight: "300px",
                                      overflow: "auto",
                                    },
                                  },
                                  a.createElement("pre", null, (0, Tl.WU)(p))
                                )
                              )
                            )
                          );
                        }, null)
                    ),
                    a.createElement("br", null),
                    a.createElement(Pl, {
                      chain: r,
                      address: o,
                      contractAddress: null,
                      chainId: h,
                    })
                  )
                )
              )
            )
          );
        },
        Ul = function () {
          var e = Xr(),
            t = Sn().q;
          return (
            (0, a.useEffect)(function () {
              return e(t);
            }, []),
            a.createElement("div", null)
          );
        };
      var Vl = n(8699),
        ql = n(7313),
        Kl = n(8207),
        Yl = n(4532),
        Gl = n(1505),
        Xl = n(8380),
        Jl = (0, V.cn)({ key: "TOKEN_LIST", default: q });
      var $l = function () {
          return ($l =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Ql = function () {
          return a.createElement(
            La.Z,
            { position: "start" },
            a.createElement(
              Lt.Z,
              { type: "submit", size: "small" },
              a.createElement(
                "svg",
                {
                  width: "19",
                  height: "19",
                  viewBox: "0 0 19 19",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                a.createElement("path", {
                  d: "M17.5 17.5L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z",
                  stroke: "#87988D",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            )
          );
        };
      const ei = function () {
        var e = (function () {
            var e = (0, V.FV)(Jl),
              t = e[0],
              n = e[1],
              a = le();
            return {
              tokenList: t,
              getTokenList: function () {
                a(n, nt + "/v1/recommendations/search");
              },
            };
          })(),
          t = e.tokenList,
          n = e.getTokenList,
          r = Sn(),
          o = r.address,
          l = r.chain,
          c = r.type,
          s = r.tokenName,
          d = (0, a.useState)(s),
          m = d[0],
          u = d[1],
          p = (0, i.k6)();
        (0, a.useEffect)(function () {
          n();
        }, []);
        var f = pr();
        function g(e) {
          var t, n, a, r;
          if (
            "" !== m &&
            "" ===
              (null === (t = null == e ? void 0 : e.target) || void 0 === t
                ? void 0
                : t.value)
          )
            return (
              u(
                null === (n = null == e ? void 0 : e.target) || void 0 === n
                  ? void 0
                  : n.value
              ),
              void p.push(
                F(
                  o,
                  1,
                  l,
                  null === (a = null == e ? void 0 : e.target) || void 0 === a
                    ? void 0
                    : a.value,
                  c
                )
              )
            );
          u(
            null === (r = null == e ? void 0 : e.target) || void 0 === r
              ? void 0
              : r.value
          );
        }
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(P.ZP, {
            freeSolo: !0,
            clearOnEscape: !0,
            onChange: function (e, t, n) {
              "select-option" === n &&
                (we(me.RecommendationFilters, {
                  source: Xe.Listed,
                  filters: { type: "select token", token: t },
                }),
                u(t),
                p.push(F(o, 1, l, t, c))),
                "clear" === n &&
                  (we(me.RecommendationFilters, {
                    source: Xe.Listed,
                    filters: { type: "clear token" },
                  }),
                  u(""),
                  p.push(F(o, 1, l, "", c)));
            },
            options: (null == t ? void 0 : t.data) || [],
            noOptionsText: a.createElement(a.Fragment, null),
            getOptionLabel: function (e) {
              return e;
            },
            renderInput: function (e) {
              return a.createElement(
                H.Z,
                $l({ variant: "outlined", onChange: g, value: m }, e, {
                  placeholder: "Search by token name",
                  InputProps: $l($l({}, e.InputProps), {
                    className: f.tokenSearch,
                    startAdornment: a.createElement(Ql, null),
                  }),
                  inputProps: $l($l({}, e.inputProps), {
                    className: f.tokenSearchInput,
                    value: m,
                  }),
                })
              );
            },
            renderOption: function (e) {
              return a.createElement(R.Z, null, e);
            },
          })
        );
      };
      var ti = n(7162),
        ni = n(74),
        ai = n(5674),
        ri = [
          "ethereum",
          "bsc",
          "matic",
          "solana",
          "avalanche",
          "harmony",
          "arbitrum",
          "optimism",
          "fantom",
          "ronin",
        ];
      const oi = function () {
        var e = pr(),
          t = Sn(),
          n = t.chain,
          r = t.type,
          o = t.address,
          l = t.tokenName,
          c = (0, a.useState)(n),
          s = c[0],
          u = c[1],
          p = (0, a.useState)(r),
          f = p[0],
          g = p[1],
          v = a.useState(null),
          E = v[0],
          h = v[1],
          y = Boolean(E);
        function b() {
          h(null);
        }
        var x = (0, i.k6)();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            M.Z,
            {
              onClick: function (e) {
                h(e.currentTarget);
              },
              className: e.filterButton,
            },
            a.createElement("img", { src: ai, alt: "" }),
            a.createElement(
              d.Z,
              { smDown: !0 },
              a.createElement(m.Z, null, "   Filter")
            )
          ),
          a.createElement(
            Gn.ZP,
            {
              open: y,
              anchorEl: E,
              onClose: b,
              anchorOrigin: { vertical: "bottom", horizontal: "left" },
              transformOrigin: { vertical: "top", horizontal: "left" },
            },
            a.createElement(
              Dn.Z,
              { className: e.tooltipPaper },
              a.createElement(
                m.Z,
                { className: e.filterCategory },
                "Filter by chain"
              ),
              a.createElement(
                "div",
                { style: { maxHeight: "150px", overflow: "auto" } },
                a.createElement(
                  ti.Z,
                  {
                    "aria-label": "chain",
                    name: "chain",
                    value: s,
                    onChange: function (e) {
                      u(e.target.value);
                    },
                  },
                  a.createElement(
                    "div",
                    { className: e.radio },
                    a.createElement(ni.Z, { disableRipple: !0, value: "" }),
                    " ",
                    a.createElement(m.Z, null, "AllChains")
                  ),
                  ri.map(function (t) {
                    return a.createElement(
                      "div",
                      { className: e.radio },
                      a.createElement(ni.Z, { value: t }),
                      " ",
                      a.createElement(m.Z, null, t.toUpperCase())
                    );
                  })
                )
              ),
              a.createElement("br", null),
              a.createElement("br", null),
              a.createElement(
                m.Z,
                { className: e.filterCategory },
                "Investment Type"
              ),
              a.createElement(
                "div",
                { style: { maxHeight: "150px", overflow: "auto" } },
                a.createElement(
                  ti.Z,
                  {
                    "aria-label": "type",
                    name: "type",
                    value: f,
                    onChange: function (e) {
                      g(e.target.value);
                    },
                  },
                  a.createElement(
                    "div",
                    { className: e.radio },
                    a.createElement(ni.Z, { value: "" }),
                    " ",
                    a.createElement(m.Z, null, "All")
                  ),
                  a.createElement(
                    "div",
                    { className: e.radio },
                    a.createElement(ni.Z, { value: "staking" }),
                    " ",
                    a.createElement(m.Z, null, "Staking")
                  ),
                  a.createElement(
                    "div",
                    { className: e.radio },
                    a.createElement(ni.Z, { value: "lp staking" }),
                    " ",
                    a.createElement(m.Z, null, "LP Staking")
                  ),
                  a.createElement(
                    "div",
                    { className: e.radio },
                    a.createElement(ni.Z, { value: "lending" }),
                    " ",
                    a.createElement(m.Z, null, "Lending")
                  )
                )
              ),
              a.createElement("br", null),
              a.createElement("br", null),
              a.createElement(
                M.Z,
                {
                  onClick: function () {
                    b(),
                      we(me.RecommendationFilters, {
                        source: Xe.Listed,
                        filters: { chain: s, type: f },
                      }),
                      x.push(F(o, 1, s, l, f));
                  },
                },
                "Apply"
              )
            )
          )
        );
      };
      var li = n(6249),
        ii = n(2439),
        ci = n(366);
      const si = function (e) {
        var t = e.onClose;
        return a.createElement(
          Lt.Z,
          {
            "aria-label": "close",
            onClick: t,
            style: { position: "absolute", right: 8, top: 8, color: "#111" },
          },
          a.createElement(ci.Z, null)
        );
      };
      var di = function () {
          return (di =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        mi = (0, V.cn)({ key: "Report_Issue_dialog", default: !1 }),
        ui = function () {
          var e = (0, V.FV)(mi),
            t = e[0],
            n = e[1];
          return {
            isReportIssueDialogOpen: t,
            toggleReportIssueDialog: function () {
              return n(!t);
            },
            closeReportIssueDialog: function () {
              return n(!1);
            },
          };
        };
      const pi = function (e) {
        var t = e.id,
          n = (0, ii.cI)(),
          r = n.register,
          o = n.handleSubmit,
          l = n.reset,
          i = n.setValue,
          c = n.formState.errors,
          s = pr(),
          d = ui(),
          u = d.isReportIssueDialogOpen,
          p = d.closeReportIssueDialog,
          f = re().post,
          g = (0, At.Ds)().enqueueSnackbar,
          v = rn().userAddress;
        return a.createElement(
          Mt.Z,
          { open: u, onClose: p, fullWidth: !0, maxWidth: "md" },
          a.createElement(
            jt.Z,
            null,
            a.createElement(
              "form",
              {
                onSubmit: o(function (e) {
                  var n = e.type,
                    a = e.title,
                    r = e.description,
                    o = e.email,
                    i = new FormData();
                  i.append("wallet_address", v),
                    i.append("type", n.join(",")),
                    i.append("title", a),
                    i.append("description", r),
                    i.append("email", o),
                    f(nt + "/v1/recommendation/" + t + "/report", {
                      data: i,
                      onSuccess: function () {
                        we(me.Report, { result: "success" }),
                          g("Reported recommendation", { variant: "success" });
                      },
                      onError: function (e) {
                        we(me.Report, { result: "failed" }),
                          g(e.response.data.message, { variant: "error" });
                      },
                      finally: function () {
                        l(), p();
                      },
                    });
                }),
                encType: "multipart/form-data",
              },
              a.createElement(si, {
                onClose: function () {
                  we(me.CloseReportForm, { recommendation_id: t }), p();
                },
              }),
              a.createElement(m.Z, null, "Issue Type*"),
              a.createElement(
                P.ZP,
                di(
                  {
                    multiple: !0,
                    options: st,
                    getOptionLabel: function (e) {
                      return e;
                    },
                    filterSelectedOptions: !0,
                    disableCloseOnSelect: !0,
                  },
                  r("type", { required: !0 }),
                  {
                    onChange: function (e, t) {
                      i("type", t);
                    },
                    renderInput: function (e) {
                      return a.createElement(
                        H.Z,
                        di({ variant: "outlined", className: s.textField }, e, {
                          fullWidth: !0,
                          error: !!(null == c ? void 0 : c.type),
                          placeholder: "Select issue type",
                        })
                      );
                    },
                  }
                )
              ),
              a.createElement(m.Z, null, "Title"),
              a.createElement(
                H.Z,
                di(
                  {
                    variant: "outlined",
                    fullWidth: !0,
                    className: s.textField,
                    type: "text",
                    autoComplete: "off",
                  },
                  r("title"),
                  {
                    inputProps: { maxLength: 40 },
                    error: !!(null == c ? void 0 : c.title),
                    placeholder: "Please enter a title for your concern",
                  }
                )
              ),
              a.createElement(m.Z, null, "Description*"),
              a.createElement(
                H.Z,
                di(
                  {
                    variant: "outlined",
                    className: s.textField,
                    fullWidth: !0,
                    type: "text",
                    autoComplete: "off",
                  },
                  r("description", { required: !0 }),
                  {
                    inputProps: { minLength: 120 },
                    error: !!(null == c ? void 0 : c.description),
                    placeholder:
                      "Please elaborate more about the recommendation (min 120 characters)",
                  }
                )
              ),
              a.createElement(m.Z, null, "Email"),
              a.createElement(
                H.Z,
                di(
                  {
                    variant: "outlined",
                    className: s.textField,
                    fullWidth: !0,
                    type: "email",
                    autoComplete: "off",
                  },
                  r("email"),
                  {
                    error: !!(null == c ? void 0 : c.email),
                    placeholder: "Please enter your email id",
                    helperText:
                      "We’ll use this to further contact you if required",
                  }
                )
              ),
              a.createElement(M.Z, { type: "submit" }, "Report")
            )
          )
        );
      };
      var fi = function () {
        return (fi =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      function gi(e) {
        var t = (0, qt.Z)(),
          n =
            ((0, Pt.Z)(t.breakpoints.only("xs")),
            (0, Pt.Z)(t.breakpoints.only("sm")),
            (0, Pt.Z)(t.breakpoints.only("md"))),
          a = (0, Pt.Z)(t.breakpoints.only("lg")),
          r = (0, Pt.Z)(t.breakpoints.only("xl"));
        return ge(e, r ? 15 : a ? 12 : n ? 10 : 7, 0);
      }
      var vi = function (e) {
        var t = e.recommendations,
          n = e.nativeToken,
          r = pr(),
          o = Sn().page,
          l = rn().userAddress,
          i = (0, qt.Z)(),
          c = (0, Pt.Z)(i.breakpoints.down("sm")),
          d = (0, a.useState)(0),
          u = d[0],
          p = d[1],
          f = function (e) {
            var t = e.recommendationId,
              n = a.useState(null),
              o = n[0],
              l = n[1],
              i = Boolean(o),
              c = ui().toggleReportIssueDialog,
              s = function () {
                l(null);
              };
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                M.Z,
                {
                  variant: "text",
                  color: "secondary",
                  onClick: function (e) {
                    l(e.currentTarget);
                  },
                  style: {
                    padding: 0,
                    minWidth: "20px",
                    backgroundColor: "transparent",
                  },
                },
                a.createElement(Xn.Z, null)
              ),
              a.createElement(
                Gn.ZP,
                {
                  open: i,
                  anchorEl: o,
                  keepMounted: !0,
                  anchorOrigin: { vertical: "bottom", horizontal: "left" },
                  transformOrigin: { vertical: "top", horizontal: "left" },
                  onClose: s,
                  disableRestoreFocus: !0,
                },
                a.createElement(
                  Dn.Z,
                  { className: r.popoverPaper },
                  a.createElement(
                    M.Z,
                    {
                      variant: "text",
                      onClick: function () {
                        s(), p(t), c();
                      },
                    },
                    "Report"
                  )
                )
              )
            );
          };
        return a.createElement(
          "div",
          {
            className: !n && "scroll",
            style: {
              maxHeight: "60vh",
              overflowY: "auto",
              width: c ? "fit-content" : "100%",
            },
          },
          null == t
            ? void 0
            : t.map(function (e, t) {
                return a.createElement(
                  "fieldset",
                  {
                    key: e.Id,
                    className: n
                      ? r.promotedRecommendationList
                      : r.recommendationList,
                  },
                  n &&
                    a.createElement(
                      "legend",
                      null,
                      a.createElement(
                        m.Z,
                        { className: r.promoted },
                        "Promoted  ",
                        a.createElement("img", { src: li, alt: "" })
                      )
                    ),
                  a.createElement(
                    s.Z,
                    { className: r.recommendation },
                    a.createElement(
                      s.Z,
                      {
                        item: !0,
                        xs: 6,
                        md: 3,
                        key: null == e ? void 0 : e.token_name,
                        style: {
                          display: "flex",
                          alignItems: "center",
                          width: "250px",
                        },
                      },
                      "LP staking" === e.type
                        ? a.createElement(
                            lr.Z,
                            { max: 2 },
                            a.createElement(Dt.Z, {
                              className: r.lpLogo,
                              alt: e.token_name.split("-")[0],
                              src: e.token_image.split(",")[0],
                            }),
                            a.createElement(Dt.Z, {
                              className: r.lpLogo,
                              alt: e.token_name.split("-")[1],
                              src: e.token_image.split(",")[1],
                            })
                          )
                        : a.createElement(de, {
                            className: r.logo,
                            src: e.token_image,
                            alt: e.token_name,
                          }),
                      "  ",
                      a.createElement(
                        On.ZP,
                        { title: e.token_name },
                        a.createElement(
                          m.Z,
                          { className: r.recommendationListFont },
                          gi(e.token_name)
                        )
                      )
                    ),
                    a.createElement(
                      s.Z,
                      {
                        item: !0,
                        xs: 5,
                        md: 3,
                        style: { display: "flex", alignItems: "center" },
                      },
                      a.createElement(de, {
                        className: r.logo,
                        src: e.reward_token_image,
                        alt: e.reward_token_name,
                      }),
                      "  ",
                      a.createElement(
                        On.ZP,
                        { title: e.reward_token_name },
                        a.createElement(
                          m.Z,
                          { className: r.recommendationListFont },
                          gi(e.reward_token_name)
                        )
                      )
                    ),
                    a.createElement(
                      s.Z,
                      { item: !0, xs: 4, md: 2, style: {} },
                      a.createElement(
                        m.Z,
                        {
                          variant: "body1",
                          className: r.recommendationListFont,
                        },
                        (null == e ? void 0 : e.min_apr) ===
                          (null == e ? void 0 : e.max_apr)
                          ? (null == e ? void 0 : e.max_apr.toFixed(2)) + "%"
                          : (null == e ? void 0 : e.min_apr.toFixed(0)) +
                              "%-" +
                              (null == e ? void 0 : e.max_apr.toFixed(0)) +
                              "%"
                      )
                    ),
                    a.createElement(
                      s.Z,
                      { item: !0, xs: 4, md: 2, style: {} },
                      a.createElement(
                        m.Z,
                        {
                          variant: "body1",
                          className: r.recommendationListFont,
                        },
                        e.centralised_exchange ? "--" : e.chain.toUpperCase()
                      )
                    ),
                    a.createElement(
                      s.Z,
                      {
                        item: !0,
                        xs: 5,
                        md: 2,
                        style: { display: "flex", alignItems: "center" },
                      },
                      a.createElement(de, {
                        className: r.logo,
                        src:
                          "https://assets.unmarshal.io/providers/" +
                          e.provider.toLowerCase().split(" ").join("_") +
                          ".png",
                        alt: e.provider,
                      }),
                      "  ",
                      a.createElement(
                        m.Z,
                        {
                          display: "inline",
                          className: r.recommendationListFont,
                        },
                        gi(e.provider).toUpperCase()
                      )
                    ),
                    a.createElement(
                      s.Z,
                      {
                        item: !0,
                        xs: 3,
                        md: 2,
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        },
                      },
                      a.createElement(
                        M.Z,
                        {
                          className: r.button,
                          onClick: function () {
                            we(me.StakeOrLend, {
                              source: Zr.DefiEarn,
                              recommendation: e,
                              page: o,
                              index: t,
                              walletAddress: l,
                            }),
                              window.open(
                                null == e ? void 0 : e.platform_url,
                                "_blank"
                              );
                          },
                        },
                        "staking" === e.type || "LP staking" === e.type
                          ? "Stake Now"
                          : "Lend Now"
                      ),
                      a.createElement(f, {
                        recommendationId: null == e ? void 0 : e.Id,
                      })
                    )
                  )
                );
              }),
          a.createElement(pi, { id: u })
        );
      };
      const Ei = function () {
        var e,
          t,
          n,
          r,
          o,
          l,
          i,
          c,
          d = wl(),
          u = d.recommendations,
          p = d.getListedRecommendations,
          f = d.marshRecommendations,
          g = d.getMarshRecommendations,
          v = pr(),
          E = Sn(),
          h = E.address,
          y = E.chain,
          b = E.tokenName,
          x = E.type,
          Z = E.page,
          w = rn(),
          k = w.isConnected,
          C = w.userAddress,
          S = (0, qt.Z)(),
          N = (0, Pt.Z)(S.breakpoints.down("sm"));
        return (
          (0, a.useEffect)(function () {
            g();
          }, []),
          (0, a.useEffect)(
            function () {
              we(me.DefiEarn, {
                tab: Zr.DefiEarn,
                address: h,
                tokenName: b,
                chain: y,
                page: Z,
                type: x,
                walletAddress: C,
              });
            },
            [Z]
          ),
          (0, a.useEffect)(
            function () {
              p(Z, y, 20, x, b);
            },
            [Z, y, b, x]
          ),
          a.createElement(
            a.Fragment,
            null,
            k &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  m.Z,
                  { className: v.heading },
                  "Top APR Opportunities"
                ),
                a.createElement("br", null),
                a.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    },
                  },
                  a.createElement(
                    "div",
                    { style: { width: "100%", overflowX: "auto" } },
                    a.createElement(
                      "div",
                      { className: v.filterSection },
                      a.createElement(ei, null),
                      a.createElement(oi, null)
                    ),
                    a.createElement(
                      "div",
                      { style: { width: N ? "max-content" : "100%" } },
                      a.createElement(
                        "div",
                        { className: v.recommendationHeader },
                        a.createElement(
                          s.Z,
                          { className: v.table },
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 6,
                              md: 3,
                              style: {
                                display: "flex",
                                alignItems: "center",
                                width: "450px",
                              },
                            },
                            a.createElement(
                              m.Z,
                              { className: v.recommendationHeaderFont },
                              "Staking Token"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 5,
                              md: 3,
                              className: v.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: v.recommendationHeaderFont },
                              "Reward Token"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 4,
                              md: 2,
                              className: v.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: v.recommendationHeaderFont },
                              "APR"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 4,
                              md: 2,
                              className: v.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: v.recommendationHeaderFont },
                              "Chain"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 5,
                              md: 2,
                              className: v.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: v.recommendationHeaderFont },
                              "Provider"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 3,
                              md: 2,
                              className: v.tableHeader,
                            },
                            a.createElement(m.Z, {
                              className: v.recommendationHeaderFont,
                            })
                          )
                        )
                      )
                    ),
                    a.createElement(
                      na,
                      {
                        isLoading:
                          (null == f ? void 0 : f.isLoading) ||
                          (null == u ? void 0 : u.isLoading),
                        success: !1,
                        hasError:
                          (null == f ? void 0 : f.hasError) ||
                          (null == u ? void 0 : u.hasError),
                      },
                      (null ===
                        (t =
                          null === (e = null == f ? void 0 : f.data) ||
                          void 0 === e
                            ? void 0
                            : e.data) || void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                        "1" === Z &&
                        a.createElement(vi, {
                          recommendations:
                            null === (n = null == f ? void 0 : f.data) ||
                            void 0 === n
                              ? void 0
                              : n.data,
                          nativeToken: !0,
                        }),
                      0 ===
                        (null ===
                          (o =
                            null === (r = null == u ? void 0 : u.data) ||
                            void 0 === r
                              ? void 0
                              : r.data) || void 0 === o
                          ? void 0
                          : o.length) &&
                        a.createElement(
                          m.Z,
                          { color: "secondary", align: "center" },
                          a.createElement("br", null),
                          "No Requests Found",
                          a.createElement("br", null)
                        ),
                      a.createElement(
                        "div",
                        {
                          style: {
                            marginBottom: "10px",
                            width: N && "max-content",
                          },
                        },
                        a.createElement(vi, {
                          recommendations:
                            null === (l = null == u ? void 0 : u.data) ||
                            void 0 === l
                              ? void 0
                              : l.data,
                          nativeToken: !1,
                        })
                      )
                    ),
                    (null === (i = null == u ? void 0 : u.data) || void 0 === i
                      ? void 0
                      : i.total_pages) > 1 &&
                      a.createElement(Gl.Z, {
                        count:
                          null === (c = null == u ? void 0 : u.data) ||
                          void 0 === c
                            ? void 0
                            : c.total_pages,
                        page: Number(Z),
                        color: "primary",
                        boundaryCount: 1,
                        variant: "outlined",
                        shape: "rounded",
                        showFirstButton: !0,
                        showLastButton: !0,
                        renderItem: function (e) {
                          return e.selected
                            ? a.createElement(
                                Xl.Z,
                                fi(
                                  {
                                    style: {
                                      background: "rgba(13, 182, 120, 0.1)",
                                      border: "1px solid #0DB678",
                                      height: "40px",
                                      width: "32px",
                                      color: "rgba(13, 182, 120, 1)",
                                      borderRadius: "8px",
                                    },
                                    component: un.rU,
                                    to: F(h, e.page, y, b, x),
                                  },
                                  e
                                )
                              )
                            : a.createElement(
                                Xl.Z,
                                fi(
                                  {
                                    style: {
                                      background: "#F9FCFA",
                                      border: "1px solid #E2E8E5",
                                      height: "40px",
                                      width: "32px",
                                      color: "rgba(135, 152, 141, 1)",
                                      borderRadius: "8px",
                                    },
                                    component: un.rU,
                                    to: F(h, e.page, y, b, x),
                                  },
                                  e
                                )
                              );
                        },
                        style: { float: "right", color: "primary" },
                      })
                  ),
                  a.createElement(
                    "footer",
                    null,
                    a.createElement(
                      m.Z,
                      { className: v.disclaimer },
                      "Disclaimer: The website is for general informational purposes only, it is not a substitute for professional financial advice. The Site may contain links to affiliate platforms originating from the blockchains or sourced from third parties. It is important that you should take independent financial decision based on your research and verify any information that you find here."
                    )
                  )
                )
              ),
            !k && a.createElement(Qi, null)
          )
        );
      };
      n(6049);
      const hi = function () {
        var e = Sn(),
          t = e.address,
          n = e.status,
          r = e.sortBy,
          o = a.useState(null),
          l = o[0],
          i = o[1],
          c = pr();
        function s() {
          i(null);
        }
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            M.Z,
            {
              variant: "text",
              onClick: function (e) {
                i(e.currentTarget);
              },
              disableRipple: !0,
              disableFocusRipple: !0,
              disableTouchRipple: !0,
              className: c.dropdown,
            },
            "Sort By: ",
            dt.get(r),
            a.createElement(Pn.Z, null)
          ),
          a.createElement(
            Wn.Z,
            { onClose: s, anchorEl: l, open: Boolean(l) },
            Array.from(dt.keys()).map(function (e) {
              return a.createElement(
                un.rU,
                {
                  to: F(t, 1, "", "", "", n, e),
                  onClick: function () {
                    return we(me.RecommendationFilters, {
                      source: n,
                      filters: { sortBy: e },
                    });
                  },
                  style: { textDecoration: "none", color: "#000000" },
                },
                a.createElement(
                  Hn.Z,
                  { disableRipple: !0, onClick: s },
                  dt.get(e)
                )
              );
            })
          )
        );
      };
      var yi = (0, V.cn)({ key: "UNLISTED_RECOMMENDATION", default: q }),
        bi = (0, V.cn)({ key: "MY_RECOMMENDATIONS", default: q });
      const xi = function () {
        var e = le(),
          t = (0, V.FV)(yi),
          n = t[0],
          a = t[1],
          r = (0, V.FV)(bi),
          o = r[0],
          l = r[1];
        return {
          unlistedRecommendations: n,
          getUnlistedRecommendations: function (t, n, r) {
            void 0 === n && (n = "upvote"),
              void 0 === r && (r = 20),
              e(a, nt + "/v1/recommendations", {
                params: {
                  status: Xe.Unlisted,
                  sortBy: n,
                  page: t,
                  pageSize: r,
                },
              });
          },
          myRecommendations: o,
          getMyRecommendations: function (t, n, a, r) {
            void 0 === a && (a = "upvote"),
              void 0 === r && (r = 20),
              e(l, nt + "/v1/recommendations", {
                params: {
                  status: Xe.Unlisted,
                  walletAddress: t,
                  sortBy: a,
                  page: n,
                  pageSize: r,
                },
              });
          },
        };
      };
      var Zi = function () {
          return (Zi =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        wi = function (e) {
          var t = e.recommendation,
            n = pr(),
            r = Sn().address,
            o = (0, qt.Z)(),
            l = (0, Pt.Z)(o.breakpoints.down("sm"));
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              s.Z,
              {
                key: null == t ? void 0 : t.id,
                className: n.recommendationList,
              },
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 6,
                  md: 3,
                  key: null == t ? void 0 : t.token_name,
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    width: "250px",
                    flexDirection: "column",
                  },
                },
                a.createElement(
                  "div",
                  { style: { display: "flex", alignItems: "center" } },
                  "LP staking" === t.type
                    ? a.createElement(
                        lr.Z,
                        { max: 2 },
                        a.createElement(Dt.Z, {
                          className: n.lpLogo,
                          alt: t.token_name.split("-")[0],
                          src: t.token_image.split(",")[0],
                        }),
                        a.createElement(Dt.Z, {
                          className: n.lpLogo,
                          alt: t.token_name.split("-")[1],
                          src: t.token_image.split(",")[1],
                        })
                      )
                    : a.createElement(de, {
                        className: n.logo,
                        src: t.token_image,
                        alt: t.token_name,
                      }),
                  "  ",
                  a.createElement(
                    m.Z,
                    { className: n.recommendationListFont, display: "inline" },
                    gi(t.token_name)
                  )
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 5,
                  md: 3,
                  style: { display: "flex", alignItems: "center" },
                },
                a.createElement(de, {
                  className: n.logo,
                  src: t.reward_token_image,
                  alt: t.reward_token_name,
                }),
                "  ",
                a.createElement(
                  m.Z,
                  { className: n.recommendationListFont, display: "inline" },
                  gi(t.reward_token_name)
                )
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 4, md: 2, style: {} },
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  (null == t ? void 0 : t.min_apr) ===
                    (null == t ? void 0 : t.max_apr)
                    ? (null == t ? void 0 : t.max_apr.toFixed(2)) + "%"
                    : (null == t ? void 0 : t.min_apr.toFixed(0)) +
                        "%-" +
                        (null == t ? void 0 : t.max_apr.toFixed(0)) +
                        "%"
                )
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 4, md: 2, style: {} },
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  t.chain.toUpperCase()
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 4,
                  md: 2,
                  style: { display: "flex", alignItems: "center" },
                },
                a.createElement(Dt.Z, {
                  variant: "circular",
                  src:
                    "https://avatars.dicebear.com/api/bottts/" +
                    (null == t ? void 0 : t.wallet_address) +
                    ".svg",
                  alt: "",
                  style: { height: l ? 30 : 40, width: l ? 30 : 40 },
                }),
                " ",
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  ge(null == t ? void 0 : t.wallet_address, 4, 4)
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 2,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                },
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  null == t ? void 0 : t.upvote
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 2,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                },
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  null == t ? void 0 : t.downvote
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 4,
                  md: 2,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  },
                },
                a.createElement(
                  un.rU,
                  {
                    to: _(r, t.id, Xe.Unlisted),
                    onClick: function () {
                      return we(me.RecommendationDetails, {
                        source: Xe.Unlisted,
                        recommendation: t,
                      });
                    },
                    style: { color: "#24956C" },
                  },
                  a.createElement(
                    m.Z,
                    { style: { fontWeight: 600, fontSize: "14px" } },
                    "View details"
                  )
                )
              )
            )
          );
        };
      const ki = function () {
        var e,
          t,
          n,
          r,
          o,
          l = xi(),
          i = l.unlistedRecommendations,
          c = l.getUnlistedRecommendations,
          d = pr(),
          u = rn().isConnected,
          p = Sn(),
          f = p.address,
          g = p.sortBy,
          v = p.page,
          E = p.status,
          h = (0, qt.Z)(),
          y = (0, Pt.Z)(h.breakpoints.down("sm"));
        return (
          (0, a.useEffect)(
            function () {
              c(v, g);
            },
            [v, g]
          ),
          a.createElement(
            a.Fragment,
            null,
            u &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement("br", null),
                a.createElement(hi, null),
                " ",
                a.createElement(
                  m.Z,
                  {
                    display: "inline",
                    style: {
                      fontStyle: "italic",
                      fontSize: "14px",
                      fontWeight: 600,
                      opacity: 0.6,
                    },
                  },
                  "*Recommendations will be approved based on votes"
                ),
                a.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    },
                  },
                  a.createElement(
                    "div",
                    { style: { width: "100%", overflowX: "auto" } },
                    a.createElement(
                      "div",
                      { style: { width: y ? "fit-content" : "100%" } },
                      a.createElement(
                        "div",
                        { className: d.recommendationHeader },
                        a.createElement(
                          s.Z,
                          { className: d.table },
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 6,
                              md: 3,
                              style: {
                                display: "flex",
                                alignItems: "center",
                                width: "375px",
                              },
                            },
                            a.createElement(
                              m.Z,
                              { className: d.recommendationHeaderFont },
                              "Staking Token"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 5,
                              md: 3,
                              className: d.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: d.recommendationHeaderFont },
                              "Reward Token"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 4,
                              md: 2,
                              className: d.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: d.recommendationHeaderFont },
                              "APR"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 4,
                              md: 2,
                              className: d.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: d.recommendationHeaderFont },
                              "Chain"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 4,
                              md: 2,
                              className: d.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: d.recommendationHeaderFont },
                              "Recommender"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 2,
                              className: d.tableHeader,
                              style: { justifyContent: "center" },
                            },
                            a.createElement(
                              m.Z,
                              { className: d.recommendationHeaderFont },
                              "Upvotes"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 2,
                              className: d.tableHeader,
                              style: { justifyContent: "center" },
                            },
                            a.createElement(
                              m.Z,
                              {
                                className: d.recommendationHeaderFont,
                                style: { justifyContent: "center" },
                              },
                              "Downvotes"
                            )
                          ),
                          a.createElement(s.Z, {
                            item: !0,
                            xs: 3,
                            md: 2,
                            className: d.tableHeader,
                          })
                        )
                      )
                    ),
                    a.createElement(
                      na,
                      Zi({}, i),
                      null ===
                        (null === (e = null == i ? void 0 : i.data) ||
                        void 0 === e
                          ? void 0
                          : e.data) &&
                        a.createElement(
                          m.Z,
                          { color: "secondary", align: "center" },
                          a.createElement("br", null),
                          "No Requests Found",
                          a.createElement("br", null)
                        ),
                      a.createElement(
                        "div",
                        {
                          className: "scroll",
                          style: {
                            maxHeight: "60vh",
                            overflowY: "auto",
                            width: y ? "fit-content" : "100%",
                          },
                        },
                        (null === (t = null == i ? void 0 : i.data) ||
                        void 0 === t
                          ? void 0
                          : t.data) &&
                          (null === (n = null == i ? void 0 : i.data) ||
                          void 0 === n
                            ? void 0
                            : n.data.map(function (e) {
                                return a.createElement(wi, {
                                  recommendation: e,
                                  key: e.id,
                                });
                              }))
                      )
                    ),
                    (null === (r = null == i ? void 0 : i.data) || void 0 === r
                      ? void 0
                      : r.total_pages) > 1 &&
                      a.createElement(Gl.Z, {
                        count:
                          null === (o = null == i ? void 0 : i.data) ||
                          void 0 === o
                            ? void 0
                            : o.total_pages,
                        page: Number(v),
                        defaultPage: 1,
                        boundaryCount: 1,
                        variant: "outlined",
                        shape: "rounded",
                        showFirstButton: !0,
                        showLastButton: !0,
                        renderItem: function (e) {
                          return e.selected
                            ? a.createElement(
                                Xl.Z,
                                Zi(
                                  {
                                    style: {
                                      background: "rgba(13, 182, 120, 0.1)",
                                      border: "1px solid #0DB678",
                                      height: "40px",
                                      width: "32px",
                                      color: "rgba(13, 182, 120, 1)",
                                      borderRadius: "8px",
                                    },
                                    component: un.rU,
                                    to: F(f, e.page, "", "", "", E),
                                  },
                                  e
                                )
                              )
                            : a.createElement(
                                Xl.Z,
                                Zi(
                                  {
                                    style: {
                                      background: "#F9FCFA",
                                      border: "1px solid #E2E8E5",
                                      height: "40px",
                                      width: "32px",
                                      color: "rgba(135, 152, 141, 1)",
                                      borderRadius: "8px",
                                    },
                                    component: un.rU,
                                    to: F(f, e.page, "", "", "", E),
                                  },
                                  e
                                )
                              );
                        },
                        style: { float: "right", color: "primary" },
                      }),
                    a.createElement("br", null)
                  )
                )
              ),
            !u && a.createElement(Qi, null)
          )
        );
      };
      var Ci = n(6072),
        Si = n(6837),
        Ni = n(1518),
        Fi = (0, V.cn)({
          key: "Token_List_For_New_Recommendation",
          default: q,
        });
      var _i = function () {
          return (_i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Ti = function (e) {
          return [
            a.createElement(Si.Z, { key: e.key, component: "div" }, e.group),
            e.children,
          ];
        };
      function Ii(e) {
        var t = e.data,
          n = e.index,
          r = e.style;
        return a.cloneElement(t[n], {
          style: _i(_i({}, r), { top: r.top + 8 }),
        });
      }
      var Ai = a.createContext({}),
        Oi = a.forwardRef(function (e, t) {
          var n = a.useContext(Ai);
          return a.createElement("div", _i({ ref: t }, e, n));
        }),
        Ri = a.forwardRef(function (e, t) {
          var n = e.children,
            r = (function (e, t) {
              var n = {};
              for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) &&
                  t.indexOf(a) < 0 &&
                  (n[a] = e[a]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                  t.indexOf(a[r]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                    (n[a[r]] = e[a[r]]);
              }
              return n;
            })(e, ["children"]),
            o = a.Children.toArray(n),
            l = (0, qt.Z)(),
            i = (0, Pt.Z)(l.breakpoints.up("sm"), { noSsr: !0 }),
            c = o.length,
            s = i ? 36 : 48,
            d = function (e) {
              return a.isValidElement(e) && e.type === Si.Z ? 48 : s;
            },
            m = (function (e) {
              var t = a.useRef(null);
              return (
                a.useEffect(
                  function () {
                    null != t.current && t.current.resetAfterIndex(0, !0);
                  },
                  [e]
                ),
                t
              );
            })(c);
          return a.createElement(
            "div",
            { ref: t },
            a.createElement(
              Ai.Provider,
              { value: r },
              a.createElement(
                Ni.S_,
                {
                  itemData: o,
                  width: "100%",
                  ref: m,
                  outerElementType: Oi,
                  innerElementType: "ul",
                  itemSize: function (e) {
                    return d(o[e]);
                  },
                  overscanCount: 5,
                  itemCount: c,
                  height:
                    (c > 8
                      ? 8 * s
                      : o.map(d).reduce(function (e, t) {
                          return e + t;
                        }, 0)) + 16,
                },
                Ii
              )
            )
          );
        });
      const Di = function () {
        var e,
          t,
          n,
          r,
          o,
          l,
          i = (0, ii.cI)(),
          c = i.register,
          d = i.handleSubmit,
          u = i.watch,
          p = i.reset,
          f = i.formState.errors,
          g = re().post,
          v = (0, At.Ds)().enqueueSnackbar,
          E = Wi().closeRecommendationFormDialog,
          h = pr(),
          y = rn().userAddress,
          b = xi(),
          x = b.getMyRecommendations,
          Z = b.getUnlistedRecommendations,
          w = Sn().page,
          k = (0, a.useState)(""),
          C = k[0],
          S = k[1],
          N = (function () {
            var e = (0, V.FV)(Fi),
              t = e[0],
              n = e[1],
              a = le();
            return {
              tokenList: t,
              getTokenList: function (e) {
                void 0 === e && (e = ""),
                  a(n, "/v1/tokenstore/token/list", { params: { chain: e } });
              },
            };
          })(),
          F = N.tokenList,
          _ = N.getTokenList;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "form",
            {
              onSubmit: d(function (e) {
                var t = e.chain,
                  n = e.token,
                  a = e.reward_token,
                  r = e.type,
                  o = e.min_apr,
                  l = e.max_apr,
                  i = e.start_date,
                  c = e.end_date,
                  s = e.provider,
                  d = e.platform_url,
                  m = e.description,
                  u = n.split(":"),
                  f = a.split(":"),
                  h = new FormData();
                h.append("chain", t.toLowerCase()),
                  h.append("token", u[u.length - 1].toLowerCase()),
                  h.append("reward_token", f[f.length - 1].toLowerCase()),
                  h.append("type", r.toLowerCase()),
                  h.append("min_apr", o),
                  h.append("max_apr", l),
                  h.append("start_date", i),
                  "" !== c && h.append("end_date", c),
                  h.append("provider", s),
                  h.append("platform_url", d),
                  h.append("description", m),
                  h.append("wallet_address", y),
                  g(nt + "/v1/recommendation", {
                    data: h,
                    onSuccess: function () {
                      v("Your request has been submitted", {
                        variant: "success",
                      }),
                        we(me.NewRecommendation, { result: "success" }),
                        E(),
                        p(),
                        x(y, w),
                        Z(1);
                    },
                    onError: function (e) {
                      we(me.NewRecommendation, { result: "failed" }),
                        console.log(e.response.data.message),
                        v(
                          "" !== e.response.data.message
                            ? e.response.data.message
                            : "Failed to add recommendation",
                          { variant: "error" }
                        ),
                        E();
                    },
                  });
              }),
              encType: "multipart/form-data",
            },
            a.createElement(m.Z, { className: h.formText }, "Select Chain*"),
            a.createElement(P.ZP, {
              options: it,
              getOptionLabel: function (e) {
                return e;
              },
              filterSelectedOptions: !0,
              onChange: function (e, t) {
                p({ token: "", reward_token: "" }), _(t.toLowerCase()), S(t);
              },
              renderInput: function (e) {
                return a.createElement(
                  H.Z,
                  _i(
                    { variant: "outlined", className: h.textField },
                    e,
                    { required: !0, fullWidth: !0 },
                    c("chain", { required: !0 }),
                    {
                      error: !!(null == f ? void 0 : f.chain),
                      placeholder: "Select chain of token",
                    }
                  )
                );
              },
            }),
            "" !== C &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(m.Z, { className: h.formText }, "Token*"),
                (null == F ? void 0 : F.success) &&
                  !(null == F ? void 0 : F.isLoading)
                  ? a.createElement(P.ZP, {
                      options: (null == F ? void 0 : F.data) || [],
                      getOptionLabel: function (e) {
                        return (
                          (null == e ? void 0 : e.name) +
                            ":" +
                            (null == e ? void 0 : e.contract) || ""
                        );
                      },
                      renderOption: function (e) {
                        return a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(de, {
                            src: null == e ? void 0 : e.image,
                            alt: null == e ? void 0 : e.image,
                            width: "35px",
                            height: "35px",
                          }),
                          "  ",
                          (null == e ? void 0 : e.name) || ""
                        );
                      },
                      ListboxComponent: Ri,
                      renderGroup: Ti,
                      loading: null == F ? void 0 : F.isLoading,
                      filterSelectedOptions: !0,
                      renderInput: function (e) {
                        return a.createElement(
                          H.Z,
                          _i(
                            { variant: "outlined", className: h.textField },
                            e,
                            { required: !0, fullWidth: !0 },
                            c("token", { required: !0 }),
                            {
                              error: !!(null == f ? void 0 : f.chain),
                              placeholder: "Select token",
                            }
                          )
                        );
                      },
                    })
                  : a.createElement(O.Z, null),
                a.createElement(
                  m.Z,
                  { className: h.formText },
                  "Reward Token*"
                ),
                (null == F ? void 0 : F.success) &&
                  !(null == F ? void 0 : F.isLoading)
                  ? a.createElement(P.ZP, {
                      options: (null == F ? void 0 : F.data) || [],
                      getOptionLabel: function (e) {
                        return (
                          (null == e ? void 0 : e.name) +
                            ":" +
                            (null == e ? void 0 : e.contract) || ""
                        );
                      },
                      loading: null == F ? void 0 : F.isLoading,
                      ListboxComponent: Ri,
                      renderGroup: Ti,
                      filterSelectedOptions: !0,
                      renderOption: function (e) {
                        return a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(de, {
                            src: null == e ? void 0 : e.image,
                            alt: null == e ? void 0 : e.image,
                            width: "35px",
                            height: "35px",
                          }),
                          "  ",
                          (null == e ? void 0 : e.name) || ""
                        );
                      },
                      renderInput: function (e) {
                        return a.createElement(
                          H.Z,
                          _i(
                            { variant: "outlined", className: h.textField },
                            e,
                            { required: !0, fullWidth: !0 },
                            c("reward_token", { required: !0 }),
                            {
                              error: !!(null == f ? void 0 : f.chain),
                              placeholder: "Select reward token",
                            }
                          )
                        );
                      },
                    })
                  : a.createElement(O.Z, null)
              ),
            a.createElement(
              m.Z,
              { className: h.formText },
              "Type of earning involved*"
            ),
            a.createElement(P.ZP, {
              options: ct,
              getOptionLabel: function (e) {
                return e;
              },
              filterSelectedOptions: !0,
              renderInput: function (e) {
                return a.createElement(
                  H.Z,
                  _i(
                    { variant: "outlined", className: h.textField },
                    e,
                    { required: !0, fullWidth: !0 },
                    c("type", { required: !0 }),
                    {
                      error: !!(null == f ? void 0 : f.type),
                      placeholder: "Select type of earning",
                    }
                  )
                );
              },
            }),
            a.createElement(
              m.Z,
              { className: h.formText },
              "Enter approximate APR range"
            ),
            a.createElement(
              s.Z,
              { style: { display: "flex", justifyContent: "space-evenly" } },
              a.createElement(
                s.Z,
                { item: !0, xs: 6 },
                a.createElement(m.Z, { className: h.formText }, "Min APR*"),
                a.createElement(
                  H.Z,
                  _i(
                    {
                      variant: "outlined",
                      className: h.textField,
                      fullWidth: !0,
                      required: !0,
                      type: "number",
                      autoComplete: "off",
                    },
                    c("min_apr", { required: !0 }),
                    {
                      inputProps: { min: (0, gt.toNumber)(0) },
                      error: !!(null == f ? void 0 : f.min_apr),
                      helperText:
                        null === (e = null == f ? void 0 : f.min_apr) ||
                        void 0 === e
                          ? void 0
                          : e.messages,
                      placeholder: "Enter minimum apr",
                      style: { width: "97%" },
                    }
                  )
                )
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 6 },
                a.createElement(m.Z, { className: h.formText }, "Max APR*"),
                a.createElement(
                  H.Z,
                  _i(
                    {
                      variant: "outlined",
                      className: h.textField,
                      fullWidth: !0,
                      required: !0,
                      type: "number",
                      autoComplete: "off",
                    },
                    c("max_apr", { required: !0 }),
                    {
                      inputProps: { min: (0, gt.toNumber)(u("min_apr")) },
                      error: !!(null == f ? void 0 : f.max_apr),
                      helperText:
                        null === (t = null == f ? void 0 : f.max_apr) ||
                        void 0 === t
                          ? void 0
                          : t.messages,
                      placeholder: "Enter maximum apr",
                      style: { width: "100%" },
                    }
                  )
                )
              )
            ),
            a.createElement(
              s.Z,
              { style: { display: "flex", justifyContent: "space-evenly" } },
              a.createElement(
                s.Z,
                { item: !0, xs: 6 },
                a.createElement(m.Z, { className: h.formText }, "Start date*"),
                a.createElement(
                  H.Z,
                  _i(
                    {
                      variant: "outlined",
                      className: h.textField,
                      fullWidth: !0,
                      required: !0,
                      type: "date",
                      autoComplete: "off",
                    },
                    c("start_date", { required: !0 }),
                    {
                      error: !!(null == f ? void 0 : f.start_date),
                      helperText:
                        null === (n = null == f ? void 0 : f.start_date) ||
                        void 0 === n
                          ? void 0
                          : n.messages,
                      placeholder: "Enter start date",
                      style: { width: "97%" },
                    }
                  )
                )
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 6 },
                a.createElement(m.Z, { className: h.formText }, "End date"),
                a.createElement(
                  H.Z,
                  _i(
                    {
                      variant: "outlined",
                      className: h.textField,
                      fullWidth: !0,
                      type: "date",
                      autoComplete: "off",
                    },
                    c("end_date"),
                    {
                      inputProps: { minDate: u("start_date") },
                      error: !!(null == f ? void 0 : f.end_date),
                      helperText:
                        null === (r = null == f ? void 0 : f.end_date) ||
                        void 0 === r
                          ? void 0
                          : r.messages,
                      placeholder: "Enter end date",
                    }
                  )
                )
              )
            ),
            a.createElement(m.Z, { className: h.formText }, "Provider*"),
            a.createElement(
              H.Z,
              _i(
                {
                  variant: "outlined",
                  className: h.textField,
                  fullWidth: !0,
                  required: !0,
                  type: "text",
                  autoComplete: "off",
                },
                c("provider", { required: !0 }),
                {
                  error: !!(null == f ? void 0 : f.provider),
                  helperText:
                    null === (o = null == f ? void 0 : f.provider) ||
                    void 0 === o
                      ? void 0
                      : o.messages,
                  placeholder: "Enter provider of recommendation",
                }
              )
            ),
            a.createElement(m.Z, { className: h.formText }, "Platform URL*"),
            a.createElement(
              H.Z,
              _i(
                {
                  variant: "outlined",
                  className: h.textField,
                  fullWidth: !0,
                  required: !0,
                  type: "text",
                  autoComplete: "off",
                },
                c("platform_url", { required: !0 }),
                {
                  inputProps: {
                    pattern:
                      "^(?:http(s)?:\\/\\/)[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$",
                  },
                  error: !!(null == f ? void 0 : f.platform_url),
                  helperText: "Enter a valid url starting with http/https",
                  placeholder: "Enter platform URL",
                }
              )
            ),
            a.createElement(m.Z, { className: h.formText }, "Description*"),
            a.createElement(
              H.Z,
              _i(
                {
                  variant: "outlined",
                  className: h.textField,
                  fullWidth: !0,
                  required: !0,
                  multiline: !0,
                  maxRows: 4,
                  type: "text",
                  autoComplete: "off",
                },
                c("description", { required: !0 }),
                {
                  inputProps: { minlength: 30 },
                  error: !!(null == f ? void 0 : f.description),
                  helperText:
                    null === (l = null == f ? void 0 : f.description) ||
                    void 0 === l
                      ? void 0
                      : l.messages,
                  placeholder:
                    "Please elaborate more about the recommendation (min 120 characters)",
                }
              )
            ),
            a.createElement("br", null),
            a.createElement("br", null),
            a.createElement(
              M.Z,
              {
                variant: "contained",
                type: "submit",
                className: h.recommendationButton,
              },
              a.createElement(
                m.Z,
                {
                  style: {
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                  },
                },
                "Submit recommendation"
              )
            )
          )
        );
      };
      var Li = (0, V.cn)({
          key: "IS_NEW_RECOMMENDATION_DIALOG_OPEN",
          default: !1,
        }),
        Wi = function () {
          var e = (0, V.FV)(Li),
            t = e[0],
            n = e[1];
          return {
            isRecommendationDialogOpen: t,
            toggleRecommendationFormDialog: function () {
              return n(!t);
            },
            closeRecommendationFormDialog: function () {
              return n(!1);
            },
          };
        };
      const Hi = function () {
        var e = Wi(),
          t = e.isRecommendationDialogOpen,
          n = e.closeRecommendationFormDialog;
        function r() {
          n();
        }
        var o = (0, qt.Z)(),
          l = (pr(), (0, Pt.Z)(o.breakpoints.down("xs")));
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            Mt.Z,
            {
              open: t,
              fullScreen: l,
              fullWidth: !0,
              maxWidth: "md",
              TransitionComponent: Qt,
              keepMounted: !0,
              onClose: function () {
                return r;
              },
            },
            a.createElement(
              Bt.Z,
              null,
              a.createElement(
                m.Z,
                {
                  style: {
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "27px",
                    color: "#111",
                  },
                },
                "Create Recommendation"
              ),
              a.createElement(en, {
                onClose: function () {
                  we(me.CloseRecommendationFrom), r();
                },
              })
            ),
            a.createElement(jt.Z, null, a.createElement(Di, null))
          )
        );
      };
      var Pi = function () {
          return (Pi =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Mi = function (e) {
          var t = e.recommendation,
            n = pr(),
            r = Sn().address,
            o = (0, qt.Z)(),
            l = (0, Pt.Z)(o.breakpoints.down("sm"));
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              s.Z,
              {
                key: null == t ? void 0 : t.id,
                className: n.recommendationList,
                style: { width: l && "95%" },
              },
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 6,
                  md: 3,
                  key: null == t ? void 0 : t.token_name,
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    width: "250px",
                    flexDirection: "column",
                  },
                },
                a.createElement(
                  "div",
                  { style: { display: "flex", alignItems: "center" } },
                  "LP staking" === t.type
                    ? a.createElement(
                        lr.Z,
                        { max: 2 },
                        a.createElement(Dt.Z, {
                          className: n.lpLogo,
                          alt: t.token_name.split("-")[0],
                          src: t.token_image.split(",")[0],
                        }),
                        a.createElement(Dt.Z, {
                          className: n.lpLogo,
                          alt: t.token_name.split("-")[1],
                          src: t.token_image.split(",")[1],
                        })
                      )
                    : a.createElement(de, {
                        className: n.logo,
                        src: t.token_image,
                        alt: t.token_name,
                      }),
                  "  ",
                  a.createElement(
                    m.Z,
                    { className: n.recommendationListFont, display: "inline" },
                    gi(t.token_name)
                  )
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 5,
                  md: 3,
                  style: { display: "flex", alignItems: "center" },
                },
                a.createElement(de, {
                  className: n.logo,
                  src: t.reward_token_image,
                  alt: t.reward_token_name,
                }),
                "  ",
                a.createElement(
                  m.Z,
                  { className: n.recommendationListFont, display: "inline" },
                  gi(t.reward_token_name)
                )
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 4, md: 2, style: {} },
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  (null == t ? void 0 : t.min_apr) ===
                    (null == t ? void 0 : t.max_apr)
                    ? (null == t ? void 0 : t.max_apr.toFixed(2)) + "%"
                    : (null == t ? void 0 : t.min_apr.toFixed(0)) +
                        "%-" +
                        (null == t ? void 0 : t.max_apr.toFixed(0)) +
                        "%"
                )
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 4, md: 2, style: {} },
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  t.chain.toUpperCase()
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 2,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                },
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  null == t ? void 0 : t.upvote
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 2,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                },
                a.createElement(
                  m.Z,
                  { variant: "body1", className: n.recommendationListFont },
                  null == t ? void 0 : t.downvote
                )
              ),
              a.createElement(
                s.Z,
                {
                  item: !0,
                  xs: 4,
                  md: 2,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  },
                },
                a.createElement(
                  un.rU,
                  {
                    to: _(r, t.id, Xe.MyRecommendations),
                    onClick: function () {
                      return we(me.RecommendationDetails, {
                        source: Xe.MyRecommendations,
                        recommendation: t,
                      });
                    },
                    style: { color: "#24956C" },
                  },
                  a.createElement(
                    m.Z,
                    { style: { fontWeight: 600, fontSize: "14px" } },
                    "View details"
                  )
                )
              )
            )
          );
        };
      const Bi = function () {
        var e,
          t,
          n,
          r,
          o,
          l = rn(),
          i = l.isConnected,
          c = l.userAddress,
          d = l.openWalletConnectOptions,
          u = Ka().tokenBalance,
          p = Wi().toggleRecommendationFormDialog,
          f = (0, At.Ds)().enqueueSnackbar,
          g = xi(),
          v = g.myRecommendations,
          E = g.getMyRecommendations,
          h = pr(),
          y = Sn(),
          b = y.address,
          x = y.page,
          Z = y.sortBy,
          w = y.status,
          k = (0, qt.Z)(),
          C = (0, Pt.Z)(k.breakpoints.down("sm"));
        return (
          (0, a.useEffect)(
            function () {
              c && E(c, x, Z);
            },
            [c, x, Z]
          ),
          a.createElement(
            a.Fragment,
            null,
            i &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(m.Z, { className: h.heading }, "Your Requests"),
                a.createElement("br", null),
                a.createElement(hi, null),
                a.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    },
                  },
                  a.createElement(
                    "div",
                    { style: { width: "100%", overflowX: "auto" } },
                    a.createElement(
                      "div",
                      { style: { width: C ? "fit-content" : "100%" } },
                      a.createElement(
                        "div",
                        { className: h.recommendationHeader },
                        a.createElement(
                          s.Z,
                          { className: h.table },
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 6,
                              md: 3,
                              style: {
                                display: "flex",
                                alignItems: "center",
                                width: "325px",
                              },
                            },
                            a.createElement(
                              m.Z,
                              { className: h.recommendationHeaderFont },
                              "Staking Token"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 5,
                              md: 3,
                              className: h.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: h.recommendationHeaderFont },
                              "Reward Token"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 4,
                              md: 2,
                              className: h.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: h.recommendationHeaderFont },
                              "APR"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 4,
                              md: 2,
                              className: h.tableHeader,
                            },
                            a.createElement(
                              m.Z,
                              { className: h.recommendationHeaderFont },
                              "Chain"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 2,
                              className: h.tableHeader,
                              style: { justifyContent: "center" },
                            },
                            a.createElement(
                              m.Z,
                              { className: h.recommendationHeaderFont },
                              "Upvotes"
                            )
                          ),
                          a.createElement(
                            s.Z,
                            {
                              item: !0,
                              xs: 2,
                              className: h.tableHeader,
                              style: { justifyContent: "center" },
                            },
                            a.createElement(
                              m.Z,
                              {
                                className: h.recommendationHeaderFont,
                                style: { justifyContent: "center" },
                              },
                              "Downvotes"
                            )
                          ),
                          a.createElement(s.Z, {
                            item: !0,
                            xs: 3,
                            md: 2,
                            className: h.tableHeader,
                          })
                        )
                      )
                    ),
                    a.createElement(
                      na,
                      Pi({}, v),
                      null ===
                        (null === (e = null == v ? void 0 : v.data) ||
                        void 0 === e
                          ? void 0
                          : e.data) &&
                        a.createElement(
                          m.Z,
                          { color: "secondary", align: "center" },
                          a.createElement("br", null),
                          "No Requests Found",
                          a.createElement("br", null)
                        ),
                      a.createElement(
                        "div",
                        {
                          style: {
                            maxHeight: "60vh",
                            overflowY: "auto",
                            width: C ? "fit-content" : "100%",
                          },
                        },
                        (null === (t = null == v ? void 0 : v.data) ||
                        void 0 === t
                          ? void 0
                          : t.data) &&
                          (null === (n = null == v ? void 0 : v.data) ||
                          void 0 === n
                            ? void 0
                            : n.data.map(function (e) {
                                return a.createElement(Mi, {
                                  recommendation: e,
                                  key: e.id,
                                });
                              }))
                      )
                    ),
                    (null === (r = null == v ? void 0 : v.data) || void 0 === r
                      ? void 0
                      : r.total_pages) > 1 &&
                      a.createElement(Gl.Z, {
                        count:
                          null === (o = null == v ? void 0 : v.data) ||
                          void 0 === o
                            ? void 0
                            : o.total_pages,
                        page: x,
                        defaultPage: 1,
                        boundaryCount: 1,
                        variant: "outlined",
                        shape: "rounded",
                        showFirstButton: !0,
                        showLastButton: !0,
                        renderItem: function (e) {
                          return e.selected
                            ? a.createElement(
                                Xl.Z,
                                Pi(
                                  {
                                    style: {
                                      background: "rgba(13, 182, 120, 0.1)",
                                      border: "1px solid #0DB678",
                                      height: "40px",
                                      width: "32px",
                                      color: "rgba(13, 182, 120, 1)",
                                      borderRadius: "8px",
                                    },
                                    component: un.rU,
                                    to: F(b, e.page, "", "", "", w),
                                  },
                                  e
                                )
                              )
                            : a.createElement(
                                Xl.Z,
                                Pi(
                                  {
                                    style: {
                                      background: "#F9FCFA",
                                      border: "1px solid #E2E8E5",
                                      height: "40px",
                                      width: "32px",
                                      color: "rgba(135, 152, 141, 1)",
                                      borderRadius: "8px",
                                    },
                                    component: un.rU,
                                    to: F(b, e.page, "", "", "", w),
                                  },
                                  e
                                )
                              );
                        },
                        style: { float: "right", color: "primary" },
                      }),
                    a.createElement("br", null)
                  )
                ),
                a.createElement(
                  M.Z,
                  {
                    onClick: function () {
                      i
                        ? u >= 0
                          ? (we(me.NewRecommendationForm, {
                              wallet_address: c,
                            }),
                            p())
                          : f(
                              "You must hold/stake at least 0 MARSH to submit a request",
                              { variant: "warning" }
                            )
                        : d();
                    },
                    className: h.recommendationButton,
                  },
                  a.createElement(
                    "div",
                    { style: { display: "flex", alignItems: "center" } },
                    a.createElement(
                      m.Z,
                      {
                        style: {
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "22px",
                        },
                      },
                      "Submit Request"
                    ),
                    " ",
                    a.createElement(Ci.Z, { color: "inherit" })
                  )
                ),
                "  ",                
                a.createElement(Hi, null)
              ),
            !i && a.createElement(Qi, null)
          )
        );
      };
      var ji = n(4697),
        zi = n(7473),
        Ui = n(1657),
        Vi = n(2844),
        qi = (0, V.cn)({ key: "LEADER_BOARD", default: q });
      var Ki = function () {
          return (Ki =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Yi = new Map([
          ["1", 30],
          ["2", 25],
          ["3", 20],
          ["4", 15],
          ["5", 10],
        ]),
        Gi = function (e) {
          var t = e.leader,
            n = pr();
          return a.createElement(
            zt.Z,
            {
              style: {
                width: "230px",
                marginTop: "15px",
                marginBottom: "15px",
                marginRight: "20px",
              },
            },
            a.createElement(ji.Z, {
              className: n.leaderHeader,
              title: "#" + t.rank,
              avatar: a.createElement(Dt.Z, {
                variant: "circular",
                src:
                  "https://avatars.dicebear.com/api/bottts/" +
                  (null == t ? void 0 : t.wallet_address) +
                  ".svg",
                alt: "",
                style: {
                  height: 50,
                  width: 50,
                  position: "relative",
                  top: 25,
                  left: 0,
                },
              }),
            }),
            a.createElement(
              Ut.Z,
              null,
              a.createElement(
                m.Z,
                {
                  style: {
                    color: "#3A413D",
                    fontWeight: 600,
                    fontSize: "16px",
                  },
                },
                ge(null == t ? void 0 : t.wallet_address)
              ),
              a.createElement(
                m.Z,
                {
                  style: {
                    color: "#24956C",
                    fontSize: "14px",
                    fontWeight: 500,
                  },
                },
                (null == t ? void 0 : t.approved_recommendations) +
                  " approved recommendations"
              )
            )
          );
        };
      const Xi = function () {
        var e,
          t,
          n,
          r,
          o,
          l,
          i = pr(),
          c = (0, qt.Z)(),
          s = (0, Pt.Z)(c.breakpoints.down("sm")),
          u = new Date(),
          p = new Date("02 Aug 2022 17:00:00"),
          f = new Date("09 Aug 2022 17:00:00"),
          g = (0, a.useState)(0),
          v = g[0],
          E = g[1],
          h = a.useState(5),
          y = h[0],
          b = h[1],
          x = (function () {
            var e = (0, V.FV)(qi),
              t = e[0],
              n = e[1],
              a = le();
            return {
              leaderBoard: t,
              getLeaderBoard: function () {
                a(n, nt + "/v1/leaderboard", {
                  params: {
                    from: "2022-08-02 17:00:00",
                    to: "2022-08-09 17:00:00",
                  },
                });
              },
            };
          })(),
          Z = x.getLeaderBoard,
          w = x.leaderBoard;
        return (
          (0, a.useEffect)(function () {
            Z();
          }, []),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  width: s ? "100%" : "max-content",
                },
              },
              a.createElement(
                m.Z,
                { className: i.heading, display: "inline" },
                "Leaderboard - DeFi Earn Contest"
              ),
              "  ",
            ),
            a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  width: s ? "100%" : "max-content",
                },
              },
              a.createElement(
                m.Z,
                { className: i.recommendationListFont, display: "inline" },
                "2-Aug-22 11:30AM - 9-Aug-22 11:30AM (UTC)"
              ),
              "  ",
              u >= p &&
                u <= f &&
                a.createElement(
                  m.Z,
                  {
                    display: "inline",
                    style: {
                      background: "rgba(188, 0, 23, 0.15)",
                      border: "1px solid rgba(188, 0, 23, 0.8)",
                      borderRadius: "4px",
                      color: "#BC0017",
                      padding: "1px 8px",
                    },
                  },
                  "LIVE"
                )
            ),
            a.createElement(
              d.Z,
              { smDown: !0 },
              a.createElement(
                "div",
                { style: { display: "flex", justifyContent: "flex-start" } },
                (null === (e = null == w ? void 0 : w.data) || void 0 === e
                  ? void 0
                  : e.length) > 0 &&
                  a.createElement(Gi, {
                    leader: null == w ? void 0 : w.data[0],
                  }),
                (null === (t = null == w ? void 0 : w.data) || void 0 === t
                  ? void 0
                  : t.length) > 1 &&
                  a.createElement(Gi, {
                    leader: null == w ? void 0 : w.data[1],
                  }),
                (null === (n = null == w ? void 0 : w.data) || void 0 === n
                  ? void 0
                  : n.length) > 2 &&
                  a.createElement(Gi, {
                    leader: null == w ? void 0 : w.data[2],
                  })
              )
            ),
            a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                },
              },
              a.createElement(
                "div",
                { style: { width: "100%", overflowX: "auto" } },
                a.createElement("div", {
                  style: { width: s ? "max-content" : "100%" },
                }),
                a.createElement(
                  eo.Z,
                  {
                    className: i.table,
                    style: {
                      border: "1px solid #E2E8E5",
                      backgroundColor: "#F9FCFA",
                    },
                  },
                  a.createElement(
                    Io.Z,
                    {
                      style: {
                        position: "sticky",
                        top: 0,
                        zIndex: 100,
                        backgroundColor: "rgba(36, 149, 108, 0.1)",
                      },
                    },
                    a.createElement(
                      $r.Z,
                      null,
                      a.createElement(
                        Qr.Z,
                        { className: i.recommendationHeaderFont },
                        "Rank"
                      ),
                      a.createElement(
                        Qr.Z,
                        { className: i.recommendationHeaderFont },
                        "Wallet Address"
                      ),
                      a.createElement(
                        Qr.Z,
                        { className: i.recommendationHeaderFont },
                        "#Approved Recommendations"
                      ),
                      a.createElement(
                        Qr.Z,
                        { className: i.recommendationHeaderFont },
                        "Reward"
                      )
                    )
                  ),
                  a.createElement(
                    na,
                    Ki({}, w),
                    a.createElement(
                      to.Z,
                      null,
                      null ===
                        (o =
                          y > 0
                            ? null === (r = w.data) || void 0 === r
                              ? void 0
                              : r.slice(v * y, v * y + y)
                            : w.data) || void 0 === o
                        ? void 0
                        : o.map(function (e) {
                            return a.createElement(
                              $r.Z,
                              null,
                              a.createElement(
                                Qr.Z,
                                { className: i.recommendationListFont },
                                null == e ? void 0 : e.rank
                              ),
                              a.createElement(
                                Qr.Z,
                                { className: i.recommendationListFont },
                                ge(null == e ? void 0 : e.wallet_address)
                              ),
                              a.createElement(
                                Qr.Z,
                                { className: i.recommendationListFont },
                                null == e ? void 0 : e.approved_recommendations
                              ),
                              a.createElement(
                                Qr.Z,
                                { className: i.recommendationListFont },
                                Yi.get(null == e ? void 0 : e.rank)
                                  ? "$" + Yi.get(null == e ? void 0 : e.rank)
                                  : "--"
                              )
                            );
                          })
                    ),
                    a.createElement(
                      zi.Z,
                      null,
                      a.createElement(
                        $r.Z,
                        null,
                        a.createElement(Ui.Z, {
                          colSpan: 3,
                          rowsPerPageOptions: [
                            5,
                            10,
                            25,
                            { label: "All", value: -1 },
                          ],
                          count:
                            (null === (l = null == w ? void 0 : w.data) ||
                            void 0 === l
                              ? void 0
                              : l.length) || 0,
                          rowsPerPage: y,
                          page: v,
                          SelectProps: {
                            inputProps: { "aria-label": "rows per page" },
                            native: !0,
                          },
                          ActionsComponent: Vi.Z,
                          onPageChange: function (e, t) {
                            E(t);
                          },
                          onRowsPerPageChange: function (e) {
                            b(parseInt(e.target.value, 10)), E(0);
                          },
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
      var Ji = function () {
        var e = Sn(),
          t = e.address,
          n = e.chain,
          r = e.tokenName,
          o = e.type,
          l = e.status,
          c = (0, i.k6)();
        return a.createElement(
          ql.Z,
          {
            onChange: function (e, a) {
              we(me.DefiEarn, { page: a }), c.push(F(t, 1, n, r, o, a));
            },
            "aria-label": "requests",
            indicatorColor: "primary",
            variant: "scrollable",
            scrollButtons: "auto",
          },
          Array.from(lt.keys()).map(function (e) {
            return a.createElement(Bn.Z, {
              disableRipple: !0,
              selected: l,
              key: e,
              style: {
                minWidth: "max-content",
                borderBottom: 1,
                borderColor: "text.disabled",
                padding: 20,
              },
              label: a.createElement(
                m.Z,
                {
                  variant: "subtitle1",
                  style: {
                    color: "text.primary",
                    display: "flex",
                    alignItems: "center",
                  },
                },
                lt.get(e),
                " ",
                e !== Xe.Listed &&
                  a.createElement(
                    "span",
                    {
                      style: {
                        border: "1px solid #CEB37E",
                        backgroundColor: "#FFF1D6",
                        color: "#A5710C",
                        borderRadius: "4px",
                        padding: "2px 4px 4px",
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "16px",
                      },
                    },
                    "New"
                  )
              ),
              value: e,
            });
          })
        );
      };
      function $i() {
        var e = Sn(),
          t = e.address,
          n = e.page,
          r = e.chain,
          o = e.tokenName,
          l = e.type,
          c = e.status,
          s = (0, i.k6)(),
          d = pr(),
          m = rn().userAddress;
        return (
          (0, a.useEffect)(
            function () {
              var e = t;
              !m || (t && " " !== t) || (e = m), s.push(F(e, n, r, o, l, c));
            },
            [m]
          ),
          a.createElement(
            Rn.Z,
            { className: d.container },
            a.createElement(
              Ra.Z,
              { style: { width: "100%" } },
              a.createElement(
                Kl.ZP,
                { value: c },
                a.createElement(Ra.Z, null, a.createElement(Ji, null)),
                Array.from(lt.keys()).map(function (e) {
                  return a.createElement(
                    Yl.Z,
                    { value: e, key: e },
                    e === Xe.Listed && a.createElement(Ei, null),
                    e === Xe.Unlisted && a.createElement(ki, null),
                    e === Xe.MyRecommendations && a.createElement(Bi, null),
                    e === Xe.LeaderBoard && a.createElement(Xi, null)
                  );
                })
              )
            )
          )
        );
      }
      var Qi = function () {
        var e = rn().openWalletConnectOptions,
          t = pr();
        return a.createElement(
          s.Z,
          { className: t.recommendationTeaser },
          a.createElement(
            s.Z,
            { item: !0, xs: 8, md: 4 },
            a.createElement(
              m.Z,
              { className: t.teaserHeader },
              "Put your inactive tokens into action."
            ),
            a.createElement("br", null),
            a.createElement(
              m.Z,
              { className: t.teaserText },
              "Explore an ocean of earning opportunities with DeFi-earn. Connect your DeFi wallet to get started."
            ),
            a.createElement("br", null),
            a.createElement(
              M.Z,
              {
                variant: "contained",
                size: "small",
                className: t.connectWallet,
                onClick: function () {
                  return e();
                },
              },
              "Connect Wallet"
            ),
            a.createElement("br", null)
          ),
          a.createElement(
            s.Z,
            { item: !0, xs: 6 },
            a.createElement("img", {
              style: { maxWidth: "90vw" },
              src: Vl,
              alt: "Recommendation teaser",
            })
          )
        );
      };
      const ec = function () {
        var e = pr();
        return (
          rn().isConnected,
          a.createElement(
            a.Fragment,
            null,
            a.createElement(ar, null),
            a.createElement(
              s.Z,
              { container: !0, className: e.grid },
              a.createElement(
                s.Z,
                { item: !0, lg: 2, style: { zIndex: 0 } },
                a.createElement(Or, { selectedItem: Zr.DefiEarn })
              ),
              a.createElement(
                s.Z,
                { item: !0, xs: 12, lg: 9 },
                a.createElement(
                  "main",
                  { className: e.content },
                  a.createElement($i, null)
                )
              )
            )
          )
        );
      };
      var tc = n(3557),
        nc = n(4855),
        ac = (0, V.cn)({ key: "RECOMMENDATION_BY_ID", default: q });
      const rc = function () {
        var e = (0, V.FV)(ac),
          t = e[0],
          n = e[1],
          a = (0, V.rb)(ac),
          r = le();
        return {
          recommendation: t,
          getRecommendation: function (e) {
            r(n, nt + "/v1/recommendation/" + e);
          },
          reset: a,
        };
      };
      var oc = n(2238),
        lc = n.n(oc),
        ic = n(2357),
        cc = 300,
        sc = function (e) {
          var t = e.recommendationId,
            n = (0, a.useState)(""),
            r = n[0],
            o = n[1],
            l = rn(),
            i = l.userAddress,
            c = (l.isConnected, $t().toggleMenu),
            s = rc().getRecommendation,
            u = Ka().tokenBalance,
            p = new (lc())(),
            f = (0, At.Ds)().enqueueSnackbar,
            g = pr();
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              { className: g.recommendationComment },
              i &&
                a.createElement(H.Z, {
                  onChange: function (e) {
                    var t, n, a, l, i;
                    (null === (t = null == e ? void 0 : e.target) ||
                    void 0 === t
                      ? void 0
                      : t.value.length) > cc
                      ? o(
                          null === (n = null == e ? void 0 : e.target) ||
                            void 0 === n
                            ? void 0
                            : n.value.slice(0, cc)
                        )
                      : r.length < cc &&
                        (null === (a = null == e ? void 0 : e.target) ||
                        void 0 === a
                          ? void 0
                          : a.value)
                      ? o(
                          null === (l = null == e ? void 0 : e.target) ||
                            void 0 === l
                            ? void 0
                            : l.value
                        )
                      : r.length === cc
                      ? o(
                          null === (i = null == e ? void 0 : e.target) ||
                            void 0 === i
                            ? void 0
                            : i.value
                        )
                      : o("");
                  },
                  value: r,
                  variant: "outlined",
                  className: g.replyText,
                  placeholder: "Enter your comment",
                }),
              a.createElement(
                M.Z,
                {
                  variant: "contained",
                  className: g.replyButton,
                  onClick: function () {
                    if (i)
                      if (i && u >= 0) {
                        var e = re().post,
                          n = new FormData();
                        n.append("wallet_address", i),
                          n.append("comment", p.clean(r)),
                          e(nt + "/v1/recommendation/" + t + "/comment", {
                            data: n,
                            onSuccess: function () {
                              we(me.Comment, {
                                recommendation: t,
                                wallet_address: i,
                              }),
                                o(""),
                                s(t);
                            },
                            onError: function () {
                              f("Failed to comment.", { variant: "error" });
                            },
                          });
                      } else
                        f("You must hold/stake at least 0 MARSH to comment", {
                          variant: "warning",
                        });
                    else c();
                  },
                  disabled: "" === r && void 0 !== i,
                },
                a.createElement(
                  d.Z,
                  { xsDown: !0 },
                  a.createElement(
                    m.Z,
                    {
                      style: { color: "common.black", fontWeight: "bold" },
                      variant: "body1",
                    },
                    "Reply  "
                  )
                ),
                a.createElement("img", { src: ic, height: "20", alt: "" })
              )
            )
          );
        };
      const dc = function (e) {
        var t = e.comments,
          n = e.recommendationId;
        return void 0 !== t
          ? 0 === (null == t ? void 0 : t.length)
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  m.Z,
                  {
                    style: { color: "#3A413D", margin: "15px 0" },
                    align: "center",
                  },
                  a.createElement("br", null),
                  "Be the first to comment!",
                  a.createElement("br", null)
                ),
                a.createElement(sc, { recommendationId: n })
              )
            : a.createElement(
                a.Fragment,
                null,
                null == t
                  ? void 0
                  : t.map(function (e) {
                      var t = e.CreatedAt;
                      return a.createElement(
                        a.Fragment,
                        { key: null == e ? void 0 : e.Id },
                        a.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "space-between",
                              margin: "15px 0",
                            },
                          },
                          a.createElement(
                            "div",
                            {
                              style: { display: "flex", alignItems: "center" },
                            },
                            a.createElement(Dt.Z, {
                              src:
                                "https://avatars.dicebear.com/api/bottts/" +
                                e.WalletAddress +
                                ".svg",
                              alt: e.WalletAddress,
                              style: { height: "32px", width: "32px" },
                            }),
                            "   ",
                            a.createElement(
                              On.ZP,
                              { title: e.WalletAddress, placement: "top" },
                              a.createElement(
                                m.Z,
                                {
                                  key: e.Id,
                                  style: {
                                    color: "#3A413D",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                  },
                                },
                                ge(e.WalletAddress)
                              )
                            )
                          ),
                          a.createElement(
                            m.Z,
                            { style: { color: "#87988D", float: "right" } },
                            void 0 !== t
                              ? "" +
                                  new Date(t).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "short",
                                    year: "2-digit",
                                  })
                              : ""
                          )
                        ),
                        a.createElement(
                          m.Z,
                          {
                            style: {
                              color: "#87988D",
                              margin: "15px 0",
                              fontWeight: 500,
                              fontSize: "16px",
                            },
                          },
                          e.Comment
                        ),
                        a.createElement(Wt.Z, { color: "#808191" })
                      );
                    }),
                a.createElement(sc, { recommendationId: n })
              )
          : a.createElement(Ol, null);
      };
      var mc = n(6187),
        uc = n(1595),
        pc = n(3698),
        fc = n(4857);
      const gc = function (e) {
        var t = e.votes,
          n = e.recommendationId,
          r =
            (e.category,
            (function (e) {
              var t = 0,
                n = 0,
                a = !1,
                r = !1,
                o = rn().userAddress;
              return (
                null != e &&
                  e.map(function (e) {
                    return (
                      "upvote" === e.Type &&
                        e.WalletAddress.toLowerCase() ===
                          (null == o ? void 0 : o.toLowerCase()) &&
                        (a = !0),
                      "downvote" === e.Type &&
                        e.WalletAddress.toLowerCase() ===
                          (null == o ? void 0 : o.toLowerCase()) &&
                        (r = !0),
                      "upvote" === e.Type ? (t += 1) : (n += 1)
                    );
                  }),
                { upvoteCount: t, downVoteCount: n, upVoted: a, downVoted: r }
              );
            })(t)),
          o = r.upvoteCount,
          l = r.downVoteCount,
          i = r.upVoted,
          c = r.downVoted,
          s = $t().toggleMenu,
          d = (0, a.useState)(o),
          u = d[0],
          p = d[1],
          f = (0, a.useState)(l),
          g = f[0],
          v = f[1],
          E = (0, a.useState)(i),
          h = E[0],
          y = E[1],
          b = (0, a.useState)(c),
          x = b[0],
          Z = b[1],
          w = rn().userAddress,
          k = Ka().tokenBalance,
          C = (0, At.Ds)().enqueueSnackbar,
          S = pr();
        function N(e, t) {
          var a = new FormData();
          a.append("wallet_address", e);
          var r = new Headers();
          fetch("/api" + nt + "/v1/recommendations/" + n + "/vote", {
            method: "DELETE",
            headers: r,
            body: a,
          })
            .then(function () {
              "upvote" === t && (y(!1), p(u - 1)),
                "downvote" === t && (Z(!1), v(g - 1));
            })
            .catch(function (e) {
              console.log(e), C("Failed to delete vote.", { variant: "error" });
            });
        }
        function F(e, t) {
          var a = re().post,
            r = new FormData();
          r.append("wallet_address", e),
            r.append("type", t),
            a(nt + "/v1/recommendations/" + n + "/vote", {
              data: r,
              onSuccess: function () {
                "upvote" === t && (y(!0), p(u + 1), x && (Z(!1), v(g - 1))),
                  "downvote" === t && (Z(!0), v(g + 1), h && (y(!1), p(u - 1)));
              },
              onError: function () {
                C("Failed to vote.", { variant: "error" });
              },
            });
        }
        return (
          (0, a.useEffect)(
            function () {
              if (void 0 === w) return y(!1), void Z(!1);
              y(i), Z(c);
            },
            [w]
          ),
          a.createElement(
            "div",
            { style: { display: "flex", alignItems: "center" } },
            a.createElement(
              Lt.Z,
              {
                onClick: function () {
                  !(function () {
                    if (w)
                      return w && h
                        ? (we(me.Vote, {
                            recommendation: n,
                            wallet_address: w,
                            action: "delete",
                            type: "upvote",
                          }),
                          void N(w, "upvote"))
                        : void (w && !h && k >= 0
                            ? (we(me.Vote, {
                                recommendation: n,
                                wallet_address: w,
                                action: "add",
                                type: "upvote",
                              }),
                              F(w, "upvote"))
                            : C(
                                "You must hold/stake at least 0 MARSH to vote",
                                { variant: "warning" }
                              ));
                    s();
                  })();
                },
                className: S.like,
              },
              a.createElement("img", { src: h ? mc : uc, alt: "like" }),
              " "
            ),
            " ",
            a.createElement(
              m.Z,
              {
                variant: "body2",
                display: "inline",
                style: {
                  paddingRight: 3,
                  marginRight: 12,
                  color: "text.disabled",
                },
              },
              u
            ),
            a.createElement(
              Lt.Z,
              {
                onClick: function () {
                  !(function () {
                    if (w)
                      return w && x
                        ? (we(me.Vote, {
                            recommendation: n,
                            wallet_address: w,
                            action: "delete",
                            type: "downvote",
                          }),
                          void N(w, "downvote"))
                        : void (w && !x && k >= 0
                            ? (we(me.Vote, {
                                recommendation: n,
                                wallet_address: w,
                                action: "add",
                                type: "downvote",
                              }),
                              F(w, "downvote"))
                            : C(
                                "You must hold/stake at least 0 MARSH to vote",
                                { variant: "warning" }
                              ));
                    s();
                  })();
                },
                className: S.like,
              },
              a.createElement("img", { src: x ? pc : fc, alt: "dislike" }),
              " "
            ),
            " ",
            a.createElement(
              m.Z,
              {
                variant: "body2",
                display: "inline",
                style: { paddingRight: 3, color: "text.disabled" },
              },
              g
            )
          )
        );
      };
      var vc = n(1652),
        Ec = function () {
          return (Ec =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      const hc = function () {
        var e,
          t,
          n,
          r,
          o,
          l,
          i,
          c,
          d,
          u,
          p,
          f,
          g = Sn(),
          v = g.address,
          E = g.status,
          h = g.sortBy,
          y = pr(),
          b = Sn().recommendationId,
          x = rc(),
          Z = x.recommendation,
          w = x.getRecommendation,
          k = x.reset,
          C = rn(),
          S = C.isConnected,
          N = C.userAddress,
          _ = (0, At.Ds)().enqueueSnackbar;
        (0, a.useEffect)(
          function () {
            return w(b), k;
          },
          [b]
        );
        var T = ui().toggleReportIssueDialog;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(ar, null),
          a.createElement(
            s.Z,
            { container: !0 },
            a.createElement(
              s.Z,
              { item: !0, lg: 2, style: { zIndex: 0 } },
              a.createElement(Or, { selectedItem: Zr.DefiEarn })
            ),
            a.createElement(
              s.Z,
              { item: !0, xs: 12, lg: 9 },
              a.createElement(
                "main",
                { className: y.content },
                a.createElement(
                  Rn.Z,
                  { className: y.detailsContainer, maxWidth: "lg" },
                  a.createElement(
                    Ra.Z,
                    { className: y.box },
                    a.createElement(
                      na,
                      Ec({}, Z),
                      a.createElement(
                        s.Z,
                        { container: !0, xs: 12 },
                        a.createElement(
                          s.Z,
                          { item: !0, style: { width: "100%" } },
                          a.createElement(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                marginBottom: 2,
                              },
                            },
                            a.createElement(
                              un.rU,
                              {
                                to: F(
                                  void 0 === v && S ? N : v,
                                  1,
                                  "",
                                  "",
                                  "",
                                  E,
                                  h
                                ),
                                style: {
                                  textDecoration: "none",
                                  width: "max-content",
                                },
                              },
                              a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                  },
                                },
                                a.createElement(tc.Z, { color: "primary" }),
                                a.createElement(
                                  m.Z,
                                  { style: { color: "#000" } },
                                  "Back"
                                )
                              )
                            )
                          ),
                          a.createElement(
                            m.Z,
                            {
                              variant: "h4",
                              style: {
                                color: "#111",
                                fontWeight: 700,
                                fontSize: "24px",
                                lineHeight: "33px",
                                marginTop: "15px",
                              },
                            },
                            null === (e = null == Z ? void 0 : Z.data) ||
                              void 0 === e
                              ? void 0
                              : e.token_name,
                            " - Token Recommendation"
                          ),
                          a.createElement("br", null),
                          S &&
                            a.createElement(
                              a.Fragment,
                              null,
                              a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "15px",
                                  },
                                },
                                a.createElement(
                                  m.Z,
                                  { display: "inline" },
                                  (null === (t = null == Z ? void 0 : Z.data) ||
                                  void 0 === t
                                    ? void 0
                                    : t.min_apr) ===
                                    (null ===
                                      (n = null == Z ? void 0 : Z.data) ||
                                    void 0 === n
                                      ? void 0
                                      : n.max_apr)
                                    ? (null ===
                                        (r = null == Z ? void 0 : Z.data) ||
                                      void 0 === r
                                        ? void 0
                                        : r.max_apr.toFixed(2)) + "% APR •"
                                    : (null ===
                                        (o = null == Z ? void 0 : Z.data) ||
                                      void 0 === o
                                        ? void 0
                                        : o.min_apr.toFixed(0)) +
                                        "%-" +
                                        (null ===
                                          (l = null == Z ? void 0 : Z.data) ||
                                        void 0 === l
                                          ? void 0
                                          : l.max_apr.toFixed(0)) +
                                        "% APR •"
                                ),
                                " ",
                                a.createElement(
                                  m.Z,
                                  { display: "inline" },
                                  "" +
                                    (null ===
                                      (i = null == Z ? void 0 : Z.data) ||
                                    void 0 === i
                                      ? void 0
                                      : i.chain.toUpperCase())
                                ),
                                " "
                              ),
                              a.createElement(Wt.Z, { color: "#808191" }),
                              a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    margin: "15px 0",
                                    alignItems: "center",
                                  },
                                },
                                a.createElement(
                                  "div",
                                  {
                                    style: {
                                      display: "flex",
                                      justifyContent: "flex-start",
                                    },
                                  },
                                  a.createElement(gc, {
                                    votes:
                                      null ===
                                        (c = null == Z ? void 0 : Z.data) ||
                                      void 0 === c
                                        ? void 0
                                        : c.Votes,
                                    recommendationId: b,
                                    category: "all",
                                  }),
                                  a.createElement(
                                    nc.CopyToClipboard,
                                    {
                                      text:
                                        "https://xscan.io/recommendation/" + b,
                                      onCopy: function () {
                                        we(me.ShareRecommendation, {
                                          recommendation:
                                            null == Z ? void 0 : Z.data,
                                          wallet_address: N,
                                        }),
                                          _("Link copied to clipboard", {
                                            variant: "success",
                                          });
                                      },
                                    },
                                    a.createElement(
                                      M.Z,
                                      { variant: "text" },
                                      a.createElement("img", {
                                        src: vc,
                                        alt: "",
                                      }),
                                      "  ",
                                      a.createElement(
                                        "span",
                                        {
                                          style: {
                                            color: "#87988D",
                                            fontWeight: 600,
                                            fontSize: "16px",
                                          },
                                        },
                                        "share"
                                      )
                                    )
                                  )
                                ),
                                a.createElement(
                                  M.Z,
                                  {
                                    variant: "outlined",
                                    onClick: function () {
                                      we(me.OpenReportForm, {
                                        recommendation:
                                          null == Z ? void 0 : Z.data,
                                      }),
                                        T();
                                    },
                                  },
                                  "Report"
                                ),
                                a.createElement(pi, {
                                  id:
                                    null ===
                                      (d = null == Z ? void 0 : Z.data) ||
                                    void 0 === d
                                      ? void 0
                                      : d.Id,
                                })
                              ),
                              a.createElement(
                                m.Z,
                                {
                                  variant: "body1",
                                  style: {
                                    color: "#87988D",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                  },
                                },
                                null === (u = null == Z ? void 0 : Z.data) ||
                                  void 0 === u
                                  ? void 0
                                  : u.description
                              ),
                              a.createElement("br", null),
                              a.createElement(
                                "a",
                                {
                                  href:
                                    null ===
                                      (p = null == Z ? void 0 : Z.data) ||
                                    void 0 === p
                                      ? void 0
                                      : p.platform_url,
                                  target: "_blank",
                                  style: {
                                    color: "#87988D",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                  },
                                  rel: "noreferrer",
                                },
                                a.createElement(
                                  m.Z,
                                  {
                                    variant: "body1",
                                    style: {
                                      color: "#87988D",
                                      fontWeight: 500,
                                      fontSize: "16px",
                                      lineHeight: "22px",
                                    },
                                  },
                                  "Link to recommendation"
                                )
                              ),
                              a.createElement(
                                m.Z,
                                {
                                  variant: "h6",
                                  style: {
                                    margin: "15px 0",
                                    color: "#111",
                                    fontWeight: 700,
                                    fontSize: "20px",
                                    lineHeight: "27px",
                                  },
                                },
                                "Comments"
                              ),
                              a.createElement(Wt.Z, { color: "#808191" }),
                              a.createElement(dc, {
                                comments:
                                  null === (f = null == Z ? void 0 : Z.data) ||
                                  void 0 === f
                                    ? void 0
                                    : f.Comments,
                                recommendationId: b,
                              })
                            ),
                          !S &&
                            a.createElement(
                              m.Z,
                              { color: "primary", align: "center" },
                              "Connect wallet to view this recommendation"
                            )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
      var yc = function () {
          return (yc =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        bc = (0, c.Z)(function (e) {
          var t,
            n,
            a = e.spacing,
            r = e.breakpoints;
          return {
            thead: {
              position: "sticky",
              top: 0,
              zIndex: 100,
              backgroundColor: "#ffffff",
            },
            nft:
              ((t = {
                display: "flex",
                justifyContent: "space-between",
                padding: a(2),
              }),
              (t[r.down("md")] = {
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }),
              t),
            nftDetails:
              ((n = { width: "65%" }),
              (n[r.down("md")] = { width: "100%" }),
              n),
            wrapAddress: {
              width: "50%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            },
          };
        }),
        xc = (0, B.Z)({ root: { borderBottom: "none", padding: "5px" } })(Qr.Z);
      const Zc = function () {
        var e,
          t,
          n,
          r,
          o = ba(),
          l = vo(),
          i = l.NFTAssetDetails,
          c = l.getNFTDetails,
          d = l.reset,
          u = Sn(),
          p = u.tokenAddress,
          f = u.coin,
          g = u.id;
        (0, a.useEffect)(
          function () {
            return c(p, f, g), d;
          },
          [p, f, g]
        );
        var v = bc(),
          E =
            null === (e = null == i ? void 0 : i.data) || void 0 === e
              ? void 0
              : e.nft_token_details[0],
          h = (null == E ? void 0 : E.properties) || [];
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(ar, null),
          a.createElement(
            s.Z,
            { container: !0, className: o.grid },
            a.createElement(
              s.Z,
              { lg: 2, style: { zIndex: 0 } },
              a.createElement(Or, { selectedItem: Zr.None })
            ),
            a.createElement(
              s.Z,
              { item: !0, xs: 12, lg: 10 },
              a.createElement(
                "main",
                { className: o.content },
                a.createElement(
                  Rn.Z,
                  { className: o.container, maxWidth: "lg" },
                  a.createElement(
                    Dn.Z,
                    { className: o.paper },
                    a.createElement(
                      na,
                      yc({}, i),
                      a.createElement(
                        "div",
                        { className: v.nft },
                        a.createElement(Zo, {
                          media:
                            (null === (t = null == E ? void 0 : E.image_url) ||
                            void 0 === t
                              ? void 0
                              : t.includes("ethercb")) ||
                            (null === (n = null == E ? void 0 : E.image_url) ||
                            void 0 === n
                              ? void 0
                              : n.includes("LP-rewards")) ||
                            (null === (r = null == E ? void 0 : E.image_url) ||
                            void 0 === r
                              ? void 0
                              : r.includes("etherbycb"))
                              ? ""
                              : (null == E ? void 0 : E.image_url) ||
                                (null == E ? void 0 : E.token_uri),
                          name: null == E ? void 0 : E.name,
                          size: yo.Medium,
                        }),
                        a.createElement(
                          "div",
                          { className: v.nftDetails },
                          a.createElement(ll, {
                            primary: a.createElement(
                              ua,
                              { width: "40vw" },
                              a.createElement(
                                On.ZP,
                                {
                                  title: null == E ? void 0 : E.name,
                                  placement: "top",
                                },
                                a.createElement(
                                  "span",
                                  null,
                                  null == E ? void 0 : E.name
                                )
                              )
                            ),
                            secondary:
                              !(0, gt.isNaN)(
                                parseFloat(" " + (null == E ? void 0 : E.price))
                              ) &&
                              parseFloat(" " + (null == E ? void 0 : E.price)) >
                                0 &&
                              "Price: " +
                                parseFloat(
                                  " " + (null == E ? void 0 : E.price)
                                ).toFixed(4) +
                                " " +
                                Ge.get(f),
                          }),
                          a.createElement(Wt.Z, null),
                          a.createElement(
                            m.Z,
                            {
                              style: {
                                fontWeight: 600,
                                fontSize: "18px",
                                marginTop: "5px",
                              },
                            },
                            "Details"
                          ),
                          a.createElement(
                            eo.Z,
                            null,
                            a.createElement(
                              $r.Z,
                              null,
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  m.Z,
                                  { style: { opacity: 0.6 } },
                                  "Owner:"
                                )
                              ),
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  Xa,
                                  {
                                    content:
                                      null == E ? void 0 : E.actual_owner,
                                  },
                                  a.createElement(
                                    un.rU,
                                    {
                                      to: w(
                                        null == E ? void 0 : E.actual_owner,
                                        f
                                      ),
                                      style: { color: "#34D399" },
                                    },
                                    null == E ? void 0 : E.actual_owner
                                  )
                                )
                              )
                            ),
                            a.createElement(
                              $r.Z,
                              null,
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  m.Z,
                                  { style: { opacity: 0.6 } },
                                  "Contract Address:"
                                )
                              ),
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  Xa,
                                  {
                                    content:
                                      null == E ? void 0 : E.contract_address,
                                  },
                                  null == E ? void 0 : E.contract_address
                                )
                              )
                            ),
                            a.createElement(
                              $r.Z,
                              null,
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  m.Z,
                                  { style: { opacity: 0.6 } },
                                  "Creator:"
                                )
                              ),
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  Xa,
                                  { content: null == E ? void 0 : E.creator },
                                  null == E ? void 0 : E.creator
                                )
                              )
                            ),
                            a.createElement(
                              $r.Z,
                              null,
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  m.Z,
                                  { style: { opacity: 0.6 } },
                                  "Token ID:"
                                )
                              ),
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  Xa,
                                  { content: null == E ? void 0 : E.token_id },
                                  null == E ? void 0 : E.token_id
                                )
                              )
                            ),
                            a.createElement(
                              $r.Z,
                              null,
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  m.Z,
                                  { style: { opacity: 0.6 } },
                                  "Token Standard:"
                                )
                              ),
                              a.createElement(
                                xc,
                                null,
                                a.createElement(
                                  "span",
                                  null,
                                  "ERC-" + (null == E ? void 0 : E.type)
                                )
                              )
                            )
                          )
                        )
                      ),
                      a.createElement("br", null),
                      a.createElement(Wt.Z, null),
                      a.createElement("br", null),
                      void 0 !== h &&
                        a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                            "div",
                            {
                              style: {
                                border: "1px solid rgba(0,0,0,0.15)",
                                borderRadius: "8px",
                              },
                            },
                            a.createElement(
                              m.Z,
                              {
                                style: {
                                  fontWeight: 700,
                                  fontSize: "20px",
                                  padding: "20px",
                                },
                              },
                              "NFT Metadata"
                            ),
                            a.createElement(Wt.Z, null),
                            a.createElement(
                              eo.Z,
                              { style: { marginInline: "20px", width: "96%" } },
                              a.createElement(
                                Io.Z,
                                { className: v.thead },
                                a.createElement(
                                  $r.Z,
                                  null,
                                  a.createElement(
                                    Qr.Z,
                                    null,
                                    a.createElement(
                                      m.Z,
                                      {
                                        style: {
                                          fontWeight: 600,
                                          fontSize: "16px",
                                        },
                                      },
                                      "Trait type"
                                    )
                                  ),
                                  a.createElement(
                                    Qr.Z,
                                    null,
                                    a.createElement(
                                      m.Z,
                                      {
                                        style: {
                                          fontWeight: 600,
                                          fontSize: "16px",
                                        },
                                      },
                                      "Value"
                                    )
                                  ),
                                  h.findIndex(function (e) {
                                    return void 0 !== e.display_type;
                                  }) > -1 &&
                                    a.createElement(
                                      Qr.Z,
                                      null,
                                      a.createElement(
                                        m.Z,
                                        {
                                          style: {
                                            fontWeight: 600,
                                            fontSize: "16px",
                                          },
                                        },
                                        "Display Type"
                                      )
                                    ),
                                  h.findIndex(function (e) {
                                    return void 0 !== e.trait_count;
                                  }) > -1 &&
                                    a.createElement(
                                      Qr.Z,
                                      null,
                                      a.createElement(
                                        m.Z,
                                        {
                                          style: {
                                            fontWeight: 600,
                                            fontSize: "16px",
                                          },
                                        },
                                        "Trait count"
                                      )
                                    ),
                                  h.findIndex(function (e) {
                                    return void 0 !== e.max_value;
                                  }) > -1 &&
                                    a.createElement(
                                      Qr.Z,
                                      null,
                                      a.createElement(
                                        m.Z,
                                        {
                                          style: {
                                            fontWeight: 600,
                                            fontSize: "16px",
                                          },
                                        },
                                        "Max Value"
                                      )
                                    ),
                                  h.findIndex(function (e) {
                                    return void 0 !== e.order;
                                  }) > -1 &&
                                    a.createElement(
                                      Qr.Z,
                                      null,
                                      a.createElement(
                                        m.Z,
                                        {
                                          style: {
                                            fontWeight: 600,
                                            fontSize: "16px",
                                          },
                                        },
                                        "Order"
                                      )
                                    )
                                )
                              ),
                              a.createElement(
                                to.Z,
                                null,
                                h.map(function (e) {
                                  return a.createElement(
                                    $r.Z,
                                    null,
                                    a.createElement(
                                      Qr.Z,
                                      null,
                                      a.createElement(
                                        m.Z,
                                        null,
                                        e.trait_type || "--"
                                      )
                                    ),
                                    a.createElement(
                                      Qr.Z,
                                      null,
                                      a.createElement(
                                        m.Z,
                                        null,
                                        e.value || "--"
                                      )
                                    ),
                                    h.findIndex(function (e) {
                                      return void 0 !== e.display_type;
                                    }) > -1 &&
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement(
                                          m.Z,
                                          null,
                                          e.display_type || "--"
                                        )
                                      ),
                                    h.findIndex(function (e) {
                                      return void 0 !== e.trait_count;
                                    }) > -1 &&
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement(
                                          m.Z,
                                          null,
                                          e.trait_count || "--"
                                        )
                                      ),
                                    h.findIndex(function (e) {
                                      return void 0 !== e.max_value;
                                    }) > -1 &&
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement(
                                          m.Z,
                                          null,
                                          e.max_value || "--"
                                        )
                                      ),
                                    h.findIndex(function (e) {
                                      return void 0 !== e.order;
                                    }) > -1 &&
                                      a.createElement(
                                        Qr.Z,
                                        null,
                                        a.createElement(
                                          m.Z,
                                          null,
                                          e.order || "--"
                                        )
                                      )
                                  );
                                })
                              )
                            )
                          )
                        )
                    )
                  )
                )
              )
            )
          )
        );
      };
      var wc = { width: "100%", height: "100vh", border: "none" };
      const kc = function () {
        return a.createElement("iframe", {
          src: "https://copilot-xi.vercel.app/examples/function-calling",
          style: wc,
          title: "Copilot",
        });
      };
      var Cc = function (e) {
        var t = e.to,
          n = Sn();
        return a.createElement(i.l_, { to: t(n) });
      };
      const Sc = function () {
        return a.createElement(
          i.rs,
          null,
          a.createElement(i.AW, { path: "/", exact: !0, component: Jr }),
          a.createElement(i.AW, { path: "/search", exact: !0, component: Ul }),
          a.createElement(i.AW, {
            exact: !0,
            path: "/transactions/:txID",
            component: To,
          }),
          a.createElement(
            i.AW,
            { exact: !0, path: ["/address/:address"] },
            a.createElement(Cc, {
              to: function (e) {
                var t = e.address;
                return w(t);
              },
            })
          ),
          a.createElement(i.AW, {
            exact: !0,
            path: ["/address/:address/assets"],
            component: hr,
          }),
          a.createElement(i.AW, {
            path: "/address/:address/transaction-history",
            exact: !0,
            component: qo,
          }),
          a.createElement(i.AW, {
            path: "/address/:address/nft",
            exact: !0,
            component: Ko,
          }),
          a.createElement(i.AW, {
            path: "/address/:address/nft-transaction-history",
            exact: !0,
            component: nl,
          }),
          a.createElement(i.AW, {
            path: "/address/:address/nft-metadata/:tokenAddress/id/:id",
            exact: !0,
            component: Zc,
          }),
          a.createElement(i.AW, {
            path: "/address/:address/asset/:contractAddress",
            exact: !0,
            component: Sl,
          }),
          a.createElement(i.AW, {
            exact: !0,
            path: "/token/:address",
            component: zl,
          }),
          a.createElement(i.AW, {
            exact: !0,
            path: ["/address/:address/recommendations", "/recommendations"],
            component: ec,
          }),
          a.createElement(i.AW, {
            exact: !0,
            path: [
              "/address/:address/recommendation/:recommendationId",
              "/recommendation/:recommendationId",
            ],
            component: hc,
          }),
          a.createElement(i.AW, { exact: !0, path: "/copilot", component: kc }),
          a.createElement(
            i.AW,
            { path: "/**" },
            a.createElement(i.l_, { to: "/" })
          )
        );
      };
      var Nc = n(1579),
        Fc = n(241),
        _c = n(9506),
        Tc = n(8225),
        Ic = "#34D399",
        Ac = "#FFFFFF";
      const Oc = (0, _c.Z)(
        (0, Tc.Z)({
          spacing: 5,
          palette: {
            primary: { main: Ic },
            secondary: { main: "#111111" },
            text: { primary: "#111111", secondary: Ic, hint: Ac },
            background: { default: "#F7F8F8" },
          },
          typography: { fontFamily: "Manrope" },
          overrides: {
            MuiTab: { root: { textTransform: "none" } },
            MuiButton: {
              root: { textTransform: "none" },
              containedPrimary: { color: Ac },
            },
            MuiFab: { root: { textTransform: "none" } },
            MuiBackdrop: { root: { zIndex: 10 } },
            MuiList: { root: { minWidth: "100px" } },
            MuiAppBar: {
              root: { boxShadow: "none", backgroundColor: Ac },
              colorPrimary: { backgroundColor: Ac },
            },
            MuiDialog: { paper: { zIndex: 15 } },
            MuiCardHeader: { root: { padding: "8px" } },
          },
          props: {
            MuiButton: {
              color: "primary",
              variant: "contained",
              disableElevation: !0,
            },
            MuiTooltip: { arrow: !0, placement: "top" },
          },
        })
      );
      var Rc,
        Dc =
          ((Rc = function (e, t) {
            return (Rc =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            Rc(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          });
      const Lc = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { hasError: !1 }), t;
          }
          return (
            Dc(t, e),
            (t.getDerivedStateFromError = function (e) {
              return { hasError: !0 };
            }),
            (t.prototype.componentDidCatch = function (e, t) {
              console.error("Uncaught error:", e, t);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state.hasError,
                n = this.props.children;
              return t
                ? a.createElement(
                    Ra.Z,
                    {
                      width: "100vw",
                      height: "60vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    },
                    a.createElement(
                      m.Z,
                      { color: "textSecondary" },
                      "Something went wrong!!!"
                    ),
                    a.createElement("br", null),
                    a.createElement(
                      M.Z,
                      {
                        variant: "text",
                        color: "primary",
                        component: un.rU,
                        to: "/",
                        onClick: function () {
                          localStorage.clear(), e.setState({ hasError: !1 });
                        },
                      },
                      "Click here to reset"
                    )
                  )
                : n;
            }),
            t
          );
        })(a.Component),
        Wc = function () {
          var e = an().tryAutoConnect;
          return (0, a.useEffect)(e, []), a.createElement(a.Fragment, null);
        };
      var Hc = n(3758),
        Pc = n(3479);
      const Mc = function (e) {
        var t = e.children;
        return "/copilot" === (0, i.TH)().pathname
          ? a.createElement(a.Fragment, null, t)
          : a.createElement(
              a.Fragment,
              null,
              t,
              a.createElement(
                Ra.Z,
                { position: "fixed", bottom: 12, right: 12 },
                a.createElement(
                  On.ZP,
                  { title: "Chat with Unmarshal Copilot" },
                  a.createElement(
                    Hc.Z,
                    {
                      color: "primary",
                      component: un.rU,
                      to: "/copilot",
                      target: "__blank",
                    },
                    a.createElement(Pc.Z, { color: "action" })
                  )
                )
              )
            );
      };
      function Bc(e) {
        var t = new Fc.Q(e);
        return (t.pollingInterval = 9e3), t;
      }
      function jc(e) {
        var t = e.snackbarKey,
          n = (0, At.Ds)().closeSnackbar;
        return a.createElement(
          Lt.Z,
          {
            onClick: function () {
              return n(t);
            },
          },
          a.createElement(ci.Z, null)
        );
      }
      const zc = function (e) {
        var t = e.children;
        return a.createElement(
          un.VK,
          null,
          a.createElement(
            V.Wh,
            null,
            a.createElement(
              Tt.Ht,
              { getLibrary: Bc },
              a.createElement(
                Nc.Z,
                { theme: Oc },
                a.createElement(
                  At.wT,
                  {
                    autoHideDuration: 5e3,
                    maxSnack: 5,
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                    TransitionComponent: Ht.Z,
                    action: function (e) {
                      return a.createElement(jc, { snackbarKey: e });
                    },
                  },
                  a.createElement(Wc, null),
                  a.createElement(
                    Oa,
                    null,
                    a.createElement(Lc, null, a.createElement(Mc, null, t))
                  )
                )
              )
            )
          )
        );
      };
      r.render(
        a.createElement(function () {
          return (
            (0, a.useEffect)(function () {
              l().init(xe, { api_host: "/mixpanel" }), we("Session start");
            }, []),
            a.createElement(zc, null, a.createElement(Sc, null))
          );
        }, null),
        document.getElementById("root")
      );
    },
    1034: (e, t, n) => {
      "use strict";
      e.exports = n.p + "3cdc221274b34dbd9e35.svg";
    },
    9361: (e, t, n) => {
      "use strict";
      e.exports = n.p + "bb43b1205e4d7448bed5.svg";
    },
    7678: (e, t, n) => {
      "use strict";
      e.exports = n.p + "27f93d5f88608e944f55.svg";
    },
    9037: (e, t, n) => {
      "use strict";
      e.exports = n.p + "0d05bebd05a676de9319.svg";
    },
    1041: (e, t, n) => {
      "use strict";
      e.exports = n.p + "60bd86d058634caea5b3.svg";
    },
    1005: (e, t, n) => {
      "use strict";
      e.exports = n.p + "2b4ad8fea38b59a24024.svg";
    },
    6049: (e, t, n) => {
      "use strict";
      e.exports = n.p + "24bb7fc4fa74ec1d5a77.svg";
    },
    1323: (e, t, n) => {
      "use strict";
      e.exports = n.p + "76912185c3bb345f39b6.svg";
    },
    6146: (e, t, n) => {
      "use strict";
      e.exports = n.p + "302d246418a9acab313a.svg";
    },
    1311: (e, t, n) => {
      "use strict";
      e.exports = n.p + "0b4e49bceafb51ad44f5.svg";
    },
    5968: (e, t, n) => {
      "use strict";
      e.exports = n.p + "e3db72a04f805f35e3d0.svg";
    },
    4511: (e, t, n) => {
      "use strict";
      e.exports = n.p + "e50b0b8016b32a3b2f25.svg";
    },
    3698: (e, t, n) => {
      "use strict";
      e.exports = n.p + "f4346cf67bfd7ed6f19d.svg";
    },
    4857: (e, t, n) => {
      "use strict";
      e.exports = n.p + "5b6093833a567c87b658.svg";
    },
    2727: (e, t, n) => {
      "use strict";
      e.exports = n.p + "77720f7d18d87a98b0ed.svg";
    },
    5995: (e, t, n) => {
      "use strict";
      e.exports = n.p + "8c39b68e22f34958fb40.svg";
    },
    5674: (e, t, n) => {
      "use strict";
      e.exports = n.p + "4535d02a1a696917499a.svg";
    },
    8861: (e, t, n) => {
      "use strict";
      e.exports = n.p + "32dfc416d6bc46f693b9.svg";
    },
    6187: (e, t, n) => {
      "use strict";
      e.exports = n.p + "e447990122cbfab53f71.svg";
    },
    1595: (e, t, n) => {
      "use strict";
      e.exports = n.p + "1561d4d9613e894716a0.svg";
    },
    7573: (e, t, n) => {
      "use strict";
      e.exports = n.p + "907f8e67f5353e61bf0b.svg";
    },
    5806: (e, t, n) => {
      "use strict";
      e.exports = n.p + "5798ef2af93167febfc3.svg";
    },
    6614: (e, t, n) => {
      "use strict";
      e.exports = n.p + "31ab9ebc3b5aa8d025f4.svg";
    },
    1213: (e, t, n) => {
      "use strict";
      e.exports = n.p + "7af22896bfaf34c9252f.svg";
    },
    6142: (e, t, n) => {
      "use strict";
      e.exports = n.p + "ce48f56951e53ab3c0e1.svg";
    },
    6249: (e, t, n) => {
      "use strict";
      e.exports = n.p + "341d83bf1cbb51d21844.svg";
    },
    2357: (e, t, n) => {
      "use strict";
      e.exports = n.p + "c17ad6086bbdadbb72ce.svg";
    },
    2437: (e, t, n) => {
      "use strict";
      e.exports = n.p + "a47168e16cdb89329844.svg";
    },
    5076: (e, t, n) => {
      "use strict";
      e.exports = n.p + "f8b12aba898de833d3a9.svg";
    },
    1652: (e, t, n) => {
      "use strict";
      e.exports = n.p + "0c459536303940e99b23.svg";
    },
    8193: (e, t, n) => {
      "use strict";
      e.exports = n.p + "61dd0870f941f316bfee.svg";
    },
    8699: (e, t, n) => {
      "use strict";
      e.exports = n.p + "ea0f2b1d8307f5e5ac51.png";
    },
    3249: (e, t, n) => {
      "use strict";
      e.exports = n.p + "ec0ea44fb30834c51600.svg";
    },
    1225: (e, t, n) => {
      "use strict";
      e.exports = n.p + "f4547e4b95c9389b8dd2.svg";
    },
    9413: (e, t, n) => {
      "use strict";
      e.exports = n.p + "9991188c1a3cb5b83b5d.svg";
    },
    8068: (e, t, n) => {
      "use strict";
      e.exports = n.p + "555cc0cf78b4ad8c9a4d.svg";
    },
    8831: (e, t, n) => {
      "use strict";
      e.exports = n.p + "52ee31fbab12f46c4c8a.svg";
    },
    2990: (e, t, n) => {
      "use strict";
      e.exports = n.p + "1e4264ba9d573aec1772.svg";
    },
    2220: (e, t, n) => {
      "use strict";
      e.exports = n.p + "d1dadce214e6b36075a6.svg";
    },
    9752: (e, t, n) => {
      "use strict";
      e.exports = n.p + "f0782d822a39fa5739e6.png";
    },
    7982: (e, t, n) => {
      "use strict";
      e.exports = n.p + "bd7edd820c392ca1ba55.png";
    },
    2377: (e, t, n) => {
      "use strict";
      e.exports = n.p + "c0c5da634adf66bccf37.svg";
    },
    1738: (e, t, n) => {
      "use strict";
      e.exports = n.p + "e988e0254bc461831adf.svg";
    },
    1638: (e, t, n) => {
      "use strict";
      e.exports = n.p + "f891948561e99b2b3676.svg";
    },
    6601: () => {},
  },
  (e) => {
    "use strict";
    e.O(0, [216], () => (6661, e((e.s = 6661)))), e.O();
  },
]);
