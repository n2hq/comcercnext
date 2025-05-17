(()=>{var e={};e.id=237,e.ids=[237],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},10859:(e,t,r)=>{"use strict";r.d(t,{P:()=>n});var s=r(46101);let i=global.mysqlPool||null;async function o(){return i.getConnection()}async function n(e,t=[]){let r=await o();try{let[s]=await r.execute(e,t);return r.commit(),s}finally{r.release()}}i||(i=global.mysqlPool=s.createPool({host:"localhost",port:Number("3306")||3306,user:"comvoinh_dbdirtest",password:"Querty123$$$$",database:"comvoinh_dbdirtest",waitForConnections:!0,connectionLimit:10,queueLimit:0}))},19771:e=>{"use strict";e.exports=require("process")},27910:e=>{"use strict";e.exports=require("stream")},28303:e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=28303,e.exports=t},28354:e=>{"use strict";e.exports=require("util")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31812:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>_,routeModule:()=>d,serverHooks:()=>m,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>p});var s={};r.r(s),r.d(s,{GET:()=>c});var i=r(96559),o=r(48088),n=r(37719),a=r(32190),u=r(10859);async function c(e){try{let{searchParams:t}=new URL(e.url),r=t.get("q");(""===r||null==r)&&(r="");let s=await (0,u.P)(`SELECT DISTINCT
            d.*,
            co.name AS country_name,
            st.name AS state_name,
            ci.name AS city_name,
            b.image_url AS image_url 
            FROM tbl_dir d
            LEFT JOIN tbl_country co ON d.country_code = co.iso2
            LEFT JOIN tbl_state st ON d.state_code = st.iso2
            LEFT JOIN tbl_city ci ON d.city_id = ci.id
            LEFT JOIN tbl_business_profile_image b ON d.gid = b.business_guid
            WHERE 
            (d.title RLIKE ?
            OR d.short_description RLIKE ?
            OR d.category RLIKE ?
            )
            GROUP BY 
            d.gid
            ORDER BY
            d.date_created
            ASC
            LIMIT 0, 50`,[r,r,r]);if((""===r||null==r)&&(s=await (0,u.P)(`SELECT DISTINCT
                d.*,
                co.name AS country_name,
                st.name AS state_name,
                ci.name AS city_name,
                b.image_url AS image_url 
                FROM tbl_dir d
                LEFT JOIN tbl_country co ON d.country_code = co.iso2
                LEFT JOIN tbl_state st ON d.state_code = st.iso2
                LEFT JOIN tbl_city ci ON d.city_id = ci.id
                LEFT JOIN tbl_business_profile_image b ON d.gid = b.business_guid
                GROUP BY 
                d.gid
                ORDER BY
                d.date_created
                ASC
                LIMIT 0, 50`)),s.length<=0)return a.NextResponse.json([],{status:200});return a.NextResponse.json(s,{status:200})}catch(e){return a.NextResponse.json({message:e.message},{status:500})}}let d=new i.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/listing/search/route",pathname:"/api/listing/search",filename:"route",bundlePath:"app/api/listing/search/route"},resolvedPagePath:"/Users/eth/ge/reactapps/dirnext/app/api/listing/search/route.tsx",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:p,serverHooks:m}=d;function _(){return(0,n.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:p})}},34631:e=>{"use strict";e.exports=require("tls")},41204:e=>{"use strict";e.exports=require("string_decoder")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55511:e=>{"use strict";e.exports=require("crypto")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},66136:e=>{"use strict";e.exports=require("timers")},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79428:e=>{"use strict";e.exports=require("buffer")},79551:e=>{"use strict";e.exports=require("url")},91645:e=>{"use strict";e.exports=require("net")},94735:e=>{"use strict";e.exports=require("events")},96487:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,580,101],()=>r(31812));module.exports=s})();