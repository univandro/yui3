YUI.add("axis-category",function(e,t){e.CategoryAxis=e.Base.create("categoryAxis",e.Axis,[e.CategoryImpl],{getMinimumValue:function(){var e=this.get("data"),t=e[0];return t},getMaximumValue:function(){var e=this.get("data"),t=e.length-1,n=e[t];return n},_getLabelByIndex:function(e,t,n){var r,i=this.get("data");return n&&n=="vertical"?r=i[t-(e+1)]:r=i[e],r}})},"@VERSION@",{requires:["axis","axis-category-base"]});
