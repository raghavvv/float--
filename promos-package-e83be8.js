KAdefine("javascript/promos-package/promos.js", function(require, module, exports) {
var _require=require("../shared-package/khan-fetch.js")
var khanFetch=_require.khanFetch
var Promos={}
Promos.cache_={}
Promos.hasUserSeen=function(e,o,r,n){if(e in Promos.cache_){o.call(r,Promos.cache_[e])
return}khanFetch("/api/internal/user/promo/"+encodeURIComponent(e)).then(function(e){return e.json()}).then(function(n){n=n||!!Promos.cache_[e]
Promos.cache_[e]=n
o.call(r,n)},function(){var c=n==null?true:n
if(e in Promos.cache_){c=Promos.cache_[e]}o.call(r,c)})}
Promos.markAsSeen=function(e){Promos.cache_[e]=true
return khanFetch("/api/internal/user/promo/"+encodeURIComponent(e),{method:"POST"})}
module.exports=Promos
});
