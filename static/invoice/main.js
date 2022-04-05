
// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{ "function": "__e" }, { "function": "__cid" }],
            "tags": [{ "function": "__rep", "once_per_event": true, "vtp_containerId": ["macro", 1], "tag_id": 1 }],
            "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []




    };


    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function (a) { var b = 0; return function () { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }, ba = "function" == typeof Object.create ? Object.create : function (a) { var b = function () { }; b.prototype = a; return new b }, ca; if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf; else { var da; a: { var ea = { a: !0 }, fa = {}; try { fa.__proto__ = ea; da = fa.a; break a } catch (a) { } da = !1 } ca = da ? function (a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var ha = ca, ia = function (a, b) { a.prototype = ba(b.prototype); a.prototype.constructor = a; if (ha) ha(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c); d && Object.defineProperty(a, c, d) } else a[c] = b[c]; a.Zj = b.prototype }, ja = this || self, ma = function (a) { return a }; var na = function () { }, oa = function (a) { return "function" === typeof a }, k = function (a) { return "string" === typeof a }, pa = function (a) { return "number" === typeof a && !isNaN(a) }, qa = Array.isArray, ra = function (a, b) { if (a && qa(a)) for (var c = 0; c < a.length; c++)if (a[c] && b(a[c])) return a[c] }, ta = function (a, b) { if (!pa(a) || !pa(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) }, wa = function (a, b) { for (var c = new va, d = 0; d < a.length; d++)c.set(a[d], !0); for (var e = 0; e < b.length; e++)if (c.get(b[e])) return !0; return !1 }, xa = function (a,
        b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) }, ya = function (a) { return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")) }, za = function (a) { return Math.round(Number(a)) || 0 }, Aa = function (a) { return "false" === String(a).toLowerCase() ? !1 : !!a }, Ba = function (a) { var b = []; if (qa(a)) for (var c = 0; c < a.length; c++)b.push(String(a[c])); return b }, Ca = function (a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" }, Da = function () { return new Date(Date.now()) },
        A = function () { return Da().getTime() }, va = function () { this.prefix = "gtm."; this.values = {} }; va.prototype.set = function (a, b) { this.values[this.prefix + a] = b }; va.prototype.get = function (a) { return this.values[this.prefix + a] };
    var Ea = function (a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c }, Fa = function (a) { var b = a; return function () { if (b) { var c = b; b = void 0; try { c() } catch (d) { } } } }, Ha = function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }, Ia = function (a) { for (var b in a) if (a.hasOwnProperty(b)) return !0; return !1 }, Ja = function (a, b) { for (var c = [], d = 0; d < a.length; d++)c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c }, Ka = function (a, b) { for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)d = d[e[f]] = {}; d[e[e.length - 1]] = b; return c }, La = /^\w{1,9}$/,
        Ma = function (a, b) { a = a || {}; b = b || ","; var c = []; xa(a, function (d, e) { La.test(d) && e && c.push(d) }); return c.join(b) }; var Na, Oa = function () { if (void 0 === Na) { var a = null, b = ja.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: ma, createScript: ma, createScriptURL: ma }) } catch (c) { ja.console && ja.console.error(c.message) } Na = a } else Na = a } return Na }; var Qa = function (a, b) { this.m = b === Pa ? a : "" }; Qa.prototype.toString = function () { return this.m + "" }; var Pa = {}; var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i; function Sa() { var a = ja.navigator; if (a) { var b = a.userAgent; if (b) return b } return "" } function Ta(a) { return -1 != Sa().indexOf(a) }; var Ua = {}, Va = function (a, b, c) { this.m = c === Ua ? a : "" }; Va.prototype.toString = function () { return this.m.toString() }; var Wa = function (a) { return a instanceof Va && a.constructor === Va ? a.m : "type_error:SafeHtml" }, Xa = function (a) { var b = Oa(), c = b ? b.createHTML(a) : a; return new Va(c, null, Ua) };/*
    
     SPDX-License-Identifier: Apache-2.0
    */
    function Ya(a) { if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript."); if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet."); }; var G = window, H = document, Za = navigator, $a = H.currentScript && H.currentScript.src, ab = function (a, b) { var c = G[a]; G[a] = void 0 === c ? b : c; return G[a] }, bb = function (a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) }, cb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 }, db = { onload: 1, src: 1, width: 1, height: 1, style: 1 }; function eb(a, b, c) { b && xa(b, function (d, e) { d = d.toLowerCase(); c.hasOwnProperty(d) || a.setAttribute(d, e) }) }
    var fb = function (a, b, c, d) {
        var e = H.createElement("script"); eb(e, d, cb); e.type = "text/javascript"; e.async = !0; var f, g = Oa(), l = g ? g.createScriptURL(a) : a; f = new Qa(l, Pa); e.src = f instanceof Qa && f.constructor === Qa ? f.m : "type_error:TrustedResourceUrl"; var m, n, p, q = null == (p = (n = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : p.call(n, "script[nonce]"); (m = q ? q.nonce || q.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", m); bb(e, b); c && (e.onerror = c); var r = H.getElementsByTagName("script")[0] ||
            H.body || H.head; r.parentNode.insertBefore(e, r); return e
    }, gb = function () { if ($a) { var a = $a.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 }, hb = function (a, b, c, d, e) { var f = e, g = !1; f || (f = H.createElement("iframe"), g = !0); eb(f, c, db); d && xa(d, function (m, n) { f.dataset[m] = n }); f.height = "0"; f.width = "0"; f.style.display = "none"; f.style.visibility = "hidden"; if (g) { var l = H.body && H.body.lastChild || H.body || H.head; l.parentNode.insertBefore(f, l) } bb(f, b); void 0 !== a && (f.src = a); return f },
        ib = function (a, b, c) { var d = new Image(1, 1); d.onload = function () { d.onload = null; b && b() }; d.onerror = function () { d.onerror = null; c && c() }; d.src = a; return d }, jb = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) }, kb = function (a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) }, J = function (a) { G.setTimeout(a, 0) }, lb = function (a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null }, mb = function (a) {
            var b =
                a.innerText || a.textContent || ""; b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")); b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " ")); return b
        }, nb = function (a) { var b = H.createElement("div"), c = b, d = Xa("A<div>" + a + "</div>"); void 0 !== c.tagName && Ya(c); c.innerHTML = Wa(d); b = b.lastChild; for (var e = []; b.firstChild;)e.push(b.removeChild(b.firstChild)); return e }, ob = function (a, b, c) { c = c || 100; for (var d = {}, e = 0; e < b.length; e++)d[b[e]] = !0; for (var f = a, g = 0; f && g <= c; g++) { if (d[String(f.tagName).toLowerCase()]) return f; f = f.parentElement } return null },
        pb = function (a) { var b; try { b = Za.sendBeacon && Za.sendBeacon(a) } catch (c) { } b || ib(a) }, qb = function (a, b) { var c = a[b]; c && "string" === typeof c.animVal && (c = c.animVal); return c }, rb = function (a) { var b = H.featurePolicy; return b && oa(b.allowsFeature) ? b.allowsFeature(a) : !1 };/*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var sb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, tb = function (a) { if (null == a) return String(a); var b = sb.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" }, ub = function (a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) }, vb = function (a) {
        if (!a || "object" != tb(a) || a.nodeType || a == a.window) return !1; try { if (a.constructor && !ub(a, "constructor") && !ub(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } for (var b in a); return void 0 ===
            b || ub(a, b)
    }, P = function (a, b) { var c = b || ("array" == tb(a) ? [] : {}), d; for (d in a) if (ub(a, d)) { var e = a[d]; "array" == tb(e) ? ("array" != tb(c[d]) && (c[d] = []), c[d] = P(e, c[d])) : vb(e) ? (vb(c[d]) || (c[d] = {}), c[d] = P(e, c[d])) : c[d] = e } return c }; var wb = function (a) { if (void 0 === a || qa(a) || vb(a)) return !0; switch (typeof a) { case "boolean": case "number": case "string": case "function": return !0 }return !1 }; var xb = function () {
        var a = function (b) { return { toString: function () { return b } } }; return {
            jh: a("consent"), kh: a("consent_always_fire"), nf: a("convert_case_to"), pf: a("convert_false_to"), qf: a("convert_null_to"), rf: a("convert_true_to"), sf: a("convert_undefined_to"), Hj: a("debug_mode_metadata"), sb: a("function"), Th: a("instance_name"), Xh: a("live_only"), Yh: a("malware_disabled"), Zh: a("metadata"), di: a("original_activity_id"), Mj: a("original_vendor_template_id"), Lj: a("once_on_load"), ci: a("once_per_event"), Uf: a("once_per_load"),
            Oj: a("priority_override"), Pj: a("respected_consent_types"), Yf: a("setup_tags"), $f: a("tag_id"), ag: a("teardown_tags")
        }
    }(); var Ub;
    var Vb = [], Wb = [], Xb = [], Yb = [], Zb = [], ac = {}, bc, cc, dc, ec = function (a, b) {
        var c = a["function"], d = b && b.event; if (!c) throw Error("Error: No function name given for function call."); var e = ac[c], f = {}, g; for (g in a) if (a.hasOwnProperty(g)) if (0 === g.indexOf("vtp_")) e && d && d.pg && d.pg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]; else if (g === xb.kh.toString() && a[g]) { } e && d && d.og && (f.vtp_gtmCachedValues = d.og);
        return void 0 !== e ? e(f) : Ub(c, f, b)
    }, gc = function (a, b, c) { c = c || []; var d = {}, e; for (e in a) a.hasOwnProperty(e) && (d[e] = fc(a[e], b, c)); return d }, fc = function (a, b, c) {
        if (qa(a)) {
            var d; switch (a[0]) {
                case "function_id": return a[1]; case "list": d = []; for (var e = 1; e < a.length; e++)d.push(fc(a[e], b, c)); return d; case "macro": var f = a[1]; if (c[f]) return; var g = Vb[f]; if (!g || b.Te(g)) return; c[f] = !0; try { var l = gc(g, b, c); l.vtp_gtmEventId = b.id; d = ec(l, { event: b, index: f, type: 2 }); dc && (d = dc.si(d, l)) } catch (x) { b.Ig && b.Ig(x, Number(f)), d = !1 } c[f] =
                    !1; return d; case "map": d = {}; for (var m = 1; m < a.length; m += 2)d[fc(a[m], b, c)] = fc(a[m + 1], b, c); return d; case "template": d = []; for (var n = !1, p = 1; p < a.length; p++) { var q = fc(a[p], b, c); cc && (n = n || q === cc.od); d.push(q) } return cc && n ? cc.yi(d) : d.join(""); case "escape": d = fc(a[1], b, c); if (cc && qa(a[1]) && "macro" === a[1][0] && cc.Ti(a)) return cc.gj(d); d = String(d); for (var r = 2; r < a.length; r++)yb[a[r]] && (d = yb[a[r]](d)); return d; case "tag": var u = a[1]; if (!Yb[u]) throw Error("Unable to resolve tag reference " + u + "."); return d = {
                        wg: a[2],
                        index: u
                    }; case "zb": var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] }; t["function"] = a[1]; var v = hc(t, b, c), y = !!a[4]; return y || 2 !== v ? y !== (1 === v) : null; default: throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        } return a
    }, hc = function (a, b, c) { try { return bc(gc(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 }; var kc = function (a) { function b(r) { for (var u = 0; u < r.length; u++)d[r[u]] = !0 } for (var c = [], d = [], e = ic(a), f = 0; f < Wb.length; f++) { var g = Wb[f], l = jc(g, e); if (l) { for (var m = g.add || [], n = 0; n < m.length; n++)c[m[n]] = !0; b(g.block || []) } else null === l && b(g.block || []); } for (var p = [], q = 0; q < Yb.length; q++)c[q] && !d[q] && (p[q] = !0); return p }, jc = function (a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) { var e = b(c[d]); if (0 === e) return !1; if (2 === e) return null } for (var f =
            a.unless || [], g = 0; g < f.length; g++) { var l = b(f[g]); if (2 === l) return null; if (1 === l) return !1 } return !0
    }, ic = function (a) { var b = []; return function (c) { void 0 === b[c] && (b[c] = hc(Xb[c], a)); return b[c] } }; var lc = { si: function (a, b) { b[xb.nf] && "string" === typeof a && (a = 1 == b[xb.nf] ? a.toLowerCase() : a.toUpperCase()); b.hasOwnProperty(xb.qf) && null === a && (a = b[xb.qf]); b.hasOwnProperty(xb.sf) && void 0 === a && (a = b[xb.sf]); b.hasOwnProperty(xb.rf) && !0 === a && (a = b[xb.rf]); b.hasOwnProperty(xb.pf) && !1 === a && (a = b[xb.pf]); return a } };

    var R = {
        rb: "_ee", Fc: "_syn_or_mod", Qj: "_uei", Dc: "_eu", Nj: "_pci", Tf: "_is_passthrough_cid", Lb: "event_callback", dd: "event_timeout", Ba: "gtag.config", Ia: "gtag.get", oa: "purchase", Ib: "refund", lb: "begin_checkout", Fb: "add_to_cart", Gb: "remove_from_cart", th: "view_cart", uf: "add_to_wishlist", qa: "view_item", Hb: "view_promotion", Vd: "select_promotion", Ud: "select_item", nb: "view_item_list", tf: "add_payment_info", sh: "add_shipping_info", Ra: "value_key", ab: "value_callback", W: "allow_ad_personalization_signals", zc: "restricted_data_processing",
        hc: "allow_google_signals", va: "cookie_expires", Kb: "cookie_update", Ac: "session_duration", hd: "session_engaged_time", bd: "engagement_time_msec", Ea: "user_properties", xa: "transport_url", aa: "ads_data_redaction", ya: "user_data", uc: "first_party_collection", D: "ad_storage", K: "analytics_storage", kf: "region", lf: "wait_for_update", sa: "conversion_linker", Ja: "conversion_cookie_prefix", fa: "value", ca: "currency", Of: "trip_type", X: "items", Ff: "passengers", Yd: "allow_custom_scripts", qb: "session_id", Kf: "quantity", fb: "transaction_id",
        eb: "language", ad: "country", $c: "allow_enhanced_conversions", ce: "aw_merchant_id", ae: "aw_feed_country", be: "aw_feed_language", $d: "discount", T: "developer_id", Cf: "global_developer_id_string", Af: "event_developer_id_string", jd: "delivery_postal_code", je: "estimated_delivery_date", he: "shipping", pe: "new_customer", de: "customer_lifetime_value", ie: "enhanced_conversions", fc: "page_view", ka: "linker", M: "domains", Nb: "decorate_forms", zf: "enhanced_conversions_automatic_settings", Ah: "auto_detection_enabled", me: "ga_temp_client_id",
        Wd: "user_engagement", nh: "app_remove", oh: "app_store_refund", ph: "app_store_subscription_cancel", qh: "app_store_subscription_convert", rh: "app_store_subscription_renew", uh: "first_open", vh: "first_visit", wh: "in_app_purchase", xh: "session_start", yh: "allow_display_features", Qa: "campaign", ic: "campaign_content", jc: "campaign_id", kc: "campaign_medium", mc: "campaign_name", nc: "campaign_source", oc: "campaign_term", ia: "client_id", ja: "cookie_domain", Jb: "cookie_name", Za: "cookie_path", Ka: "cookie_flags", qc: "custom_map", ne: "groups",
        Ef: "non_interaction", Sa: "page_location", qe: "page_path", La: "page_referrer", yc: "page_title", wa: "send_page_view", Ob: "send_to", Bc: "session_engaged", sc: "euid_logged_in_state", Cc: "session_number", Qh: "tracking_id", hb: "url_passthrough", Mb: "accept_incoming", xc: "url_position", If: "phone_conversion_number", Gf: "phone_conversion_callback", Hf: "phone_conversion_css_class", Jf: "phone_conversion_options", Lh: "phone_conversion_ids", Kh: "phone_conversion_country_code", ob: "aw_remarketing", Zd: "aw_remarketing_only", Xd: "gclid",
        zh: "auid", Fh: "affiliation", yf: "tax", fe: "list_name", xf: "checkout_step", wf: "checkout_option", Gh: "coupon", Hh: "promotions", Da: "user_id", Oh: "retoken", Ca: "cookie_prefix", vf: "disable_merchant_reported_purchases", Eh: "dc_natural_search", Dh: "dc_custom_params", Df: "method", Ph: "search_term", Ch: "content_type", Jh: "optimize_id", Ih: "experiments", cb: "google_signals"
    }; R.fd = "google_tld";
    R.ld = "update"; R.ke = "firebase_id"; R.vc = "ga_restrict_domain"; R.cd = "event_settings"; R.ee = "dynamic_event_settings"; R.Pb = "user_data_settings"; R.Mf = "screen_name"; R.te = "screen_resolution"; R.pb = "_x_19"; R.$a = "enhanced_client_id"; R.ed = "_x_20"; R.oe = "internal_traffic_results"; R.kd = "traffic_type"; R.gd = "referral_exclusion_definition"; R.wc = "ignore_referrer"; R.Bh = "content_group"; R.ra = "allow_interest_groups"; var Kc = {}; R.Rf = Object.freeze((Kc[R.tf] = 1, Kc[R.sh] = 1, Kc[R.Fb] = 1, Kc[R.Gb] = 1, Kc[R.th] = 1, Kc[R.lb] = 1, Kc[R.Ud] = 1, Kc[R.nb] = 1, Kc[R.Vd] = 1, Kc[R.Hb] = 1, Kc[R.oa] = 1, Kc[R.Ib] = 1, Kc[R.qa] = 1, Kc[R.uf] = 1, Kc)); R.ve = Object.freeze([R.W, R.hc, R.Kb]); R.ai = Object.freeze([].concat(R.ve)); R.we = Object.freeze([R.va, R.dd, R.Ac, R.hd, R.bd]); R.bi = Object.freeze([].concat(R.we));
    var Lc = {}; R.Sd = (Lc[R.D] = "1", Lc[R.K] = "2", Lc);
    var Mc = {}; R.jf = Object.freeze((Mc[R.W] = 1, Mc[R.$c] = 1, Mc[R.ra] = 1, Mc[R.ob] = 1, Mc[R.Zd] = 1, Mc[R.$d] = 1, Mc[R.ae] = 1, Mc[R.be] = 1, Mc[R.X] = 1, Mc[R.ce] = 1, Mc[R.Ja] = 1, Mc[R.sa] = 1, Mc[R.ja] = 1, Mc[R.va] = 1, Mc[R.Ka] = 1, Mc[R.Ca] = 1, Mc[R.ca] = 1, Mc[R.de] = 1, Mc[R.T] = 1, Mc[R.vf] = 1, Mc[R.ie] = 1, Mc[R.je] = 1, Mc[R.ke] = 1, Mc[R.uc] = 1, Mc[R.eb] = 1, Mc[R.pe] = 1, Mc[R.Sa] = 1, Mc[R.La] = 1, Mc[R.Gf] = 1, Mc[R.Hf] = 1, Mc[R.If] = 1, Mc[R.Jf] = 1, Mc[R.zc] = 1, Mc[R.wa] = 1, Mc[R.Ob] = 1, Mc[R.jd] = 1, Mc[R.fb] = 1, Mc[R.xa] = 1, Mc[R.ld] = 1, Mc[R.hb] = 1, Mc[R.ya] = 1, Mc[R.Da] = 1, Mc[R.fa] = 1, Mc));
    var Nc = { xi: "UZ", oj: "UZ-TO" }; var Oc = {}, Pc = function (a, b) { Oc[a] = Oc[a] || []; Oc[a][b] = !0 }, Tc = function (a) { for (var b = [], c = Oc[a] || [], d = 0; d < c.length; d++)c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++)b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") }, Uc = function () { for (var a = [], b = Oc.GA4_EVENT || [], c = 0; c < b.length; c++)b[c] && a.push(c); return 0 < a.length ? a : void 0 }; var T = function (a) { Pc("GTM", a) }; var Vc = new function (a, b) { this.m = a; this.defaultValue = void 0 === b ? !1 : b }(1933); var Xc = function () { var a = Wc, b = "Re"; if (a.Re && a.hasOwnProperty(b)) return a.Re; var c = new a; a.Re = c; a.hasOwnProperty(b); return c }; var Wc = function () { var a = {}; this.m = function () { var b = Vc.m, c = Vc.defaultValue; return null != a[b] ? a[b] : c }; this.o = function () { a[Vc.m] = !0 } }; var Yc = []; function Zc() { var a = ab("google_tag_data", {}); a.ics || (a.ics = { entries: {}, set: $c, update: ad, addListener: bd, notifyListeners: cd, active: !1, usedDefault: !1, usedUpdate: !1, accessedDefault: !1, accessedAny: !1, wasSetLate: !1 }); return a.ics }
    function $c(a, b, c, d, e, f) {
        var g = Zc(); g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0); g.active = !0; g.usedDefault = !0; if (void 0 != b) {
            var l = g.entries, m = l[a] || {}, n = m.region, p = c && k(c) ? c.toUpperCase() : void 0; d = d.toUpperCase(); e = e.toUpperCase(); if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update), r = { region: p, initial: "granted" === b, update: m.update, quiet: q }; if ("" !== d || !1 !== m.initial) l[a] = r; q && G.setTimeout(function () {
                    l[a] === r && r.quiet && (r.quiet = !1, dd(a), cd(), Pc("TAGGING",
                        2))
                }, f)
            }
        }
    } function ad(a, b) { var c = Zc(); c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0); c.active = !0; c.usedUpdate = !0; if (void 0 != b) { var d = ed(c, a), e = c.entries, f = e[a] = e[a] || {}; f.update = "granted" === b; var g = ed(c, a); f.quiet ? (f.quiet = !1, dd(a)) : g !== d && dd(a) } } function bd(a, b) { Yc.push({ Je: a, Gi: b }) } function dd(a) { for (var b = 0; b < Yc.length; ++b) { var c = Yc[b]; qa(c.Je) && -1 !== c.Je.indexOf(a) && (c.Ng = !0) } }
    function cd(a, b) { for (var c = 0; c < Yc.length; ++c) { var d = Yc[c]; if (d.Ng) { d.Ng = !1; try { d.Gi({ consentEventId: a, consentPriorityId: b }) } catch (e) { } } } } function ed(a, b) { var c = a.entries[b] || {}; return void 0 !== c.update ? c.update : c.initial }
    var fd = function (a) { var b = Zc(); b.accessedAny = !0; return ed(b, a) }, gd = function (a) { var b = Zc(); b.accessedDefault = !0; return (b.entries[a] || {}).initial }, hd = function (a) { var b = Zc(); b.accessedAny = !0; return !(b.entries[a] || {}).quiet }, id = function () { if (!Xc().m()) return !1; var a = Zc(); a.accessedAny = !0; return a.active }, jd = function () { var a = Zc(); a.accessedDefault = !0; return a.usedDefault }, kd = function (a, b) { Zc().addListener(a, b) }, ld = function (a, b) { Zc().notifyListeners(a, b) }, md = function (a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)if (!hd(b[e])) return !0;
            return !1
        } if (c()) { var d = !1; kd(b, function (e) { d || c() || (d = !0, a(e)) }) } else a({})
    }, nd = function (a, b) { function c() { for (var f = [], g = 0; g < d.length; g++) { var l = d[g]; !1 === fd(l) || e[l] || (f.push(l), e[l] = !0) } return f } var d = k(b) ? [b] : b, e = {}; c().length !== d.length && kd(d, function (f) { var g = c(); 0 < g.length && (f.Je = g, a(f)) }) }; function od() { } function pd() { }; function qd(a) { for (var b = [], c = 0; c < rd.length; c++) { var d = a(rd[c]); b[c] = !0 === d ? "1" : !1 === d ? "0" : "-" } return b.join("") }
    var rd = [R.D, R.K], ud = function (a) { var b = a[R.kf]; b && T(40); var c = a[R.lf]; c && T(41); for (var d = qa(b) ? b : [b], e = { ac: 0 }; e.ac < d.length; e = { ac: e.ac }, ++e.ac)xa(a, function (f) { return function (g, l) { if (g !== R.kf && g !== R.lf) { var m = d[f.ac], n = Nc.xi, p = Nc.oj; Zc().set(g, l, m, n, p, c) } } }(e)) }, vd = 0, wd = function (a, b) { xa(a, function (e, f) { Zc().update(e, f) }); ld(b.eventId, b.priorityId); var c = A(), d = c - vd; vd && 0 <= d && 1E3 > d && T(66); vd = c }, xd = function (a) { var b = fd(a); return void 0 != b ? b : !0 }, yd = function () { return "G1" + qd(fd) }, zd = function (a, b) {
        nd(a,
            b)
    }, Ad = function (a, b) { md(a, b) }; var Cd = function (a) { return Bd ? H.querySelectorAll(a) : null }, Dd = function (a, b) {
        if (!Bd) return null; if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null } var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector, d = a; if (!H.documentElement.contains(d)) return null; do { try { if (c.call(d, b)) return d } catch (e) { break } d = d.parentElement || d.parentNode } while (null !== d && 1 === d.nodeType);
        return null
    }, Ed = !1; if (H.querySelectorAll) try { var Fd = H.querySelectorAll(":root"); Fd && 1 == Fd.length && Fd[0] == H.documentElement && (Ed = !0) } catch (a) { } var Bd = Ed;
    var Gd = function (a) { return null == a ? "" : k(a) ? Ca(String(a)) : "e0" }, Id = function (a) { return a.replace(Hd, "") }, Kd = function (a) { return Jd(a.replace(/\s/g, "")) }, Jd = function (a) { return Ca(a.replace(Ld, "").toLowerCase()) }, Nd = function (a) { a = a.replace(/[\s-()/.]/g, ""); "+" !== a.charAt(0) && (a = "+" + a); return Md.test(a) ? a : "e0" }, Pd = function (a) { var b = a.toLowerCase().split("@"); if (2 == b.length) { var c = b[0]; /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, "")); c = c + "@" + b[1]; if (Od.test(c)) return c } return "e0" }, Sd = function (a,
        b) { window.Promise || b([]); Promise.all(a.map(function (c) { return c.value && -1 !== Qd.indexOf(c.name) ? Rd(c.value).then(function (d) { c.value = d }) : Promise.resolve() })).then(function () { b(a) }).catch(function () { b([]) }) }, Rd = function (a) {
            if ("" === a || "e0" === a) return Promise.resolve(a); if (G.crypto && G.crypto.subtle) try {
                var b = Td(a); return G.crypto.subtle.digest("SHA-256", b).then(function (c) {
                    var d = Array.from(new Uint8Array(c)).map(function (e) { return String.fromCharCode(e) }).join(""); return G.btoa(d).replace(/\+/g, "-").replace(/\//g,
                        "_").replace(/=+$/, "")
                }).catch(function () { return "e2" })
            } catch (c) { return Promise.resolve("e2") } else return Promise.resolve("e1")
        }, Td = function (a) { var b; if (G.TextEncoder) b = (new G.TextEncoder("utf-8")).encode(a); else { for (var c = [], d = 0; d < a.length; d++) { var e = a.charCodeAt(d); 128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63)) } b = new Uint8Array(c) } return b },
        Ld = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, Od = /^\S+@\S+\.\S+$/, Md = /^\+\d{11,15}$/, Hd = /[.~]/g, Ud = {}, Vd = (Ud.email = "em", Ud.phone_number = "pn", Ud.first_name = "fn", Ud.last_name = "ln", Ud.street = "sa", Ud.city = "ct", Ud.region = "rg", Ud.country = "co", Ud.postal_code = "pc", Ud.error_code = "ec", Ud), Wd = function (a, b) {
            function c(n, p, q) { var r = n[p]; qa(r) || (r = [r]); for (var u = 0; u < r.length; ++u) { var t = Gd(r[u]); "" !== t && f.push({ name: p, value: q(t), index: void 0 }) } } function d(n, p, q, r) { var u = Gd(n[p]); "" !== u && f.push({ name: p, value: q(u), index: r }) }
            function e(n) { return function (p) { T(64); return n(p) } } var f = []; if ("https:" === G.location.protocol) {
                c(a, "email", Pd); c(a, "phone_number", Nd); c(a, "first_name", e(Kd)); c(a, "last_name", e(Kd)); var g = a.home_address || {}; c(g, "street", e(Jd)); c(g, "city", e(Jd)); c(g, "postal_code", e(Id)); c(g, "region", e(Jd)); c(g, "country", e(Id)); var l = a.address || {}; qa(l) || (l = [l]); for (var m = 0; m < l.length; m++)d(l[m], "first_name", Kd, m), d(l[m], "last_name", Kd, m), d(l[m], "street", Jd, m), d(l[m], "city", Jd, m), d(l[m], "postal_code", Id, m), d(l[m], "region",
                    Jd, m), d(l[m], "country", Id, m); Sd(f, b)
            } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f)
        }, Xd = function (a, b) { Wd(a, function (c) { for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) { var g = c[f].name, l = c[f].value, m = c[f].index, n = Vd[g]; n && l && (-1 === Qd.indexOf(g) || /^e\d+$/.test(l) || /^[0-9A-Za-z_-]{43}$/.test(l)) && (void 0 !== m && (n += m), d.push(n + "." + l), e++) } 1 === c.length && "error_code" === c[0].name && (e = 0); b(encodeURIComponent(d.join("~")), e) }) }, Yd = function (a) {
            if (G.Promise) try {
                return new Promise(function (b) {
                    Xd(a, function (c,
                        d) { b({ Kd: c, Uj: d }) })
                })
            } catch (b) { }
        }, Qd = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]); var Zd = {}, U = G.google_tag_manager = G.google_tag_manager || {}, $d = Math.random(); Zd.ud = "3n1"; Zd.U = "dataLayer"; Zd.mh = "ChEI8P+PkgYQxcjenqSxtovfARImAL8b/fWev0r/Wncrbf7mFkOuBUyy7sjEOV6w5K2kOXOIu48MO1waAosE"; var ae = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 }, be = { __paused: !0, __tg: !0 }, ce; for (ce in ae) ae.hasOwnProperty(ce) && (be[ce] = !0); Zd.cc = "www.googletagmanager.com"; var de, ee = Zd.cc + "/gtm.js"; ee = Zd.cc + "/gtag/js"; de = ee;
    var fe = Aa(""), ge = null, he = null, ie = {}, je = {}, ke = function () { var a = U.sequence || 1; U.sequence = a + 1; return a }; Zd.lh = ""; var le = ""; Zd.Sb = le; var me = new va, qe = {}, re = {}, ue = { name: Zd.U, set: function (a, b) { P(Ka(a, b), qe); se() }, get: function (a) { return te(a, 2) }, reset: function () { me = new va; qe = {}; se() } }, te = function (a, b) { return 2 != b ? me.get(a) : ve(a) }, ve = function (a) { var b, c = a.split("."); b = b || []; for (var d = qe, e = 0; e < c.length; e++) { if (null === d) return !1; if (void 0 === d) break; d = d[c[e]]; if (-1 !== b.indexOf(d)) return } return d }, we = function (a, b) { re.hasOwnProperty(a) || (me.set(a, b), P(Ka(a, b), qe), se()) }, se = function (a) {
        xa(re, function (b, c) {
            me.set(b, c); P(Ka(b, void 0), qe);
            P(Ka(b, c), qe); a && delete re[b]
        })
    }, xe = function (a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? ve(a) : me.get(a); "array" === tb(d) || "object" === tb(d) ? c = P(d) : c = d; return c }; var ye, ze = !1, Ae = function (a) { if (!ze) { ze = !0; ye = ye || {} } return ye[a] }; var Be = function (a) {
        if (H.hidden) return !0; var b = a.getBoundingClientRect(); if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle) return !0; var c = G.getComputedStyle(a, null); if ("hidden" === c.visibility) return !0; for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0; var f = e.opacity, g = e.filter; if (g) { var l = g.indexOf("opacity("); 0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f)) } if (void 0 !== f && 0 >= f) return !0; (d = d.parentElement) && (e = G.getComputedStyle(d,
                null))
        } return !1
    }; var Ke = /:[0-9]+$/, Le = function (a, b, c) { for (var d = a.split("&"), e = 0; e < d.length; e++) { var f = d[e].split("="); if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) { var g = f.slice(1).join("="); return c ? g : decodeURIComponent(g).replace(/\+/g, " ") } } }, Oe = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase()); if ("protocol" === b || "port" === b) a.protocol = Me(a.protocol) || Me(G.location.protocol); "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
            b && (a.hostname = (a.hostname || G.location.hostname).replace(Ke, "").toLowerCase()); return Ne(a, b, c, d, e)
    }, Ne = function (a, b, c, d, e) {
        var f, g = Me(a.protocol); b && (b = String(b).toLowerCase()); switch (b) {
            case "url_no_fragment": f = Pe(a); break; case "protocol": f = g; break; case "host": f = a.hostname.replace(Ke, "").toLowerCase(); if (c) { var l = /^www\d*\./.exec(f); l && l[0] && (f = f.substr(l[0].length)) } break; case "port": f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")); break; case "path": a.pathname || a.hostname || Pc("TAGGING",
                1); f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname; var m = f.split("/"); 0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = ""); f = m.join("/"); break; case "query": f = a.search.replace("?", ""); e && (f = Le(f, e, void 0)); break; case "extension": var n = a.pathname.split("."); f = 1 < n.length ? n[n.length - 1] : ""; f = f.split("/")[0]; break; case "fragment": f = a.hash.replace("#", ""); break; default: f = a && a.href
        }return f
    }, Me = function (a) { return a ? a.replace(":", "").toLowerCase() : "" }, Pe = function (a) {
        var b = ""; if (a && a.href) {
            var c =
                a.href.indexOf("#"); b = 0 > c ? a.href : a.href.substr(0, c)
        } return b
    }, Qe = function (a) { var b = H.createElement("a"); a && (b.href = a); var c = b.pathname; "/" !== c[0] && (a || Pc("TAGGING", 1), c = "/" + c); var d = b.hostname.replace(Ke, ""); return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port } }, Re = function (a) {
        function b(n) { var p = n.split("=")[0]; return 0 > d.indexOf(p) ? n : p + "=0" } function c(n) { return n.split("&").map(b).filter(function (p) { return void 0 !== p }).join("&") } var d =
            "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), e = Qe(a), f = a.split(/[?#]/)[0], g = e.search, l = e.hash; "?" === g[0] && (g = g.substring(1)); "#" === l[0] && (l = l.substring(1)); g = c(g); l = c(l); "" !== g && (g = "?" + g); "" !== l && (l = "#" + l); var m = "" + f + g + l; "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1)); return m
    }; var Se = {};
    var Ve = function (a) { if (0 == a.length) return null; var b; b = Te(a, function (c) { return !Ue.test(c.Va) }); b = Te(b, function (c) { return "INPUT" === c.element.tagName.toUpperCase() }); b = Te(b, function (c) { return !Be(c.element) }); return b[0] }, Te = function (a, b) { if (1 >= a.length) return a; var c = a.filter(b); return 0 == c.length ? a : c }, We = function (a) {
        var b; if (a === H.body) b = "body"; else {
            var c; if (a.id) c = "#" + a.id; else {
                var d; if (a.parentElement) {
                    var e; a: {
                        var f = a.parentElement; if (f) {
                            for (var g = 0; g < f.childElementCount; g++)if (f.children[g] === a) {
                                e =
                                g + 1; break a
                            } e = -1
                        } else e = 1
                    } d = We(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = ""; c = d
            } b = c
        } return b
    }, Xe = !0, Ye = !1; Se.hh = "true"; var Ze = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), $e = new RegExp(/@(gmail|googlemail)\./i),
        Ue = new RegExp(/support|noreply/i), af = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "), bf = ["BR"], cf = {}, df = function (a) {
            a = a || { Pe: !0, Qe: !0 }; a.jb = a.jb || { email: !0, phone: !0, jg: !0 }; var b, c = a, d = !!c.Pe + "." + !!c.Qe; c && c.Ed && c.Ed.length && (d += "." + c.Ed.join(".")); c && c.jb && (d += "." + c.jb.email + "." + c.jb.phone + "." + c.jb.jg); b = d; var e = cf[b]; if (e && 200 > A() - e.timestamp) return e.result; var f; var g = [], l = H.body; if (l) {
                for (var m = l.querySelectorAll("*"), n = 0; n < m.length && 1E4 > n; n++) {
                    var p = m[n]; if (!(0 <= af.indexOf(p.tagName.toUpperCase())) &&
                        p.children instanceof HTMLCollection) { for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)if (!(0 <= bf.indexOf(p.children[r].tagName.toUpperCase()))) { q = !0; break } q || g.push(p) }
                } f = { elements: g, status: 1E4 < m.length ? "2" : "1" }
            } else f = { elements: g, status: "4" }; var u = f, t = u.status, v = [], y; if (a.jb && a.jb.email) {
                for (var x = u.elements, w = [], C = 0; C < x.length; C++) {
                    var z = x[C], B = z.textContent; "INPUT" === z.tagName.toUpperCase() && z.value && (B = z.value); if (B) {
                        var D = B.match(Ze); if (D) {
                            var E = D[0], F; if (G.location) {
                                var M = Ne(G.location, "host",
                                    !0); F = 0 <= E.toLowerCase().indexOf(M)
                            } else F = !1; F || w.push({ element: z, Va: E })
                        }
                    }
                } var I = a && a.Ed; if (I && 0 !== I.length) { for (var N = [], O = 0; O < w.length; O++) { for (var L = !0, K = 0; K < I.length; K++) { var V = I[K]; if (V && Dd(w[O].element, V)) { L = !1; break } } L && N.push(w[O]) } v = N } else v = w; y = Ve(v); 10 < w.length && (t = "3")
            } var S = []; !a.Yj && y && (v = [y]); for (var Q = 0; Q < v.length; Q++) { var ka = v[Q].element, sa = { Va: v[Q].Va, tagName: ka.tagName, type: 1 }; a.Pe && (sa.querySelector = We(ka)); a.Qe && (sa.isVisible = !Be(ka)); S.push(sa) } var la = {
                elements: S.slice(0, 10),
                status: t
            }; cf[b] = { timestamp: A(), result: la }; return la
        };
    var ef = function (a, b, c) {
        if (c) {
            var d = c.selector_type, e = String(c.value), f; if ("js_variable" === d) { e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, ""); for (var g = e.split(","), l = 0; l < g.length; l++) { var m = g[l].trim(); if (m) { if (0 === m.indexOf("dataLayer.")) f = te(m.substring(10)); else { var n = m.split("."); f = G[n.shift()]; for (var p = 0; p < n.length; p++)f = f && f[n[p]] } if (void 0 !== f) break } } } else if ("css_selector" === d && Bd) {
                var q = Cd(e); if (q && 0 < q.length) {
                    f = []; for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++)f.push(mb(q[r]) ||
                        Ca(q[r].value)); f = 1 === f.length ? f[0] : f
                }
            } f && (a[b] = f)
        }
    }, ff = function (a) { if (a) { var b = {}; ef(b, "email", a.email); ef(b, "phone_number", a.phone); b.address = []; for (var c = a.name_and_address || [], d = 0; d < c.length; d++) { var e = {}; ef(e, "first_name", c[d].first_name); ef(e, "last_name", c[d].last_name); ef(e, "street", c[d].street); ef(e, "city", c[d].city); ef(e, "region", c[d].region); ef(e, "country", c[d].country); ef(e, "postal_code", c[d].postal_code); b.address.push(e) } return b } }, gf = function (a) {
        if (a) switch (a.mode) {
            case "selectors": return ff(a.selectors);
            case "auto_detect": var b; var c = a.auto_detect; if (c) { var d = df({ Pe: !1, Qe: !1, Ed: c.exclude_element_selectors, jb: { email: !!c.email, phone: !!c.phone, jg: !!c.address } }).elements, e = {}; if (0 < d.length) for (var f = 0; f < d.length; f++) { var g = d[f]; if (1 === g.type) { e.email = g.Va; break } } b = e } else b = void 0; return b
        }
    }, hf = function (a) { switch (a.enhanced_conversions_mode) { case "manual": var b = a.enhanced_conversions_manual_var; return void 0 !== b ? b : G.enhanced_conversion_data; case "automatic": return ff(a[R.zf]) } }; var jf = {}, kf = function (a, b) { if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a)) return G._gtmexpgrp[a]; void 0 === jf[a] && (jf[a] = Math.floor(Math.random() * b)); return jf[a] }; var lf = function (a) { var b = 1, c, d, e; if (a) for (b = 0, d = a.length - 1; 0 <= d; d--)e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b; return b }; var mf = function (a, b, c) { for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) { var g = e[f].split("="), l = g[0].replace(/^\s*|\s*$/g, ""); if (l && l == a) { var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, ""); m && c && (m = decodeURIComponent(m)); d.push(m) } } return d }; var nf = function (a, b) { var c = function () { }; c.prototype = a.prototype; var d = new c; a.apply(d, Array.prototype.slice.call(arguments, 1)); return d }, of = function (a) { var b = a; return function () { if (b) { var c = b; b = null; c() } } }; function pf(a) { return "null" !== a.origin }; var sf = function (a, b, c, d) { return qf(d) ? mf(a, String(b || rf()), c) : [] }, vf = function (a, b, c, d, e) { if (qf(e)) { var f = tf(a, d, e); if (1 === f.length) return f[0].id; if (0 !== f.length) { f = uf(f, function (g) { return g.Bd }, b); if (1 === f.length) return f[0].id; f = uf(f, function (g) { return g.Nc }, c); return f[0] ? f[0].id : void 0 } } }; function wf(a, b, c, d) { var e = rf(), f = window; pf(f) && (f.document.cookie = a); var g = rf(); return e != g || void 0 != c && 0 <= sf(b, g, !1, d).indexOf(c) }
    var Af = function (a, b, c) {
        function d(u, t, v) { if (null == v) return delete g[t], u; g[t] = v; return u + "; " + t + "=" + v } function e(u, t) { if (null == t) return delete g[t], u; g[t] = !0; return u + "; " + t } if (!qf(c.Ua)) return 2; var f; void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = xf(b), f = a + "=" + b); var g = {}; f = d(f, "path", c.path); var l; c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires); f = d(f, "expires", l); f = d(f, "max-age", c.Tj); f = d(f, "samesite",
            c.Wj); c.Xj && (f = e(f, "secure")); var m = c.domain; if (m && "auto" === m.toLowerCase()) { for (var n = yf(), p = 0; p < n.length; ++p) { var q = "none" !== n[p] ? n[p] : void 0, r = d(f, "domain", q); r = e(r, c.flags); if (!zf(q, c.path) && wf(r, a, b, c.Ua)) return 0 } return 1 } m && "none" !== m.toLowerCase() && (f = d(f, "domain", m)); f = e(f, c.flags); return zf(m, c.path) ? 1 : wf(f, a, b, c.Ua) ? 0 : 1
    }, Bf = function (a, b, c) { null == c.path && (c.path = "/"); c.domain || (c.domain = "auto"); return Af(a, b, c) };
    function uf(a, b, c) { for (var d = [], e = [], f, g = 0; g < a.length; g++) { var l = a[g], m = b(l); m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l) } return 0 < d.length ? d : e } function tf(a, b, c) { for (var d = [], e = sf(a, void 0, void 0, c), f = 0; f < e.length; f++) { var g = e[f].split("."), l = g.shift(); if (!b || -1 !== b.indexOf(l)) { var m = g.shift(); m && (m = m.split("-"), d.push({ id: g.join("."), Bd: 1 * m[0] || 1, Nc: 1 * m[1] || 1 })) } } return d }
    var xf = function (a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a }, Cf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Df = /(^|\.)doubleclick\.net$/i, zf = function (a, b) { return Df.test(window.document.location.hostname) || "/" === b && Cf.test(a) }, rf = function () { return pf(window) ? window.document.cookie : "" }, yf = function () {
        var a = [], b = window.document.location.hostname.split("."); if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] } for (var d = b.length - 2; 0 <= d; d--)a.push(b.slice(d).join("."));
        var e = window.document.location.hostname; Df.test(e) || Cf.test(e) || a.push("none"); return a
    }, qf = function (a) { if (!Xc().m() || !a || !id()) return !0; if (!hd(a)) return !1; var b = fd(a); return null == b ? !0 : !!b }; var Ef = function (a) { var b = Math.round(2147483647 * Math.random()); return a ? String(b ^ lf(a) & 2147483647) : String(b) }, Ff = function (a) { return [Ef(a), Math.round(A() / 1E3)].join(".") }, If = function (a, b, c, d, e) { var f = Gf(b); return vf(a, f, Hf(c), d, e) }, Jf = function (a, b, c, d) { var e = "" + Gf(c), f = Hf(d); 1 < f && (e += "-" + f); return [b, e, a].join(".") }, Gf = function (a) { if (!a) return 1; a = 0 === a.indexOf(".") ? a.substr(1) : a; return a.split(".").length }, Hf = function (a) {
        if (!a || "/" === a) return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length -
            1
    }; function Kf(a, b, c) { var d, e = Number(null != a.zb ? a.zb : void 0); 0 !== e && (d = new Date((b || A()) + 1E3 * (e || 7776E3))); return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d } }; var Lf = ["1"], Mf = {}, Nf = {}, Rf = function (a, b) { b = void 0 === b ? !0 : b; var c = Of(a.prefix); if (!Mf[c] && !Pf(c, a.path, a.domain) && b) { var d = Of(a.prefix), e = Ff(); if (0 === Qf(d, e, a)) { var f = ab("google_tag_data", {}); f._gcl_au ? Pc("GTM", 57) : f._gcl_au = e } Pf(c, a.path, a.domain) } }; function Qf(a, b, c, d) { var e = Jf(b, "1", c.domain, c.path), f = Kf(c, d); f.Ua = "ad_storage"; return Bf(a, e, f) }
    function Pf(a, b, c) { var d = If(a, b, c, Lf, "ad_storage"); if (!d) return !1; var e = d.split("."); 5 === e.length ? (Mf[a] = e.slice(0, 2).join("."), Nf[a] = { id: e.slice(2, 4).join("."), Gg: Number(e[4]) || 0 }) : 3 === e.length ? Nf[a] = { id: e.slice(0, 2).join("."), Gg: Number(e[2]) || 0 } : Mf[a] = d; return !0 } function Of(a) { return (a || "_gcl") + "_au" }; var Sf = function (a) { for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) { var f = c[e].match(d); f && b.push({ ff: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 }) } b.sort(function (g, l) { return l.timestamp - g.timestamp }); return b };
    function Tf(a, b) { var c = Sf(a), d = {}; if (!c || !c.length) return d; for (var e = 0; e < c.length; e++) { var f = c[e].value.split("."); if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) { d[c[e].ff] || (d[c[e].ff] = []); var g = { version: f[0], timestamp: 1E3 * Number(f[1]), za: f[2] }; b && 3 < f.length && (g.labels = f.slice(3)); d[c[e].ff].push(g) } } return d }; function Uf() { for (var a = Vf, b = {}, c = 0; c < a.length; ++c)b[a[c]] = c; return b } function Wf() { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; a += a.toLowerCase() + "0123456789-_"; return a + "." } var Vf, Xf;
    function Yf(a) { function b(m) { for (; d < a.length;) { var n = a.charAt(d++), p = Xf[n]; if (null != p) return p; if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n); } return m } Vf = Vf || Wf(); Xf = Xf || Uf(); for (var c = "", d = 0; ;) { var e = b(-1), f = b(0), g = b(64), l = b(64); if (64 === l && -1 === e) return c; c += String.fromCharCode(e << 2 | f >> 4); 64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l))) } }; var Zf; var jg = function () { var a = $f, b = hg, c = ig(), d = function (g) { a(g.target || g.srcElement || {}) }, e = function (g) { b(g.target || g.srcElement || {}) }; if (!c.init) { jb(H, "mousedown", d); jb(H, "keyup", d); jb(H, "submit", e); var f = HTMLFormElement.prototype.submit; HTMLFormElement.prototype.submit = function () { b(this); f.call(this) }; c.init = !0 } }, kg = function (a, b, c, d, e) { var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e }; ig().decorators.push(f) }, lg = function (a, b, c) {
        for (var d = ig().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g =
                d[f], l; if (l = !c || g.forms) a: { var m = g.domains, n = a, p = !!g.sameHost; if (m && (p || n !== H.location.hostname)) for (var q = 0; q < m.length; q++)if (m[q] instanceof RegExp) { if (m[q].test(n)) { l = !0; break a } } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) { l = !0; break a } l = !1 } if (l) { var r = g.placement; void 0 == r && (r = g.fragment ? 2 : 1); r === b && Ha(e, g.callback()) }
        } return e
    }; function ig() { var a = ab("google_tag_data", {}), b = a.gl; b && b.decorators || (b = { decorators: [] }, a.gl = b); return b }; var mg = /(.*?)\*(.*?)\*(.*)/, ng = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/, og = /^(?:www\.|m\.|amp\.)+/, pg = /([^?#]+)(\?[^#]*)?(#.*)?/; function qg(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var sg = function (a) {
        var b = [], c; for (c in a) if (a.hasOwnProperty(c)) { var d = a[c]; if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) { b.push(c); var e = b, f = e.push, g, l = String(d); Vf = Vf || Wf(); Xf = Xf || Uf(); for (var m = [], n = 0; n < l.length; n += 3) { var p = n + 1 < l.length, q = n + 2 < l.length, r = l.charCodeAt(n), u = p ? l.charCodeAt(n + 1) : 0, t = q ? l.charCodeAt(n + 2) : 0, v = r >> 2, y = (r & 3) << 4 | u >> 4, x = (u & 15) << 2 | t >> 6, w = t & 63; q || (w = 64, p || (x = 64)); m.push(Vf[v], Vf[y], Vf[x], Vf[w]) } g = m.join(""); f.call(e, g) } } var C = b.join("*"); return ["1", rg(C),
            C].join("*")
    }; function rg(a, b) { var c = [G.navigator.userAgent, (new Date).getTimezoneOffset(), Za.userLanguage || Za.language, Math.floor(A() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d; if (!(d = Zf)) { for (var e = Array(256), f = 0; 256 > f; f++) { for (var g = f, l = 0; 8 > l; l++)g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1; e[f] = g } d = e } Zf = d; for (var m = 4294967295, n = 0; n < c.length; n++)m = m >>> 8 ^ Zf[(m ^ c.charCodeAt(n)) & 255]; return ((m ^ -1) >>> 0).toString(36) }
    function tg() { return function (a) { var b = Qe(G.location.href), c = b.search.replace("?", ""), d = Le(c, "_gl", !0) || ""; a.query = ug(d) || {}; var e = Oe(b, "fragment").match(qg("_gl")); a.fragment = ug(e && e[3] || "") || {} } } function vg(a, b) { var c = qg(a).exec(b), d = b; if (c) { var e = c[2], f = c[4]; d = c[1]; f && (d = d + e + f) } return d }
    var wg = function (a, b) { b || (b = "_gl"); var c = pg.exec(a); if (!c) return ""; var d = c[1], e = vg(b, (c[2] || "").slice(1)), f = vg(b, (c[3] || "").slice(1)); e.length && (e = "?" + e); f.length && (f = "#" + f); return "" + d + e + f }, xg = function (a) { var b = tg(), c = ig(); c.data || (c.data = { query: {}, fragment: {} }, b(c.data)); var d = {}, e = c.data; e && (Ha(d, e.query), a && Ha(d, e.fragment)); return d }, ug = function (a) {
        try { var b = yg(a, 3); if (void 0 !== b) { for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) { var f = d[e], g = Yf(d[e + 1]); c[f] = g } Pc("TAGGING", 6); return c } } catch (l) {
            Pc("TAGGING",
                8)
        }
    }; function yg(a, b) { if (a) { var c; a: { for (var d = a, e = 0; 3 > e; ++e) { var f = mg.exec(d); if (f) { c = f; break a } d = decodeURIComponent(d) } c = void 0 } var g = c; if (g && "1" === g[1]) { var l = g[3], m; a: { for (var n = g[2], p = 0; p < b; ++p)if (n === rg(l, p)) { m = !0; break a } m = !1 } if (m) return l; Pc("TAGGING", 7) } } }
    function zg(a, b, c, d) { function e(p) { p = vg(a, p); var q = p.charAt(p.length - 1); p && "&" !== q && (p += "&"); return p + n } d = void 0 === d ? !1 : d; var f = pg.exec(c); if (!f) return ""; var g = f[1], l = f[2] || "", m = f[3] || "", n = a + "=" + b; d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1)); return "" + g + l + m }
    function Ag(a, b) { var c = "FORM" === (a.tagName || "").toUpperCase(), d = lg(b, 1, c), e = lg(b, 2, c), f = lg(b, 3, c); if (Ia(d)) { var g = sg(d); c ? Bg("_gl", g, a) : Cg("_gl", g, a, !1) } if (!c && Ia(e)) { var l = sg(e); Cg("_gl", l, a, !0) } for (var m in f) if (f.hasOwnProperty(m)) a: { var n = m, p = f[m], q = a; if (q.tagName) { if ("a" === q.tagName.toLowerCase()) { Cg(n, p, q, void 0); break a } if ("form" === q.tagName.toLowerCase()) { Bg(n, p, q); break a } } "string" == typeof q && zg(n, p, q, void 0) } }
    function Cg(a, b, c, d) { if (c.href) { var e = zg(a, b, c.href, void 0 === d ? !1 : d); Ra.test(e) && (c.href = e) } }
    function Bg(a, b, c) { if (c && c.action) { var d = (c.method || "").toLowerCase(); if ("get" === d) { for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) { var l = e[g]; if (l.name === a) { l.setAttribute("value", b); f = !0; break } } if (!f) { var m = H.createElement("input"); m.setAttribute("type", "hidden"); m.setAttribute("name", a); m.setAttribute("value", b); c.appendChild(m) } } else if ("post" === d) { var n = zg(a, b, c.action); Ra.test(n) && (c.action = n) } } }
    function $f(a) { try { var b; a: { for (var c = a, d = 100; c && 0 < d;) { if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a } c = c.parentNode; d-- } b = null } var e = b; if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || Ag(e, e.hostname) } } catch (g) { } } function hg(a) { try { if (a.action) { var b = Oe(Qe(a.action), "host"); Ag(a, b) } } catch (c) { } }
    var Dg = function (a, b, c, d) { jg(); kg(a, b, "fragment" === c ? 2 : 1, !!d, !1) }, Eg = function (a, b) { jg(); kg(a, [Ne(G.location, "host", !0)], b, !0, !0) }, Fg = function () {
        var a = H.location.hostname, b = ng.exec(H.referrer); if (!b) return !1; var c = b[2], d = b[1], e = ""; if (c) { var f = c.split("/"), g = f[1]; e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g) } else if (d) { if (0 === d.indexOf("xn--")) return !1; e = d.replace(/-/g, ".").replace(/\.\./g, "-") } var l = a.replace(og, ""), m = e.replace(og, ""), n; if (!(n = l === m)) {
            var p = "." + m; n = l.substring(l.length - p.length,
                l.length) === p
        } return n
    }, Gg = function (a, b) { return !1 === a ? !1 : a || b || Fg() }; var Hg = {}; var Ig = /^\w+$/, Jg = /^[\w-]+$/, Kg = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" }, Lg = function () { if (!Xc().m() || !id()) return !0; var a = fd("ad_storage"); return null == a ? !0 : !!a }, Mg = function (a, b) { hd("ad_storage") ? Lg() ? a() : nd(a, "ad_storage") : b ? Pc("TAGGING", 3) : md(function () { Mg(a, !0) }, ["ad_storage"]) }, Og = function (a) { return Ng(a).map(function (b) { return b.za }) }, Ng = function (a) {
        var b = []; if (!pf(G) || !H.cookie) return b; var c = sf(a, H.cookie, void 0, "ad_storage"); if (!c || 0 == c.length) return b; for (var d = {}, e = 0; e < c.length; d =
            { Wc: d.Wc }, e++) { var f = Pg(c[e]); if (null != f) { var g = f, l = g.version; d.Wc = g.za; var m = g.timestamp, n = g.labels, p = ra(b, function (q) { return function (r) { return r.za === q.Wc } }(d)); p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Qg(p.labels, n || [])) : b.push({ version: l, za: d.Wc, timestamp: m, labels: n }) } } b.sort(function (q, r) { return r.timestamp - q.timestamp }); return Rg(b)
    }; function Qg(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++)c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++)c[b[f]] || d.push(b[f]); return d }
    function Sg(a) { return a && "string" == typeof a && a.match(Ig) ? a : "_gcl" }
    var Ug = function () { var a = Qe(G.location.href), b = Oe(a, "query", !1, void 0, "gclid"), c = Oe(a, "query", !1, void 0, "gclsrc"), d = Oe(a, "query", !1, void 0, "wbraid"), e = Oe(a, "query", !1, void 0, "dclid"); if (!b || !c || !d) { var f = a.hash.replace("#", ""); b = b || Le(f, "gclid", void 0); c = c || Le(f, "gclsrc", void 0); d = d || Le(f, "wbraid", void 0) } return Tg(b, c, e, d) }, Tg = function (a, b, c, d) {
        var e = {}, f = function (g, l) { e[l] || (e[l] = []); e[l].push(g) }; e.gclid = a; e.gclsrc = b; e.dclid = c; void 0 !== d && Jg.test(d) && (e.gbraid = d, f(d, "gb")); if (void 0 !== a && a.match(Jg)) switch (b) {
            case void 0: f(a,
                "aw"); break; case "aw.ds": f(a, "aw"); f(a, "dc"); break; case "ds": f(a, "dc"); break; case "3p.ds": f(a, "dc"); break; case "gf": f(a, "gf"); break; case "ha": f(a, "ha")
        }c && f(c, "dc"); return e
    }, Wg = function (a) { var b = Ug(); Mg(function () { Vg(b, !1, a) }) };
    function Vg(a, b, c, d, e) {
        function f(y, x) { var w = Xg(y, g); w && (Bf(w, x, l), m = !0) } c = c || {}; e = e || []; var g = Sg(c.prefix); d = d || A(); var l = Kf(c, d, !0); l.Ua = "ad_storage"; var m = !1, n = Math.round(d / 1E3), p = function (y) { var x = ["GCL", n, y]; 0 < e.length && x.push(e.join(".")); return x.join(".") }; a.aw && f("aw", p(a.aw[0])); a.dc && f("dc", p(a.dc[0])); a.gf && f("gf", p(a.gf[0])); a.ha && f("ha", p(a.ha[0])); a.gp && f("gp", p(a.gp[0])); if ((void 0 == Hg.enable_gbraid_cookie_write ? 0 : Hg.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0], r = Xg("gb", g),
            u = !1; if (!b) for (var t = Ng(r), v = 0; v < t.length; v++)t[v].za === q && t[v].labels && 0 < t[v].labels.length && (u = !0); u || f("gb", p(q))
        }
    }
    var Zg = function (a, b) { var c = xg(!0); Mg(function () { for (var d = Sg(b.prefix), e = 0; e < a.length; ++e) { var f = a[e]; if (void 0 !== Kg[f]) { var g = Xg(f, d), l = c[g]; if (l) { var m = Math.min(Yg(l), A()), n; b: { var p = m; if (pf(G)) for (var q = sf(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)if (Yg(q[r]) > p) { n = !0; break b } n = !1 } if (!n) { var u = Kf(b, m, !0); u.Ua = "ad_storage"; Bf(g, l, u) } } } } Vg(Tg(c.gclid, c.gclsrc), !1, b) }) }, Xg = function (a, b) { var c = Kg[a]; if (void 0 !== c) return b + c }, Yg = function (a) {
        return 0 !== $g(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0
    }; function Pg(a) { var b = $g(a.split(".")); return 0 === b.length ? null : { version: b[0], za: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) } } function $g(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Jg.test(a[2]) ? [] : a }
    var ah = function (a, b, c, d, e) { if (qa(b) && pf(G)) { var f = Sg(e), g = function () { for (var l = {}, m = 0; m < a.length; ++m) { var n = Xg(a[m], f); if (n) { var p = sf(n, H.cookie, void 0, "ad_storage"); p.length && (l[n] = p.sort()[p.length - 1]) } } return l }; Mg(function () { Dg(g, b, c, d) }) } }, Rg = function (a) { return a.filter(function (b) { return Jg.test(b.za) }) }, bh = function (a, b) {
        if (pf(G)) {
            for (var c = Sg(b.prefix), d = {}, e = 0; e < a.length; e++)Kg[a[e]] && (d[a[e]] = Kg[a[e]]); Mg(function () {
                xa(d, function (f, g) {
                    var l = sf(c + g, H.cookie, void 0, "ad_storage"); l.sort(function (u,
                        t) { return Yg(t) - Yg(u) }); if (l.length) { var m = l[0], n = Yg(m), p = 0 !== $g(m.split(".")).length ? m.split(".").slice(3) : [], q = {}, r; r = 0 !== $g(m.split(".")).length ? m.split(".")[2] : void 0; q[f] = [r]; Vg(q, !0, b, n, p) }
                })
            })
        }
    }; function ch(a, b) { for (var c = 0; c < b.length; ++c)if (a[b[c]]) return !0; return !1 }
    var dh = function (a) { function b(e, f, g) { g && (e[f] = g) } if (id()) { var c = Ug(); if (ch(c, a)) { var d = {}; b(d, "gclid", c.gclid); b(d, "dclid", c.dclid); b(d, "gclsrc", c.gclsrc); b(d, "wbraid", c.gbraid); Eg(function () { return d }, 3); Eg(function () { var e = {}; return e._up = "1", e }, 1) } } }; function eh(a, b) { var c = Sg(b), d = Xg(a, c); if (!d) return 0; for (var e = Ng(d), f = 0, g = 0; g < e.length; g++)f = Math.max(f, e[g].timestamp); return f }
    function fh(a) { var b = 0, c; for (c in a) for (var d = a[c], e = 0; e < d.length; e++)b = Math.max(b, Number(d[e].timestamp)); return b };
    var gh = function (a) { var b = []; xa(a, function (c, d) { d = Rg(d); for (var e = [], f = 0; f < d.length; f++)e.push(d[f].za); e.length && b.push(c + ":" + e.join(",")) }); return b.join(";") }, ih = function (a, b, c) { if ("aw" === a || "dc" === a || "gb" === a) { var d = hh("gcl" + a); if (d) return d.split(".") } var e = Sg(b); if ("_gcl" == e) { c = void 0 === c ? !0 : c; var f = !xd(R.D) && c, g; g = Ug()[a] || []; if (0 < g.length) return f ? ["0"] : g } var l = Xg(a, e); return l ? Og(l) : [] }, hh = function (a) {
        var b = Qe(G.location.href), c = Oe(b, "host", !1); if (c && c.match(jh)) {
            var d = Oe(b, "path").split(a +
                "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }, kh = function (a, b) { hd(R.D) ? xd(R.D) ? a() : nd(a, R.D) : b ? T(42) : Ad(function () { kh(a, !0) }, [R.D]) }, jh = /^\d+\.fls\.doubleclick\.net$/, lh = !1; var mh = function (a, b) { return ih("aw", a, b) }, nh = function (a, b) { return ih("dc", a, b) }, oh = function (a) { var b = hh("gac"); return b ? !xd(R.D) && a ? "0" : decodeURIComponent(b) : gh(Lg() ? Tf() : {}) }, ph = function (a) {
        var b = hh("gacgb"); return b ?
            !xd(R.D) && a ? "0" : decodeURIComponent(b) : gh(Lg() ? Tf("_gac_gb", !0) : {})
    }, qh = function (a) {
        var b = Ug(), c = [], d = b.gclid, e = b.dclid, f = b.gclsrc || "aw"; !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({ za: d, Me: f }); e && c.push({ za: e, Me: "ds" }); if (!lh) { } kh(function () {
            Rf(a); var g = Mf[Of(a.prefix)]; if (g && 0 < c.length) for (var l = U.joined_auid = U.joined_auid || {}, m = 0; m < c.length; m++) {
                var n =
                    c[m], p = n.za, q = n.Me, r = (a.prefix || "_gcl") + "." + q + "." + p; if (!l[r]) { var u = "https://adservice.google.com/pagead/regclk"; u = "gb" === q ? u + "?gbraid=" + p + "&auid=" + g : u + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q; pb(u); l[r] = !0 }
            }
        })
    }, rh = function (a) { var b; if (hh("gclaw") || hh("gac") || 0 < (Ug().aw || []).length) b = !1; else { var c; if (0 < (Ug().gb || []).length) c = !0; else { var d = Math.max(eh("aw", a), fh(Lg() ? Tf() : {})); c = Math.max(eh("gb", a), fh(Lg() ? Tf("_gac_gb", !0) : {})) > d } b = c } return b }; var sh = function (a) { var b = Za && Za.userAgent || ""; if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1; var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || ""; if ("" === c) return !1; for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) { if (void 0 === d[f]) return !0; if (e[f] != d[f]) return Number(e[f]) > Number(d[f]) } return e.length >= d.length };
    var uh = function (a) { var b = a ? hf(a) : G.enhanced_conversion_data, c = (a || {}).enhanced_conversions_mode, d = void 0; if ("manual" === c && b) switch (b._tag_mode) { case "CODE": d = "c"; break; case "AUTO": d = "a"; break; case "MANUAL": d = "m"; break; default: d = "c" } else d = "automatic" === c ? th(a) ? "a" : "m" : "c"; if (G.Promise) try { return b ? Yd(b).then(function (e) { e.vg = d; return e }) : Promise.resolve({ Kd: "", vg: void 0 }) } catch (e) { } }, th = function (a) { var b = a && a[R.zf]; return b && b[R.Ah] }, vh = function (a) {
        if (xd(R.D)) return a; a = a.replace(/&url=([^&#]+)/,
            function (b, c) { var d = Re(decodeURIComponent(c)); return "&url=" + encodeURIComponent(d) }); return a = a.replace(/&ref=([^&#]+)/, function (b, c) { var d = Re(decodeURIComponent(c)); return "&ref=" + encodeURIComponent(d) })
    }, wh = function () { if (fe || !0 !== G._gtmdgs && !sh("11")) return -1; var a = za('1'); return kf(1, 100) < a ? kf(2, 2) : -1 }, xh = function () { return -1 !== Za.userAgent.toLowerCase().indexOf("firefox") }, yh = function (a) { if (a && a.length) { for (var b = [], c = 0; c < a.length; ++c) { var d = a[c]; d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("") } return b.join(",") } }; var zh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Ah = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] }, Bh = {
        cl: ["ecl"], customPixels: ["customScripts", "html"],
        ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts"], customScripts: ["html"], nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"], nonGoogleScripts: ["customScripts", "html"], nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, Ch = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Dh = function () { var a = !1; a = !0; return a }, Fh = function (a) {
        var b = te("gtm.allowlist") || te("gtm.whitelist"); b && T(9); Dh() && (b = "google gtagfl lcl zone oid op".split(" ")); var c = b && Ja(Ba(b), Ah), d = te("gtm.blocklist") ||
            te("gtm.blacklist"); d || (d = te("tagTypeBlacklist")) && T(3); d ? T(8) : d = []; Eh() && (d = Ba(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts")); 0 <= Ba(d).indexOf("google") && T(2); var e = d && Ja(Ba(d), Bh), f = {}; return function (g) {
                var l = g && g[xb.sb]; if (!l || "string" != typeof l) return !0; l = l.replace(/^_*/, ""); if (void 0 !== f[l]) return f[l]; var m = je[l] || [], n = a(l, m); if (b) {
                    var p;
                    if (p = n) a: { if (0 > c.indexOf(l)) if (m && 0 < m.length) for (var q = 0; q < m.length; q++) { if (0 > c.indexOf(m[q])) { T(11); p = !1; break a } } else { p = !1; break a } p = !0 } n = p
                } var r = !1; if (d) { var u = 0 <= e.indexOf(l); if (u) r = u; else { var t = wa(e, m || []); t && T(10); r = t } } var v = !n || r; v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = wa(e, Ch)); return f[l] = v
            }
    }, Eh = function () { return zh.test(G.location && G.location.hostname) }; var Gh = { F: "AW-1071820919", Zc: "" }, Hh = { Vj: "AW-1071820919", Mg: "AW-1071820919" }, Ih = function () { var a = []; Hh.Mg && (a = Hh.Mg.split("|")); return a };
    var Lh = function (a) { }, Ph = function (a) { }, Qh =
        function () { return "&tc=" + Yb.filter(function (a) { return a }).length }, Th = function () { 2022 <= Rh().length && Sh() }, Uh = function (a) { return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*" }, Wh = function () { Vh || (Vh = G.setTimeout(Sh, 500)) }, Sh = function () { Vh && (G.clearTimeout(Vh), Vh = void 0); if (void 0 !== Xh && (!Yh[Xh] || Zh || $h)) if (ai[Xh] || bi.Ui() || 0 >= ci--) T(1), ai[Xh] = !0; else { bi.pj(); var a = Rh(!0); ib(a); Yh[Xh] = !0; ei = di = gi = hi = ii = $h = Zh = ""; fi = [] } }, Rh = function (a) { var b = Xh; if (void 0 === b) return ""; var c = Tc("GTM"), d = Tc("TAGGING"); return [ji, Yh[b] ? "" : "&es=1", ki[b], Lh(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Qh(), Zh, $h, ii, hi, Ph(a), gi, di, ei ? "&dl=" + encodeURIComponent(ei) : "", 0 < fi.length ? "&tdp=" + fi.join(".") : "", "&z=0"].join("") }, mi = function () { ji = li() }, li = function () {
            return [ni, "&v=3&t=t", "&pid=" +
                ta(), "&rv=" + Zd.ud].join("")
        }, Oh = ["L", "S", "Y"], Kh = ["S", "E"], oi = { sampleRate: "0.005000", fh: "", eh: Number("5") }, pi = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="), qi; if (!(qi = pi)) { var ri = Math.random(), si = oi.sampleRate; qi = ri < si } var ti =
            qi, ni = "https://www.googletagmanager.com/a?id=" + Gh.F + "&cv=1", ui = { label: Gh.F + " Container", children: [{ label: "Initialization", children: [] }] }, ji = li(), Yh = {}, Zh = "", $h = "", gi = "", hi = "", di = "", fi = [], ei = "", Nh = {}, Mh = !1, Jh = {}, vi = {}, ii = "", Xh = void 0, ki = {}, ai = {}, Vh = void 0, wi = 5; 0 < oi.eh && (wi = oi.eh); var bi = function (a, b) { for (var c = 0, d = [], e = 0; e < a; ++e)d.push(0); return { Ui: function () { return c < a ? !1 : A() - d[c % a] < b }, pj: function () { var f = c++ % a; d[f] = A() } } }(wi, 1E3), ci = 1E3, yi = function (a, b) {
                if (ti && !ai[a] && Xh !== a) {
                    Sh(); Xh = a;
                    gi = Zh = ""; ki[a] = "&e=" + Uh(b) + "&eid=" + a; Wh();
                }
            }, zi = function (a, b, c, d) { if (ti && b) { var e, f = String(b[xb.sb] || "").replace(/_/g, ""); 0 === f.indexOf("cvt") && (f = "cvt"); e = f; var g = c + e; if (!ai[a]) { a !== Xh && (Sh(), Xh = a); Zh = Zh ? Zh + "." + g : "&tr=" + g; var l = b["function"]; if (!l) throw Error("Error: No function name given for function call."); var m = (ac[l] ? "1" : "2") + e; gi = gi ? gi + "." + m : "&ti=" + m; Wh(); Th() } } }; var Gi = function (a, b, c) { if (ti && !ai[a]) { a !== Xh && (Sh(), Xh = a); var d = c + b; $h = $h ? $h + "." + d : "&epr=" + d; Wh(); Th() } }, Hi = function (a, b, c) { };
    var Ii = { initialized: 11, complete: 12, interactive: 13 }, Ji = {}, Ki = Object.freeze((Ji[R.rb] = !0, Ji[R.Fc] = !0, Ji)), Li = {}, Mi = Object.freeze((Li[R.wa] = !0, Li)), Ni = {}, Oi = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics="), Qi = function (a, b, c) { }; function Ri(a, b) { var c = {}, d; for (d in b) b.hasOwnProperty(d) && (c[d] = !0); for (var e in a) a.hasOwnProperty(e) && (c[e] = !0); return c }
    function Pi(a, b, c, d) { c = void 0 === c ? {} : c; d = void 0 === d ? "" : d; if (a === b) return []; var e = function (q, r) { var u = r[q]; return void 0 === u ? Mi[q] : u }, f; for (f in Ri(a, b)) if (!Ki[f]) { var g = (d ? d + "." : "") + f, l = e(f, a), m = e(f, b), n = "object" === tb(l) || "array" === tb(l), p = "object" === tb(m) || "array" === tb(m); if (n && p) Pi(l, m, c, g); else if (n || p || l !== m) c[g] = !0 } return Object.keys(c) } var Si = !1, Ti = 0, Ui = []; function Vi(a) { if (!Si) { var b = H.createEventObject, c = "complete" == H.readyState, d = "interactive" == H.readyState; if (!a || "readystatechange" != a.type || c || !b && d) { Si = !0; for (var e = 0; e < Ui.length; e++)J(Ui[e]) } Ui.push = function () { for (var f = 0; f < arguments.length; f++)J(arguments[f]); return 0 } } } function Wi() { if (!Si && 140 > Ti) { Ti++; try { H.documentElement.doScroll("left"), Vi() } catch (a) { G.setTimeout(Wi, 50) } } } var Xi = function (a) { Si ? a() : Ui.push(a) }; var Zi = function (a, b) { this.m = !1; this.C = []; this.I = { tags: [] }; this.V = !1; this.o = this.s = 0; Yi(this, a, b) }, $i = function (a, b, c, d) { if (be.hasOwnProperty(b) || "__zone" === b) return -1; var e = {}; vb(d) && (e = P(d, e)); e.id = c; e.status = "timeout"; return a.I.tags.push(e) - 1 }, aj = function (a, b, c, d) { var e = a.I.tags[b]; e && (e.status = c, e.executionTime = d) }, bj = function (a) { if (!a.m) { for (var b = a.C, c = 0; c < b.length; c++)b[c](); a.m = !0; a.C.length = 0 } }, Yi = function (a, b, c) { void 0 !== b && sj(a, b); c && G.setTimeout(function () { return bj(a) }, Number(c)) }, sj =
        function (a, b) { var c = Fa(function () { return J(function () { b(Gh.F, a.I) }) }); a.m ? c() : a.C.push(c) }, tj = function (a) { a.s++; return Fa(function () { a.o++; a.V && a.o >= a.s && bj(a) }) }, uj = function (a) { a.V = !0; a.o >= a.s && bj(a) }; var vj = function () { function a(d) { return !pa(d) || 0 > d ? 0 : d } if (!U._li && G.performance && G.performance.timing) { var b = G.performance.timing.navigationStart, c = pa(ue.get("gtm.start")) ? ue.get("gtm.start") : 0; U._li = { cst: a(c - b), cbt: a(he - b) } } }, wj = function (a) { G.performance && G.performance.mark(Gh.F + "_" + a + "_start") }, xj = function (a) {
            if (G.performance) {
                var b = Gh.F + "_" + a + "_start", c = Gh.F + "_" + a + "_duration"; G.performance.measure(c, b); var d = G.performance.getEntriesByName(c)[0]; G.performance.clearMarks(b); G.performance.clearMeasures(c);
                var e = U._p || {}; void 0 === e[a] && (e[a] = d.duration, U._p = e); return d.duration
            }
        }, yj = function () { if (G.performance && G.performance.now) { var a = U._p || {}; a.PAGEVIEW = G.performance.now(); U._p = a } }; var zj = {}, Aj = function () { return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject] }, Bj = !1;
    function Ej() { return G.GoogleAnalyticsObject || "ga" }
    var Fj = function (a) { }, Gj = function (a, b) {
        return function () {
            var c = Aj(), d = c && c.getByName && c.getByName(a); if (d) {
                var e = d.get("sendHitTask"); d.set("sendHitTask", function (f) {
                    var g = f.get("hitPayload"), l = f.get("hitCallback"), m = 0 > g.indexOf("&tid=" + b); m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0)); e(f); m && (f.set("hitPayload",
                        g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    }; function Lj(a, b, c, d) { var e = Yb[a], f = Mj(a, b, c, d); if (!f) return null; var g = fc(e[xb.Yf], c, []); if (g && g.length) { var l = g[0]; f = Lj(l.index, { onSuccess: f, onFailure: 1 === l.wg ? b.terminate : f, terminate: b.terminate }, c, d) } return f }
    function Mj(a, b, c, d) {
        function e() {
            if (f[xb.Yh]) l(); else {
                var y = gc(f, c, []); var x = y[xb.jh]; if (null != x) for (var w = 0; w < x.length; w++)if (!xd(x[w])) { l(); return } var C = $i(c.tb, String(f[xb.sb]), Number(f[xb.$f]), y[xb.Zh]), z = !1; y.vtp_gtmOnSuccess = function () {
                    if (!z) {
                        z = !0; var E = A() - D; zi(c.id, Yb[a], "5", E); aj(c.tb, C, "success",
                            E); g()
                    }
                }; y.vtp_gtmOnFailure = function () { if (!z) { z = !0; var E = A() - D; zi(c.id, Yb[a], "6", E); aj(c.tb, C, "failure", E); l() } }; y.vtp_gtmTagId = f.tag_id; y.vtp_gtmEventId = c.id; zi(c.id, f, "1"); var B = function () { var E = A() - D; zi(c.id, f, "7", E); aj(c.tb, C, "exception", E); z || (z = !0, l()) }; var D = A(); try { ec(y, { event: c, index: a, type: 1 }) } catch (E) { B(E) }
            }
        } var f = Yb[a], g = b.onSuccess, l = b.onFailure, m = b.terminate; if (c.Te(f)) return null; var n = fc(f[xb.ag], c, []); if (n && n.length) { var p = n[0], q = Lj(p.index, { onSuccess: g, onFailure: l, terminate: m }, c, d); if (!q) return null; g = q; l = 2 === p.wg ? m : q } if (f[xb.Uf] || f[xb.ci]) {
            var r =
                f[xb.Uf] ? Zb : c.Bj, u = g, t = l; if (!r[a]) { e = Fa(e); var v = Nj(a, r, e); g = v.onSuccess; l = v.onFailure } return function () { r[a](u, t) }
        } return e
    } function Nj(a, b, c) { var d = [], e = []; b[a] = Oj(d, e, c); return { onSuccess: function () { b[a] = Pj; for (var f = 0; f < d.length; f++)d[f]() }, onFailure: function () { b[a] = Qj; for (var f = 0; f < e.length; f++)e[f]() } } } function Oj(a, b, c) { return function (d, e) { a.push(d); b.push(e); c() } } function Pj(a) { a() } function Qj(a, b) { b() }; function Rj(a, b) { if (a) { var c = "" + a; 0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c); "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1)); return Qe("" + c + b).href } } function Sj(a, b) { return Tj() ? Rj(a, b) : void 0 } function Tj() { var a = !1; return a }
    function Uj() { return !!Zd.Sb && "SGTM_TOKEN" !== Zd.Sb.replaceAll("@@", "") }; var Vj = function () { var a = !1; return a }; var Xj = function (a, b, c, d) { return (2 === Wj() || d || "http:" != G.location.protocol ? a : b) + c }, Wj = function () { var a = gb(), b; if (1 === a) a: { var c = de; c = c.toLowerCase(); for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) { var m = g[l].src; if (m) { m = m.toLowerCase(); if (0 === m.indexOf(e)) { b = 3; break a } 1 === f && 0 === m.indexOf(d) && (f = 2) } } b = f } else b = a; return b }; var Yj = !1; Yj = !0;
    var Zj = function () { if (Vj()) { return !0 } return !1 }, ak = function (a, b, c) {
        if (!Zj()) {
            var d = "/gtm.js"; d = "/gtag/js"; c && (d = "/gtag/js"); var e = "?id=" + encodeURIComponent(a) + "&l=" + Zd.U, f = 0 === a.indexOf("GTM-"); f || (e += "&cx=c"); var g = Uj(); g && (e += "&sign=" + Zd.Sb); var l = Sj(b, d + e); if (!l) {
                var m = Zd.cc + d; g && $a && f && (m = $a.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]); l = Xj("https://",
                    "http://", m + e)
            } fb(l)
        }
    }, bk = function (a, b) { if (!Zj()) { var c = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Zd.U + "&cx=c"; Uj() && (c += "&sign=" + Zd.Sb); var d = Sj(b, c); d || (d = Xj("https://", "http://", Zd.cc + c)); fb(d) } }; var ck = function () { this.eventModel = {}; this.targetConfig = {}; this.containerConfig = {}; this.globalConfig = {}; this.dataLayerConfig = {}; this.remoteConfig = {}; this.onSuccess = function () { }; this.onFailure = function () { }; this.setContainerTypeLoaded = function () { }; this.getContainerTypeLoaded = function () { }; this.eventId = void 0; this.isGtmEvent = !1 }, dk = function (a) { var b = new ck; b.eventModel = a; return b }, ek = function (a, b) { a.targetConfig = b; return a }, fk = function (a, b) { a.containerConfig = b; return a }, gk = function (a, b) {
        a.globalConfig =
        b; return a
    }, hk = function (a, b) { a.dataLayerConfig = b; return a }, ik = function (a, b) { a.remoteConfig = b; return a }, jk = function (a, b) { a.onSuccess = b; return a }, kk = function (a, b) { a.setContainerTypeLoaded = b; return a }, lk = function (a, b) { a.getContainerTypeLoaded = b; return a }, mk = function (a, b) { a.onFailure = b; return a }; h = ck.prototype;
    h.getWithConfig = function (a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; nk(this, this.globalConfig[a], this.dataLayerConfig[a]) && T(71); if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    h.getTopLevelKeys = function () { function a(e) { for (var f = Object.keys(e), g = 0; g < f.length; ++g)b[f[g]] = 1 } var b = {}; a(this.eventModel); a(this.targetConfig); a(this.containerConfig); a(this.globalConfig); for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++)if (!b.hasOwnProperty(c[d])) { T(71); break } return Object.keys(b) };
    h.getMergedValues = function (a, b) {
        function c(l) { vb(l) && xa(l, function (m, n) { e = !0; d[m] = n }) } var d = {}, e = !1; b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a])); b && 2 !== b || c(this.eventModel[a]); var f = e, g = d; d = {}; e = !1; b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a])); b && 2 !== b || c(this.eventModel[a]);
        (e !== f || nk(this, d, g)) && T(71); e = f; d = g; return e ? d : void 0
    };
    h.getKeysFromFirstOfAnyScope = function (a) {
        var b = {}, c = !1, d = function (g) { for (var l = 0; l < a.length; l++)void 0 !== g[a[l]] && (b[a[l]] = g[a[l]], c = !0); return c }; if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b; d(this.globalConfig); var e = b, f = c; b = {}; c = !1; d(this.dataLayerConfig); nk(this, b, e) && T(71); b = e; c = f;
        if (c) return b; d(this.remoteConfig); return b
    }; h.getEventModelKeys = function () { var a = [], b; for (b in this.eventModel) b !== R.rb && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b); return a };
    var nk = function (a, b, c) {
        try { if (b === c) return !1; var d = tb(b); if (d !== tb(c) || !(vb(b) && vb(c) || "array" === d)) return !0; if ("array" === d) { if (b.length !== c.length) return !0; for (var e = 0; e < b.length; e++)if (nk(a, b[e], c[e])) return !0 } else { for (var f in c) if (!b.hasOwnProperty(f)) return !0; for (var g in b) if (!c.hasOwnProperty(g) || nk(a, b[g], c[g])) return !0 } } catch (l) { T(72) }
        return !1
    }; function ok() { U.dedupe_gclid || (U.dedupe_gclid = "" + Ff()); return U.dedupe_gclid }; var pk; if (3 === Zd.ud.length) pk = "g"; else { var qk = "G"; qk = "g"; pk = qk }
    var rk = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: pk, OPT: "o" }, sk = function (a) { var b = Gh.F.split("-"), c = b[0].toUpperCase(), d = rk[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f; if (3 === Zd.ud.length) { var g = "w"; g = Vj() ? "s" : "o"; f = "2" + g } else f = ""; return f + d + Zd.ud + e }; function tk(a, b) { if ("" === a) return b; var c = Number(a); return isNaN(c) ? b : c }; var uk = function (a, b) { a.addEventListener && a.addEventListener.call(a, "message", b, !1) }; function vk() { return Ta("iPhone") && !Ta("iPod") && !Ta("iPad") }; Ta("Opera"); Ta("Trident") || Ta("MSIE"); Ta("Edge"); !Ta("Gecko") || -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") || Ta("Trident") || Ta("MSIE") || Ta("Edge"); -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile"); Ta("Macintosh"); Ta("Windows"); Ta("Linux") || Ta("CrOS"); var wk = ja.navigator || null; wk && (wk.appVersion || "").indexOf("X11"); Ta("Android"); vk(); Ta("iPad"); Ta("iPod"); vk() || Ta("iPad") || Ta("iPod"); Sa().toLowerCase().indexOf("kaios"); var xk = function (a) { if (!a || !H.head) return null; var b, c; c = void 0 === c ? document : c; b = c.createElement("meta"); H.head.appendChild(b); b.httpEquiv = "origin-trial"; b.content = a; return b }; var yk = function () { }; var zk = function (a) { void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0); void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0); return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3 }, Ak = function (a, b) { this.o = a; this.m = null; this.C = {}; this.V = 0; this.I = void 0 === b ? 500 : b; this.s = null }; ia(Ak, yk);
    Ak.prototype.addEventListener = function (a) {
        var b = {}, c = of(function () { return a(b) }), d = 0; -1 !== this.I && (d = setTimeout(function () { b.tcString = "tcunavailable"; b.internalErrorState = 1; c() }, this.I)); var e = function (f, g) { clearTimeout(d); f ? (b = f, b.internalErrorState = zk(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3); a(b) }; try { Bk(this, "addEventListener", e) } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    }; Ak.prototype.removeEventListener = function (a) { a && a.listenerId && Bk(this, "removeEventListener", null, a.listenerId) };
    var Dk = function (a, b, c) {
        var d; d = void 0 === d ? "755" : d; var e; a: { if (a.publisher && a.publisher.restrictions) { var f = a.publisher.restrictions[b]; if (void 0 !== f) { e = f[void 0 === d ? "755" : d]; break a } } e = void 0 } var g = e; if (0 === g) return !1; var l = c; 2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0)); var m; if (0 === l) if (a.purpose && a.vendor) { var n = Ck(a.vendor.consents, void 0 === d ? "755" : d); m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ck(a.purpose.consents, b) } else m = !0; else m = 1 === l ? a.purpose && a.vendor ? Ck(a.purpose.legitimateInterests,
            b) && Ck(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0; return m
    }, Ck = function (a, b) { return !(!a || !a[b]) }, Bk = function (a, b, c, d) { c || (c = function () { }); if ("function" === typeof a.o.__tcfapi) { var e = a.o.__tcfapi; e(b, 2, c, d) } else if (Ek(a)) { Fk(a); var f = ++a.V; a.C[f] = c; if (a.m) { var g = {}; a.m.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*") } } else c({}, !1) }, Ek = function (a) {
        if (a.m) return a.m; var b; a: {
            for (var c = a.o, d = 0; 50 > d; ++d) {
                var e; try { e = !(!c.frames || !c.frames.__tcfapiLocator) } catch (l) {
                    e =
                    !1
                } if (e) { b = c; break a } var f; b: { try { var g = c.parent; if (g && g != c) { f = g; break b } } catch (l) { } f = null } if (!(c = f)) break
            } b = null
        } a.m = b; return a.m
    }, Fk = function (a) { a.s || (a.s = function (b) { try { var c; c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn; a.C[c.callId](c.returnValue, c.success) } catch (d) { } }, uk(a.o, a.s)) }; var Gk = !0; Gk = !1; var Hk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 }, Ik = tk("", 550), Jk = tk("", 500); function Kk() { var a = U.tcf || {}; return U.tcf = a }
    var Pk = function () {
        var a = Kk(), b = new Ak(G, Gk ? 3E3 : -1); if (!0 === G.gtag_enable_tcf_support && !a.active && ("function" === typeof G.__tcfapi || "function" === typeof b.o.__tcfapi || null != Ek(b))) {
            a.active = !0; a.Pc = {}; Lk(); var c = null; Gk ? c = G.setTimeout(function () { Mk(a); Nk(a); c = null }, Jk) : a.tcString = "tcunavailable"; try {
                b.addEventListener(function (d) {
                    c && (clearTimeout(c), c = null); if (0 !== d.internalErrorState) Mk(a), Nk(a); else {
                        var e; a.gdprApplies = d.gdprApplies; if (!1 === d.gdprApplies) e = Ok(), b.removeEventListener(d); else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                                var f = {}, g; for (g in Hk) if (Hk.hasOwnProperty(g)) if ("1" === g) {
                                    var l = d, m = !0; m = void 0 === m ? !1 : m; var n; var p = l; !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = zk(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1); f["1"] = n ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies &&
                                        !m || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Dk(l, "1", 0) : !1
                                } else f[g] = Dk(d, g, Hk[g]); e = f
                        } e && (a.tcString = d.tcString || "tcempty", a.Pc = e, Nk(a))
                    }
                })
            } catch (d) { c && (clearTimeout(c), c = null), Mk(a), Nk(a) }
        }
    }; function Mk(a) { a.type = "e"; a.tcString = "tcunavailable"; Gk && (a.Pc = Ok()) } function Lk() { var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = Ik, a); ud(b) } function Ok() { var a = {}, b; for (b in Hk) Hk.hasOwnProperty(b) && (a[b] = !0); return a }
    function Nk(a) { var b = {}, c = (b.ad_storage = a.Pc["1"] ? "granted" : "denied", b); wd(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Qk() }) } var Qk = function () { var a = Kk(); return a.active ? a.tcString || "" : "" }, Rk = function () { var a = Kk(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "" }, Sk = function (a) { if (!Hk.hasOwnProperty(String(a))) return !0; var b = Kk(); return b.active && b.Pc ? !!b.Pc[String(a)] : !0 };
    var Tk = function (a, b) { var c = a && !xd(R.D); return b && c ? "0" : b }, Xk = function (a) {
        function b(t) {
            var v; U.reported_gclid || (U.reported_gclid = {}); v = U.reported_gclid; var y, x = g; y = !g || id() && !xd(R.D) ? m + (t ? "gcu" : "gcs") : m + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs"); if (!v[y]) {
                v[y] = !0; var w = [], C = {}, z = function (N, O) { O && (w.push(N + "=" + encodeURIComponent(O)), C[N] = !0) }, B = "https://www.google.com"; if (id()) { var D = xd(R.D); z("gcs", yd()); t && z("gcu", "1"); jd() && z("gcd", "G1" + qd(gd)); z("rnd", ok()); if ((!m || n && "aw.ds" !== n) && xd(R.D)) { var E = Og("_gcl_aw"); z("gclaw", E.join(".")) } z("url", String(G.location).split(/[?#]/)[0]); z("dclid", Tk(d, p)); var F = !1; F = !0; D || !d && !F || (B = "https://pagead2.googlesyndication.com") } z("gdpr_consent", Qk()); z("gdpr", Rk()); "1" === xg(!1)._up && z("gtm_up", "1"); z("gclid", Tk(d, m)); z("gclsrc", n);
                if (!(C.gclid || C.dclid || C.gclaw) && (z("gbraid", Tk(d, q)), C.gbraid && Vk && (x = !1), !C.gbraid && id() && xd(R.D))) { var M = Og("_gcl_gb"); 0 < M.length && (z("gclgb", M.join(".")), Vk && (x = !1)) } z("gtm", sk(!e)); g && xd(R.D) && (Rf(f || {}), x && z("auid", Mf[Of(f.prefix)] || "")); Wk || a.Ad && z("did", a.Ad), a.Wb && z("gdid", a.Wb), a.Vb && z("edid", a.Vb); var I = B + "/pagead/landing?" + w.join("&"); pb(I)
            }
        } var c = !!a.Ie, d = !!a.Oa, e = a.O, f = void 0 ===
            a.ub ? {} : a.ub, g = void 0 === a.Jd ? !0 : a.Jd, l = Ug(), m = l.gclid || "", n = l.gclsrc, p = l.dclid || "", q = l.gbraid || "", r = !c && ((!m || n && "aw.ds" !== n ? !1 : !0) || q), u = id(); if (r || u) u ? Ad(function () { b(); xd(R.D) || zd(function (t) { return b(!0, t.consentEventId, t.consentPriorityId) }, R.D) }, [R.D]) : b()
    }, Uk = function (a) { var b = String(G.location).split(/[?#]/)[0], c = Zd.mh || G._CONSENT_MODE_SALT; return a ? c ? String(lf(b + a + c)) : "0" : "" }, Wk = !1; var Vk =
        !1; var Yk = function (a) { if (!id() || fd(R.D)) { a = a || {}; Rf(a, !1); var b = Nf[Of(Sg(a.prefix))]; if (b && !(18E5 < A() - 1E3 * b.Gg)) { var c = b.id, d = c.split("."); if (2 === d.length && !(864E5 < A() - 1E3 * (Number(d[1]) || 0))) return c } } }; var Zk = !1; var $k = function () { this.m = {} }, al = function (a, b, c) { null != c && (a.m[b] = c) }, bl = function (a) { return Object.keys(a.m).map(function (b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]) }).join("&") }, dl = function (a, b, c, d, e) { if (!id()) { cl(a, b, c, d, e); return } Ad(function () { xd(R.D) ? cl(a, b, c, d, e) : d && d() }, [R.D]); };

    var el = function (a, b, c) { c = void 0 === c ? !0 : c; var d = { gclgb: function () { return ih("gb", b, c).join(".") }, gacgb: function () { return ph(c) }, gclaw: function () { return mh(b, c).join(".") }, gac: function () { return oh(c) } }, e = rh(b); Zk && (e = !1); var f = e ? "gclgb" : "gclaw", g = e ? "gacgb" : "gac", l = d[g], m = (0, d[f])(), n = "_gcl" !== b ? "" : l(); m && al(a, f, m); n && al(a, g, n) }, cl = function (a, b, c, d, e) {
        c = c || {}; var f = c.ub || {}, g = new $k; Xd(b, function (l, m) {
            al(g, "em", l); al(g, "gtm", sk()); id() && (al(g, "gcs", yd()), al(g, "gcd", "G1" + qd(gd))); el(g, Sg(f.prefix), c.Oa);
            al(g, "auid", Mf[Of(f.prefix)]); e && e.Gd && al(g, "gdid", e.Gd); e && e.Cd && al(g, "edid", e.Cd);
            var C = bl(g); pb("https://google.com/pagead/form-data/" + a + "?" + C); d && d()
        })
    }; var fl = /[A-Z]+/, gl = /\s/, hl = function (a) { if (k(a)) { a = Ca(a); var b = a.indexOf("-"); if (!(0 > b)) { var c = a.substring(0, b); if (fl.test(c)) { for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)if (!d[e] || gl.test(d[e]) && ("AW" !== c || 1 !== e)) return; return { id: a, prefix: c, containerId: c + "-" + d[0], J: d } } } } }, jl = function (a) { for (var b = {}, c = 0; c < a.length; ++c) { var d = hl(a[c]); d && (b[d.id] = d) } il(b); var e = []; xa(b, function (f, g) { e.push(g) }); return e };
    function il(a) { var b = [], c; for (c in a) if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.J[1] && b.push(d.containerId) } for (var e = 0; e < b.length; ++e)delete a[b[e]] };
    var ll = function (a, b, c) { if (G[a.functionName]) return b.Ye && J(b.Ye), G[a.functionName]; var d = kl(); G[a.functionName] = d; if (a.xd) for (var e = 0; e < a.xd.length; e++)G[a.xd[e]] = G[a.xd[e]] || kl(); a.Id && void 0 === G[a.Id] && (G[a.Id] = c); fb(Xj("https://", "http://", a.ef), b.Ye, b.cj); return d }, kl = function () { var a = function () { a.q = a.q || []; a.q.push(arguments) }; return a }, ml = { functionName: "_googWcmImpl", Id: "_googWcmAk", ef: "www.gstatic.com/wcm/loader.js" }, nl = { functionName: "_gaPhoneImpl", Id: "ga_wpid", ef: "www.gstatic.com/gaphone/loader.js" },
        ol = { ih: "", ei: "5" }, pl = { functionName: "_googCallTrackingImpl", xd: [nl.functionName, ml.functionName], ef: "www.gstatic.com/call-tracking/call-tracking_" + (ol.ih || ol.ei) + ".js" }, ql = {}, rl = function (a, b, c, d) { T(22); if (c) { d = d || {}; var e = ll(ml, d, a), f = { ak: a, cl: b }; void 0 === d.Ta && (f.autoreplace = c); e(2, d.Ta, f, c, 0, Da(), d.options) } }, sl = function (a, b, c, d) {
            T(21); if (b && c) {
                d = d || {}; for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Da() }, f = 0; f < a.length; f++) {
                    var g = a[f]; ql[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.J.length ? (e.adData = { ak: g.J[0], cl: g.J[1] }, ql[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = { gaWpid: g.containerId }, ql[g.id] = !0))
                } (e.gaData || e.adData) && ll(pl, d)(d.Ta, e, d.options)
            }
        }, tl = function () { var a = !1; return a }, ul = function (a, b) {
            if (a) if (Vj()) { } else {
                if (k(a)) {
                    var c =
                        hl(a); if (!c) return; a = c
                } var d = void 0, e = !1, f = b.getWithConfig(R.Lh); if (f && qa(f)) { d = []; for (var g = 0; g < f.length; g++) { var l = hl(f[g]); l && (d.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (e = !0)) } } if (!d || e) {
                    var m = b.getWithConfig(R.If), n; if (m) {
                        qa(m) ? n = m : n = [m]; var p = b.getWithConfig(R.Gf), q = b.getWithConfig(R.Hf), r = b.getWithConfig(R.Jf), u = b.getWithConfig(R.Kh), t = p || q, v = 1; "UA" !== a.prefix || d || (v = 5); for (var y = 0; y < n.length; y++)if (y < v) if (d) sl(d, n[y], u, { Ta: t, options: r }); else if ("AW" === a.prefix &&
                            a.J[1]) tl() ? sl([a], n[y], u || "US", { Ta: t, options: r }) : rl(a.J[0], a.J[1], n[y], { Ta: t, options: r }); else if ("UA" === a.prefix) if (tl()) sl([a], n[y], u || "US", { Ta: t }); else { var x = a.containerId, w = n[y], C = { Ta: t }; T(23); if (w) { C = C || {}; var z = ll(nl, C, x), B = {}; void 0 !== C.Ta ? B.receiver = C.Ta : B.replace = w; B.ga_wpid = x; B.destination = w; z(2, Da(), B) } }
                    }
                }
            }
        };
    var wl = function () { var a = U.floc; if (a) { var b = a.ts, c = a.floc; if (b && c && 1E3 > A() - b) return Promise.resolve(c) } var d = void 0; try { d = Promise.race([H.interestCohort().then(function (e) { U.floc = { ts: A(), floc: e }; return e }), new Promise(function (e) { G.setTimeout(function () { return e() }, vl) })]).catch(function () { }) } catch (e) { return } return d }, yl = function () { if (!G.Promise) return !1; oa(H.interestCohort) || xl || (xl = !0, xk("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9")); return oa(H.interestCohort) }, xl = !1, vl = Number("200");
    var Al = function (a, b) { var c = a.Hg, d = a.ah; a.zd && (Gg(c[R.Mb], !!c[R.M]) && Zg(zl, b), Wg(b), bh(zl, b), qh(b)); c[R.M] && ah(zl, c[R.M], c[R.xc], !!c[R.Nb], b.prefix); d && dh(["aw", "dc", "gb"]) }, Bl = function (a, b, c, d) { var e = a.dh, f = a.callback, g = a.Jg; if ("function" === typeof f) if (e === R.Xd && void 0 === g) { var l = d(b.prefix, c); 0 === l.length ? f(void 0) : 1 === l.length ? f(l[0]) : f(l) } else e === R.zh ? (T(65), Rf(b, !1), f(Mf[Of(b.prefix)])) : f(g) }, zl = ["aw", "dc", "gb"]; var Cl = !1; function Dl() { if (oa(Za.joinAdInterestGroup)) return !0; Cl || (xk(''), Cl = !0); return oa(Za.joinAdInterestGroup) }
    function El(a, b) { var c = void 0; try { c = H.querySelector('iframe[data-tagging-id="' + b + '"]') } catch (e) { } if (c) { var d = Number(c.dataset.loadTime); if (d && 6E4 > A() - d) { Pc("TAGGING", 9); return } } else try { if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) { Pc("TAGGING", 10); return } } catch (e) { } hb(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: A() }, c) };
    var Fl = function (a, b, c, d, e) { var f; if (f = !b && !a.m) { var g; if (g = !a.isGtmEvent) { var l = a.s.remoteConfig[R.Pb]; g = l ? "auto_detect" === l.mode || "selectors" === l.mode || "code" === l.mode : !1 } f = g } if (f) { var m = a.H(R.ya); if (null !== m) { var n; m && vb(m) ? n = m : n = gf(a.getRemoteConfig(R.Pb)); n && dl(a.I, n, { ub: e, Oa: c }, void 0, d) } } }, Gl = function (a, b) { },
        Hl = function (a, b) { a.la("google_gtm_url_processor", function (c) { b && (c = vh(c)); var d = c; return c = d }) }, Il = function (a, b) {
            a.Tb("gdpr_consent",
                Qk()); a.Tb("gdpr", Rk()); id() && a.m && (a.P("gcs", yd()), jd() && a.P("gcd", "G1" + qd(gd)), b && a.P("gcu", "1"))
        }, Jl = function (a, b) { var c; if (!(c = b)) if ("false" !== Se.hh && Xe) if (Ye) c = !0; else { var d = Ae("AW-" + a.I); c = !!d && !!d.preAutoPii } else c = !1; if (c) { var e = A(), f = df(); if (0 !== f.elements.length) { for (var g = [], l = [], m = [], n = 0; n < f.elements.length; ++n) { var p = f.elements[n]; g.push(p.querySelector); var q = p.tagName + ":" + p.isVisible + ":" + p.Va.length + ":" + $e.test(p.Va); l.push(q); } var r = A(); a.P("ec_sel", g.join(",")); a.P("ec_meta", l.join(",")); a.P("ec_lat", String(r - e)); a.P("ec_s", f.status); } } }, Kl = function (a) {
            if (!a.m) a.H(R.X) && a.la("google_gtag_event_data", { items: a.H(R.X) }); else if (a.eventName == R.oa) {
                a.Gc({
                    google_conversion_merchant_id: a.H(R.ce), google_basket_feed_country: a.H(R.ae),
                    google_basket_feed_language: a.H(R.be), google_basket_discount: a.H(R.$d), google_basket_transaction_type: a.eventName, google_disable_merchant_reported_conversions: !0 === a.H(R.vf)
                }); Vj() && a.la("google_disable_merchant_reported_conversions", !0); var b; var c = a.H(R.X); if (c) { for (var d = [], e = 0; e < c.length; ++e) { var f = c[e]; f && d.push({ item_id: f.id, quantity: f.quantity, value: f.price, start_date: f.start_date, end_date: f.end_date }) } b = d } else b = void 0; var g = b; g && a.la("google_conversion_items", g)
            }
        }, Ll = function (a) {
            var b; var c =
                {}; a.isGtmEvent ? !a.m && a.eventName && (c.event = a.eventName) : c.event = a.eventName; var d = a.s.eventModel; if (d) { P(d, c); for (var e in c) c.hasOwnProperty(e) && R.jf[e.split(".")[0]] && delete c[e]; b = c } else b = null; var f = b; f && a.la("google_custom_params", f)
        }, Ml = function (a) { Vj() && (a.la("opt_image_generator", function () { return new Image }), a.la("google_enable_display_cookie_match", !1)) }, Nl = function (a) {
            var b, c = !1; c = !0 === G._gtmpcm ? !0 : sh("14.1.1");
            (b = c) && a.Ub("apcm"); if (!a.isGtmEvent) {
                var d = wh(); 0 === d ? a.Tb("dg",
                    "c") : 1 === d && a.Tb("dg", "e")
            }
        }, Ol = function (a, b) { var c = Sj(a, "/pagead/conversion_async.js"); if (c) return c; var d = Xj("https://", "http://", "www.googleadservices.com"), e = !b.isGtmEvent && 1 === wh(); if (xh() || e) d = "https://www.google.com"; return d + "/pagead/conversion_async.js" }, Pl = !1, Ql = !1; var Rl = !1;
    var Sl = !1; var Tl = [], Ul = function (a) { var b = G.google_trackConversion, c = a.o.gtm_onFailure; "function" == typeof b ? b(a.o) || c() : c() }, Vl = function () { for (; 0 < Tl.length;)Ul(Tl.shift()) }, Wl = function (a, b) {
        var c = Pl; Ql && (c = b.getContainerTypeLoaded("AW")); if (!c) {
            Pl = !0; vj(); var d = function () { Ql && b.setContainerTypeLoaded("AW", !0); Vl(); Tl = { push: Ul } }; Vj() ? d() : fb(a, d, function () {
                Vl(); Pl = !1; Ql && b.setContainerTypeLoaded("AW",
                    !1)
            })
        }
    }, Xl = function (a, b, c) { var d = hl(a); !d && c.isGtmEvent && (d = this.fj(a)); this.O = a; this.I = d.J[0] || ""; this.V = d.containerId === d.id; this.C = d.J[1]; this.m = void 0 !== this.C; this.eventName = b; this.isGtmEvent = c.isGtmEvent; this.s = c; this.o = { google_conversion_id: this.I, google_conversion_label: this.C, google_conversion_format: "3", google_conversion_color: "ffffff", google_conversion_domain: "", google_gtm: sk() } }; h = Xl.prototype; h.fj = function (a) {
        var b = a.indexOf("/"), c = 3 <= b, d = a.substring(3, c ? b : a.length); return {
            id: a, prefix: "AW",
            containerId: "AW-" + d, J: [d, c ? a.substring(b + 1) : void 0]
        }
    }; h.la = function (a, b) { this.o[a] = b }; h.sj = function () { delete this.o.google_transport_url }; h.Gc = function (a) { for (var b in a) a.hasOwnProperty(b) && (this.o[b] = a[b]) }; h.P = function (a, b) { void 0 != b && "" !== b && (this.o.google_additional_conversion_params = this.o.google_additional_conversion_params || {}, this.o.google_additional_conversion_params[a] = b) }; h.Tb = function (a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_params = this.o.google_additional_params || {}, this.o.google_additional_params[a] =
            b)
    }; h.Ub = function (a) { this.o.google_gtm_experiments = this.o.google_gtm_experiments || {}; this.o.google_gtm_experiments[a] = !0 }; h.H = function (a) { return this.s.getWithConfig(a) }; h.getRemoteConfig = function (a) { return this.s.remoteConfig[a] }; var $l = function (a, b, c, d) {
        function e(F, M) {
            function I() { Tl.push(F); Ql && d.getContainerTypeLoaded("AW") && Vl() } var N = []; if (M) { F.m && m && (Rf(C), F.P("auid", Mf[Of(n)])); var K = (g(R.ie) || {})[F.C]; Jl(F, th(K)); var V = !0 === g(R.$c) || K; if (F.m && V && (!Sl || !rh())) { var S = uh(K); S && N.push(S.then(function (Q) { F.P("em", Q.Kd); F.P("ec_mode", Q.vg) })) } } if (N.length) try {
                Promise.all(N).then(function () { I() });
                return
            } catch (Q) { } I()
        } var f = new Xl(a, b, d), g = function (F) { return d.getWithConfig(F) }, l = void 0 != g(R.aa) && !1 !== g(R.aa), m = !1 !== g(R.sa), n = g(R.Ja) || g(R.Ca), p = g(R.ja), q = g(R.va), r = g(R.Ka), u = {}; if (!Rl) { var t = d.getMergedValues(R.T); u.sg = Ma(vb(t) ? t : {}) } var v = d.getMergedValues(R.T, 1), y = d.getMergedValues(R.T, 2); u.Gd = Ma(vb(v) ? v : {}, "."); u.Cd = Ma(vb(y) ? y : {}, "."); var x = g(R.xa), w = Ol(x, f); Wl(w, d); var C = { prefix: n, domain: p, zb: q, flags: r }, z = b == R.Ba; if (z && Zl(f, m, C, l, u), b === R.Ia) {
            var B = {}; B.callback =
                f.H(R.ab); var D = f.H(R.Ra); B.dh = D; B.Jg = f.H(String(D)); Bl(B, C, l, mh); return
        } var E = !1 === g(R.ob) || !1 === g(R.wa); if (!z || !f.m && !E) if (!0 === g(R.Zd) && (f.m = !1), !1 !== g(R.W) || f.m) {
            f.Gc({ google_remarketing_only: !f.m, google_conversion_language: f.H(R.eb), google_conversion_value: f.H(R.fa), google_conversion_currency: f.H(R.ca), google_conversion_order_id: f.H(R.fb), google_user_id: f.H(R.Da), google_conversion_page_url: f.H(R.Sa), google_conversion_referrer_url: f.H(R.La) }); f.Gc({
                onload_callback: f.s.onSuccess,
                gtm_onFailure: f.s.onFailure
            }); Nl(f); f.m && f.la("google_transport_url", Rj(f.H(R.xa), "/")); f.la("google_restricted_data_processing", f.H(R.zc)); Ml(f); !1 === f.H(R.W) && f.la("google_allow_ad_personalization_signals", !1); m ? f.Gc({ google_gcl_cookie_prefix: C.prefix, google_gcl_cookie_domain: C.domain, google_gcl_cookie_max_age_seconds: C.zb, google_gcl_cookie_flags: C.flags }) : f.la("google_read_gcl_cookie_opt_out", !0); Ll(f); Kl(f); "1" === xg(!1)._up && f.P("gtm_up", "1"); f.m && (f.P("vdnc", f.H(R.pe)), f.P("vdltv", f.H(R.de)));
            Il(f); f.m && (f.P("delopc", f.H(R.jd)), f.P("oedeld", f.H(R.je)), f.P("delc", f.H(R.ad)), f.P("shf", f.H(R.he)), f.P("iedeld", yh(f.H(R.X)))); Rl || f.P("did", u.sg), f.P("gdid", u.Gd), f.P("edid", u.Cd); Hl(f, l); Gl(f, C); Fl(f, z, l, u, C); id() ? Ad(function () {
                Il(f); var F = xd(R.D); if (f.m) {
                    var M = !1; M = !0;
                    F || x || !l && !M || f.la("google_transport_url", "https://pagead2.googlesyndication.com/"); e(f, F)
                } else if (F) { e(f, F); return } F || zd(function () { var I = new Xl(a, f.eventName, d); I.m = f.m; I.Gc(P(f.o)); Hl(I, l); !x && I.o.google_transport_url && I.sj(); Il(I, !0); e(I, !0) }, R.D)
            }, [R.D]) : e(f, !0)
        }
    }; var Zl = function (a, b, c, d, e) {
        var f = a.H(R.Kb), g = a.H(R.ka) || {}, l = a.H(R.hb); Al({ zd: b, wi: f, Hg: g, ah: l }, c); ul(a.O, a.s); var m = { Ie: !1, Oa: d, O: a.O, eventId: a.s.eventId, ub: b ? c : void 0, Jd: b, Ad: "" }; Rl ? m.Ad = void 0 : m.Ad =
            e.sg || ""; m.Wb = e.Gd; m.Vb = e.Cd; Xk(m); !a.isGtmEvent && a.V && 0 < a.s.getEventModelKeys().length && (T(68), 1 < U.configCount && T(69))
    }; var mm = function (a, b, c) { this.s = a; this.eventName = b; this.m = c; this.o = {}; this.metadata = {}; this.I = !1 }, nm = function (a, b, c) { var d = a.m.getWithConfig(b); void 0 !== d ? a.o[b] = d : void 0 !== c && (a.o[b] = c) }, om = function (a, b, c) { var d = Ae(a.s); return d && d.hasOwnProperty(b) ? d[b] : c }; function pm(a) { return { getDestinationId: function () { return a.s }, getEventName: function () { return a.eventName }, setEventName: function (b) { return void (a.eventName = b) }, getHitData: function (b) { return a.o[b] }, setHitData: function (b, c) { return void (a.o[b] = c) }, setHitDataIfNotDefined: function (b, c) { void 0 === a.o[b] && (a.o[b] = c) }, copyToHitData: function (b, c) { nm(a, b, c) }, getMetadata: function (b) { return a.metadata[b] }, setMetadata: function (b, c) { return void (a.metadata[b] = c) }, abort: function () { return void (a.I = !0) }, getProcessedEvent: function () { return a } } }
    ; var Nm = function () { var a = !0; Sk(7) && Sk(9) && Sk(10) || (a = !1); return a }, Om = function () { var a = !0; Sk(3) && Sk(4) || (a = !1); return a }; var In = !1; var Jn = null, Kn = !1; function Ln(a) { return Kn && !a ? Jn = Jn || new Mn : U.gcq = U.gcq || new Mn }
    var Nn = function (a, b, c) { Ln().register(a, b, c) }, On = function (a, b, c, d) { Ln().push("event", [b, a], c, d) }, Pn = function (a, b) { Ln().push("config", [a], b) }, Qn = function (a, b, c, d) { Ln().push("get", [a, b], c, d) }, Rn = {}, Sn = function () { this.status = 1; this.containerConfig = {}; this.targetConfig = {}; this.remoteConfig = {}; this.o = {}; this.s = null; this.claimed = this.m = !1 }, Tn = function (a, b, c, d, e) { this.type = a; this.s = b; this.O = c || ""; this.m = d; this.o = e }, Mn = function () { this.o = {}; this.s = {}; this.m = []; this.C = { AW: !1, UA: !1 } }, Un = function (a, b) {
        var c = hl(b);
        return a.o[c.containerId] = a.o[c.containerId] || new Sn
    }, Vn = function (a, b, c, d) {
        if (b) {
            var e = hl(b); if (e && 1 === Un(a, b).status) {
                Un(a, b).status = 2; var f = {}; ti && (f.timeoutId = G.setTimeout(function () { T(38); Wh() }, 3E3)); a.push("require", [f], e.containerId); Rn[e.containerId] = A(); if (Vj()) { } else if (Yj) In &&
                    2 === d ? bk(e.containerId, c) : ak(e.containerId, c, !0); else { var l = "/gtag/js?id=" + encodeURIComponent(e.containerId) + "&l=" + Zd.U + "&cx=c"; Uj() && (l += "&sign=" + Zd.Sb); var m = ("http:" != G.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + l), n = Sj(c, l) || m; fb(n) }
            }
        }
    }, Wn = function (a, b, c, d) {
        if (d.O) {
            var e = Un(a, d.O), f = e.s; if (f) {
                var g = P(c), l = P(e.targetConfig[d.O]), m = P(e.containerConfig), n = P(e.remoteConfig), p = P(a.s), q = {};
                try { q = P(qe) } catch (y) { T(72) } var r = te("gtm.uniqueEventId"), u = hl(d.O).prefix, t = Fa(function () { var y = g[R.Lb]; y && J(y) }), v = lk(kk(mk(jk(hk(gk(ik(fk(ek(dk(g), l), m), n), p), q), function () { Gi(r, u, "2"); t() }), function () { Gi(r, u, "3"); t() }), function (y, x) { a.C[y] = x }), function (y) { return a.C[y] });
                try { Gi(r, u, "1"), Qi(d.type, d.O, v); f(d.O, b, d.s, v) } catch (y) { Gi(r, u, "4"); }
            }
        }
    }; h = Mn.prototype;
    h.register = function (a, b, c) { var d = Un(this, a); if (3 !== d.status) { d.s = b; d.status = 3; c && (P(d.remoteConfig, c), d.remoteConfig = c); var e = hl(a), f = Rn[e.containerId]; if (void 0 !== f) { var g = U[e.containerId].bootstrap, l = e.prefix.toUpperCase(); U[e.containerId]._spx && (l = l.toLowerCase()); var m = te("gtm.uniqueEventId"), n = l, p = A() - g; if (ti && !ai[m]) { m !== Xh && (Sh(), Xh = m); var q = n + "." + Math.floor(g - f) + "." + Math.floor(p); hi = hi ? hi + "," + q : "&cl=" + q } delete Rn[e.containerId] } this.flush() } };
    h.notifyContainerLoaded = function (a, b) { var c = this, d = function (f) { if (hl(f)) { var g = Un(c, f); g.status = 3; g.claimed = !0 } }; d(a); for (var e = 0; e < b.length; e++)d(b[e]); this.flush() }; h.push = function (a, b, c, d) { if (void 0 !== c) { if (!hl(c)) return; Vn(this, c, b[0][R.xa] || this.s[R.xa], "event" === a ? 2 : 1); Un(this, c).m && (d = !1) } this.m.push(new Tn(a, Math.floor(A() / 1E3), c, b, d)); d || this.flush() }; h.insert = function (a, b, c) { var d = Math.floor(A() / 1E3); 0 < this.m.length ? this.m.splice(1, 0, new Tn(a, d, c, b, !1)) : this.m.push(new Tn(a, d, c, b, !1)) };
    h.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0]; if (f.o) !f.O || Un(this, f.O).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift(); else {
                var g = void 0; switch (f.type) {
                    case "require": g = Un(this, f.O); if (3 !== g.status && !a) { this.m.push.apply(this.m, c); return } ti && G.clearTimeout(f.m[0].timeoutId); break; case "set": xa(f.m[0], function (r, u) { P(Ka(r, u), b.s) }); break; case "config": g = Un(this, f.O); if (g.claimed) break; e.Pa = {}; xa(f.m[0], function (r) { return function (u, t) { P(Ka(u, t), r.Pa) } }(e)); var l =
                        !!e.Pa[R.ld]; delete e.Pa[R.ld]; var m = hl(f.O), n = m.containerId === m.id; l || (n ? g.containerConfig = {} : g.targetConfig[f.O] = {}); g.m && l || Wn(this, R.Ba, e.Pa, f); g.m = !0; delete e.Pa[R.rb]; n ? P(e.Pa, g.containerConfig) : (P(e.Pa, g.targetConfig[f.O]), T(70)); d = !0; break; case "event": g = Un(this, f.O); if (g.claimed) break; e.Vc = {}; xa(f.m[0], function (r) { return function (u, t) { P(Ka(u, t), r.Vc) } }(e)); Wn(this, f.m[1], e.Vc, f); break; case "get": if (g = Un(this, f.O), !g.claimed) { var p = {}, q = (p[R.Ra] = f.m[0], p[R.ab] = f.m[1], p); Wn(this, R.Ia, q, f) }
                }this.m.shift();
                Xn(this, f)
            } e = { Pa: e.Pa, Vc: e.Vc }
        } this.m.push.apply(this.m, c); d && this.flush()
    }; var Xn = function (a, b) { if ("require" !== b.type) if (b.O) for (var c = a.getCommandListeners(b.O)[b.type] || [], d = 0; d < c.length; d++)c[d](); else for (var e in a.o) if (a.o.hasOwnProperty(e)) { var f = a.o[e]; if (f && f.o) for (var g = f.o[b.type] || [], l = 0; l < g.length; l++)g[l]() } }; Mn.prototype.getRemoteConfig = function (a) { return Un(this, a).remoteConfig }; Mn.prototype.getCommandListeners = function (a) { return Un(this, a).o }; var Yn = !1; var Zn = !1; var $n = function (a, b) { U.addDestinationToContainer ? U.addDestinationToContainer(a, b) : (U.pendingDestinationIds = U.pendingDestinationIds || [], U.pendingDestinationIds.push([a, b])) };
    var ao = {}, bo = {}, co = function (a) { U.addTargetToGroup ? U.addTargetToGroup(a) : (U.pendingDefaultTargets = U.pendingDefaultTargets || [], U.pendingDefaultTargets.push(a)) }, eo = function (a, b) { var c = bo[b] || []; c.push(a); bo[b] = c }, go = function () {
        U.addTargetToGroup = function (e) { fo(e, "default") }; U.addDestinationToContainer = function (e, f) { eo(e, f) }; var a = U.pendingDefaultTargets; delete U.pendingDefaultTargets; if (Array.isArray(a)) for (var b = 0; b < a.length; ++b)fo(a[b], "default"); var c = U.pendingDestinationIds; delete U.pendingDestinationIds;
        if (Array.isArray(c)) for (var d = 0; d < c.length; ++d)eo(c[d][0], c[d][1])
    }, fo = function (a, b) { b = b.toString().split(","); for (var c = 0; c < b.length; c++) { var d = ao[b[c]] || []; ao[b[c]] = d; 0 > d.indexOf(a) && d.push(a) } }, ho = function (a) { xa(ao, function (b, c) { var d = c.indexOf(a); 0 <= d && c.splice(d, 1) }) }; var ro = function (a) { var b = U.zones; return b ? b.getIsAllowedFn(Gh.F, a) : function () { return !0 } }, so = function (a) { var b = U.zones; return b ? b.isActive(Gh.F, a) : !0 }; var vo = function (a, b) {
        for (var c = [], d = 0; d < Yb.length; d++)if (a[d]) { var e = Yb[d]; var f = tj(b.tb); try { var g = Lj(d, { onSuccess: f, onFailure: f, terminate: f }, b, d); if (g) { var l = c, m = l.push, n = d, p = e["function"]; if (!p) throw "Error: No function name given for function call."; var q = ac[p]; m.call(l, { Xg: n, Og: q ? q.priorityOverride || 0 : 0, execute: g }) } else to(d, b), f() } catch (u) { f() } } c.sort(uo); for (var r = 0; r < c.length; r++)c[r].execute(); return 0 <
            c.length
    };
    function uo(a, b) { var c, d = b.Og, e = a.Og; c = d > e ? 1 : d < e ? -1 : 0; var f; if (0 !== c) f = c; else { var g = a.Xg, l = b.Xg; f = g > l ? 1 : g < l ? -1 : 0 } return f } function to(a, b) { if (!ti) return; var c = function (d) { var e = b.Te(Yb[d]) ? "3" : "4", f = fc(Yb[d][xb.Yf], b, []); f && f.length && c(f[0].index); zi(b.id, Yb[d], e); var g = fc(Yb[d][xb.ag], b, []); g && g.length && c(g[0].index) }; c(a); } var yo = !1, wo;
    var Do = function (a) {
        var b = A(), c = a["gtm.uniqueEventId"], d = a.event; if ("gtm.js" === d) { if (yo) return !1; yo = !0; } var g, l = !1; if (so(c)) g = ro(c); else { if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1; l = !0; g = ro(Number.MAX_SAFE_INTEGER) }
        yi(c, d); var m = a.eventCallback, n = a.eventTimeout, p = m; var q = { id: c, name: d, Te: Fh(g), Bj: [], Ig: function () { T(6) }, og: zo(), pg: Ao(c), tb: new Zi(p, n) }, r = kc(q); l && (r =
            Bo(r)); var u = vo(r, q), t = !1; uj(q.tb);
        "gtm.js" !== d && "gtm.sync" !== d || Fj(Gh.F); return Co(r, u) || t
    }; function Ao(a) { return function (b) { ti && (wb(b) || Hi(a, "input", b)) } } function zo() { var a = {}; a.event = xe("event", 1); a.ecommerce = xe("ecommerce", 1); a.gtm = xe("gtm"); a.eventModel = xe("eventModel"); return a } function Bo(a) { for (var b = [], c = 0; c < a.length; c++)a[c] && (ae[String(Yb[c][xb.sb])] && (b[c] = !0), void 0 !== Yb[c][xb.di] && (b[c] = !0)); return b }
    function Co(a, b) { if (!b) return b; for (var c = 0; c < a.length; c++)if (a[c] && Yb[c] && !be[String(Yb[c][xb.sb])]) return !0; return !1 } var Eo = "HA GF G UA AW DC".split(" "), Fo = !1, Go = !1, Ho = 0; function Io(a) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: ke() }); return a["gtm.uniqueEventId"] } function Jo() { if (Kn) return !1; Fo || U.gtagRegistered || (Fo = U.gtagRegistered = !0, go()); return Fo }
    var Ko = {
        config: function (a) { Io(a); if (2 > a.length || !k(a[1])) return; var b = {}; if (2 < a.length) { if (void 0 != a[2] && !vb(a[2]) || 3 < a.length) return; b = a[2] } var c = hl(a[1]); if (!c || Kn && c.id !== Gh.F) return; var d = Jo() || Kn; ho(c.id); fo(c.id, b[R.ne] || "default"); delete b[R.ne]; Go || T(43); if (d && -1 !== Eo.indexOf(c.prefix)) { "G" === c.prefix && (b[R.rb] = !0); delete b[R.Lb]; c.id === c.containerId && (U.configCount = ++Ho); Pn(b, c.id); return } we("gtag.targets." + c.id, void 0); we("gtag.targets." + c.id, P(b)); },
        consent: function (a) { if (3 === a.length) { T(39); var b = { eventId: Io(a), priorityId: a["gtm.priorityId"] }, c = a[1]; "default" === c ? ud(a[2]) : "update" === c && wd(a[2], b) } }, event: function (a) {
            var b = a[1]; if (!(2 > a.length) && k(b)) {
                var c; if (2 < a.length) { if (!vb(a[2]) && void 0 != a[2] || 3 < a.length) return; c = a[2] } var d = c, e = {}, f = (e.event = b, e); d && (f.eventModel = P(d), d[R.Lb] && (f.eventCallback = d[R.Lb]), d[R.dd] && (f.eventTimeout = d[R.dd])); var g = Io(a), l = a["gtm.priorityId"]; f["gtm.uniqueEventId"] = g; l && (f["gtm.priorityId"] = l);
                if ("optimize.callback" === b) return f.eventModel = f.eventModel || {}, f; var m; var n = c && c[R.Ob]; void 0 === n && (n = te(R.Ob, 2), void 0 === n && (n = "default")); if (k(n) || qa(n)) {
                    for (var p = n.toString().replace(/\s+/g, "").split(","), q = [], r = 0; r < p.length; r++)if (0 <= p[r].indexOf("-")) Yn && Zn ? -1 < (bo[Gh.F] || []).indexOf(p[r]) && q.push(p[r]) : q.push(p[r]); else {
                        var u = ao[p[r]] || []; if (Yn) if (Zn) { if (-1 < u.indexOf(Gh.F)) { var t = bo[Gh.F]; t && t.length && (q = q.concat(t)) } } else for (var v = 0; v < u.length; v++) { var y = bo[u[v]]; y && y.length && (q = q.concat(y)) } else u &&
                            u.length && (q = q.concat(u))
                    } m = jl(q)
                } else m = void 0; var x = m; if (!x) return; for (var w = Jo() || Kn, C = [], z = 0; w && z < x.length; z++) { var B = x[z]; if (-1 !== Eo.indexOf(B.prefix)) { var D = P(c); "G" === B.prefix && (D[R.rb] = !0); delete D[R.Lb]; On(b, D, B.id) } C.push(B.id) } f.eventModel = f.eventModel || {}; 0 < x.length ? f.eventModel[R.Ob] = C.join() : delete f.eventModel[R.Ob]; Go || T(43); return f
            }
        }, get: function (a) {
            T(53); if (4 !== a.length || !k(a[1]) || !k(a[2]) || !oa(a[3])) return; var b = hl(a[1]),
                c = String(a[2]), d = a[3]; if (!b) return; Go || T(43); if (Kn) { if (-1 === Ih().indexOf(b.id)) return } else if (!Jo()) return; if (-1 === Eo.indexOf(b.prefix)) return; Io(a); var e = {}; od(P((e[R.Ra] = c, e[R.ab] = d, e))); Qn(c, function (f) { J(function () { return d(f) }) }, b.id);
        }, js: function (a) { if (2 == a.length && a[1].getTime) { Go = !0; Jo(); var b = {}; return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Io(a), b } }, policy: function () { }, set: function (a) {
            var b; 2 == a.length && vb(a[1]) ? b = P(a[1]) : 3 == a.length &&
                k(a[1]) && (b = {}, vb(a[2]) || qa(a[2]) ? b[a[1]] = P(a[2]) : b[a[1]] = a[2]); if (b) { var c = Io(a), d = a["gtm.priorityId"]; P(b); if (Jo() || Kn) { var e = P(b); Ln().push("set", [e]) } b["gtm.uniqueEventId"] = c; d && (b["gtm.priorityId"] = d); b._clear = !0; return b }
        }
    }, Lo = { policy: !0 }; var fp = function (a) { if (Mo(a)) return a; this.m = a }; fp.prototype.getUntrustedMessageValue = function () { return this.m }; var Mo = function (a) { return !a || "object" !== tb(a) || vb(a) ? !1 : "getUntrustedMessageValue" in a }, gp = function (a) { if (Mo(a)) return a.getUntrustedMessageValue() }; fp.prototype.getUntrustedMessageValue = fp.prototype.getUntrustedMessageValue;
    var ip = function () { var a = U.mb; a || (a = new hp, U.mb = a); return a }, hp = function () { this.m = []; this.o = [] }; hp.prototype.push = function (a, b, c) { var d = this.m.length + 1; Mo(a) && (a = gp(a) || a); a["gtm.uniqueEventId"] = b; a["gtm.priorityId"] = d; a = new fp(a); var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d }; this.m.push(e); for (var f = 0; f < this.o.length; f++)try { this.o[f](e) } catch (g) { } }; hp.prototype.listen = function (a) { this.o.push(a) }; hp.prototype.get = function () {
        for (var a = {}, b = 0; b < this.m.length; b++) {
            var c = this.m[b],
            d = a[c.notBeforeEventId]; d || (d = [], a[c.notBeforeEventId] = d); d.push(c)
        } return a
    }; var kp = function () { var a = jp; ip().listen(a) }, lp = function (a, b) { return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId }; var mp = function (a) { var b = G[Zd.U].hide; if (b && void 0 !== b[a] && b.end) { b[a] = !1; var c = !0, d; for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) { c = !1; break } c && (b.end(), b.end = null) } }, np = function (a) { var b = G[Zd.U], c = b && b.hide; c && c.end && (c[a] = !0) }; var op = !1, pp = []; function qp() { if (!op) { op = !0; for (var a = 0; a < pp.length; a++)J(pp[a]) } } var rp = function (a) { op ? J(a) : pp.push(a) }; var Hp = 0, Ip = {}, Jp = [], Kp = [], Lp = !1, Mp = !1, Np = function (a) { return G[Zd.U].push(a) }, Op = function (a, b) { var c = U[Zd.U], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0; b && (g = G.setTimeout(function () { f || (f = !0, a()); g = void 0 }, b)); return function () { ++e === d && (g && (G.clearTimeout(g), g = void 0), f || (a(), f = !0)) } };
    function Pp(a) { var b = a._clear; xa(a, function (d, e) { "_clear" !== d && (b && we(d, void 0), we(d, e)) }); ge || (ge = a["gtm.start"]); var c = a["gtm.uniqueEventId"]; if (!a.event) return !1; c || (c = ke(), a["gtm.uniqueEventId"] = c, we("gtm.uniqueEventId", c)); return Do(a) } function Qp(a) { if (null == a || "object" !== typeof a) return !1; if (a.event) return !0; if (ya(a)) { var b = a[0]; if ("config" === b || "event" === b || "js" === b) return !0 } return !1 }
    function Rp() {
        for (var a = !1; !Mp && (0 < Jp.length || 0 < Kp.length);) {
            if (!Lp && Qp(Jp[0])) { var b = {}, c = (b.event = "gtm.init_consent", b), d = {}, e = (d.event = "gtm.init", d), f = Jp[0]["gtm.uniqueEventId"]; f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1); Jp.unshift(c, e); Lp = !0; } Mp = !0; delete qe.eventModel; se(); var n = null, p = void 0; if (Kp.length) { var q = Kp.shift(); n = q.message; p = q.debugContext } null ==
                n && (n = Jp.shift()); if (null != n) {
                    var r = Mo(n); if (r) { n = gp(n); for (var u = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], t = 0; t < u.length; t++) { var v = u[t], y = te(v, 1); if (qa(y) || vb(y)) y = P(y); re[v] = y } } try {
                        if (oa(n)) try { n.call(ue) } catch (I) { } else if (qa(n)) { var x = n; if (k(x[0])) { var w = x[0].split("."), C = w.pop(), z = x.slice(1), B = te(w.join("."), 2); if (null != B) try { B[C].apply(B, z) } catch (I) { } } } else {
                            if (ya(n)) {
                                a: {
                                    var D = n, E = p; if (D.length && k(D[0])) {
                                        var F = Ko[D[0]]; if (F && (!r || !Lo[D[0]])) {
                                            n = F(D,
                                                E); break a
                                        }
                                    } n = void 0
                                } if (!n) { Mp = !1; continue }
                            } a = Pp(n) || a; if (Qp(n)) { var M = n["gtm.uniqueEventId"]; void 0 !== M && (Sp(M), Hp = M) }
                        }
                    } finally { r && se(!0) }
                } Mp = !1
        } return !a
    }
    function Tp() { var b = Rp(); try { mp(Gh.F) } catch (c) { } return b }
    var Sp = function (a) { for (var b = Ip[String(a)] || [], c = 0; c < b.length; c++)Kp.push(b[c]); b.length && Kp.sort(lp); delete Ip[String(a)] }, jp = function (a) { var b = a.notBeforeEventId; Hp < b ? (Ip[String(b)] = Ip[String(b)] || [], Ip[String(b)].push(a)) : (Kp.push(a), Kp.sort(lp), J(function () { Mp || Rp() })) };
    var Vp = function () {
        var a = ab(Zd.U, []), b = ab("google_tag_manager", {}); Ip = ip().get(), Sp(0), kp(); b = b[Zd.U] = b[Zd.U] || {}; Xi(function () { if (!b.gtmDom) { b.gtmDom = !0; var e = {}; a.push((e.event = "gtm.dom", e)) } }); rp(function () { if (!b.gtmLoad) { b.gtmLoad = !0; var e = {}; a.push((e.event = "gtm.load", e)) } }); b.subscribers = (b.subscribers || 0) + 1; var c = a.push; a.push = function () {
            var e; if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                e =
                []; for (var f = 0; f < arguments.length; f++)e[f] = new fp(arguments[f])
            } else e = [].slice.call(arguments, 0); Jp.push.apply(Jp, e); var g = c.apply(a, e); if (300 < this.length) for (T(4); 300 < this.length;)this.shift(); var l = "boolean" !== typeof g || g; return Rp() && l
        }; var d = a.slice(0); Jp.push.apply(Jp, d); if (Up()) {
            J(Tp)
        }
    }, Up = function () { var a = !0; return a }; function Wp(a) { if (null == a || 0 === a.length) return !1; var b = Number(a), c = A(); return b < c + 3E5 && b > c - 9E5 }; var Xp = {}; Xp.od = new String("undefined"); var xq = G.clearTimeout, yq = G.setTimeout, W = function (a, b, c, d) { if (Vj()) { b && J(b) } else return fb(a, b, c, d) }, zq = function () { return new Date }, Aq = function () { return G.location.href }, Bq = function (a) { return Oe(Qe(a), "fragment") }, Cq = function (a) { return Pe(Qe(a)) }, Dq = function (a, b) { return te(a, b || 2) }, Eq = function (a, b, c) { var d; b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Np(a)) : d = Np(a); return d }, Fq = function (a, b) { G[a] = b }, X = function (a, b,
        c) { b && (void 0 === G[a] || c && !G[a]) && (G[a] = b); return G[a] }, Gq = function (a, b, c) { return sf(a, b, void 0 === c ? !0 : !!c) }, Hq = function (a, b, c) { return 0 === Bf(a, b, c) }, Iq = function (a, b) { if (Vj()) { b && J(b) } else hb(a, b) }, Jq = function (a) { return !!dq(a, "init", !1) }, Kq = function (a) { bq(a, "init", !0) }, Lq = function (a, b, c) { ti && (wb(a) || Hi(c, b, a)) };

    var ir = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"]; function jr(a, b) { a = String(a); b = String(b); var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) === c } var kr = new va; function lr(a, b, c) { var d = c ? "i" : void 0; try { var e = String(b) + d, f = kr.get(e); f || (f = new RegExp(b, d), kr.set(e, f)); return f.test(a) } catch (g) { return !1 } }
    function mr(a, b) { function c(g) { var l = Qe(g), m = Oe(l, "protocol"), n = Oe(l, "host", !0), p = Oe(l, "port"), q = Oe(l, "path").toLowerCase().replace(/\/$/, ""); if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default"; return [m, n, p, q] } for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)if (d[f] !== e[f]) return !1; return !0 }
    function nr(a) { return or(a) ? 1 : 0 }
    function or(a) {
        var b = a.arg0, c = a.arg1; if (a.any_of && Array.isArray(c)) { for (var d = 0; d < c.length; d++) { var e = P(a, {}); P({ arg1: c[d], any_of: void 0 }, e); if (nr(e)) return !0 } return !1 } switch (a["function"]) {
            case "_cn": return 0 <= String(b).indexOf(String(c)); case "_css": var f; a: { if (b) try { for (var g = 0; g < ir.length; g++) { var l = ir[g]; if (b[l]) { f = b[l](c); break a } } } catch (m) { } f = !1 } return f; case "_ew": return jr(b, c); case "_eq": return String(b) === String(c); case "_ge": return Number(b) >= Number(c); case "_gt": return Number(b) > Number(c);
            case "_lc": return 0 <= String(b).split(",").indexOf(String(c)); case "_le": return Number(b) <= Number(c); case "_lt": return Number(b) < Number(c); case "_re": return lr(b, c, a.ignore_case); case "_sw": return 0 === String(b).indexOf(String(c)); case "_um": return mr(b, c)
        }return !1
    }; Object.freeze({ dl: 1, id: 1 }); Object.freeze(["config", "event", "get", "set"]); var tr = encodeURI, Y = encodeURIComponent, ur = ib; var vr = function (a, b) { if (!a) return !1; var c = Oe(Qe(a), "host"); if (!c) return !1; for (var d = 0; b && d < b.length; d++) { var e = b[d] && b[d].toLowerCase(); if (e) { var f = c.length - e.length; 0 < f && "." != e.charAt(0) && (f--, e = "." + e); if (0 <= f && c.indexOf(e, f) == f) return !0 } } return !1 };
    var wr = function (a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++)a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null }; function Us() { return G.gaGlobal = G.gaGlobal || {} } var Vs = function () { var a = Us(); a.hid = a.hid || ta(); return a.hid }, Ws = function (a, b) { var c = Us(); if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b }; var Ct = function () { if (oa(G.__uspapi)) { var a = ""; try { G.__uspapi("getUSPData", 1, function (b, c) { if (c && b) { var d = b.uspString; d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d) } }) } catch (b) { } return a } }; var iu = window, ju = document, ku = function (a) { var b = iu._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === iu["ga-disable-" + a]) return !0; try { var c = iu.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) { } for (var d = mf("AMP_TOKEN", String(ju.cookie), !0), e = 0; e < d.length; e++)if ("$OPT_OUT" == d[e]) return !0; return ju.getElementById("__gaOptOutExtension") ? !0 : !1 }; var lu = {}; function vu(a) { delete a.eventModel[R.rb]; Cu(a.eventModel) } var Cu = function (a) { xa(a, function (c) { "_" === c.charAt(0) && delete a[c] }); var b = a[R.Ea] || {}; xa(b, function (c) { "_" === c.charAt(0) && delete b[c] }) }; var Su = function (a, b, c) { On(b, c, a) }, Tu = function (a, b, c) { On(b, c, a, !0) }, Vu = function (a, b) { }; function Uu(a, b) { } var Z = { g: {} };




    Z.g.e = ["google"], function () { (function (a) { Z.__e = a; Z.__e.h = "e"; Z.__e.isVendorTemplate = !0; Z.__e.priorityOverride = 0 })(function (a) { return String(a.vtp_gtmCachedValues.event) }) }();

    Z.g.v = ["google"], function () { (function (a) { Z.__v = a; Z.__v.h = "v"; Z.__v.isVendorTemplate = !0; Z.__v.priorityOverride = 0 })(function (a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = Dq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue; Lq(d, "v", a.vtp_gtmEventId); return d }) }();
    Z.g.rep = ["google"], function () {
        var a = !1; (function (b) { Z.__rep = b; Z.__rep.h = "rep"; Z.__rep.isVendorTemplate = !0; Z.__rep.priorityOverride = 0 })(function (b) {
            var c = hl(b.vtp_containerId), d; switch (c.prefix) { case "AW": d = $l; break; case "DC": d = lm; break; case "GF": d = Em; break; case "HA": d = Jm; break; case "UA": d = hn; break; default: J(b.vtp_gtmOnFailure); return }J(b.vtp_gtmOnSuccess); if (a) {
                var e = c.containerId,
                f = bo[e] || []; Ln(!0).notifyContainerLoaded(e, f)
            } Nn(b.vtp_containerId, d, b.vtp_remoteConfig || {})
        });
    }();

    Z.g.cid = ["google"], function () { (function (a) { Z.__cid = a; Z.__cid.h = "cid"; Z.__cid.isVendorTemplate = !0; Z.__cid.priorityOverride = 0 })(function () { return Gh.F }) }();





    Z.g.get = ["google"], function () { (function (a) { Z.__get = a; Z.__get.h = "get"; Z.__get.isVendorTemplate = !0; Z.__get.priorityOverride = 0 })(function (a) { var b = a.vtp_settings; (a.vtp_deferrable ? Tu : Su)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {}); a.vtp_gtmOnSuccess() }) }();






    // Copyright 2012 Google Inc. All rights reserved.
    (function () {

        var data = {
            "resource": {
                "version": "1",

                "macros": [{ "function": "__e" }, { "function": "__cid" }],
                "tags": [{ "function": "__rep", "once_per_event": true, "vtp_containerId": ["macro", 1], "tag_id": 1 }],
                "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }],
                "rules": [[["if", 0], ["add", 0]]]
            },
            "runtime": []




        };


        /*
        
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var h, aa = function (a) { var b = 0; return function () { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }, ba = "function" == typeof Object.create ? Object.create : function (a) { var b = function () { }; b.prototype = a; return new b }, ca; if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf; else { var da; a: { var ea = { a: !0 }, fa = {}; try { fa.__proto__ = ea; da = fa.a; break a } catch (a) { } da = !1 } ca = da ? function (a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
        var ha = ca, ia = function (a, b) { a.prototype = ba(b.prototype); a.prototype.constructor = a; if (ha) ha(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c); d && Object.defineProperty(a, c, d) } else a[c] = b[c]; a.Zj = b.prototype }, ja = this || self, ma = function (a) { return a }; var na = function () { }, oa = function (a) { return "function" === typeof a }, k = function (a) { return "string" === typeof a }, pa = function (a) { return "number" === typeof a && !isNaN(a) }, qa = Array.isArray, ra = function (a, b) { if (a && qa(a)) for (var c = 0; c < a.length; c++)if (a[c] && b(a[c])) return a[c] }, ta = function (a, b) { if (!pa(a) || !pa(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) }, wa = function (a, b) { for (var c = new va, d = 0; d < a.length; d++)c.set(a[d], !0); for (var e = 0; e < b.length; e++)if (c.get(b[e])) return !0; return !1 }, xa = function (a,
            b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) }, ya = function (a) { return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")) }, za = function (a) { return Math.round(Number(a)) || 0 }, Aa = function (a) { return "false" === String(a).toLowerCase() ? !1 : !!a }, Ba = function (a) { var b = []; if (qa(a)) for (var c = 0; c < a.length; c++)b.push(String(a[c])); return b }, Ca = function (a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" }, Da = function () { return new Date(Date.now()) },
            A = function () { return Da().getTime() }, va = function () { this.prefix = "gtm."; this.values = {} }; va.prototype.set = function (a, b) { this.values[this.prefix + a] = b }; va.prototype.get = function (a) { return this.values[this.prefix + a] };
        var Ea = function (a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c }, Fa = function (a) { var b = a; return function () { if (b) { var c = b; b = void 0; try { c() } catch (d) { } } } }, Ha = function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }, Ia = function (a) { for (var b in a) if (a.hasOwnProperty(b)) return !0; return !1 }, Ja = function (a, b) { for (var c = [], d = 0; d < a.length; d++)c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c }, Ka = function (a, b) { for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)d = d[e[f]] = {}; d[e[e.length - 1]] = b; return c }, La = /^\w{1,9}$/,
            Ma = function (a, b) { a = a || {}; b = b || ","; var c = []; xa(a, function (d, e) { La.test(d) && e && c.push(d) }); return c.join(b) }; var Na, Oa = function () { if (void 0 === Na) { var a = null, b = ja.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: ma, createScript: ma, createScriptURL: ma }) } catch (c) { ja.console && ja.console.error(c.message) } Na = a } else Na = a } return Na }; var Qa = function (a, b) { this.m = b === Pa ? a : "" }; Qa.prototype.toString = function () { return this.m + "" }; var Pa = {}; var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i; function Sa() { var a = ja.navigator; if (a) { var b = a.userAgent; if (b) return b } return "" } function Ta(a) { return -1 != Sa().indexOf(a) }; var Ua = {}, Va = function (a, b, c) { this.m = c === Ua ? a : "" }; Va.prototype.toString = function () { return this.m.toString() }; var Wa = function (a) { return a instanceof Va && a.constructor === Va ? a.m : "type_error:SafeHtml" }, Xa = function (a) { var b = Oa(), c = b ? b.createHTML(a) : a; return new Va(c, null, Ua) };/*
    
     SPDX-License-Identifier: Apache-2.0
    */
        function Ya(a) { if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript."); if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet."); }; var G = window, H = document, Za = navigator, $a = H.currentScript && H.currentScript.src, ab = function (a, b) { var c = G[a]; G[a] = void 0 === c ? b : c; return G[a] }, bb = function (a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) }, cb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 }, db = { onload: 1, src: 1, width: 1, height: 1, style: 1 }; function eb(a, b, c) { b && xa(b, function (d, e) { d = d.toLowerCase(); c.hasOwnProperty(d) || a.setAttribute(d, e) }) }
        var fb = function (a, b, c, d) {
            var e = H.createElement("script"); eb(e, d, cb); e.type = "text/javascript"; e.async = !0; var f, g = Oa(), l = g ? g.createScriptURL(a) : a; f = new Qa(l, Pa); e.src = f instanceof Qa && f.constructor === Qa ? f.m : "type_error:TrustedResourceUrl"; var m, n, p, q = null == (p = (n = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : p.call(n, "script[nonce]"); (m = q ? q.nonce || q.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", m); bb(e, b); c && (e.onerror = c); var r = H.getElementsByTagName("script")[0] ||
                H.body || H.head; r.parentNode.insertBefore(e, r); return e
        }, gb = function () { if ($a) { var a = $a.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 }, hb = function (a, b, c, d, e) { var f = e, g = !1; f || (f = H.createElement("iframe"), g = !0); eb(f, c, db); d && xa(d, function (m, n) { f.dataset[m] = n }); f.height = "0"; f.width = "0"; f.style.display = "none"; f.style.visibility = "hidden"; if (g) { var l = H.body && H.body.lastChild || H.body || H.head; l.parentNode.insertBefore(f, l) } bb(f, b); void 0 !== a && (f.src = a); return f },
            ib = function (a, b, c) { var d = new Image(1, 1); d.onload = function () { d.onload = null; b && b() }; d.onerror = function () { d.onerror = null; c && c() }; d.src = a; return d }, jb = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) }, kb = function (a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) }, J = function (a) { G.setTimeout(a, 0) }, lb = function (a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null }, mb = function (a) {
                var b =
                    a.innerText || a.textContent || ""; b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")); b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " ")); return b
            }, nb = function (a) { var b = H.createElement("div"), c = b, d = Xa("A<div>" + a + "</div>"); void 0 !== c.tagName && Ya(c); c.innerHTML = Wa(d); b = b.lastChild; for (var e = []; b.firstChild;)e.push(b.removeChild(b.firstChild)); return e }, ob = function (a, b, c) { c = c || 100; for (var d = {}, e = 0; e < b.length; e++)d[b[e]] = !0; for (var f = a, g = 0; f && g <= c; g++) { if (d[String(f.tagName).toLowerCase()]) return f; f = f.parentElement } return null },
            pb = function (a) { var b; try { b = Za.sendBeacon && Za.sendBeacon(a) } catch (c) { } b || ib(a) }, qb = function (a, b) { var c = a[b]; c && "string" === typeof c.animVal && (c = c.animVal); return c }, rb = function (a) { var b = H.featurePolicy; return b && oa(b.allowsFeature) ? b.allowsFeature(a) : !1 };/*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
        var sb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, tb = function (a) { if (null == a) return String(a); var b = sb.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" }, ub = function (a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) }, vb = function (a) {
            if (!a || "object" != tb(a) || a.nodeType || a == a.window) return !1; try { if (a.constructor && !ub(a, "constructor") && !ub(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } for (var b in a); return void 0 ===
                b || ub(a, b)
        }, P = function (a, b) { var c = b || ("array" == tb(a) ? [] : {}), d; for (d in a) if (ub(a, d)) { var e = a[d]; "array" == tb(e) ? ("array" != tb(c[d]) && (c[d] = []), c[d] = P(e, c[d])) : vb(e) ? (vb(c[d]) || (c[d] = {}), c[d] = P(e, c[d])) : c[d] = e } return c }; var wb = function (a) { if (void 0 === a || qa(a) || vb(a)) return !0; switch (typeof a) { case "boolean": case "number": case "string": case "function": return !0 }return !1 }; var xb = function () {
            var a = function (b) { return { toString: function () { return b } } }; return {
                jh: a("consent"), kh: a("consent_always_fire"), nf: a("convert_case_to"), pf: a("convert_false_to"), qf: a("convert_null_to"), rf: a("convert_true_to"), sf: a("convert_undefined_to"), Hj: a("debug_mode_metadata"), sb: a("function"), Th: a("instance_name"), Xh: a("live_only"), Yh: a("malware_disabled"), Zh: a("metadata"), di: a("original_activity_id"), Mj: a("original_vendor_template_id"), Lj: a("once_on_load"), ci: a("once_per_event"), Uf: a("once_per_load"),
                Oj: a("priority_override"), Pj: a("respected_consent_types"), Yf: a("setup_tags"), $f: a("tag_id"), ag: a("teardown_tags")
            }
        }(); var Ub;
        var Vb = [], Wb = [], Xb = [], Yb = [], Zb = [], ac = {}, bc, cc, dc, ec = function (a, b) {
            var c = a["function"], d = b && b.event; if (!c) throw Error("Error: No function name given for function call."); var e = ac[c], f = {}, g; for (g in a) if (a.hasOwnProperty(g)) if (0 === g.indexOf("vtp_")) e && d && d.pg && d.pg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]; else if (g === xb.kh.toString() && a[g]) { } e && d && d.og && (f.vtp_gtmCachedValues = d.og);
            return void 0 !== e ? e(f) : Ub(c, f, b)
        }, gc = function (a, b, c) { c = c || []; var d = {}, e; for (e in a) a.hasOwnProperty(e) && (d[e] = fc(a[e], b, c)); return d }, fc = function (a, b, c) {
            if (qa(a)) {
                var d; switch (a[0]) {
                    case "function_id": return a[1]; case "list": d = []; for (var e = 1; e < a.length; e++)d.push(fc(a[e], b, c)); return d; case "macro": var f = a[1]; if (c[f]) return; var g = Vb[f]; if (!g || b.Te(g)) return; c[f] = !0; try { var l = gc(g, b, c); l.vtp_gtmEventId = b.id; d = ec(l, { event: b, index: f, type: 2 }); dc && (d = dc.si(d, l)) } catch (x) { b.Ig && b.Ig(x, Number(f)), d = !1 } c[f] =
                        !1; return d; case "map": d = {}; for (var m = 1; m < a.length; m += 2)d[fc(a[m], b, c)] = fc(a[m + 1], b, c); return d; case "template": d = []; for (var n = !1, p = 1; p < a.length; p++) { var q = fc(a[p], b, c); cc && (n = n || q === cc.od); d.push(q) } return cc && n ? cc.yi(d) : d.join(""); case "escape": d = fc(a[1], b, c); if (cc && qa(a[1]) && "macro" === a[1][0] && cc.Ti(a)) return cc.gj(d); d = String(d); for (var r = 2; r < a.length; r++)yb[a[r]] && (d = yb[a[r]](d)); return d; case "tag": var u = a[1]; if (!Yb[u]) throw Error("Unable to resolve tag reference " + u + "."); return d = {
                            wg: a[2],
                            index: u
                        }; case "zb": var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] }; t["function"] = a[1]; var v = hc(t, b, c), y = !!a[4]; return y || 2 !== v ? y !== (1 === v) : null; default: throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            } return a
        }, hc = function (a, b, c) { try { return bc(gc(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 }; var kc = function (a) { function b(r) { for (var u = 0; u < r.length; u++)d[r[u]] = !0 } for (var c = [], d = [], e = ic(a), f = 0; f < Wb.length; f++) { var g = Wb[f], l = jc(g, e); if (l) { for (var m = g.add || [], n = 0; n < m.length; n++)c[m[n]] = !0; b(g.block || []) } else null === l && b(g.block || []); } for (var p = [], q = 0; q < Yb.length; q++)c[q] && !d[q] && (p[q] = !0); return p }, jc = function (a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) { var e = b(c[d]); if (0 === e) return !1; if (2 === e) return null } for (var f =
                a.unless || [], g = 0; g < f.length; g++) { var l = b(f[g]); if (2 === l) return null; if (1 === l) return !1 } return !0
        }, ic = function (a) { var b = []; return function (c) { void 0 === b[c] && (b[c] = hc(Xb[c], a)); return b[c] } }; var lc = { si: function (a, b) { b[xb.nf] && "string" === typeof a && (a = 1 == b[xb.nf] ? a.toLowerCase() : a.toUpperCase()); b.hasOwnProperty(xb.qf) && null === a && (a = b[xb.qf]); b.hasOwnProperty(xb.sf) && void 0 === a && (a = b[xb.sf]); b.hasOwnProperty(xb.rf) && !0 === a && (a = b[xb.rf]); b.hasOwnProperty(xb.pf) && !1 === a && (a = b[xb.pf]); return a } };

        var R = {
            rb: "_ee", Fc: "_syn_or_mod", Qj: "_uei", Dc: "_eu", Nj: "_pci", Tf: "_is_passthrough_cid", Lb: "event_callback", dd: "event_timeout", Ba: "gtag.config", Ia: "gtag.get", oa: "purchase", Ib: "refund", lb: "begin_checkout", Fb: "add_to_cart", Gb: "remove_from_cart", th: "view_cart", uf: "add_to_wishlist", qa: "view_item", Hb: "view_promotion", Vd: "select_promotion", Ud: "select_item", nb: "view_item_list", tf: "add_payment_info", sh: "add_shipping_info", Ra: "value_key", ab: "value_callback", W: "allow_ad_personalization_signals", zc: "restricted_data_processing",
            hc: "allow_google_signals", va: "cookie_expires", Kb: "cookie_update", Ac: "session_duration", hd: "session_engaged_time", bd: "engagement_time_msec", Ea: "user_properties", xa: "transport_url", aa: "ads_data_redaction", ya: "user_data", uc: "first_party_collection", D: "ad_storage", K: "analytics_storage", kf: "region", lf: "wait_for_update", sa: "conversion_linker", Ja: "conversion_cookie_prefix", fa: "value", ca: "currency", Of: "trip_type", X: "items", Ff: "passengers", Yd: "allow_custom_scripts", qb: "session_id", Kf: "quantity", fb: "transaction_id",
            eb: "language", ad: "country", $c: "allow_enhanced_conversions", ce: "aw_merchant_id", ae: "aw_feed_country", be: "aw_feed_language", $d: "discount", T: "developer_id", Cf: "global_developer_id_string", Af: "event_developer_id_string", jd: "delivery_postal_code", je: "estimated_delivery_date", he: "shipping", pe: "new_customer", de: "customer_lifetime_value", ie: "enhanced_conversions", fc: "page_view", ka: "linker", M: "domains", Nb: "decorate_forms", zf: "enhanced_conversions_automatic_settings", Ah: "auto_detection_enabled", me: "ga_temp_client_id",
            Wd: "user_engagement", nh: "app_remove", oh: "app_store_refund", ph: "app_store_subscription_cancel", qh: "app_store_subscription_convert", rh: "app_store_subscription_renew", uh: "first_open", vh: "first_visit", wh: "in_app_purchase", xh: "session_start", yh: "allow_display_features", Qa: "campaign", ic: "campaign_content", jc: "campaign_id", kc: "campaign_medium", mc: "campaign_name", nc: "campaign_source", oc: "campaign_term", ia: "client_id", ja: "cookie_domain", Jb: "cookie_name", Za: "cookie_path", Ka: "cookie_flags", qc: "custom_map", ne: "groups",
            Ef: "non_interaction", Sa: "page_location", qe: "page_path", La: "page_referrer", yc: "page_title", wa: "send_page_view", Ob: "send_to", Bc: "session_engaged", sc: "euid_logged_in_state", Cc: "session_number", Qh: "tracking_id", hb: "url_passthrough", Mb: "accept_incoming", xc: "url_position", If: "phone_conversion_number", Gf: "phone_conversion_callback", Hf: "phone_conversion_css_class", Jf: "phone_conversion_options", Lh: "phone_conversion_ids", Kh: "phone_conversion_country_code", ob: "aw_remarketing", Zd: "aw_remarketing_only", Xd: "gclid",
            zh: "auid", Fh: "affiliation", yf: "tax", fe: "list_name", xf: "checkout_step", wf: "checkout_option", Gh: "coupon", Hh: "promotions", Da: "user_id", Oh: "retoken", Ca: "cookie_prefix", vf: "disable_merchant_reported_purchases", Eh: "dc_natural_search", Dh: "dc_custom_params", Df: "method", Ph: "search_term", Ch: "content_type", Jh: "optimize_id", Ih: "experiments", cb: "google_signals"
        }; R.fd = "google_tld";
        R.ld = "update"; R.ke = "firebase_id"; R.vc = "ga_restrict_domain"; R.cd = "event_settings"; R.ee = "dynamic_event_settings"; R.Pb = "user_data_settings"; R.Mf = "screen_name"; R.te = "screen_resolution"; R.pb = "_x_19"; R.$a = "enhanced_client_id"; R.ed = "_x_20"; R.oe = "internal_traffic_results"; R.kd = "traffic_type"; R.gd = "referral_exclusion_definition"; R.wc = "ignore_referrer"; R.Bh = "content_group"; R.ra = "allow_interest_groups"; var Kc = {}; R.Rf = Object.freeze((Kc[R.tf] = 1, Kc[R.sh] = 1, Kc[R.Fb] = 1, Kc[R.Gb] = 1, Kc[R.th] = 1, Kc[R.lb] = 1, Kc[R.Ud] = 1, Kc[R.nb] = 1, Kc[R.Vd] = 1, Kc[R.Hb] = 1, Kc[R.oa] = 1, Kc[R.Ib] = 1, Kc[R.qa] = 1, Kc[R.uf] = 1, Kc)); R.ve = Object.freeze([R.W, R.hc, R.Kb]); R.ai = Object.freeze([].concat(R.ve)); R.we = Object.freeze([R.va, R.dd, R.Ac, R.hd, R.bd]); R.bi = Object.freeze([].concat(R.we));
        var Lc = {}; R.Sd = (Lc[R.D] = "1", Lc[R.K] = "2", Lc);
        var Mc = {}; R.jf = Object.freeze((Mc[R.W] = 1, Mc[R.$c] = 1, Mc[R.ra] = 1, Mc[R.ob] = 1, Mc[R.Zd] = 1, Mc[R.$d] = 1, Mc[R.ae] = 1, Mc[R.be] = 1, Mc[R.X] = 1, Mc[R.ce] = 1, Mc[R.Ja] = 1, Mc[R.sa] = 1, Mc[R.ja] = 1, Mc[R.va] = 1, Mc[R.Ka] = 1, Mc[R.Ca] = 1, Mc[R.ca] = 1, Mc[R.de] = 1, Mc[R.T] = 1, Mc[R.vf] = 1, Mc[R.ie] = 1, Mc[R.je] = 1, Mc[R.ke] = 1, Mc[R.uc] = 1, Mc[R.eb] = 1, Mc[R.pe] = 1, Mc[R.Sa] = 1, Mc[R.La] = 1, Mc[R.Gf] = 1, Mc[R.Hf] = 1, Mc[R.If] = 1, Mc[R.Jf] = 1, Mc[R.zc] = 1, Mc[R.wa] = 1, Mc[R.Ob] = 1, Mc[R.jd] = 1, Mc[R.fb] = 1, Mc[R.xa] = 1, Mc[R.ld] = 1, Mc[R.hb] = 1, Mc[R.ya] = 1, Mc[R.Da] = 1, Mc[R.fa] = 1, Mc));
        var Nc = { xi: "UZ", oj: "UZ-TO" }; var Oc = {}, Pc = function (a, b) { Oc[a] = Oc[a] || []; Oc[a][b] = !0 }, Tc = function (a) { for (var b = [], c = Oc[a] || [], d = 0; d < c.length; d++)c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++)b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") }, Uc = function () { for (var a = [], b = Oc.GA4_EVENT || [], c = 0; c < b.length; c++)b[c] && a.push(c); return 0 < a.length ? a : void 0 }; var T = function (a) { Pc("GTM", a) }; var Vc = new function (a, b) { this.m = a; this.defaultValue = void 0 === b ? !1 : b }(1933); var Xc = function () { var a = Wc, b = "Re"; if (a.Re && a.hasOwnProperty(b)) return a.Re; var c = new a; a.Re = c; a.hasOwnProperty(b); return c }; var Wc = function () { var a = {}; this.m = function () { var b = Vc.m, c = Vc.defaultValue; return null != a[b] ? a[b] : c }; this.o = function () { a[Vc.m] = !0 } }; var Yc = []; function Zc() { var a = ab("google_tag_data", {}); a.ics || (a.ics = { entries: {}, set: $c, update: ad, addListener: bd, notifyListeners: cd, active: !1, usedDefault: !1, usedUpdate: !1, accessedDefault: !1, accessedAny: !1, wasSetLate: !1 }); return a.ics }
        function $c(a, b, c, d, e, f) {
            var g = Zc(); g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0); g.active = !0; g.usedDefault = !0; if (void 0 != b) {
                var l = g.entries, m = l[a] || {}, n = m.region, p = c && k(c) ? c.toUpperCase() : void 0; d = d.toUpperCase(); e = e.toUpperCase(); if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                    var q = !!(f && 0 < f && void 0 === m.update), r = { region: p, initial: "granted" === b, update: m.update, quiet: q }; if ("" !== d || !1 !== m.initial) l[a] = r; q && G.setTimeout(function () {
                        l[a] === r && r.quiet && (r.quiet = !1, dd(a), cd(), Pc("TAGGING",
                            2))
                    }, f)
                }
            }
        } function ad(a, b) { var c = Zc(); c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0); c.active = !0; c.usedUpdate = !0; if (void 0 != b) { var d = ed(c, a), e = c.entries, f = e[a] = e[a] || {}; f.update = "granted" === b; var g = ed(c, a); f.quiet ? (f.quiet = !1, dd(a)) : g !== d && dd(a) } } function bd(a, b) { Yc.push({ Je: a, Gi: b }) } function dd(a) { for (var b = 0; b < Yc.length; ++b) { var c = Yc[b]; qa(c.Je) && -1 !== c.Je.indexOf(a) && (c.Ng = !0) } }
        function cd(a, b) { for (var c = 0; c < Yc.length; ++c) { var d = Yc[c]; if (d.Ng) { d.Ng = !1; try { d.Gi({ consentEventId: a, consentPriorityId: b }) } catch (e) { } } } } function ed(a, b) { var c = a.entries[b] || {}; return void 0 !== c.update ? c.update : c.initial }
        var fd = function (a) { var b = Zc(); b.accessedAny = !0; return ed(b, a) }, gd = function (a) { var b = Zc(); b.accessedDefault = !0; return (b.entries[a] || {}).initial }, hd = function (a) { var b = Zc(); b.accessedAny = !0; return !(b.entries[a] || {}).quiet }, id = function () { if (!Xc().m()) return !1; var a = Zc(); a.accessedAny = !0; return a.active }, jd = function () { var a = Zc(); a.accessedDefault = !0; return a.usedDefault }, kd = function (a, b) { Zc().addListener(a, b) }, ld = function (a, b) { Zc().notifyListeners(a, b) }, md = function (a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)if (!hd(b[e])) return !0;
                return !1
            } if (c()) { var d = !1; kd(b, function (e) { d || c() || (d = !0, a(e)) }) } else a({})
        }, nd = function (a, b) { function c() { for (var f = [], g = 0; g < d.length; g++) { var l = d[g]; !1 === fd(l) || e[l] || (f.push(l), e[l] = !0) } return f } var d = k(b) ? [b] : b, e = {}; c().length !== d.length && kd(d, function (f) { var g = c(); 0 < g.length && (f.Je = g, a(f)) }) }; function od() { } function pd() { }; function qd(a) { for (var b = [], c = 0; c < rd.length; c++) { var d = a(rd[c]); b[c] = !0 === d ? "1" : !1 === d ? "0" : "-" } return b.join("") }
        var rd = [R.D, R.K], ud = function (a) { var b = a[R.kf]; b && T(40); var c = a[R.lf]; c && T(41); for (var d = qa(b) ? b : [b], e = { ac: 0 }; e.ac < d.length; e = { ac: e.ac }, ++e.ac)xa(a, function (f) { return function (g, l) { if (g !== R.kf && g !== R.lf) { var m = d[f.ac], n = Nc.xi, p = Nc.oj; Zc().set(g, l, m, n, p, c) } } }(e)) }, vd = 0, wd = function (a, b) { xa(a, function (e, f) { Zc().update(e, f) }); ld(b.eventId, b.priorityId); var c = A(), d = c - vd; vd && 0 <= d && 1E3 > d && T(66); vd = c }, xd = function (a) { var b = fd(a); return void 0 != b ? b : !0 }, yd = function () { return "G1" + qd(fd) }, zd = function (a, b) {
            nd(a,
                b)
        }, Ad = function (a, b) { md(a, b) }; var Cd = function (a) { return Bd ? H.querySelectorAll(a) : null }, Dd = function (a, b) {
            if (!Bd) return null; if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null } var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector, d = a; if (!H.documentElement.contains(d)) return null; do { try { if (c.call(d, b)) return d } catch (e) { break } d = d.parentElement || d.parentNode } while (null !== d && 1 === d.nodeType);
            return null
        }, Ed = !1; if (H.querySelectorAll) try { var Fd = H.querySelectorAll(":root"); Fd && 1 == Fd.length && Fd[0] == H.documentElement && (Ed = !0) } catch (a) { } var Bd = Ed;
        var Gd = function (a) { return null == a ? "" : k(a) ? Ca(String(a)) : "e0" }, Id = function (a) { return a.replace(Hd, "") }, Kd = function (a) { return Jd(a.replace(/\s/g, "")) }, Jd = function (a) { return Ca(a.replace(Ld, "").toLowerCase()) }, Nd = function (a) { a = a.replace(/[\s-()/.]/g, ""); "+" !== a.charAt(0) && (a = "+" + a); return Md.test(a) ? a : "e0" }, Pd = function (a) { var b = a.toLowerCase().split("@"); if (2 == b.length) { var c = b[0]; /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, "")); c = c + "@" + b[1]; if (Od.test(c)) return c } return "e0" }, Sd = function (a,
            b) { window.Promise || b([]); Promise.all(a.map(function (c) { return c.value && -1 !== Qd.indexOf(c.name) ? Rd(c.value).then(function (d) { c.value = d }) : Promise.resolve() })).then(function () { b(a) }).catch(function () { b([]) }) }, Rd = function (a) {
                if ("" === a || "e0" === a) return Promise.resolve(a); if (G.crypto && G.crypto.subtle) try {
                    var b = Td(a); return G.crypto.subtle.digest("SHA-256", b).then(function (c) {
                        var d = Array.from(new Uint8Array(c)).map(function (e) { return String.fromCharCode(e) }).join(""); return G.btoa(d).replace(/\+/g, "-").replace(/\//g,
                            "_").replace(/=+$/, "")
                    }).catch(function () { return "e2" })
                } catch (c) { return Promise.resolve("e2") } else return Promise.resolve("e1")
            }, Td = function (a) { var b; if (G.TextEncoder) b = (new G.TextEncoder("utf-8")).encode(a); else { for (var c = [], d = 0; d < a.length; d++) { var e = a.charCodeAt(d); 128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63)) } b = new Uint8Array(c) } return b },
            Ld = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, Od = /^\S+@\S+\.\S+$/, Md = /^\+\d{11,15}$/, Hd = /[.~]/g, Ud = {}, Vd = (Ud.email = "em", Ud.phone_number = "pn", Ud.first_name = "fn", Ud.last_name = "ln", Ud.street = "sa", Ud.city = "ct", Ud.region = "rg", Ud.country = "co", Ud.postal_code = "pc", Ud.error_code = "ec", Ud), Wd = function (a, b) {
                function c(n, p, q) { var r = n[p]; qa(r) || (r = [r]); for (var u = 0; u < r.length; ++u) { var t = Gd(r[u]); "" !== t && f.push({ name: p, value: q(t), index: void 0 }) } } function d(n, p, q, r) { var u = Gd(n[p]); "" !== u && f.push({ name: p, value: q(u), index: r }) }
                function e(n) { return function (p) { T(64); return n(p) } } var f = []; if ("https:" === G.location.protocol) {
                    c(a, "email", Pd); c(a, "phone_number", Nd); c(a, "first_name", e(Kd)); c(a, "last_name", e(Kd)); var g = a.home_address || {}; c(g, "street", e(Jd)); c(g, "city", e(Jd)); c(g, "postal_code", e(Id)); c(g, "region", e(Jd)); c(g, "country", e(Id)); var l = a.address || {}; qa(l) || (l = [l]); for (var m = 0; m < l.length; m++)d(l[m], "first_name", Kd, m), d(l[m], "last_name", Kd, m), d(l[m], "street", Jd, m), d(l[m], "city", Jd, m), d(l[m], "postal_code", Id, m), d(l[m], "region",
                        Jd, m), d(l[m], "country", Id, m); Sd(f, b)
                } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f)
            }, Xd = function (a, b) { Wd(a, function (c) { for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) { var g = c[f].name, l = c[f].value, m = c[f].index, n = Vd[g]; n && l && (-1 === Qd.indexOf(g) || /^e\d+$/.test(l) || /^[0-9A-Za-z_-]{43}$/.test(l)) && (void 0 !== m && (n += m), d.push(n + "." + l), e++) } 1 === c.length && "error_code" === c[0].name && (e = 0); b(encodeURIComponent(d.join("~")), e) }) }, Yd = function (a) {
                if (G.Promise) try {
                    return new Promise(function (b) {
                        Xd(a, function (c,
                            d) { b({ Kd: c, Uj: d }) })
                    })
                } catch (b) { }
            }, Qd = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]); var Zd = {}, U = G.google_tag_manager = G.google_tag_manager || {}, $d = Math.random(); Zd.ud = "3n1"; Zd.U = "dataLayer"; Zd.mh = "ChEI8P+PkgYQxcjenqSxtovfARImAL8b/fWev0r/Wncrbf7mFkOuBUyy7sjEOV6w5K2kOXOIu48MO1waAosE"; var ae = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 }, be = { __paused: !0, __tg: !0 }, ce; for (ce in ae) ae.hasOwnProperty(ce) && (be[ce] = !0); Zd.cc = "www.googletagmanager.com"; var de, ee = Zd.cc + "/gtm.js"; ee = Zd.cc + "/gtag/js"; de = ee;
        var fe = Aa(""), ge = null, he = null, ie = {}, je = {}, ke = function () { var a = U.sequence || 1; U.sequence = a + 1; return a }; Zd.lh = ""; var le = ""; Zd.Sb = le; var me = new va, qe = {}, re = {}, ue = { name: Zd.U, set: function (a, b) { P(Ka(a, b), qe); se() }, get: function (a) { return te(a, 2) }, reset: function () { me = new va; qe = {}; se() } }, te = function (a, b) { return 2 != b ? me.get(a) : ve(a) }, ve = function (a) { var b, c = a.split("."); b = b || []; for (var d = qe, e = 0; e < c.length; e++) { if (null === d) return !1; if (void 0 === d) break; d = d[c[e]]; if (-1 !== b.indexOf(d)) return } return d }, we = function (a, b) { re.hasOwnProperty(a) || (me.set(a, b), P(Ka(a, b), qe), se()) }, se = function (a) {
            xa(re, function (b, c) {
                me.set(b, c); P(Ka(b, void 0), qe);
                P(Ka(b, c), qe); a && delete re[b]
            })
        }, xe = function (a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? ve(a) : me.get(a); "array" === tb(d) || "object" === tb(d) ? c = P(d) : c = d; return c }; var ye, ze = !1, Ae = function (a) { if (!ze) { ze = !0; ye = ye || {} } return ye[a] }; var Be = function (a) {
            if (H.hidden) return !0; var b = a.getBoundingClientRect(); if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle) return !0; var c = G.getComputedStyle(a, null); if ("hidden" === c.visibility) return !0; for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0; var f = e.opacity, g = e.filter; if (g) { var l = g.indexOf("opacity("); 0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f)) } if (void 0 !== f && 0 >= f) return !0; (d = d.parentElement) && (e = G.getComputedStyle(d,
                    null))
            } return !1
        }; var Ke = /:[0-9]+$/, Le = function (a, b, c) { for (var d = a.split("&"), e = 0; e < d.length; e++) { var f = d[e].split("="); if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) { var g = f.slice(1).join("="); return c ? g : decodeURIComponent(g).replace(/\+/g, " ") } } }, Oe = function (a, b, c, d, e) {
            b && (b = String(b).toLowerCase()); if ("protocol" === b || "port" === b) a.protocol = Me(a.protocol) || Me(G.location.protocol); "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
                b && (a.hostname = (a.hostname || G.location.hostname).replace(Ke, "").toLowerCase()); return Ne(a, b, c, d, e)
        }, Ne = function (a, b, c, d, e) {
            var f, g = Me(a.protocol); b && (b = String(b).toLowerCase()); switch (b) {
                case "url_no_fragment": f = Pe(a); break; case "protocol": f = g; break; case "host": f = a.hostname.replace(Ke, "").toLowerCase(); if (c) { var l = /^www\d*\./.exec(f); l && l[0] && (f = f.substr(l[0].length)) } break; case "port": f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")); break; case "path": a.pathname || a.hostname || Pc("TAGGING",
                    1); f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname; var m = f.split("/"); 0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = ""); f = m.join("/"); break; case "query": f = a.search.replace("?", ""); e && (f = Le(f, e, void 0)); break; case "extension": var n = a.pathname.split("."); f = 1 < n.length ? n[n.length - 1] : ""; f = f.split("/")[0]; break; case "fragment": f = a.hash.replace("#", ""); break; default: f = a && a.href
            }return f
        }, Me = function (a) { return a ? a.replace(":", "").toLowerCase() : "" }, Pe = function (a) {
            var b = ""; if (a && a.href) {
                var c =
                    a.href.indexOf("#"); b = 0 > c ? a.href : a.href.substr(0, c)
            } return b
        }, Qe = function (a) { var b = H.createElement("a"); a && (b.href = a); var c = b.pathname; "/" !== c[0] && (a || Pc("TAGGING", 1), c = "/" + c); var d = b.hostname.replace(Ke, ""); return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port } }, Re = function (a) {
            function b(n) { var p = n.split("=")[0]; return 0 > d.indexOf(p) ? n : p + "=0" } function c(n) { return n.split("&").map(b).filter(function (p) { return void 0 !== p }).join("&") } var d =
                "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), e = Qe(a), f = a.split(/[?#]/)[0], g = e.search, l = e.hash; "?" === g[0] && (g = g.substring(1)); "#" === l[0] && (l = l.substring(1)); g = c(g); l = c(l); "" !== g && (g = "?" + g); "" !== l && (l = "#" + l); var m = "" + f + g + l; "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1)); return m
        }; var Se = {};
        var Ve = function (a) { if (0 == a.length) return null; var b; b = Te(a, function (c) { return !Ue.test(c.Va) }); b = Te(b, function (c) { return "INPUT" === c.element.tagName.toUpperCase() }); b = Te(b, function (c) { return !Be(c.element) }); return b[0] }, Te = function (a, b) { if (1 >= a.length) return a; var c = a.filter(b); return 0 == c.length ? a : c }, We = function (a) {
            var b; if (a === H.body) b = "body"; else {
                var c; if (a.id) c = "#" + a.id; else {
                    var d; if (a.parentElement) {
                        var e; a: {
                            var f = a.parentElement; if (f) {
                                for (var g = 0; g < f.childElementCount; g++)if (f.children[g] === a) {
                                    e =
                                    g + 1; break a
                                } e = -1
                            } else e = 1
                        } d = We(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = ""; c = d
                } b = c
            } return b
        }, Xe = !0, Ye = !1; Se.hh = "true"; var Ze = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), $e = new RegExp(/@(gmail|googlemail)\./i),
            Ue = new RegExp(/support|noreply/i), af = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "), bf = ["BR"], cf = {}, df = function (a) {
                a = a || { Pe: !0, Qe: !0 }; a.jb = a.jb || { email: !0, phone: !0, jg: !0 }; var b, c = a, d = !!c.Pe + "." + !!c.Qe; c && c.Ed && c.Ed.length && (d += "." + c.Ed.join(".")); c && c.jb && (d += "." + c.jb.email + "." + c.jb.phone + "." + c.jb.jg); b = d; var e = cf[b]; if (e && 200 > A() - e.timestamp) return e.result; var f; var g = [], l = H.body; if (l) {
                    for (var m = l.querySelectorAll("*"), n = 0; n < m.length && 1E4 > n; n++) {
                        var p = m[n]; if (!(0 <= af.indexOf(p.tagName.toUpperCase())) &&
                            p.children instanceof HTMLCollection) { for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)if (!(0 <= bf.indexOf(p.children[r].tagName.toUpperCase()))) { q = !0; break } q || g.push(p) }
                    } f = { elements: g, status: 1E4 < m.length ? "2" : "1" }
                } else f = { elements: g, status: "4" }; var u = f, t = u.status, v = [], y; if (a.jb && a.jb.email) {
                    for (var x = u.elements, w = [], C = 0; C < x.length; C++) {
                        var z = x[C], B = z.textContent; "INPUT" === z.tagName.toUpperCase() && z.value && (B = z.value); if (B) {
                            var D = B.match(Ze); if (D) {
                                var E = D[0], F; if (G.location) {
                                    var M = Ne(G.location, "host",
                                        !0); F = 0 <= E.toLowerCase().indexOf(M)
                                } else F = !1; F || w.push({ element: z, Va: E })
                            }
                        }
                    } var I = a && a.Ed; if (I && 0 !== I.length) { for (var N = [], O = 0; O < w.length; O++) { for (var L = !0, K = 0; K < I.length; K++) { var V = I[K]; if (V && Dd(w[O].element, V)) { L = !1; break } } L && N.push(w[O]) } v = N } else v = w; y = Ve(v); 10 < w.length && (t = "3")
                } var S = []; !a.Yj && y && (v = [y]); for (var Q = 0; Q < v.length; Q++) { var ka = v[Q].element, sa = { Va: v[Q].Va, tagName: ka.tagName, type: 1 }; a.Pe && (sa.querySelector = We(ka)); a.Qe && (sa.isVisible = !Be(ka)); S.push(sa) } var la = {
                    elements: S.slice(0, 10),
                    status: t
                }; cf[b] = { timestamp: A(), result: la }; return la
            };
        var ef = function (a, b, c) {
            if (c) {
                var d = c.selector_type, e = String(c.value), f; if ("js_variable" === d) { e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, ""); for (var g = e.split(","), l = 0; l < g.length; l++) { var m = g[l].trim(); if (m) { if (0 === m.indexOf("dataLayer.")) f = te(m.substring(10)); else { var n = m.split("."); f = G[n.shift()]; for (var p = 0; p < n.length; p++)f = f && f[n[p]] } if (void 0 !== f) break } } } else if ("css_selector" === d && Bd) {
                    var q = Cd(e); if (q && 0 < q.length) {
                        f = []; for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++)f.push(mb(q[r]) ||
                            Ca(q[r].value)); f = 1 === f.length ? f[0] : f
                    }
                } f && (a[b] = f)
            }
        }, ff = function (a) { if (a) { var b = {}; ef(b, "email", a.email); ef(b, "phone_number", a.phone); b.address = []; for (var c = a.name_and_address || [], d = 0; d < c.length; d++) { var e = {}; ef(e, "first_name", c[d].first_name); ef(e, "last_name", c[d].last_name); ef(e, "street", c[d].street); ef(e, "city", c[d].city); ef(e, "region", c[d].region); ef(e, "country", c[d].country); ef(e, "postal_code", c[d].postal_code); b.address.push(e) } return b } }, gf = function (a) {
            if (a) switch (a.mode) {
                case "selectors": return ff(a.selectors);
                case "auto_detect": var b; var c = a.auto_detect; if (c) { var d = df({ Pe: !1, Qe: !1, Ed: c.exclude_element_selectors, jb: { email: !!c.email, phone: !!c.phone, jg: !!c.address } }).elements, e = {}; if (0 < d.length) for (var f = 0; f < d.length; f++) { var g = d[f]; if (1 === g.type) { e.email = g.Va; break } } b = e } else b = void 0; return b
            }
        }, hf = function (a) { switch (a.enhanced_conversions_mode) { case "manual": var b = a.enhanced_conversions_manual_var; return void 0 !== b ? b : G.enhanced_conversion_data; case "automatic": return ff(a[R.zf]) } }; var jf = {}, kf = function (a, b) { if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a)) return G._gtmexpgrp[a]; void 0 === jf[a] && (jf[a] = Math.floor(Math.random() * b)); return jf[a] }; var lf = function (a) { var b = 1, c, d, e; if (a) for (b = 0, d = a.length - 1; 0 <= d; d--)e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b; return b }; var mf = function (a, b, c) { for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) { var g = e[f].split("="), l = g[0].replace(/^\s*|\s*$/g, ""); if (l && l == a) { var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, ""); m && c && (m = decodeURIComponent(m)); d.push(m) } } return d }; var nf = function (a, b) { var c = function () { }; c.prototype = a.prototype; var d = new c; a.apply(d, Array.prototype.slice.call(arguments, 1)); return d }, of = function (a) { var b = a; return function () { if (b) { var c = b; b = null; c() } } }; function pf(a) { return "null" !== a.origin }; var sf = function (a, b, c, d) { return qf(d) ? mf(a, String(b || rf()), c) : [] }, vf = function (a, b, c, d, e) { if (qf(e)) { var f = tf(a, d, e); if (1 === f.length) return f[0].id; if (0 !== f.length) { f = uf(f, function (g) { return g.Bd }, b); if (1 === f.length) return f[0].id; f = uf(f, function (g) { return g.Nc }, c); return f[0] ? f[0].id : void 0 } } }; function wf(a, b, c, d) { var e = rf(), f = window; pf(f) && (f.document.cookie = a); var g = rf(); return e != g || void 0 != c && 0 <= sf(b, g, !1, d).indexOf(c) }
        var Af = function (a, b, c) {
            function d(u, t, v) { if (null == v) return delete g[t], u; g[t] = v; return u + "; " + t + "=" + v } function e(u, t) { if (null == t) return delete g[t], u; g[t] = !0; return u + "; " + t } if (!qf(c.Ua)) return 2; var f; void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = xf(b), f = a + "=" + b); var g = {}; f = d(f, "path", c.path); var l; c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires); f = d(f, "expires", l); f = d(f, "max-age", c.Tj); f = d(f, "samesite",
                c.Wj); c.Xj && (f = e(f, "secure")); var m = c.domain; if (m && "auto" === m.toLowerCase()) { for (var n = yf(), p = 0; p < n.length; ++p) { var q = "none" !== n[p] ? n[p] : void 0, r = d(f, "domain", q); r = e(r, c.flags); if (!zf(q, c.path) && wf(r, a, b, c.Ua)) return 0 } return 1 } m && "none" !== m.toLowerCase() && (f = d(f, "domain", m)); f = e(f, c.flags); return zf(m, c.path) ? 1 : wf(f, a, b, c.Ua) ? 0 : 1
        }, Bf = function (a, b, c) { null == c.path && (c.path = "/"); c.domain || (c.domain = "auto"); return Af(a, b, c) };
        function uf(a, b, c) { for (var d = [], e = [], f, g = 0; g < a.length; g++) { var l = a[g], m = b(l); m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l) } return 0 < d.length ? d : e } function tf(a, b, c) { for (var d = [], e = sf(a, void 0, void 0, c), f = 0; f < e.length; f++) { var g = e[f].split("."), l = g.shift(); if (!b || -1 !== b.indexOf(l)) { var m = g.shift(); m && (m = m.split("-"), d.push({ id: g.join("."), Bd: 1 * m[0] || 1, Nc: 1 * m[1] || 1 })) } } return d }
        var xf = function (a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a }, Cf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Df = /(^|\.)doubleclick\.net$/i, zf = function (a, b) { return Df.test(window.document.location.hostname) || "/" === b && Cf.test(a) }, rf = function () { return pf(window) ? window.document.cookie : "" }, yf = function () {
            var a = [], b = window.document.location.hostname.split("."); if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] } for (var d = b.length - 2; 0 <= d; d--)a.push(b.slice(d).join("."));
            var e = window.document.location.hostname; Df.test(e) || Cf.test(e) || a.push("none"); return a
        }, qf = function (a) { if (!Xc().m() || !a || !id()) return !0; if (!hd(a)) return !1; var b = fd(a); return null == b ? !0 : !!b }; var Ef = function (a) { var b = Math.round(2147483647 * Math.random()); return a ? String(b ^ lf(a) & 2147483647) : String(b) }, Ff = function (a) { return [Ef(a), Math.round(A() / 1E3)].join(".") }, If = function (a, b, c, d, e) { var f = Gf(b); return vf(a, f, Hf(c), d, e) }, Jf = function (a, b, c, d) { var e = "" + Gf(c), f = Hf(d); 1 < f && (e += "-" + f); return [b, e, a].join(".") }, Gf = function (a) { if (!a) return 1; a = 0 === a.indexOf(".") ? a.substr(1) : a; return a.split(".").length }, Hf = function (a) {
            if (!a || "/" === a) return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length -
                1
        }; function Kf(a, b, c) { var d, e = Number(null != a.zb ? a.zb : void 0); 0 !== e && (d = new Date((b || A()) + 1E3 * (e || 7776E3))); return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d } }; var Lf = ["1"], Mf = {}, Nf = {}, Rf = function (a, b) { b = void 0 === b ? !0 : b; var c = Of(a.prefix); if (!Mf[c] && !Pf(c, a.path, a.domain) && b) { var d = Of(a.prefix), e = Ff(); if (0 === Qf(d, e, a)) { var f = ab("google_tag_data", {}); f._gcl_au ? Pc("GTM", 57) : f._gcl_au = e } Pf(c, a.path, a.domain) } }; function Qf(a, b, c, d) { var e = Jf(b, "1", c.domain, c.path), f = Kf(c, d); f.Ua = "ad_storage"; return Bf(a, e, f) }
        function Pf(a, b, c) { var d = If(a, b, c, Lf, "ad_storage"); if (!d) return !1; var e = d.split("."); 5 === e.length ? (Mf[a] = e.slice(0, 2).join("."), Nf[a] = { id: e.slice(2, 4).join("."), Gg: Number(e[4]) || 0 }) : 3 === e.length ? Nf[a] = { id: e.slice(0, 2).join("."), Gg: Number(e[2]) || 0 } : Mf[a] = d; return !0 } function Of(a) { return (a || "_gcl") + "_au" }; var Sf = function (a) { for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) { var f = c[e].match(d); f && b.push({ ff: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 }) } b.sort(function (g, l) { return l.timestamp - g.timestamp }); return b };
        function Tf(a, b) { var c = Sf(a), d = {}; if (!c || !c.length) return d; for (var e = 0; e < c.length; e++) { var f = c[e].value.split("."); if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) { d[c[e].ff] || (d[c[e].ff] = []); var g = { version: f[0], timestamp: 1E3 * Number(f[1]), za: f[2] }; b && 3 < f.length && (g.labels = f.slice(3)); d[c[e].ff].push(g) } } return d }; function Uf() { for (var a = Vf, b = {}, c = 0; c < a.length; ++c)b[a[c]] = c; return b } function Wf() { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; a += a.toLowerCase() + "0123456789-_"; return a + "." } var Vf, Xf;
        function Yf(a) { function b(m) { for (; d < a.length;) { var n = a.charAt(d++), p = Xf[n]; if (null != p) return p; if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n); } return m } Vf = Vf || Wf(); Xf = Xf || Uf(); for (var c = "", d = 0; ;) { var e = b(-1), f = b(0), g = b(64), l = b(64); if (64 === l && -1 === e) return c; c += String.fromCharCode(e << 2 | f >> 4); 64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l))) } }; var Zf; var jg = function () { var a = $f, b = hg, c = ig(), d = function (g) { a(g.target || g.srcElement || {}) }, e = function (g) { b(g.target || g.srcElement || {}) }; if (!c.init) { jb(H, "mousedown", d); jb(H, "keyup", d); jb(H, "submit", e); var f = HTMLFormElement.prototype.submit; HTMLFormElement.prototype.submit = function () { b(this); f.call(this) }; c.init = !0 } }, kg = function (a, b, c, d, e) { var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e }; ig().decorators.push(f) }, lg = function (a, b, c) {
            for (var d = ig().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f], l; if (l = !c || g.forms) a: { var m = g.domains, n = a, p = !!g.sameHost; if (m && (p || n !== H.location.hostname)) for (var q = 0; q < m.length; q++)if (m[q] instanceof RegExp) { if (m[q].test(n)) { l = !0; break a } } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) { l = !0; break a } l = !1 } if (l) { var r = g.placement; void 0 == r && (r = g.fragment ? 2 : 1); r === b && Ha(e, g.callback()) }
            } return e
        }; function ig() { var a = ab("google_tag_data", {}), b = a.gl; b && b.decorators || (b = { decorators: [] }, a.gl = b); return b }; var mg = /(.*?)\*(.*?)\*(.*)/, ng = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/, og = /^(?:www\.|m\.|amp\.)+/, pg = /([^?#]+)(\?[^#]*)?(#.*)?/; function qg(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
        var sg = function (a) {
            var b = [], c; for (c in a) if (a.hasOwnProperty(c)) { var d = a[c]; if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) { b.push(c); var e = b, f = e.push, g, l = String(d); Vf = Vf || Wf(); Xf = Xf || Uf(); for (var m = [], n = 0; n < l.length; n += 3) { var p = n + 1 < l.length, q = n + 2 < l.length, r = l.charCodeAt(n), u = p ? l.charCodeAt(n + 1) : 0, t = q ? l.charCodeAt(n + 2) : 0, v = r >> 2, y = (r & 3) << 4 | u >> 4, x = (u & 15) << 2 | t >> 6, w = t & 63; q || (w = 64, p || (x = 64)); m.push(Vf[v], Vf[y], Vf[x], Vf[w]) } g = m.join(""); f.call(e, g) } } var C = b.join("*"); return ["1", rg(C),
                C].join("*")
        }; function rg(a, b) { var c = [G.navigator.userAgent, (new Date).getTimezoneOffset(), Za.userLanguage || Za.language, Math.floor(A() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d; if (!(d = Zf)) { for (var e = Array(256), f = 0; 256 > f; f++) { for (var g = f, l = 0; 8 > l; l++)g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1; e[f] = g } d = e } Zf = d; for (var m = 4294967295, n = 0; n < c.length; n++)m = m >>> 8 ^ Zf[(m ^ c.charCodeAt(n)) & 255]; return ((m ^ -1) >>> 0).toString(36) }
        function tg() { return function (a) { var b = Qe(G.location.href), c = b.search.replace("?", ""), d = Le(c, "_gl", !0) || ""; a.query = ug(d) || {}; var e = Oe(b, "fragment").match(qg("_gl")); a.fragment = ug(e && e[3] || "") || {} } } function vg(a, b) { var c = qg(a).exec(b), d = b; if (c) { var e = c[2], f = c[4]; d = c[1]; f && (d = d + e + f) } return d }
        var wg = function (a, b) { b || (b = "_gl"); var c = pg.exec(a); if (!c) return ""; var d = c[1], e = vg(b, (c[2] || "").slice(1)), f = vg(b, (c[3] || "").slice(1)); e.length && (e = "?" + e); f.length && (f = "#" + f); return "" + d + e + f }, xg = function (a) { var b = tg(), c = ig(); c.data || (c.data = { query: {}, fragment: {} }, b(c.data)); var d = {}, e = c.data; e && (Ha(d, e.query), a && Ha(d, e.fragment)); return d }, ug = function (a) {
            try { var b = yg(a, 3); if (void 0 !== b) { for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) { var f = d[e], g = Yf(d[e + 1]); c[f] = g } Pc("TAGGING", 6); return c } } catch (l) {
                Pc("TAGGING",
                    8)
            }
        }; function yg(a, b) { if (a) { var c; a: { for (var d = a, e = 0; 3 > e; ++e) { var f = mg.exec(d); if (f) { c = f; break a } d = decodeURIComponent(d) } c = void 0 } var g = c; if (g && "1" === g[1]) { var l = g[3], m; a: { for (var n = g[2], p = 0; p < b; ++p)if (n === rg(l, p)) { m = !0; break a } m = !1 } if (m) return l; Pc("TAGGING", 7) } } }
        function zg(a, b, c, d) { function e(p) { p = vg(a, p); var q = p.charAt(p.length - 1); p && "&" !== q && (p += "&"); return p + n } d = void 0 === d ? !1 : d; var f = pg.exec(c); if (!f) return ""; var g = f[1], l = f[2] || "", m = f[3] || "", n = a + "=" + b; d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1)); return "" + g + l + m }
        function Ag(a, b) { var c = "FORM" === (a.tagName || "").toUpperCase(), d = lg(b, 1, c), e = lg(b, 2, c), f = lg(b, 3, c); if (Ia(d)) { var g = sg(d); c ? Bg("_gl", g, a) : Cg("_gl", g, a, !1) } if (!c && Ia(e)) { var l = sg(e); Cg("_gl", l, a, !0) } for (var m in f) if (f.hasOwnProperty(m)) a: { var n = m, p = f[m], q = a; if (q.tagName) { if ("a" === q.tagName.toLowerCase()) { Cg(n, p, q, void 0); break a } if ("form" === q.tagName.toLowerCase()) { Bg(n, p, q); break a } } "string" == typeof q && zg(n, p, q, void 0) } }
        function Cg(a, b, c, d) { if (c.href) { var e = zg(a, b, c.href, void 0 === d ? !1 : d); Ra.test(e) && (c.href = e) } }
        function Bg(a, b, c) { if (c && c.action) { var d = (c.method || "").toLowerCase(); if ("get" === d) { for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) { var l = e[g]; if (l.name === a) { l.setAttribute("value", b); f = !0; break } } if (!f) { var m = H.createElement("input"); m.setAttribute("type", "hidden"); m.setAttribute("name", a); m.setAttribute("value", b); c.appendChild(m) } } else if ("post" === d) { var n = zg(a, b, c.action); Ra.test(n) && (c.action = n) } } }
        function $f(a) { try { var b; a: { for (var c = a, d = 100; c && 0 < d;) { if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a } c = c.parentNode; d-- } b = null } var e = b; if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || Ag(e, e.hostname) } } catch (g) { } } function hg(a) { try { if (a.action) { var b = Oe(Qe(a.action), "host"); Ag(a, b) } } catch (c) { } }
        var Dg = function (a, b, c, d) { jg(); kg(a, b, "fragment" === c ? 2 : 1, !!d, !1) }, Eg = function (a, b) { jg(); kg(a, [Ne(G.location, "host", !0)], b, !0, !0) }, Fg = function () {
            var a = H.location.hostname, b = ng.exec(H.referrer); if (!b) return !1; var c = b[2], d = b[1], e = ""; if (c) { var f = c.split("/"), g = f[1]; e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g) } else if (d) { if (0 === d.indexOf("xn--")) return !1; e = d.replace(/-/g, ".").replace(/\.\./g, "-") } var l = a.replace(og, ""), m = e.replace(og, ""), n; if (!(n = l === m)) {
                var p = "." + m; n = l.substring(l.length - p.length,
                    l.length) === p
            } return n
        }, Gg = function (a, b) { return !1 === a ? !1 : a || b || Fg() }; var Hg = {}; var Ig = /^\w+$/, Jg = /^[\w-]+$/, Kg = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" }, Lg = function () { if (!Xc().m() || !id()) return !0; var a = fd("ad_storage"); return null == a ? !0 : !!a }, Mg = function (a, b) { hd("ad_storage") ? Lg() ? a() : nd(a, "ad_storage") : b ? Pc("TAGGING", 3) : md(function () { Mg(a, !0) }, ["ad_storage"]) }, Og = function (a) { return Ng(a).map(function (b) { return b.za }) }, Ng = function (a) {
            var b = []; if (!pf(G) || !H.cookie) return b; var c = sf(a, H.cookie, void 0, "ad_storage"); if (!c || 0 == c.length) return b; for (var d = {}, e = 0; e < c.length; d =
                { Wc: d.Wc }, e++) { var f = Pg(c[e]); if (null != f) { var g = f, l = g.version; d.Wc = g.za; var m = g.timestamp, n = g.labels, p = ra(b, function (q) { return function (r) { return r.za === q.Wc } }(d)); p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Qg(p.labels, n || [])) : b.push({ version: l, za: d.Wc, timestamp: m, labels: n }) } } b.sort(function (q, r) { return r.timestamp - q.timestamp }); return Rg(b)
        }; function Qg(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++)c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++)c[b[f]] || d.push(b[f]); return d }
        function Sg(a) { return a && "string" == typeof a && a.match(Ig) ? a : "_gcl" }
        var Ug = function () { var a = Qe(G.location.href), b = Oe(a, "query", !1, void 0, "gclid"), c = Oe(a, "query", !1, void 0, "gclsrc"), d = Oe(a, "query", !1, void 0, "wbraid"), e = Oe(a, "query", !1, void 0, "dclid"); if (!b || !c || !d) { var f = a.hash.replace("#", ""); b = b || Le(f, "gclid", void 0); c = c || Le(f, "gclsrc", void 0); d = d || Le(f, "wbraid", void 0) } return Tg(b, c, e, d) }, Tg = function (a, b, c, d) {
            var e = {}, f = function (g, l) { e[l] || (e[l] = []); e[l].push(g) }; e.gclid = a; e.gclsrc = b; e.dclid = c; void 0 !== d && Jg.test(d) && (e.gbraid = d, f(d, "gb")); if (void 0 !== a && a.match(Jg)) switch (b) {
                case void 0: f(a,
                    "aw"); break; case "aw.ds": f(a, "aw"); f(a, "dc"); break; case "ds": f(a, "dc"); break; case "3p.ds": f(a, "dc"); break; case "gf": f(a, "gf"); break; case "ha": f(a, "ha")
            }c && f(c, "dc"); return e
        }, Wg = function (a) { var b = Ug(); Mg(function () { Vg(b, !1, a) }) };
        function Vg(a, b, c, d, e) {
            function f(y, x) { var w = Xg(y, g); w && (Bf(w, x, l), m = !0) } c = c || {}; e = e || []; var g = Sg(c.prefix); d = d || A(); var l = Kf(c, d, !0); l.Ua = "ad_storage"; var m = !1, n = Math.round(d / 1E3), p = function (y) { var x = ["GCL", n, y]; 0 < e.length && x.push(e.join(".")); return x.join(".") }; a.aw && f("aw", p(a.aw[0])); a.dc && f("dc", p(a.dc[0])); a.gf && f("gf", p(a.gf[0])); a.ha && f("ha", p(a.ha[0])); a.gp && f("gp", p(a.gp[0])); if ((void 0 == Hg.enable_gbraid_cookie_write ? 0 : Hg.enable_gbraid_cookie_write) && !m && a.gb) {
                var q = a.gb[0], r = Xg("gb", g),
                u = !1; if (!b) for (var t = Ng(r), v = 0; v < t.length; v++)t[v].za === q && t[v].labels && 0 < t[v].labels.length && (u = !0); u || f("gb", p(q))
            }
        }
        var Zg = function (a, b) { var c = xg(!0); Mg(function () { for (var d = Sg(b.prefix), e = 0; e < a.length; ++e) { var f = a[e]; if (void 0 !== Kg[f]) { var g = Xg(f, d), l = c[g]; if (l) { var m = Math.min(Yg(l), A()), n; b: { var p = m; if (pf(G)) for (var q = sf(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)if (Yg(q[r]) > p) { n = !0; break b } n = !1 } if (!n) { var u = Kf(b, m, !0); u.Ua = "ad_storage"; Bf(g, l, u) } } } } Vg(Tg(c.gclid, c.gclsrc), !1, b) }) }, Xg = function (a, b) { var c = Kg[a]; if (void 0 !== c) return b + c }, Yg = function (a) {
            return 0 !== $g(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        }; function Pg(a) { var b = $g(a.split(".")); return 0 === b.length ? null : { version: b[0], za: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) } } function $g(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Jg.test(a[2]) ? [] : a }
        var ah = function (a, b, c, d, e) { if (qa(b) && pf(G)) { var f = Sg(e), g = function () { for (var l = {}, m = 0; m < a.length; ++m) { var n = Xg(a[m], f); if (n) { var p = sf(n, H.cookie, void 0, "ad_storage"); p.length && (l[n] = p.sort()[p.length - 1]) } } return l }; Mg(function () { Dg(g, b, c, d) }) } }, Rg = function (a) { return a.filter(function (b) { return Jg.test(b.za) }) }, bh = function (a, b) {
            if (pf(G)) {
                for (var c = Sg(b.prefix), d = {}, e = 0; e < a.length; e++)Kg[a[e]] && (d[a[e]] = Kg[a[e]]); Mg(function () {
                    xa(d, function (f, g) {
                        var l = sf(c + g, H.cookie, void 0, "ad_storage"); l.sort(function (u,
                            t) { return Yg(t) - Yg(u) }); if (l.length) { var m = l[0], n = Yg(m), p = 0 !== $g(m.split(".")).length ? m.split(".").slice(3) : [], q = {}, r; r = 0 !== $g(m.split(".")).length ? m.split(".")[2] : void 0; q[f] = [r]; Vg(q, !0, b, n, p) }
                    })
                })
            }
        }; function ch(a, b) { for (var c = 0; c < b.length; ++c)if (a[b[c]]) return !0; return !1 }
        var dh = function (a) { function b(e, f, g) { g && (e[f] = g) } if (id()) { var c = Ug(); if (ch(c, a)) { var d = {}; b(d, "gclid", c.gclid); b(d, "dclid", c.dclid); b(d, "gclsrc", c.gclsrc); b(d, "wbraid", c.gbraid); Eg(function () { return d }, 3); Eg(function () { var e = {}; return e._up = "1", e }, 1) } } }; function eh(a, b) { var c = Sg(b), d = Xg(a, c); if (!d) return 0; for (var e = Ng(d), f = 0, g = 0; g < e.length; g++)f = Math.max(f, e[g].timestamp); return f }
        function fh(a) { var b = 0, c; for (c in a) for (var d = a[c], e = 0; e < d.length; e++)b = Math.max(b, Number(d[e].timestamp)); return b };
        var gh = function (a) { var b = []; xa(a, function (c, d) { d = Rg(d); for (var e = [], f = 0; f < d.length; f++)e.push(d[f].za); e.length && b.push(c + ":" + e.join(",")) }); return b.join(";") }, ih = function (a, b, c) { if ("aw" === a || "dc" === a || "gb" === a) { var d = hh("gcl" + a); if (d) return d.split(".") } var e = Sg(b); if ("_gcl" == e) { c = void 0 === c ? !0 : c; var f = !xd(R.D) && c, g; g = Ug()[a] || []; if (0 < g.length) return f ? ["0"] : g } var l = Xg(a, e); return l ? Og(l) : [] }, hh = function (a) {
            var b = Qe(G.location.href), c = Oe(b, "host", !1); if (c && c.match(jh)) {
                var d = Oe(b, "path").split(a +
                    "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        }, kh = function (a, b) { hd(R.D) ? xd(R.D) ? a() : nd(a, R.D) : b ? T(42) : Ad(function () { kh(a, !0) }, [R.D]) }, jh = /^\d+\.fls\.doubleclick\.net$/, lh = !1; var mh = function (a, b) { return ih("aw", a, b) }, nh = function (a, b) { return ih("dc", a, b) }, oh = function (a) { var b = hh("gac"); return b ? !xd(R.D) && a ? "0" : decodeURIComponent(b) : gh(Lg() ? Tf() : {}) }, ph = function (a) {
            var b = hh("gacgb"); return b ?
                !xd(R.D) && a ? "0" : decodeURIComponent(b) : gh(Lg() ? Tf("_gac_gb", !0) : {})
        }, qh = function (a) {
            var b = Ug(), c = [], d = b.gclid, e = b.dclid, f = b.gclsrc || "aw"; !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({ za: d, Me: f }); e && c.push({ za: e, Me: "ds" }); if (!lh) { } kh(function () {
                Rf(a); var g = Mf[Of(a.prefix)]; if (g && 0 < c.length) for (var l = U.joined_auid = U.joined_auid || {}, m = 0; m < c.length; m++) {
                    var n =
                        c[m], p = n.za, q = n.Me, r = (a.prefix || "_gcl") + "." + q + "." + p; if (!l[r]) { var u = "https://adservice.google.com/pagead/regclk"; u = "gb" === q ? u + "?gbraid=" + p + "&auid=" + g : u + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q; pb(u); l[r] = !0 }
                }
            })
        }, rh = function (a) { var b; if (hh("gclaw") || hh("gac") || 0 < (Ug().aw || []).length) b = !1; else { var c; if (0 < (Ug().gb || []).length) c = !0; else { var d = Math.max(eh("aw", a), fh(Lg() ? Tf() : {})); c = Math.max(eh("gb", a), fh(Lg() ? Tf("_gac_gb", !0) : {})) > d } b = c } return b }; var sh = function (a) { var b = Za && Za.userAgent || ""; if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1; var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || ""; if ("" === c) return !1; for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) { if (void 0 === d[f]) return !0; if (e[f] != d[f]) return Number(e[f]) > Number(d[f]) } return e.length >= d.length };
        var uh = function (a) { var b = a ? hf(a) : G.enhanced_conversion_data, c = (a || {}).enhanced_conversions_mode, d = void 0; if ("manual" === c && b) switch (b._tag_mode) { case "CODE": d = "c"; break; case "AUTO": d = "a"; break; case "MANUAL": d = "m"; break; default: d = "c" } else d = "automatic" === c ? th(a) ? "a" : "m" : "c"; if (G.Promise) try { return b ? Yd(b).then(function (e) { e.vg = d; return e }) : Promise.resolve({ Kd: "", vg: void 0 }) } catch (e) { } }, th = function (a) { var b = a && a[R.zf]; return b && b[R.Ah] }, vh = function (a) {
            if (xd(R.D)) return a; a = a.replace(/&url=([^&#]+)/,
                function (b, c) { var d = Re(decodeURIComponent(c)); return "&url=" + encodeURIComponent(d) }); return a = a.replace(/&ref=([^&#]+)/, function (b, c) { var d = Re(decodeURIComponent(c)); return "&ref=" + encodeURIComponent(d) })
        }, wh = function () { if (fe || !0 !== G._gtmdgs && !sh("11")) return -1; var a = za('1'); return kf(1, 100) < a ? kf(2, 2) : -1 }, xh = function () { return -1 !== Za.userAgent.toLowerCase().indexOf("firefox") }, yh = function (a) { if (a && a.length) { for (var b = [], c = 0; c < a.length; ++c) { var d = a[c]; d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("") } return b.join(",") } }; var zh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Ah = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] }, Bh = {
            cl: ["ecl"], customPixels: ["customScripts", "html"],
            ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts"], customScripts: ["html"], nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"], nonGoogleScripts: ["customScripts", "html"], nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        }, Ch = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
        var Dh = function () { var a = !1; a = !0; return a }, Fh = function (a) {
            var b = te("gtm.allowlist") || te("gtm.whitelist"); b && T(9); Dh() && (b = "google gtagfl lcl zone oid op".split(" ")); var c = b && Ja(Ba(b), Ah), d = te("gtm.blocklist") ||
                te("gtm.blacklist"); d || (d = te("tagTypeBlacklist")) && T(3); d ? T(8) : d = []; Eh() && (d = Ba(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts")); 0 <= Ba(d).indexOf("google") && T(2); var e = d && Ja(Ba(d), Bh), f = {}; return function (g) {
                    var l = g && g[xb.sb]; if (!l || "string" != typeof l) return !0; l = l.replace(/^_*/, ""); if (void 0 !== f[l]) return f[l]; var m = je[l] || [], n = a(l, m); if (b) {
                        var p;
                        if (p = n) a: { if (0 > c.indexOf(l)) if (m && 0 < m.length) for (var q = 0; q < m.length; q++) { if (0 > c.indexOf(m[q])) { T(11); p = !1; break a } } else { p = !1; break a } p = !0 } n = p
                    } var r = !1; if (d) { var u = 0 <= e.indexOf(l); if (u) r = u; else { var t = wa(e, m || []); t && T(10); r = t } } var v = !n || r; v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = wa(e, Ch)); return f[l] = v
                }
        }, Eh = function () { return zh.test(G.location && G.location.hostname) }; var Gh = { F: "AW-1071820919", Zc: "" }, Hh = { Vj: "AW-1071820919", Mg: "AW-1071820919" }, Ih = function () { var a = []; Hh.Mg && (a = Hh.Mg.split("|")); return a };
        var Lh = function (a) { }, Ph = function (a) { }, Qh =
            function () { return "&tc=" + Yb.filter(function (a) { return a }).length }, Th = function () { 2022 <= Rh().length && Sh() }, Uh = function (a) { return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*" }, Wh = function () { Vh || (Vh = G.setTimeout(Sh, 500)) }, Sh = function () { Vh && (G.clearTimeout(Vh), Vh = void 0); if (void 0 !== Xh && (!Yh[Xh] || Zh || $h)) if (ai[Xh] || bi.Ui() || 0 >= ci--) T(1), ai[Xh] = !0; else { bi.pj(); var a = Rh(!0); ib(a); Yh[Xh] = !0; ei = di = gi = hi = ii = $h = Zh = ""; fi = [] } }, Rh = function (a) { var b = Xh; if (void 0 === b) return ""; var c = Tc("GTM"), d = Tc("TAGGING"); return [ji, Yh[b] ? "" : "&es=1", ki[b], Lh(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Qh(), Zh, $h, ii, hi, Ph(a), gi, di, ei ? "&dl=" + encodeURIComponent(ei) : "", 0 < fi.length ? "&tdp=" + fi.join(".") : "", "&z=0"].join("") }, mi = function () { ji = li() }, li = function () {
                return [ni, "&v=3&t=t", "&pid=" +
                    ta(), "&rv=" + Zd.ud].join("")
            }, Oh = ["L", "S", "Y"], Kh = ["S", "E"], oi = { sampleRate: "0.005000", fh: "", eh: Number("5") }, pi = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="), qi; if (!(qi = pi)) { var ri = Math.random(), si = oi.sampleRate; qi = ri < si } var ti =
                qi, ni = "https://www.googletagmanager.com/a?id=" + Gh.F + "&cv=1", ui = { label: Gh.F + " Container", children: [{ label: "Initialization", children: [] }] }, ji = li(), Yh = {}, Zh = "", $h = "", gi = "", hi = "", di = "", fi = [], ei = "", Nh = {}, Mh = !1, Jh = {}, vi = {}, ii = "", Xh = void 0, ki = {}, ai = {}, Vh = void 0, wi = 5; 0 < oi.eh && (wi = oi.eh); var bi = function (a, b) { for (var c = 0, d = [], e = 0; e < a; ++e)d.push(0); return { Ui: function () { return c < a ? !1 : A() - d[c % a] < b }, pj: function () { var f = c++ % a; d[f] = A() } } }(wi, 1E3), ci = 1E3, yi = function (a, b) {
                    if (ti && !ai[a] && Xh !== a) {
                        Sh(); Xh = a;
                        gi = Zh = ""; ki[a] = "&e=" + Uh(b) + "&eid=" + a; Wh();
                    }
                }, zi = function (a, b, c, d) { if (ti && b) { var e, f = String(b[xb.sb] || "").replace(/_/g, ""); 0 === f.indexOf("cvt") && (f = "cvt"); e = f; var g = c + e; if (!ai[a]) { a !== Xh && (Sh(), Xh = a); Zh = Zh ? Zh + "." + g : "&tr=" + g; var l = b["function"]; if (!l) throw Error("Error: No function name given for function call."); var m = (ac[l] ? "1" : "2") + e; gi = gi ? gi + "." + m : "&ti=" + m; Wh(); Th() } } }; var Gi = function (a, b, c) { if (ti && !ai[a]) { a !== Xh && (Sh(), Xh = a); var d = c + b; $h = $h ? $h + "." + d : "&epr=" + d; Wh(); Th() } }, Hi = function (a, b, c) { };
        var Ii = { initialized: 11, complete: 12, interactive: 13 }, Ji = {}, Ki = Object.freeze((Ji[R.rb] = !0, Ji[R.Fc] = !0, Ji)), Li = {}, Mi = Object.freeze((Li[R.wa] = !0, Li)), Ni = {}, Oi = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics="), Qi = function (a, b, c) { }; function Ri(a, b) { var c = {}, d; for (d in b) b.hasOwnProperty(d) && (c[d] = !0); for (var e in a) a.hasOwnProperty(e) && (c[e] = !0); return c }
        function Pi(a, b, c, d) { c = void 0 === c ? {} : c; d = void 0 === d ? "" : d; if (a === b) return []; var e = function (q, r) { var u = r[q]; return void 0 === u ? Mi[q] : u }, f; for (f in Ri(a, b)) if (!Ki[f]) { var g = (d ? d + "." : "") + f, l = e(f, a), m = e(f, b), n = "object" === tb(l) || "array" === tb(l), p = "object" === tb(m) || "array" === tb(m); if (n && p) Pi(l, m, c, g); else if (n || p || l !== m) c[g] = !0 } return Object.keys(c) } var Si = !1, Ti = 0, Ui = []; function Vi(a) { if (!Si) { var b = H.createEventObject, c = "complete" == H.readyState, d = "interactive" == H.readyState; if (!a || "readystatechange" != a.type || c || !b && d) { Si = !0; for (var e = 0; e < Ui.length; e++)J(Ui[e]) } Ui.push = function () { for (var f = 0; f < arguments.length; f++)J(arguments[f]); return 0 } } } function Wi() { if (!Si && 140 > Ti) { Ti++; try { H.documentElement.doScroll("left"), Vi() } catch (a) { G.setTimeout(Wi, 50) } } } var Xi = function (a) { Si ? a() : Ui.push(a) }; var Zi = function (a, b) { this.m = !1; this.C = []; this.I = { tags: [] }; this.V = !1; this.o = this.s = 0; Yi(this, a, b) }, $i = function (a, b, c, d) { if (be.hasOwnProperty(b) || "__zone" === b) return -1; var e = {}; vb(d) && (e = P(d, e)); e.id = c; e.status = "timeout"; return a.I.tags.push(e) - 1 }, aj = function (a, b, c, d) { var e = a.I.tags[b]; e && (e.status = c, e.executionTime = d) }, bj = function (a) { if (!a.m) { for (var b = a.C, c = 0; c < b.length; c++)b[c](); a.m = !0; a.C.length = 0 } }, Yi = function (a, b, c) { void 0 !== b && sj(a, b); c && G.setTimeout(function () { return bj(a) }, Number(c)) }, sj =
            function (a, b) { var c = Fa(function () { return J(function () { b(Gh.F, a.I) }) }); a.m ? c() : a.C.push(c) }, tj = function (a) { a.s++; return Fa(function () { a.o++; a.V && a.o >= a.s && bj(a) }) }, uj = function (a) { a.V = !0; a.o >= a.s && bj(a) }; var vj = function () { function a(d) { return !pa(d) || 0 > d ? 0 : d } if (!U._li && G.performance && G.performance.timing) { var b = G.performance.timing.navigationStart, c = pa(ue.get("gtm.start")) ? ue.get("gtm.start") : 0; U._li = { cst: a(c - b), cbt: a(he - b) } } }, wj = function (a) { G.performance && G.performance.mark(Gh.F + "_" + a + "_start") }, xj = function (a) {
                if (G.performance) {
                    var b = Gh.F + "_" + a + "_start", c = Gh.F + "_" + a + "_duration"; G.performance.measure(c, b); var d = G.performance.getEntriesByName(c)[0]; G.performance.clearMarks(b); G.performance.clearMeasures(c);
                    var e = U._p || {}; void 0 === e[a] && (e[a] = d.duration, U._p = e); return d.duration
                }
            }, yj = function () { if (G.performance && G.performance.now) { var a = U._p || {}; a.PAGEVIEW = G.performance.now(); U._p = a } }; var zj = {}, Aj = function () { return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject] }, Bj = !1;
        function Ej() { return G.GoogleAnalyticsObject || "ga" }
        var Fj = function (a) { }, Gj = function (a, b) {
            return function () {
                var c = Aj(), d = c && c.getByName && c.getByName(a); if (d) {
                    var e = d.get("sendHitTask"); d.set("sendHitTask", function (f) {
                        var g = f.get("hitPayload"), l = f.get("hitCallback"), m = 0 > g.indexOf("&tid=" + b); m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0)); e(f); m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        }; function Lj(a, b, c, d) { var e = Yb[a], f = Mj(a, b, c, d); if (!f) return null; var g = fc(e[xb.Yf], c, []); if (g && g.length) { var l = g[0]; f = Lj(l.index, { onSuccess: f, onFailure: 1 === l.wg ? b.terminate : f, terminate: b.terminate }, c, d) } return f }
        function Mj(a, b, c, d) {
            function e() {
                if (f[xb.Yh]) l(); else {
                    var y = gc(f, c, []); var x = y[xb.jh]; if (null != x) for (var w = 0; w < x.length; w++)if (!xd(x[w])) { l(); return } var C = $i(c.tb, String(f[xb.sb]), Number(f[xb.$f]), y[xb.Zh]), z = !1; y.vtp_gtmOnSuccess = function () {
                        if (!z) {
                            z = !0; var E = A() - D; zi(c.id, Yb[a], "5", E); aj(c.tb, C, "success",
                                E); g()
                        }
                    }; y.vtp_gtmOnFailure = function () { if (!z) { z = !0; var E = A() - D; zi(c.id, Yb[a], "6", E); aj(c.tb, C, "failure", E); l() } }; y.vtp_gtmTagId = f.tag_id; y.vtp_gtmEventId = c.id; zi(c.id, f, "1"); var B = function () { var E = A() - D; zi(c.id, f, "7", E); aj(c.tb, C, "exception", E); z || (z = !0, l()) }; var D = A(); try { ec(y, { event: c, index: a, type: 1 }) } catch (E) { B(E) }
                }
            } var f = Yb[a], g = b.onSuccess, l = b.onFailure, m = b.terminate; if (c.Te(f)) return null; var n = fc(f[xb.ag], c, []); if (n && n.length) { var p = n[0], q = Lj(p.index, { onSuccess: g, onFailure: l, terminate: m }, c, d); if (!q) return null; g = q; l = 2 === p.wg ? m : q } if (f[xb.Uf] || f[xb.ci]) {
                var r =
                    f[xb.Uf] ? Zb : c.Bj, u = g, t = l; if (!r[a]) { e = Fa(e); var v = Nj(a, r, e); g = v.onSuccess; l = v.onFailure } return function () { r[a](u, t) }
            } return e
        } function Nj(a, b, c) { var d = [], e = []; b[a] = Oj(d, e, c); return { onSuccess: function () { b[a] = Pj; for (var f = 0; f < d.length; f++)d[f]() }, onFailure: function () { b[a] = Qj; for (var f = 0; f < e.length; f++)e[f]() } } } function Oj(a, b, c) { return function (d, e) { a.push(d); b.push(e); c() } } function Pj(a) { a() } function Qj(a, b) { b() }; function Rj(a, b) { if (a) { var c = "" + a; 0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c); "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1)); return Qe("" + c + b).href } } function Sj(a, b) { return Tj() ? Rj(a, b) : void 0 } function Tj() { var a = !1; return a }
        function Uj() { return !!Zd.Sb && "SGTM_TOKEN" !== Zd.Sb.replaceAll("@@", "") }; var Vj = function () { var a = !1; return a }; var Xj = function (a, b, c, d) { return (2 === Wj() || d || "http:" != G.location.protocol ? a : b) + c }, Wj = function () { var a = gb(), b; if (1 === a) a: { var c = de; c = c.toLowerCase(); for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) { var m = g[l].src; if (m) { m = m.toLowerCase(); if (0 === m.indexOf(e)) { b = 3; break a } 1 === f && 0 === m.indexOf(d) && (f = 2) } } b = f } else b = a; return b }; var Yj = !1; Yj = !0;
        var Zj = function () { if (Vj()) { return !0 } return !1 }, ak = function (a, b, c) {
            if (!Zj()) {
                var d = "/gtm.js"; d = "/gtag/js"; c && (d = "/gtag/js"); var e = "?id=" + encodeURIComponent(a) + "&l=" + Zd.U, f = 0 === a.indexOf("GTM-"); f || (e += "&cx=c"); var g = Uj(); g && (e += "&sign=" + Zd.Sb); var l = Sj(b, d + e); if (!l) {
                    var m = Zd.cc + d; g && $a && f && (m = $a.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]); l = Xj("https://",
                        "http://", m + e)
                } fb(l)
            }
        }, bk = function (a, b) { if (!Zj()) { var c = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Zd.U + "&cx=c"; Uj() && (c += "&sign=" + Zd.Sb); var d = Sj(b, c); d || (d = Xj("https://", "http://", Zd.cc + c)); fb(d) } }; var ck = function () { this.eventModel = {}; this.targetConfig = {}; this.containerConfig = {}; this.globalConfig = {}; this.dataLayerConfig = {}; this.remoteConfig = {}; this.onSuccess = function () { }; this.onFailure = function () { }; this.setContainerTypeLoaded = function () { }; this.getContainerTypeLoaded = function () { }; this.eventId = void 0; this.isGtmEvent = !1 }, dk = function (a) { var b = new ck; b.eventModel = a; return b }, ek = function (a, b) { a.targetConfig = b; return a }, fk = function (a, b) { a.containerConfig = b; return a }, gk = function (a, b) {
            a.globalConfig =
            b; return a
        }, hk = function (a, b) { a.dataLayerConfig = b; return a }, ik = function (a, b) { a.remoteConfig = b; return a }, jk = function (a, b) { a.onSuccess = b; return a }, kk = function (a, b) { a.setContainerTypeLoaded = b; return a }, lk = function (a, b) { a.getContainerTypeLoaded = b; return a }, mk = function (a, b) { a.onFailure = b; return a }; h = ck.prototype;
        h.getWithConfig = function (a) {
            if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; nk(this, this.globalConfig[a], this.dataLayerConfig[a]) && T(71); if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
            if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
        };
        h.getTopLevelKeys = function () { function a(e) { for (var f = Object.keys(e), g = 0; g < f.length; ++g)b[f[g]] = 1 } var b = {}; a(this.eventModel); a(this.targetConfig); a(this.containerConfig); a(this.globalConfig); for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++)if (!b.hasOwnProperty(c[d])) { T(71); break } return Object.keys(b) };
        h.getMergedValues = function (a, b) {
            function c(l) { vb(l) && xa(l, function (m, n) { e = !0; d[m] = n }) } var d = {}, e = !1; b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a])); b && 2 !== b || c(this.eventModel[a]); var f = e, g = d; d = {}; e = !1; b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a])); b && 2 !== b || c(this.eventModel[a]);
            (e !== f || nk(this, d, g)) && T(71); e = f; d = g; return e ? d : void 0
        };
        h.getKeysFromFirstOfAnyScope = function (a) {
            var b = {}, c = !1, d = function (g) { for (var l = 0; l < a.length; l++)void 0 !== g[a[l]] && (b[a[l]] = g[a[l]], c = !0); return c }; if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b; d(this.globalConfig); var e = b, f = c; b = {}; c = !1; d(this.dataLayerConfig); nk(this, b, e) && T(71); b = e; c = f;
            if (c) return b; d(this.remoteConfig); return b
        }; h.getEventModelKeys = function () { var a = [], b; for (b in this.eventModel) b !== R.rb && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b); return a };
        var nk = function (a, b, c) {
            try { if (b === c) return !1; var d = tb(b); if (d !== tb(c) || !(vb(b) && vb(c) || "array" === d)) return !0; if ("array" === d) { if (b.length !== c.length) return !0; for (var e = 0; e < b.length; e++)if (nk(a, b[e], c[e])) return !0 } else { for (var f in c) if (!b.hasOwnProperty(f)) return !0; for (var g in b) if (!c.hasOwnProperty(g) || nk(a, b[g], c[g])) return !0 } } catch (l) { T(72) }
            return !1
        }; function ok() { U.dedupe_gclid || (U.dedupe_gclid = "" + Ff()); return U.dedupe_gclid }; var pk; if (3 === Zd.ud.length) pk = "g"; else { var qk = "G"; qk = "g"; pk = qk }
        var rk = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: pk, OPT: "o" }, sk = function (a) { var b = Gh.F.split("-"), c = b[0].toUpperCase(), d = rk[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f; if (3 === Zd.ud.length) { var g = "w"; g = Vj() ? "s" : "o"; f = "2" + g } else f = ""; return f + d + Zd.ud + e }; function tk(a, b) { if ("" === a) return b; var c = Number(a); return isNaN(c) ? b : c }; var uk = function (a, b) { a.addEventListener && a.addEventListener.call(a, "message", b, !1) }; function vk() { return Ta("iPhone") && !Ta("iPod") && !Ta("iPad") }; Ta("Opera"); Ta("Trident") || Ta("MSIE"); Ta("Edge"); !Ta("Gecko") || -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") || Ta("Trident") || Ta("MSIE") || Ta("Edge"); -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile"); Ta("Macintosh"); Ta("Windows"); Ta("Linux") || Ta("CrOS"); var wk = ja.navigator || null; wk && (wk.appVersion || "").indexOf("X11"); Ta("Android"); vk(); Ta("iPad"); Ta("iPod"); vk() || Ta("iPad") || Ta("iPod"); Sa().toLowerCase().indexOf("kaios"); var xk = function (a) { if (!a || !H.head) return null; var b, c; c = void 0 === c ? document : c; b = c.createElement("meta"); H.head.appendChild(b); b.httpEquiv = "origin-trial"; b.content = a; return b }; var yk = function () { }; var zk = function (a) { void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0); void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0); return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3 }, Ak = function (a, b) { this.o = a; this.m = null; this.C = {}; this.V = 0; this.I = void 0 === b ? 500 : b; this.s = null }; ia(Ak, yk);
        Ak.prototype.addEventListener = function (a) {
            var b = {}, c = of(function () { return a(b) }), d = 0; -1 !== this.I && (d = setTimeout(function () { b.tcString = "tcunavailable"; b.internalErrorState = 1; c() }, this.I)); var e = function (f, g) { clearTimeout(d); f ? (b = f, b.internalErrorState = zk(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3); a(b) }; try { Bk(this, "addEventListener", e) } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                    d = 0), c()
            }
        }; Ak.prototype.removeEventListener = function (a) { a && a.listenerId && Bk(this, "removeEventListener", null, a.listenerId) };
        var Dk = function (a, b, c) {
            var d; d = void 0 === d ? "755" : d; var e; a: { if (a.publisher && a.publisher.restrictions) { var f = a.publisher.restrictions[b]; if (void 0 !== f) { e = f[void 0 === d ? "755" : d]; break a } } e = void 0 } var g = e; if (0 === g) return !1; var l = c; 2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0)); var m; if (0 === l) if (a.purpose && a.vendor) { var n = Ck(a.vendor.consents, void 0 === d ? "755" : d); m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ck(a.purpose.consents, b) } else m = !0; else m = 1 === l ? a.purpose && a.vendor ? Ck(a.purpose.legitimateInterests,
                b) && Ck(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0; return m
        }, Ck = function (a, b) { return !(!a || !a[b]) }, Bk = function (a, b, c, d) { c || (c = function () { }); if ("function" === typeof a.o.__tcfapi) { var e = a.o.__tcfapi; e(b, 2, c, d) } else if (Ek(a)) { Fk(a); var f = ++a.V; a.C[f] = c; if (a.m) { var g = {}; a.m.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*") } } else c({}, !1) }, Ek = function (a) {
            if (a.m) return a.m; var b; a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e; try { e = !(!c.frames || !c.frames.__tcfapiLocator) } catch (l) {
                        e =
                        !1
                    } if (e) { b = c; break a } var f; b: { try { var g = c.parent; if (g && g != c) { f = g; break b } } catch (l) { } f = null } if (!(c = f)) break
                } b = null
            } a.m = b; return a.m
        }, Fk = function (a) { a.s || (a.s = function (b) { try { var c; c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn; a.C[c.callId](c.returnValue, c.success) } catch (d) { } }, uk(a.o, a.s)) }; var Gk = !0; Gk = !1; var Hk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 }, Ik = tk("", 550), Jk = tk("", 500); function Kk() { var a = U.tcf || {}; return U.tcf = a }
        var Pk = function () {
            var a = Kk(), b = new Ak(G, Gk ? 3E3 : -1); if (!0 === G.gtag_enable_tcf_support && !a.active && ("function" === typeof G.__tcfapi || "function" === typeof b.o.__tcfapi || null != Ek(b))) {
                a.active = !0; a.Pc = {}; Lk(); var c = null; Gk ? c = G.setTimeout(function () { Mk(a); Nk(a); c = null }, Jk) : a.tcString = "tcunavailable"; try {
                    b.addEventListener(function (d) {
                        c && (clearTimeout(c), c = null); if (0 !== d.internalErrorState) Mk(a), Nk(a); else {
                            var e; a.gdprApplies = d.gdprApplies; if (!1 === d.gdprApplies) e = Ok(), b.removeEventListener(d); else if ("tcloaded" ===
                                d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                                    var f = {}, g; for (g in Hk) if (Hk.hasOwnProperty(g)) if ("1" === g) {
                                        var l = d, m = !0; m = void 0 === m ? !1 : m; var n; var p = l; !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = zk(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1); f["1"] = n ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies &&
                                            !m || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Dk(l, "1", 0) : !1
                                    } else f[g] = Dk(d, g, Hk[g]); e = f
                            } e && (a.tcString = d.tcString || "tcempty", a.Pc = e, Nk(a))
                        }
                    })
                } catch (d) { c && (clearTimeout(c), c = null), Mk(a), Nk(a) }
            }
        }; function Mk(a) { a.type = "e"; a.tcString = "tcunavailable"; Gk && (a.Pc = Ok()) } function Lk() { var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = Ik, a); ud(b) } function Ok() { var a = {}, b; for (b in Hk) Hk.hasOwnProperty(b) && (a[b] = !0); return a }
        function Nk(a) { var b = {}, c = (b.ad_storage = a.Pc["1"] ? "granted" : "denied", b); wd(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Qk() }) } var Qk = function () { var a = Kk(); return a.active ? a.tcString || "" : "" }, Rk = function () { var a = Kk(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "" }, Sk = function (a) { if (!Hk.hasOwnProperty(String(a))) return !0; var b = Kk(); return b.active && b.Pc ? !!b.Pc[String(a)] : !0 };
        var Tk = function (a, b) { var c = a && !xd(R.D); return b && c ? "0" : b }, Xk = function (a) {
            function b(t) {
                var v; U.reported_gclid || (U.reported_gclid = {}); v = U.reported_gclid; var y, x = g; y = !g || id() && !xd(R.D) ? m + (t ? "gcu" : "gcs") : m + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs"); if (!v[y]) {
                    v[y] = !0; var w = [], C = {}, z = function (N, O) { O && (w.push(N + "=" + encodeURIComponent(O)), C[N] = !0) }, B = "https://www.google.com"; if (id()) { var D = xd(R.D); z("gcs", yd()); t && z("gcu", "1"); jd() && z("gcd", "G1" + qd(gd)); z("rnd", ok()); if ((!m || n && "aw.ds" !== n) && xd(R.D)) { var E = Og("_gcl_aw"); z("gclaw", E.join(".")) } z("url", String(G.location).split(/[?#]/)[0]); z("dclid", Tk(d, p)); var F = !1; F = !0; D || !d && !F || (B = "https://pagead2.googlesyndication.com") } z("gdpr_consent", Qk()); z("gdpr", Rk()); "1" === xg(!1)._up && z("gtm_up", "1"); z("gclid", Tk(d, m)); z("gclsrc", n);
                    if (!(C.gclid || C.dclid || C.gclaw) && (z("gbraid", Tk(d, q)), C.gbraid && Vk && (x = !1), !C.gbraid && id() && xd(R.D))) { var M = Og("_gcl_gb"); 0 < M.length && (z("gclgb", M.join(".")), Vk && (x = !1)) } z("gtm", sk(!e)); g && xd(R.D) && (Rf(f || {}), x && z("auid", Mf[Of(f.prefix)] || "")); Wk || a.Ad && z("did", a.Ad), a.Wb && z("gdid", a.Wb), a.Vb && z("edid", a.Vb); var I = B + "/pagead/landing?" + w.join("&"); pb(I)
                }
            } var c = !!a.Ie, d = !!a.Oa, e = a.O, f = void 0 ===
                a.ub ? {} : a.ub, g = void 0 === a.Jd ? !0 : a.Jd, l = Ug(), m = l.gclid || "", n = l.gclsrc, p = l.dclid || "", q = l.gbraid || "", r = !c && ((!m || n && "aw.ds" !== n ? !1 : !0) || q), u = id(); if (r || u) u ? Ad(function () { b(); xd(R.D) || zd(function (t) { return b(!0, t.consentEventId, t.consentPriorityId) }, R.D) }, [R.D]) : b()
        }, Uk = function (a) { var b = String(G.location).split(/[?#]/)[0], c = Zd.mh || G._CONSENT_MODE_SALT; return a ? c ? String(lf(b + a + c)) : "0" : "" }, Wk = !1; var Vk =
            !1; var Yk = function (a) { if (!id() || fd(R.D)) { a = a || {}; Rf(a, !1); var b = Nf[Of(Sg(a.prefix))]; if (b && !(18E5 < A() - 1E3 * b.Gg)) { var c = b.id, d = c.split("."); if (2 === d.length && !(864E5 < A() - 1E3 * (Number(d[1]) || 0))) return c } } }; var Zk = !1; var $k = function () { this.m = {} }, al = function (a, b, c) { null != c && (a.m[b] = c) }, bl = function (a) { return Object.keys(a.m).map(function (b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]) }).join("&") }, dl = function (a, b, c, d, e) { if (!id()) { cl(a, b, c, d, e); return } Ad(function () { xd(R.D) ? cl(a, b, c, d, e) : d && d() }, [R.D]); };

        var el = function (a, b, c) { c = void 0 === c ? !0 : c; var d = { gclgb: function () { return ih("gb", b, c).join(".") }, gacgb: function () { return ph(c) }, gclaw: function () { return mh(b, c).join(".") }, gac: function () { return oh(c) } }, e = rh(b); Zk && (e = !1); var f = e ? "gclgb" : "gclaw", g = e ? "gacgb" : "gac", l = d[g], m = (0, d[f])(), n = "_gcl" !== b ? "" : l(); m && al(a, f, m); n && al(a, g, n) }, cl = function (a, b, c, d, e) {
            c = c || {}; var f = c.ub || {}, g = new $k; Xd(b, function (l, m) {
                al(g, "em", l); al(g, "gtm", sk()); id() && (al(g, "gcs", yd()), al(g, "gcd", "G1" + qd(gd))); el(g, Sg(f.prefix), c.Oa);
                al(g, "auid", Mf[Of(f.prefix)]); e && e.Gd && al(g, "gdid", e.Gd); e && e.Cd && al(g, "edid", e.Cd);
                var C = bl(g); pb("https://google.com/pagead/form-data/" + a + "?" + C); d && d()
            })
        }; var fl = /[A-Z]+/, gl = /\s/, hl = function (a) { if (k(a)) { a = Ca(a); var b = a.indexOf("-"); if (!(0 > b)) { var c = a.substring(0, b); if (fl.test(c)) { for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)if (!d[e] || gl.test(d[e]) && ("AW" !== c || 1 !== e)) return; return { id: a, prefix: c, containerId: c + "-" + d[0], J: d } } } } }, jl = function (a) { for (var b = {}, c = 0; c < a.length; ++c) { var d = hl(a[c]); d && (b[d.id] = d) } il(b); var e = []; xa(b, function (f, g) { e.push(g) }); return e };
        function il(a) { var b = [], c; for (c in a) if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.J[1] && b.push(d.containerId) } for (var e = 0; e < b.length; ++e)delete a[b[e]] };
        var ll = function (a, b, c) { if (G[a.functionName]) return b.Ye && J(b.Ye), G[a.functionName]; var d = kl(); G[a.functionName] = d; if (a.xd) for (var e = 0; e < a.xd.length; e++)G[a.xd[e]] = G[a.xd[e]] || kl(); a.Id && void 0 === G[a.Id] && (G[a.Id] = c); fb(Xj("https://", "http://", a.ef), b.Ye, b.cj); return d }, kl = function () { var a = function () { a.q = a.q || []; a.q.push(arguments) }; return a }, ml = { functionName: "_googWcmImpl", Id: "_googWcmAk", ef: "www.gstatic.com/wcm/loader.js" }, nl = { functionName: "_gaPhoneImpl", Id: "ga_wpid", ef: "www.gstatic.com/gaphone/loader.js" },
            ol = { ih: "", ei: "5" }, pl = { functionName: "_googCallTrackingImpl", xd: [nl.functionName, ml.functionName], ef: "www.gstatic.com/call-tracking/call-tracking_" + (ol.ih || ol.ei) + ".js" }, ql = {}, rl = function (a, b, c, d) { T(22); if (c) { d = d || {}; var e = ll(ml, d, a), f = { ak: a, cl: b }; void 0 === d.Ta && (f.autoreplace = c); e(2, d.Ta, f, c, 0, Da(), d.options) } }, sl = function (a, b, c, d) {
                T(21); if (b && c) {
                    d = d || {}; for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Da() }, f = 0; f < a.length; f++) {
                        var g = a[f]; ql[g.id] ||
                            (g && "AW" === g.prefix && !e.adData && 2 <= g.J.length ? (e.adData = { ak: g.J[0], cl: g.J[1] }, ql[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = { gaWpid: g.containerId }, ql[g.id] = !0))
                    } (e.gaData || e.adData) && ll(pl, d)(d.Ta, e, d.options)
                }
            }, tl = function () { var a = !1; return a }, ul = function (a, b) {
                if (a) if (Vj()) { } else {
                    if (k(a)) {
                        var c =
                            hl(a); if (!c) return; a = c
                    } var d = void 0, e = !1, f = b.getWithConfig(R.Lh); if (f && qa(f)) { d = []; for (var g = 0; g < f.length; g++) { var l = hl(f[g]); l && (d.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (e = !0)) } } if (!d || e) {
                        var m = b.getWithConfig(R.If), n; if (m) {
                            qa(m) ? n = m : n = [m]; var p = b.getWithConfig(R.Gf), q = b.getWithConfig(R.Hf), r = b.getWithConfig(R.Jf), u = b.getWithConfig(R.Kh), t = p || q, v = 1; "UA" !== a.prefix || d || (v = 5); for (var y = 0; y < n.length; y++)if (y < v) if (d) sl(d, n[y], u, { Ta: t, options: r }); else if ("AW" === a.prefix &&
                                a.J[1]) tl() ? sl([a], n[y], u || "US", { Ta: t, options: r }) : rl(a.J[0], a.J[1], n[y], { Ta: t, options: r }); else if ("UA" === a.prefix) if (tl()) sl([a], n[y], u || "US", { Ta: t }); else { var x = a.containerId, w = n[y], C = { Ta: t }; T(23); if (w) { C = C || {}; var z = ll(nl, C, x), B = {}; void 0 !== C.Ta ? B.receiver = C.Ta : B.replace = w; B.ga_wpid = x; B.destination = w; z(2, Da(), B) } }
                        }
                    }
                }
            };
        var wl = function () { var a = U.floc; if (a) { var b = a.ts, c = a.floc; if (b && c && 1E3 > A() - b) return Promise.resolve(c) } var d = void 0; try { d = Promise.race([H.interestCohort().then(function (e) { U.floc = { ts: A(), floc: e }; return e }), new Promise(function (e) { G.setTimeout(function () { return e() }, vl) })]).catch(function () { }) } catch (e) { return } return d }, yl = function () { if (!G.Promise) return !1; oa(H.interestCohort) || xl || (xl = !0, xk("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9")); return oa(H.interestCohort) }, xl = !1, vl = Number("200");
        var Al = function (a, b) { var c = a.Hg, d = a.ah; a.zd && (Gg(c[R.Mb], !!c[R.M]) && Zg(zl, b), Wg(b), bh(zl, b), qh(b)); c[R.M] && ah(zl, c[R.M], c[R.xc], !!c[R.Nb], b.prefix); d && dh(["aw", "dc", "gb"]) }, Bl = function (a, b, c, d) { var e = a.dh, f = a.callback, g = a.Jg; if ("function" === typeof f) if (e === R.Xd && void 0 === g) { var l = d(b.prefix, c); 0 === l.length ? f(void 0) : 1 === l.length ? f(l[0]) : f(l) } else e === R.zh ? (T(65), Rf(b, !1), f(Mf[Of(b.prefix)])) : f(g) }, zl = ["aw", "dc", "gb"]; var Cl = !1; function Dl() { if (oa(Za.joinAdInterestGroup)) return !0; Cl || (xk(''), Cl = !0); return oa(Za.joinAdInterestGroup) }
        function El(a, b) { var c = void 0; try { c = H.querySelector('iframe[data-tagging-id="' + b + '"]') } catch (e) { } if (c) { var d = Number(c.dataset.loadTime); if (d && 6E4 > A() - d) { Pc("TAGGING", 9); return } } else try { if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) { Pc("TAGGING", 10); return } } catch (e) { } hb(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: A() }, c) };
        var Fl = function (a, b, c, d, e) { var f; if (f = !b && !a.m) { var g; if (g = !a.isGtmEvent) { var l = a.s.remoteConfig[R.Pb]; g = l ? "auto_detect" === l.mode || "selectors" === l.mode || "code" === l.mode : !1 } f = g } if (f) { var m = a.H(R.ya); if (null !== m) { var n; m && vb(m) ? n = m : n = gf(a.getRemoteConfig(R.Pb)); n && dl(a.I, n, { ub: e, Oa: c }, void 0, d) } } }, Gl = function (a, b) { },
            Hl = function (a, b) { a.la("google_gtm_url_processor", function (c) { b && (c = vh(c)); var d = c; return c = d }) }, Il = function (a, b) {
                a.Tb("gdpr_consent",
                    Qk()); a.Tb("gdpr", Rk()); id() && a.m && (a.P("gcs", yd()), jd() && a.P("gcd", "G1" + qd(gd)), b && a.P("gcu", "1"))
            }, Jl = function (a, b) { var c; if (!(c = b)) if ("false" !== Se.hh && Xe) if (Ye) c = !0; else { var d = Ae("AW-" + a.I); c = !!d && !!d.preAutoPii } else c = !1; if (c) { var e = A(), f = df(); if (0 !== f.elements.length) { for (var g = [], l = [], m = [], n = 0; n < f.elements.length; ++n) { var p = f.elements[n]; g.push(p.querySelector); var q = p.tagName + ":" + p.isVisible + ":" + p.Va.length + ":" + $e.test(p.Va); l.push(q); } var r = A(); a.P("ec_sel", g.join(",")); a.P("ec_meta", l.join(",")); a.P("ec_lat", String(r - e)); a.P("ec_s", f.status); } } }, Kl = function (a) {
                if (!a.m) a.H(R.X) && a.la("google_gtag_event_data", { items: a.H(R.X) }); else if (a.eventName == R.oa) {
                    a.Gc({
                        google_conversion_merchant_id: a.H(R.ce), google_basket_feed_country: a.H(R.ae),
                        google_basket_feed_language: a.H(R.be), google_basket_discount: a.H(R.$d), google_basket_transaction_type: a.eventName, google_disable_merchant_reported_conversions: !0 === a.H(R.vf)
                    }); Vj() && a.la("google_disable_merchant_reported_conversions", !0); var b; var c = a.H(R.X); if (c) { for (var d = [], e = 0; e < c.length; ++e) { var f = c[e]; f && d.push({ item_id: f.id, quantity: f.quantity, value: f.price, start_date: f.start_date, end_date: f.end_date }) } b = d } else b = void 0; var g = b; g && a.la("google_conversion_items", g)
                }
            }, Ll = function (a) {
                var b; var c =
                    {}; a.isGtmEvent ? !a.m && a.eventName && (c.event = a.eventName) : c.event = a.eventName; var d = a.s.eventModel; if (d) { P(d, c); for (var e in c) c.hasOwnProperty(e) && R.jf[e.split(".")[0]] && delete c[e]; b = c } else b = null; var f = b; f && a.la("google_custom_params", f)
            }, Ml = function (a) { Vj() && (a.la("opt_image_generator", function () { return new Image }), a.la("google_enable_display_cookie_match", !1)) }, Nl = function (a) {
                var b, c = !1; c = !0 === G._gtmpcm ? !0 : sh("14.1.1");
                (b = c) && a.Ub("apcm"); if (!a.isGtmEvent) {
                    var d = wh(); 0 === d ? a.Tb("dg",
                        "c") : 1 === d && a.Tb("dg", "e")
                }
            }, Ol = function (a, b) { var c = Sj(a, "/pagead/conversion_async.js"); if (c) return c; var d = Xj("https://", "http://", "www.googleadservices.com"), e = !b.isGtmEvent && 1 === wh(); if (xh() || e) d = "https://www.google.com"; return d + "/pagead/conversion_async.js" }, Pl = !1, Ql = !1; var Rl = !1;
        var Sl = !1; var Tl = [], Ul = function (a) { var b = G.google_trackConversion, c = a.o.gtm_onFailure; "function" == typeof b ? b(a.o) || c() : c() }, Vl = function () { for (; 0 < Tl.length;)Ul(Tl.shift()) }, Wl = function (a, b) {
            var c = Pl; Ql && (c = b.getContainerTypeLoaded("AW")); if (!c) {
                Pl = !0; vj(); var d = function () { Ql && b.setContainerTypeLoaded("AW", !0); Vl(); Tl = { push: Ul } }; Vj() ? d() : fb(a, d, function () {
                    Vl(); Pl = !1; Ql && b.setContainerTypeLoaded("AW",
                        !1)
                })
            }
        }, Xl = function (a, b, c) { var d = hl(a); !d && c.isGtmEvent && (d = this.fj(a)); this.O = a; this.I = d.J[0] || ""; this.V = d.containerId === d.id; this.C = d.J[1]; this.m = void 0 !== this.C; this.eventName = b; this.isGtmEvent = c.isGtmEvent; this.s = c; this.o = { google_conversion_id: this.I, google_conversion_label: this.C, google_conversion_format: "3", google_conversion_color: "ffffff", google_conversion_domain: "", google_gtm: sk() } }; h = Xl.prototype; h.fj = function (a) {
            var b = a.indexOf("/"), c = 3 <= b, d = a.substring(3, c ? b : a.length); return {
                id: a, prefix: "AW",
                containerId: "AW-" + d, J: [d, c ? a.substring(b + 1) : void 0]
            }
        }; h.la = function (a, b) { this.o[a] = b }; h.sj = function () { delete this.o.google_transport_url }; h.Gc = function (a) { for (var b in a) a.hasOwnProperty(b) && (this.o[b] = a[b]) }; h.P = function (a, b) { void 0 != b && "" !== b && (this.o.google_additional_conversion_params = this.o.google_additional_conversion_params || {}, this.o.google_additional_conversion_params[a] = b) }; h.Tb = function (a, b) {
            void 0 != b && "" !== b && (this.o.google_additional_params = this.o.google_additional_params || {}, this.o.google_additional_params[a] =
                b)
        }; h.Ub = function (a) { this.o.google_gtm_experiments = this.o.google_gtm_experiments || {}; this.o.google_gtm_experiments[a] = !0 }; h.H = function (a) { return this.s.getWithConfig(a) }; h.getRemoteConfig = function (a) { return this.s.remoteConfig[a] }; var $l = function (a, b, c, d) {
            function e(F, M) {
                function I() { Tl.push(F); Ql && d.getContainerTypeLoaded("AW") && Vl() } var N = []; if (M) { F.m && m && (Rf(C), F.P("auid", Mf[Of(n)])); var K = (g(R.ie) || {})[F.C]; Jl(F, th(K)); var V = !0 === g(R.$c) || K; if (F.m && V && (!Sl || !rh())) { var S = uh(K); S && N.push(S.then(function (Q) { F.P("em", Q.Kd); F.P("ec_mode", Q.vg) })) } } if (N.length) try {
                    Promise.all(N).then(function () { I() });
                    return
                } catch (Q) { } I()
            } var f = new Xl(a, b, d), g = function (F) { return d.getWithConfig(F) }, l = void 0 != g(R.aa) && !1 !== g(R.aa), m = !1 !== g(R.sa), n = g(R.Ja) || g(R.Ca), p = g(R.ja), q = g(R.va), r = g(R.Ka), u = {}; if (!Rl) { var t = d.getMergedValues(R.T); u.sg = Ma(vb(t) ? t : {}) } var v = d.getMergedValues(R.T, 1), y = d.getMergedValues(R.T, 2); u.Gd = Ma(vb(v) ? v : {}, "."); u.Cd = Ma(vb(y) ? y : {}, "."); var x = g(R.xa), w = Ol(x, f); Wl(w, d); var C = { prefix: n, domain: p, zb: q, flags: r }, z = b == R.Ba; if (z && Zl(f, m, C, l, u), b === R.Ia) {
                var B = {}; B.callback =
                    f.H(R.ab); var D = f.H(R.Ra); B.dh = D; B.Jg = f.H(String(D)); Bl(B, C, l, mh); return
            } var E = !1 === g(R.ob) || !1 === g(R.wa); if (!z || !f.m && !E) if (!0 === g(R.Zd) && (f.m = !1), !1 !== g(R.W) || f.m) {
                f.Gc({ google_remarketing_only: !f.m, google_conversion_language: f.H(R.eb), google_conversion_value: f.H(R.fa), google_conversion_currency: f.H(R.ca), google_conversion_order_id: f.H(R.fb), google_user_id: f.H(R.Da), google_conversion_page_url: f.H(R.Sa), google_conversion_referrer_url: f.H(R.La) }); f.Gc({
                    onload_callback: f.s.onSuccess,
                    gtm_onFailure: f.s.onFailure
                }); Nl(f); f.m && f.la("google_transport_url", Rj(f.H(R.xa), "/")); f.la("google_restricted_data_processing", f.H(R.zc)); Ml(f); !1 === f.H(R.W) && f.la("google_allow_ad_personalization_signals", !1); m ? f.Gc({ google_gcl_cookie_prefix: C.prefix, google_gcl_cookie_domain: C.domain, google_gcl_cookie_max_age_seconds: C.zb, google_gcl_cookie_flags: C.flags }) : f.la("google_read_gcl_cookie_opt_out", !0); Ll(f); Kl(f); "1" === xg(!1)._up && f.P("gtm_up", "1"); f.m && (f.P("vdnc", f.H(R.pe)), f.P("vdltv", f.H(R.de)));
                Il(f); f.m && (f.P("delopc", f.H(R.jd)), f.P("oedeld", f.H(R.je)), f.P("delc", f.H(R.ad)), f.P("shf", f.H(R.he)), f.P("iedeld", yh(f.H(R.X)))); Rl || f.P("did", u.sg), f.P("gdid", u.Gd), f.P("edid", u.Cd); Hl(f, l); Gl(f, C); Fl(f, z, l, u, C); id() ? Ad(function () {
                    Il(f); var F = xd(R.D); if (f.m) {
                        var M = !1; M = !0;
                        F || x || !l && !M || f.la("google_transport_url", "https://pagead2.googlesyndication.com/"); e(f, F)
                    } else if (F) { e(f, F); return } F || zd(function () { var I = new Xl(a, f.eventName, d); I.m = f.m; I.Gc(P(f.o)); Hl(I, l); !x && I.o.google_transport_url && I.sj(); Il(I, !0); e(I, !0) }, R.D)
                }, [R.D]) : e(f, !0)
            }
        }; var Zl = function (a, b, c, d, e) {
            var f = a.H(R.Kb), g = a.H(R.ka) || {}, l = a.H(R.hb); Al({ zd: b, wi: f, Hg: g, ah: l }, c); ul(a.O, a.s); var m = { Ie: !1, Oa: d, O: a.O, eventId: a.s.eventId, ub: b ? c : void 0, Jd: b, Ad: "" }; Rl ? m.Ad = void 0 : m.Ad =
                e.sg || ""; m.Wb = e.Gd; m.Vb = e.Cd; Xk(m); !a.isGtmEvent && a.V && 0 < a.s.getEventModelKeys().length && (T(68), 1 < U.configCount && T(69))
        }; var mm = function (a, b, c) { this.s = a; this.eventName = b; this.m = c; this.o = {}; this.metadata = {}; this.I = !1 }, nm = function (a, b, c) { var d = a.m.getWithConfig(b); void 0 !== d ? a.o[b] = d : void 0 !== c && (a.o[b] = c) }, om = function (a, b, c) { var d = Ae(a.s); return d && d.hasOwnProperty(b) ? d[b] : c }; function pm(a) { return { getDestinationId: function () { return a.s }, getEventName: function () { return a.eventName }, setEventName: function (b) { return void (a.eventName = b) }, getHitData: function (b) { return a.o[b] }, setHitData: function (b, c) { return void (a.o[b] = c) }, setHitDataIfNotDefined: function (b, c) { void 0 === a.o[b] && (a.o[b] = c) }, copyToHitData: function (b, c) { nm(a, b, c) }, getMetadata: function (b) { return a.metadata[b] }, setMetadata: function (b, c) { return void (a.metadata[b] = c) }, abort: function () { return void (a.I = !0) }, getProcessedEvent: function () { return a } } }
        ; var Nm = function () { var a = !0; Sk(7) && Sk(9) && Sk(10) || (a = !1); return a }, Om = function () { var a = !0; Sk(3) && Sk(4) || (a = !1); return a }; var In = !1; var Jn = null, Kn = !1; function Ln(a) { return Kn && !a ? Jn = Jn || new Mn : U.gcq = U.gcq || new Mn }
        var Nn = function (a, b, c) { Ln().register(a, b, c) }, On = function (a, b, c, d) { Ln().push("event", [b, a], c, d) }, Pn = function (a, b) { Ln().push("config", [a], b) }, Qn = function (a, b, c, d) { Ln().push("get", [a, b], c, d) }, Rn = {}, Sn = function () { this.status = 1; this.containerConfig = {}; this.targetConfig = {}; this.remoteConfig = {}; this.o = {}; this.s = null; this.claimed = this.m = !1 }, Tn = function (a, b, c, d, e) { this.type = a; this.s = b; this.O = c || ""; this.m = d; this.o = e }, Mn = function () { this.o = {}; this.s = {}; this.m = []; this.C = { AW: !1, UA: !1 } }, Un = function (a, b) {
            var c = hl(b);
            return a.o[c.containerId] = a.o[c.containerId] || new Sn
        }, Vn = function (a, b, c, d) {
            if (b) {
                var e = hl(b); if (e && 1 === Un(a, b).status) {
                    Un(a, b).status = 2; var f = {}; ti && (f.timeoutId = G.setTimeout(function () { T(38); Wh() }, 3E3)); a.push("require", [f], e.containerId); Rn[e.containerId] = A(); if (Vj()) { } else if (Yj) In &&
                        2 === d ? bk(e.containerId, c) : ak(e.containerId, c, !0); else { var l = "/gtag/js?id=" + encodeURIComponent(e.containerId) + "&l=" + Zd.U + "&cx=c"; Uj() && (l += "&sign=" + Zd.Sb); var m = ("http:" != G.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + l), n = Sj(c, l) || m; fb(n) }
                }
            }
        }, Wn = function (a, b, c, d) {
            if (d.O) {
                var e = Un(a, d.O), f = e.s; if (f) {
                    var g = P(c), l = P(e.targetConfig[d.O]), m = P(e.containerConfig), n = P(e.remoteConfig), p = P(a.s), q = {};
                    try { q = P(qe) } catch (y) { T(72) } var r = te("gtm.uniqueEventId"), u = hl(d.O).prefix, t = Fa(function () { var y = g[R.Lb]; y && J(y) }), v = lk(kk(mk(jk(hk(gk(ik(fk(ek(dk(g), l), m), n), p), q), function () { Gi(r, u, "2"); t() }), function () { Gi(r, u, "3"); t() }), function (y, x) { a.C[y] = x }), function (y) { return a.C[y] });
                    try { Gi(r, u, "1"), Qi(d.type, d.O, v); f(d.O, b, d.s, v) } catch (y) { Gi(r, u, "4"); }
                }
            }
        }; h = Mn.prototype;
        h.register = function (a, b, c) { var d = Un(this, a); if (3 !== d.status) { d.s = b; d.status = 3; c && (P(d.remoteConfig, c), d.remoteConfig = c); var e = hl(a), f = Rn[e.containerId]; if (void 0 !== f) { var g = U[e.containerId].bootstrap, l = e.prefix.toUpperCase(); U[e.containerId]._spx && (l = l.toLowerCase()); var m = te("gtm.uniqueEventId"), n = l, p = A() - g; if (ti && !ai[m]) { m !== Xh && (Sh(), Xh = m); var q = n + "." + Math.floor(g - f) + "." + Math.floor(p); hi = hi ? hi + "," + q : "&cl=" + q } delete Rn[e.containerId] } this.flush() } };
        h.notifyContainerLoaded = function (a, b) { var c = this, d = function (f) { if (hl(f)) { var g = Un(c, f); g.status = 3; g.claimed = !0 } }; d(a); for (var e = 0; e < b.length; e++)d(b[e]); this.flush() }; h.push = function (a, b, c, d) { if (void 0 !== c) { if (!hl(c)) return; Vn(this, c, b[0][R.xa] || this.s[R.xa], "event" === a ? 2 : 1); Un(this, c).m && (d = !1) } this.m.push(new Tn(a, Math.floor(A() / 1E3), c, b, d)); d || this.flush() }; h.insert = function (a, b, c) { var d = Math.floor(A() / 1E3); 0 < this.m.length ? this.m.splice(1, 0, new Tn(a, d, c, b, !1)) : this.m.push(new Tn(a, d, c, b, !1)) };
        h.flush = function (a) {
            for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
                var f = this.m[0]; if (f.o) !f.O || Un(this, f.O).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift(); else {
                    var g = void 0; switch (f.type) {
                        case "require": g = Un(this, f.O); if (3 !== g.status && !a) { this.m.push.apply(this.m, c); return } ti && G.clearTimeout(f.m[0].timeoutId); break; case "set": xa(f.m[0], function (r, u) { P(Ka(r, u), b.s) }); break; case "config": g = Un(this, f.O); if (g.claimed) break; e.Pa = {}; xa(f.m[0], function (r) { return function (u, t) { P(Ka(u, t), r.Pa) } }(e)); var l =
                            !!e.Pa[R.ld]; delete e.Pa[R.ld]; var m = hl(f.O), n = m.containerId === m.id; l || (n ? g.containerConfig = {} : g.targetConfig[f.O] = {}); g.m && l || Wn(this, R.Ba, e.Pa, f); g.m = !0; delete e.Pa[R.rb]; n ? P(e.Pa, g.containerConfig) : (P(e.Pa, g.targetConfig[f.O]), T(70)); d = !0; break; case "event": g = Un(this, f.O); if (g.claimed) break; e.Vc = {}; xa(f.m[0], function (r) { return function (u, t) { P(Ka(u, t), r.Vc) } }(e)); Wn(this, f.m[1], e.Vc, f); break; case "get": if (g = Un(this, f.O), !g.claimed) { var p = {}, q = (p[R.Ra] = f.m[0], p[R.ab] = f.m[1], p); Wn(this, R.Ia, q, f) }
                    }this.m.shift();
                    Xn(this, f)
                } e = { Pa: e.Pa, Vc: e.Vc }
            } this.m.push.apply(this.m, c); d && this.flush()
        }; var Xn = function (a, b) { if ("require" !== b.type) if (b.O) for (var c = a.getCommandListeners(b.O)[b.type] || [], d = 0; d < c.length; d++)c[d](); else for (var e in a.o) if (a.o.hasOwnProperty(e)) { var f = a.o[e]; if (f && f.o) for (var g = f.o[b.type] || [], l = 0; l < g.length; l++)g[l]() } }; Mn.prototype.getRemoteConfig = function (a) { return Un(this, a).remoteConfig }; Mn.prototype.getCommandListeners = function (a) { return Un(this, a).o }; var Yn = !1; var Zn = !1; var $n = function (a, b) { U.addDestinationToContainer ? U.addDestinationToContainer(a, b) : (U.pendingDestinationIds = U.pendingDestinationIds || [], U.pendingDestinationIds.push([a, b])) };
        var ao = {}, bo = {}, co = function (a) { U.addTargetToGroup ? U.addTargetToGroup(a) : (U.pendingDefaultTargets = U.pendingDefaultTargets || [], U.pendingDefaultTargets.push(a)) }, eo = function (a, b) { var c = bo[b] || []; c.push(a); bo[b] = c }, go = function () {
            U.addTargetToGroup = function (e) { fo(e, "default") }; U.addDestinationToContainer = function (e, f) { eo(e, f) }; var a = U.pendingDefaultTargets; delete U.pendingDefaultTargets; if (Array.isArray(a)) for (var b = 0; b < a.length; ++b)fo(a[b], "default"); var c = U.pendingDestinationIds; delete U.pendingDestinationIds;
            if (Array.isArray(c)) for (var d = 0; d < c.length; ++d)eo(c[d][0], c[d][1])
        }, fo = function (a, b) { b = b.toString().split(","); for (var c = 0; c < b.length; c++) { var d = ao[b[c]] || []; ao[b[c]] = d; 0 > d.indexOf(a) && d.push(a) } }, ho = function (a) { xa(ao, function (b, c) { var d = c.indexOf(a); 0 <= d && c.splice(d, 1) }) }; var ro = function (a) { var b = U.zones; return b ? b.getIsAllowedFn(Gh.F, a) : function () { return !0 } }, so = function (a) { var b = U.zones; return b ? b.isActive(Gh.F, a) : !0 }; var vo = function (a, b) {
            for (var c = [], d = 0; d < Yb.length; d++)if (a[d]) { var e = Yb[d]; var f = tj(b.tb); try { var g = Lj(d, { onSuccess: f, onFailure: f, terminate: f }, b, d); if (g) { var l = c, m = l.push, n = d, p = e["function"]; if (!p) throw "Error: No function name given for function call."; var q = ac[p]; m.call(l, { Xg: n, Og: q ? q.priorityOverride || 0 : 0, execute: g }) } else to(d, b), f() } catch (u) { f() } } c.sort(uo); for (var r = 0; r < c.length; r++)c[r].execute(); return 0 <
                c.length
        };
        function uo(a, b) { var c, d = b.Og, e = a.Og; c = d > e ? 1 : d < e ? -1 : 0; var f; if (0 !== c) f = c; else { var g = a.Xg, l = b.Xg; f = g > l ? 1 : g < l ? -1 : 0 } return f } function to(a, b) { if (!ti) return; var c = function (d) { var e = b.Te(Yb[d]) ? "3" : "4", f = fc(Yb[d][xb.Yf], b, []); f && f.length && c(f[0].index); zi(b.id, Yb[d], e); var g = fc(Yb[d][xb.ag], b, []); g && g.length && c(g[0].index) }; c(a); } var yo = !1, wo;
        var Do = function (a) {
            var b = A(), c = a["gtm.uniqueEventId"], d = a.event; if ("gtm.js" === d) { if (yo) return !1; yo = !0; } var g, l = !1; if (so(c)) g = ro(c); else { if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1; l = !0; g = ro(Number.MAX_SAFE_INTEGER) }
            yi(c, d); var m = a.eventCallback, n = a.eventTimeout, p = m; var q = { id: c, name: d, Te: Fh(g), Bj: [], Ig: function () { T(6) }, og: zo(), pg: Ao(c), tb: new Zi(p, n) }, r = kc(q); l && (r =
                Bo(r)); var u = vo(r, q), t = !1; uj(q.tb);
            "gtm.js" !== d && "gtm.sync" !== d || Fj(Gh.F); return Co(r, u) || t
        }; function Ao(a) { return function (b) { ti && (wb(b) || Hi(a, "input", b)) } } function zo() { var a = {}; a.event = xe("event", 1); a.ecommerce = xe("ecommerce", 1); a.gtm = xe("gtm"); a.eventModel = xe("eventModel"); return a } function Bo(a) { for (var b = [], c = 0; c < a.length; c++)a[c] && (ae[String(Yb[c][xb.sb])] && (b[c] = !0), void 0 !== Yb[c][xb.di] && (b[c] = !0)); return b }
        function Co(a, b) { if (!b) return b; for (var c = 0; c < a.length; c++)if (a[c] && Yb[c] && !be[String(Yb[c][xb.sb])]) return !0; return !1 } var Eo = "HA GF G UA AW DC".split(" "), Fo = !1, Go = !1, Ho = 0; function Io(a) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: ke() }); return a["gtm.uniqueEventId"] } function Jo() { if (Kn) return !1; Fo || U.gtagRegistered || (Fo = U.gtagRegistered = !0, go()); return Fo }
        var Ko = {
            config: function (a) { Io(a); if (2 > a.length || !k(a[1])) return; var b = {}; if (2 < a.length) { if (void 0 != a[2] && !vb(a[2]) || 3 < a.length) return; b = a[2] } var c = hl(a[1]); if (!c || Kn && c.id !== Gh.F) return; var d = Jo() || Kn; ho(c.id); fo(c.id, b[R.ne] || "default"); delete b[R.ne]; Go || T(43); if (d && -1 !== Eo.indexOf(c.prefix)) { "G" === c.prefix && (b[R.rb] = !0); delete b[R.Lb]; c.id === c.containerId && (U.configCount = ++Ho); Pn(b, c.id); return } we("gtag.targets." + c.id, void 0); we("gtag.targets." + c.id, P(b)); },
            consent: function (a) { if (3 === a.length) { T(39); var b = { eventId: Io(a), priorityId: a["gtm.priorityId"] }, c = a[1]; "default" === c ? ud(a[2]) : "update" === c && wd(a[2], b) } }, event: function (a) {
                var b = a[1]; if (!(2 > a.length) && k(b)) {
                    var c; if (2 < a.length) { if (!vb(a[2]) && void 0 != a[2] || 3 < a.length) return; c = a[2] } var d = c, e = {}, f = (e.event = b, e); d && (f.eventModel = P(d), d[R.Lb] && (f.eventCallback = d[R.Lb]), d[R.dd] && (f.eventTimeout = d[R.dd])); var g = Io(a), l = a["gtm.priorityId"]; f["gtm.uniqueEventId"] = g; l && (f["gtm.priorityId"] = l);
                    if ("optimize.callback" === b) return f.eventModel = f.eventModel || {}, f; var m; var n = c && c[R.Ob]; void 0 === n && (n = te(R.Ob, 2), void 0 === n && (n = "default")); if (k(n) || qa(n)) {
                        for (var p = n.toString().replace(/\s+/g, "").split(","), q = [], r = 0; r < p.length; r++)if (0 <= p[r].indexOf("-")) Yn && Zn ? -1 < (bo[Gh.F] || []).indexOf(p[r]) && q.push(p[r]) : q.push(p[r]); else {
                            var u = ao[p[r]] || []; if (Yn) if (Zn) { if (-1 < u.indexOf(Gh.F)) { var t = bo[Gh.F]; t && t.length && (q = q.concat(t)) } } else for (var v = 0; v < u.length; v++) { var y = bo[u[v]]; y && y.length && (q = q.concat(y)) } else u &&
                                u.length && (q = q.concat(u))
                        } m = jl(q)
                    } else m = void 0; var x = m; if (!x) return; for (var w = Jo() || Kn, C = [], z = 0; w && z < x.length; z++) { var B = x[z]; if (-1 !== Eo.indexOf(B.prefix)) { var D = P(c); "G" === B.prefix && (D[R.rb] = !0); delete D[R.Lb]; On(b, D, B.id) } C.push(B.id) } f.eventModel = f.eventModel || {}; 0 < x.length ? f.eventModel[R.Ob] = C.join() : delete f.eventModel[R.Ob]; Go || T(43); return f
                }
            }, get: function (a) {
                T(53); if (4 !== a.length || !k(a[1]) || !k(a[2]) || !oa(a[3])) return; var b = hl(a[1]),
                    c = String(a[2]), d = a[3]; if (!b) return; Go || T(43); if (Kn) { if (-1 === Ih().indexOf(b.id)) return } else if (!Jo()) return; if (-1 === Eo.indexOf(b.prefix)) return; Io(a); var e = {}; od(P((e[R.Ra] = c, e[R.ab] = d, e))); Qn(c, function (f) { J(function () { return d(f) }) }, b.id);
            }, js: function (a) { if (2 == a.length && a[1].getTime) { Go = !0; Jo(); var b = {}; return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Io(a), b } }, policy: function () { }, set: function (a) {
                var b; 2 == a.length && vb(a[1]) ? b = P(a[1]) : 3 == a.length &&
                    k(a[1]) && (b = {}, vb(a[2]) || qa(a[2]) ? b[a[1]] = P(a[2]) : b[a[1]] = a[2]); if (b) { var c = Io(a), d = a["gtm.priorityId"]; P(b); if (Jo() || Kn) { var e = P(b); Ln().push("set", [e]) } b["gtm.uniqueEventId"] = c; d && (b["gtm.priorityId"] = d); b._clear = !0; return b }
            }
        }, Lo = { policy: !0 }; var fp = function (a) { if (Mo(a)) return a; this.m = a }; fp.prototype.getUntrustedMessageValue = function () { return this.m }; var Mo = function (a) { return !a || "object" !== tb(a) || vb(a) ? !1 : "getUntrustedMessageValue" in a }, gp = function (a) { if (Mo(a)) return a.getUntrustedMessageValue() }; fp.prototype.getUntrustedMessageValue = fp.prototype.getUntrustedMessageValue;
        var ip = function () { var a = U.mb; a || (a = new hp, U.mb = a); return a }, hp = function () { this.m = []; this.o = [] }; hp.prototype.push = function (a, b, c) { var d = this.m.length + 1; Mo(a) && (a = gp(a) || a); a["gtm.uniqueEventId"] = b; a["gtm.priorityId"] = d; a = new fp(a); var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d }; this.m.push(e); for (var f = 0; f < this.o.length; f++)try { this.o[f](e) } catch (g) { } }; hp.prototype.listen = function (a) { this.o.push(a) }; hp.prototype.get = function () {
            for (var a = {}, b = 0; b < this.m.length; b++) {
                var c = this.m[b],
                d = a[c.notBeforeEventId]; d || (d = [], a[c.notBeforeEventId] = d); d.push(c)
            } return a
        }; var kp = function () { var a = jp; ip().listen(a) }, lp = function (a, b) { return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId }; var mp = function (a) { var b = G[Zd.U].hide; if (b && void 0 !== b[a] && b.end) { b[a] = !1; var c = !0, d; for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) { c = !1; break } c && (b.end(), b.end = null) } }, np = function (a) { var b = G[Zd.U], c = b && b.hide; c && c.end && (c[a] = !0) }; var op = !1, pp = []; function qp() { if (!op) { op = !0; for (var a = 0; a < pp.length; a++)J(pp[a]) } } var rp = function (a) { op ? J(a) : pp.push(a) }; var Hp = 0, Ip = {}, Jp = [], Kp = [], Lp = !1, Mp = !1, Np = function (a) { return G[Zd.U].push(a) }, Op = function (a, b) { var c = U[Zd.U], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0; b && (g = G.setTimeout(function () { f || (f = !0, a()); g = void 0 }, b)); return function () { ++e === d && (g && (G.clearTimeout(g), g = void 0), f || (a(), f = !0)) } };
        function Pp(a) { var b = a._clear; xa(a, function (d, e) { "_clear" !== d && (b && we(d, void 0), we(d, e)) }); ge || (ge = a["gtm.start"]); var c = a["gtm.uniqueEventId"]; if (!a.event) return !1; c || (c = ke(), a["gtm.uniqueEventId"] = c, we("gtm.uniqueEventId", c)); return Do(a) } function Qp(a) { if (null == a || "object" !== typeof a) return !1; if (a.event) return !0; if (ya(a)) { var b = a[0]; if ("config" === b || "event" === b || "js" === b) return !0 } return !1 }
        function Rp() {
            for (var a = !1; !Mp && (0 < Jp.length || 0 < Kp.length);) {
                if (!Lp && Qp(Jp[0])) { var b = {}, c = (b.event = "gtm.init_consent", b), d = {}, e = (d.event = "gtm.init", d), f = Jp[0]["gtm.uniqueEventId"]; f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1); Jp.unshift(c, e); Lp = !0; } Mp = !0; delete qe.eventModel; se(); var n = null, p = void 0; if (Kp.length) { var q = Kp.shift(); n = q.message; p = q.debugContext } null ==
                    n && (n = Jp.shift()); if (null != n) {
                        var r = Mo(n); if (r) { n = gp(n); for (var u = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], t = 0; t < u.length; t++) { var v = u[t], y = te(v, 1); if (qa(y) || vb(y)) y = P(y); re[v] = y } } try {
                            if (oa(n)) try { n.call(ue) } catch (I) { } else if (qa(n)) { var x = n; if (k(x[0])) { var w = x[0].split("."), C = w.pop(), z = x.slice(1), B = te(w.join("."), 2); if (null != B) try { B[C].apply(B, z) } catch (I) { } } } else {
                                if (ya(n)) {
                                    a: {
                                        var D = n, E = p; if (D.length && k(D[0])) {
                                            var F = Ko[D[0]]; if (F && (!r || !Lo[D[0]])) {
                                                n = F(D,
                                                    E); break a
                                            }
                                        } n = void 0
                                    } if (!n) { Mp = !1; continue }
                                } a = Pp(n) || a; if (Qp(n)) { var M = n["gtm.uniqueEventId"]; void 0 !== M && (Sp(M), Hp = M) }
                            }
                        } finally { r && se(!0) }
                    } Mp = !1
            } return !a
        }
        function Tp() { var b = Rp(); try { mp(Gh.F) } catch (c) { } return b }
        var Sp = function (a) { for (var b = Ip[String(a)] || [], c = 0; c < b.length; c++)Kp.push(b[c]); b.length && Kp.sort(lp); delete Ip[String(a)] }, jp = function (a) { var b = a.notBeforeEventId; Hp < b ? (Ip[String(b)] = Ip[String(b)] || [], Ip[String(b)].push(a)) : (Kp.push(a), Kp.sort(lp), J(function () { Mp || Rp() })) };
        var Vp = function () {
            var a = ab(Zd.U, []), b = ab("google_tag_manager", {}); Ip = ip().get(), Sp(0), kp(); b = b[Zd.U] = b[Zd.U] || {}; Xi(function () { if (!b.gtmDom) { b.gtmDom = !0; var e = {}; a.push((e.event = "gtm.dom", e)) } }); rp(function () { if (!b.gtmLoad) { b.gtmLoad = !0; var e = {}; a.push((e.event = "gtm.load", e)) } }); b.subscribers = (b.subscribers || 0) + 1; var c = a.push; a.push = function () {
                var e; if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                    e =
                    []; for (var f = 0; f < arguments.length; f++)e[f] = new fp(arguments[f])
                } else e = [].slice.call(arguments, 0); Jp.push.apply(Jp, e); var g = c.apply(a, e); if (300 < this.length) for (T(4); 300 < this.length;)this.shift(); var l = "boolean" !== typeof g || g; return Rp() && l
            }; var d = a.slice(0); Jp.push.apply(Jp, d); if (Up()) {
                J(Tp)
            }
        }, Up = function () { var a = !0; return a }; function Wp(a) { if (null == a || 0 === a.length) return !1; var b = Number(a), c = A(); return b < c + 3E5 && b > c - 9E5 }; var Xp = {}; Xp.od = new String("undefined"); var xq = G.clearTimeout, yq = G.setTimeout, W = function (a, b, c, d) { if (Vj()) { b && J(b) } else return fb(a, b, c, d) }, zq = function () { return new Date }, Aq = function () { return G.location.href }, Bq = function (a) { return Oe(Qe(a), "fragment") }, Cq = function (a) { return Pe(Qe(a)) }, Dq = function (a, b) { return te(a, b || 2) }, Eq = function (a, b, c) { var d; b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Np(a)) : d = Np(a); return d }, Fq = function (a, b) { G[a] = b }, X = function (a, b,
            c) { b && (void 0 === G[a] || c && !G[a]) && (G[a] = b); return G[a] }, Gq = function (a, b, c) { return sf(a, b, void 0 === c ? !0 : !!c) }, Hq = function (a, b, c) { return 0 === Bf(a, b, c) }, Iq = function (a, b) { if (Vj()) { b && J(b) } else hb(a, b) }, Jq = function (a) { return !!dq(a, "init", !1) }, Kq = function (a) { bq(a, "init", !0) }, Lq = function (a, b, c) { ti && (wb(a) || Hi(c, b, a)) };

        var ir = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"]; function jr(a, b) { a = String(a); b = String(b); var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) === c } var kr = new va; function lr(a, b, c) { var d = c ? "i" : void 0; try { var e = String(b) + d, f = kr.get(e); f || (f = new RegExp(b, d), kr.set(e, f)); return f.test(a) } catch (g) { return !1 } }
        function mr(a, b) { function c(g) { var l = Qe(g), m = Oe(l, "protocol"), n = Oe(l, "host", !0), p = Oe(l, "port"), q = Oe(l, "path").toLowerCase().replace(/\/$/, ""); if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default"; return [m, n, p, q] } for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)if (d[f] !== e[f]) return !1; return !0 }
        function nr(a) { return or(a) ? 1 : 0 }
        function or(a) {
            var b = a.arg0, c = a.arg1; if (a.any_of && Array.isArray(c)) { for (var d = 0; d < c.length; d++) { var e = P(a, {}); P({ arg1: c[d], any_of: void 0 }, e); if (nr(e)) return !0 } return !1 } switch (a["function"]) {
                case "_cn": return 0 <= String(b).indexOf(String(c)); case "_css": var f; a: { if (b) try { for (var g = 0; g < ir.length; g++) { var l = ir[g]; if (b[l]) { f = b[l](c); break a } } } catch (m) { } f = !1 } return f; case "_ew": return jr(b, c); case "_eq": return String(b) === String(c); case "_ge": return Number(b) >= Number(c); case "_gt": return Number(b) > Number(c);
                case "_lc": return 0 <= String(b).split(",").indexOf(String(c)); case "_le": return Number(b) <= Number(c); case "_lt": return Number(b) < Number(c); case "_re": return lr(b, c, a.ignore_case); case "_sw": return 0 === String(b).indexOf(String(c)); case "_um": return mr(b, c)
            }return !1
        }; Object.freeze({ dl: 1, id: 1 }); Object.freeze(["config", "event", "get", "set"]); var tr = encodeURI, Y = encodeURIComponent, ur = ib; var vr = function (a, b) { if (!a) return !1; var c = Oe(Qe(a), "host"); if (!c) return !1; for (var d = 0; b && d < b.length; d++) { var e = b[d] && b[d].toLowerCase(); if (e) { var f = c.length - e.length; 0 < f && "." != e.charAt(0) && (f--, e = "." + e); if (0 <= f && c.indexOf(e, f) == f) return !0 } } return !1 };
        var wr = function (a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++)a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null }; function Us() { return G.gaGlobal = G.gaGlobal || {} } var Vs = function () { var a = Us(); a.hid = a.hid || ta(); return a.hid }, Ws = function (a, b) { var c = Us(); if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b }; var Ct = function () { if (oa(G.__uspapi)) { var a = ""; try { G.__uspapi("getUSPData", 1, function (b, c) { if (c && b) { var d = b.uspString; d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d) } }) } catch (b) { } return a } }; var iu = window, ju = document, ku = function (a) { var b = iu._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === iu["ga-disable-" + a]) return !0; try { var c = iu.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) { } for (var d = mf("AMP_TOKEN", String(ju.cookie), !0), e = 0; e < d.length; e++)if ("$OPT_OUT" == d[e]) return !0; return ju.getElementById("__gaOptOutExtension") ? !0 : !1 }; var lu = {}; function vu(a) { delete a.eventModel[R.rb]; Cu(a.eventModel) } var Cu = function (a) { xa(a, function (c) { "_" === c.charAt(0) && delete a[c] }); var b = a[R.Ea] || {}; xa(b, function (c) { "_" === c.charAt(0) && delete b[c] }) }; var Su = function (a, b, c) { On(b, c, a) }, Tu = function (a, b, c) { On(b, c, a, !0) }, Vu = function (a, b) { }; function Uu(a, b) { } var Z = { g: {} };




        Z.g.e = ["google"], function () { (function (a) { Z.__e = a; Z.__e.h = "e"; Z.__e.isVendorTemplate = !0; Z.__e.priorityOverride = 0 })(function (a) { return String(a.vtp_gtmCachedValues.event) }) }();

        Z.g.v = ["google"], function () { (function (a) { Z.__v = a; Z.__v.h = "v"; Z.__v.isVendorTemplate = !0; Z.__v.priorityOverride = 0 })(function (a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = Dq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue; Lq(d, "v", a.vtp_gtmEventId); return d }) }();
        Z.g.rep = ["google"], function () {
            var a = !1; (function (b) { Z.__rep = b; Z.__rep.h = "rep"; Z.__rep.isVendorTemplate = !0; Z.__rep.priorityOverride = 0 })(function (b) {
                var c = hl(b.vtp_containerId), d; switch (c.prefix) { case "AW": d = $l; break; case "DC": d = lm; break; case "GF": d = Em; break; case "HA": d = Jm; break; case "UA": d = hn; break; default: J(b.vtp_gtmOnFailure); return }J(b.vtp_gtmOnSuccess); if (a) {
                    var e = c.containerId,
                    f = bo[e] || []; Ln(!0).notifyContainerLoaded(e, f)
                } Nn(b.vtp_containerId, d, b.vtp_remoteConfig || {})
            });
        }();

        Z.g.cid = ["google"], function () { (function (a) { Z.__cid = a; Z.__cid.h = "cid"; Z.__cid.isVendorTemplate = !0; Z.__cid.priorityOverride = 0 })(function () { return Gh.F }) }();





        Z.g.get = ["google"], function () { (function (a) { Z.__get = a; Z.__get.h = "get"; Z.__get.isVendorTemplate = !0; Z.__get.priorityOverride = 0 })(function (a) { var b = a.vtp_settings; (a.vtp_deferrable ? Tu : Su)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {}); a.vtp_gtmOnSuccess() }) }();








        var Wu = {}; Wu.dataLayer = ue; Wu.callback = function (a) { ie.hasOwnProperty(a) && oa(ie[a]) && ie[a](); delete ie[a] }; Wu.bootstrap = 0; Wu._spx = !1;
        (function (a) {
            if (!G["__TAGGY_INSTALLED"]) { var b = !1; if (H.referrer) { var c = Qe(H.referrer); b = "cct.google" === Ne(c, "host") } if (!b) { var d = sf("googTaggyReferrer"); b = d.length && d[0].length } b && (G["__TAGGY_INSTALLED"] = !0, fb("https://cct.google/taggy/agent.js")) }
            var f = function (q) {
                var r = "GTM", u = "GTM"; r = "OGT", u = "GTAG"; var t = G["google.tagmanager.debugui2.queue"]; t || (t = [], G["google.tagmanager.debugui2.queue"] = t, fb("https://" + Zd.cc + "/debug/bootstrap?id=" + Gh.F + "&src=" + u + "&cond=" + q + "&gtm=" + sk())); var v = { messageType: "CONTAINER_STARTING", data: { scriptSource: $a, containerProduct: r, debug: !1, id: Gh.F } }; v.data.resume = function () { a() }; Zd.lh && (v.data.initialPublish =
                    !0); t.push(v)
            }, g = void 0, l = Oe(G.location, "query", !1, void 0, "gtm_debug"); Wp(l) && (g = 2); if (!g && H.referrer) { var m = Qe(H.referrer); "tagassistant.google.com" === Ne(m, "host") && (g = 3) } if (!g) { var n = sf("__TAG_ASSISTANT"); n.length && n[0].length && (g = 4) } if (!g) { var p = H.documentElement.getAttribute("data-tag-assistant-present"); Wp(p) && (g = 5) } g && $a ? f(g) : a()
        })(function () {
            var a = !1;
            a && wj("INIT"); Xc().o(); Pk(); Hg.enable_gbraid_cookie_write = !0; var b = !!U[Gh.F]; if (b) { var c = U.zones; c && c.unregisterChild(Gh.F); } else {
                for (var f = data.resource || {}, g = f.macros || [], l = 0; l < g.length; l++)Vb.push(g[l]); for (var m = f.tags || [], n = 0; n < m.length; n++)Yb.push(m[n]); for (var p = f.predicates || [], q = 0; q < p.length; q++)Xb.push(p[q]); for (var r = f.rules || [], u = 0; u < r.length; u++) {
                    for (var t = r[u], v = {}, y = 0; y < t.length; y++)v[t[y][0]] =
                        Array.prototype.slice.call(t[y], 1); Wb.push(v)
                } ac = Z; bc = nr; U[Gh.F] = Wu; Ha(je, Z.g); dc = lc; Vp(); Si = !1; Ti = 0; if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) Vi(); else {
                    jb(H, "DOMContentLoaded", Vi); jb(H, "readystatechange",
                        Vi); if (H.createEventObject && H.documentElement.doScroll) { var x = !0; try { x = !G.frameElement } catch (D) { } x && Wi() } jb(G, "load", Vi)
                } op = !1; "complete" === H.readyState ? qp() : jb(G, "load", qp); ti && G.setInterval(mi, 864E5);
                he = A(); Wu.bootstrap = he; if (a) { var B = xj("INIT"); }
            }
        });

    })()


    var Wu = {}; Wu.dataLayer = ue; Wu.callback = function (a) { ie.hasOwnProperty(a) && oa(ie[a]) && ie[a](); delete ie[a] }; Wu.bootstrap = 0; Wu._spx = !1;
    (function (a) {
        if (!G["__TAGGY_INSTALLED"]) { var b = !1; if (H.referrer) { var c = Qe(H.referrer); b = "cct.google" === Ne(c, "host") } if (!b) { var d = sf("googTaggyReferrer"); b = d.length && d[0].length } b && (G["__TAGGY_INSTALLED"] = !0, fb("https://cct.google/taggy/agent.js")) }
        var f = function (q) {
            var r = "GTM", u = "GTM"; r = "OGT", u = "GTAG"; var t = G["google.tagmanager.debugui2.queue"]; t || (t = [], G["google.tagmanager.debugui2.queue"] = t, fb("https://" + Zd.cc + "/debug/bootstrap?id=" + Gh.F + "&src=" + u + "&cond=" + q + "&gtm=" + sk())); var v = { messageType: "CONTAINER_STARTING", data: { scriptSource: $a, containerProduct: r, debug: !1, id: Gh.F } }; v.data.resume = function () { a() }; Zd.lh && (v.data.initialPublish =
                !0); t.push(v)
        }, g = void 0, l = Oe(G.location, "query", !1, void 0, "gtm_debug"); Wp(l) && (g = 2); if (!g && H.referrer) { var m = Qe(H.referrer); "tagassistant.google.com" === Ne(m, "host") && (g = 3) } if (!g) { var n = sf("__TAG_ASSISTANT"); n.length && n[0].length && (g = 4) } if (!g) { var p = H.documentElement.getAttribute("data-tag-assistant-present"); Wp(p) && (g = 5) } g && $a ? f(g) : a()
    })(function () {
        var a = !1;
        a && wj("INIT"); Xc().o(); Pk(); Hg.enable_gbraid_cookie_write = !0; var b = !!U[Gh.F]; if (b) { var c = U.zones; c && c.unregisterChild(Gh.F); } else {
            for (var f = data.resource || {}, g = f.macros || [], l = 0; l < g.length; l++)Vb.push(g[l]); for (var m = f.tags || [], n = 0; n < m.length; n++)Yb.push(m[n]); for (var p = f.predicates || [], q = 0; q < p.length; q++)Xb.push(p[q]); for (var r = f.rules || [], u = 0; u < r.length; u++) {
                for (var t = r[u], v = {}, y = 0; y < t.length; y++)v[t[y][0]] =
                    Array.prototype.slice.call(t[y], 1); Wb.push(v)
            } ac = Z; bc = nr; U[Gh.F] = Wu; Ha(je, Z.g); dc = lc; Vp(); Si = !1; Ti = 0; if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) Vi(); else {
                jb(H, "DOMContentLoaded", Vi); jb(H, "readystatechange",
                    Vi); if (H.createEventObject && H.documentElement.doScroll) { var x = !0; try { x = !G.frameElement } catch (D) { } x && Wi() } jb(G, "load", Vi)
            } op = !1; "complete" === H.readyState ? qp() : jb(G, "load", qp); ti && G.setInterval(mi, 864E5);
            he = A(); Wu.bootstrap = he; if (a) { var B = xj("INIT"); }
        }
    });

})()