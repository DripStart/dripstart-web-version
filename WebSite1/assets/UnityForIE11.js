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

    // fix IE11 integration: 

    if (CheckIfIE11()) {

        if (!HTMLDocument.prototype.attachEvent)
            HTMLDocument.prototype.attachEvent = HTMLElement.prototype.addEventListener;

        if (!HTMLDocument.prototype.detachEvent) {
            HTMLDocument.prototype.detachEvent = HTMLElement.prototype.detachEvent = function (sType, fHandler) {
                var shortTypeName = sType.replace(/on/, "");
                if (typeof fHandler._ieEmuEventHandler == "function")
                    this.removeEventListener(shortTypeName, fHandler._ieEmuEventHandler, false);
                else
                    this.removeEventListener(shortTypeName, fHandler, true);
            };
        }
    }

    function isIE11() {
        return !!navigator.userAgent.match(/Trident\/7\./);
    }

    function CheckIfIE11() {
        return !(window.ActiveXObject) && "ActiveXObject" in window;
    }

}
/*
     FILE ARCHIVED ON ﻿19:05:38 Aug 26, 2016﻿ AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON ﻿23:20:56 Oct 02, 2024﻿.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
 playback timings (ms):
    captures_list﻿: ﻿0.594﻿
    exclusion.robots﻿: ﻿0.024﻿
    exclusion.robots.policy﻿: ﻿0.012﻿
    esindex﻿: ﻿0.01﻿
    cdx.remote﻿: ﻿82.347﻿
    LoadShardBlock﻿: ﻿166.449﻿ (﻿3﻿)
    PetaboxLoader3.datanode﻿: ﻿166.025﻿ (﻿4﻿)
    load_resource﻿: ﻿76.832﻿
    PetaboxLoader3.resolve﻿: ﻿68.858﻿
 */