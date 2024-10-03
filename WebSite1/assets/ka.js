var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    String.prototype.format = function () { var s = this, i = arguments.length; while (i--) { s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]); } return s; };
    function getFileName(url) {
        if (url) {
            return url.match(/[-_\w]+[.][\w]+$/i)[0];
        }
        return "";
    }
    jQuery.fn.center = function (parent) {
        if (typeof parent == "undefined")
            parent = $(window);
        this.css("position", "absolute");
        this.css("top", ((parent.height() - this.outerHeight()) / 2) + parent.scrollTop() + "px");
        this.css("left", ((parent.width() - this.outerWidth()) / 2) + parent.scrollLeft() + "px");
        if (this.position().top < 0) {
            this.css("top", "10px");
        }
        return this;
    }
    jQuery.fn.setPos = function (pos) {
        this.css("position", "absolute");
        this.css("top", pos.top + "px");
        this.css("left", pos.left + "px");
        return this;
    };
    jQuery.fn.defaultOverlay = function (params) {
        this.overlay({
            expose: { color: '#fff', loadSpeed: 100, opacity: 0.5 },
            closeOnClick: false,
            fixed: false,
            api: true
        }).load();
        this.css('display', 'block');
        this.center();
    }

    function calculateAge(birth_month, birth_year) {
        var d = new Date();
        var y = d.getYear() + 1900;
        var m = d.getMonth() + 1;
        var age = y - parseInt(birth_year);
        if (m < parseInt(birth_month)) {
            age--;
        }
        if (age >= 1900)
            age = age - 1900;
        return age;
    }

    jQuery.cookie = function (name, value, options) {
        if (typeof value != 'undefined') {
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
            }
            var path = options.path ? '; path=' + (options.path) : '';
            var domain = options.domain ? '; domain=' + (options.domain) : '';
            var secure = options.secure ? '; secure' : '';
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        } else {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    };

    jQuery.fn.log = function (msg) {
        if (typeof console === "undefined" || typeof console.log === "undefined") {
            console = {};
            console.log = function () { };
        }
        console.log("%s: %o", msg, this);
        return this;
    };
    function getGameWinSize() {
        var s = {};
        s.width = (screen.width > 1224) ? 1224 : 1024;
        s.height = (screen.height > 918) ? 918 : 768;
        if (s.height == 768 || s.width == 1024) {
            s.height = 1024;
            s.width = 768;
        }
        return s;
    }
    function openDialog(p, onclose) {
        var params = {
            expose: { color: '#fff', loadSpeed: 100, opacity: 0.5 },
            closeOnClick: false,
            fixed: false,
            api: true
        }
        if (onclose)
            params.onClose = onclose;
        p.overlay(params).load();
        p.css('display', 'block');
        p.center();
    }

}
/*
     FILE ARCHIVED ON ﻿22:57:32 Jun 24, 2023﻿ AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON ﻿23:20:48 Oct 02, 2024﻿.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
 playback timings (ms):
    captures_list﻿: ﻿1.399﻿ (﻿2﻿)
    exclusion.robots﻿: ﻿0.031﻿ (﻿2﻿)
    exclusion.robots.policy﻿: ﻿0.017﻿ (﻿2﻿)
    esindex﻿: ﻿0.016﻿ (﻿2﻿)
    cdx.remote﻿: ﻿22.722﻿ (﻿2﻿)
    LoadShardBlock﻿: ﻿206.066﻿ (﻿6﻿)
    PetaboxLoader3.datanode﻿: ﻿240.447﻿ (﻿8﻿)
    PetaboxLoader3.resolve﻿: ﻿70.184﻿ (﻿2﻿)
    load_resource﻿: ﻿147.381﻿ (﻿2﻿)
 */