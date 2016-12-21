(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.json2html = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Converts object in json format to html using transform object.
 *
 * @param  {Object} obj
 * @param  {Object} transform
 * @param  {Object} path
 * @return {String}
 */
module.exports = function convert(obj, transform, path){
    return json2html(obj, transform, path);
};

function json2html(obj, transform, path){
    var transformObj = transform;
    var txt = '';
    for (var key in obj){
        if (obj.hasOwnProperty(key)){
                id = (!isNaN(path)?'':path)+(!isNaN(key)?'':key);
            if(isNaN(path)&&isNaN(key)) id = key;
            //var id = '';
            if('object' == typeof(obj[key])){
                    if(Array.isArray(obj[key])){
                    //id = path;
                  id = id+'_array';
                }else{
                    id = id+'_object';
                }
                var tag = (transform[id] == undefined?'div':transform[id].tag);
                    var tagclass = (transform[id] == undefined?'':transform[id].class);
                    var style = (transform[id] == undefined?'':transform[id].style);
                var tag_key = (transform[id+'_key'] == undefined?'div':transform[id+'_key'].tag);
                var tagclass_key = (transform[id+'_key'] == undefined?'':transform[id+'_key'].class);
                var style_key = (transform[id+'_key'] == undefined?'':transform[id+'_key'].style);
                var value_key = (transform[id+'_key'] == undefined?'':transform[id+'_key'].value);

                txt +=(transform[id+'_key'] != undefined?'<'+tag_key+' id="'+id+'_key" class="'+tagclass_key+'" style='+style_key+'>' + value_key + '</' + tag_key + '>':'');
                txt += '<'+tag+' id="'+id+'" class="'+tagclass+'" style='+style+'>' + json2html(obj[key], transformObj, key) + '</' + tag + '>';
            }else{
                    //id = key;
                    id = id+'_string';
                var tag = (transform[id] == undefined?'div':transform[id].tag);
                    var tagclass = (transform[id] == undefined?'':transform[id].class);
                    var style = (transform[id] == undefined?'':transform[id].style);
                txt +='<'+tag+' id="'+id+'" class="'+tagclass+'" style='+style+'>' + obj[key] + '</'+tag+'>';
            }
        }
    }
    return txt;
}
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ29udmVydHMgb2JqZWN0IGluIGpzb24gZm9ybWF0IHRvIGh0bWwgdXNpbmcgdHJhbnNmb3JtIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcclxuICogQHBhcmFtICB7T2JqZWN0fSB0cmFuc2Zvcm1cclxuICogQHBhcmFtICB7T2JqZWN0fSBwYXRoXHJcbiAqIEByZXR1cm4ge1N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29udmVydChvYmosIHRyYW5zZm9ybSwgcGF0aCl7XHJcbiAgICByZXR1cm4ganNvbjJodG1sKG9iaiwgdHJhbnNmb3JtLCBwYXRoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGpzb24yaHRtbChvYmosIHRyYW5zZm9ybSwgcGF0aCl7XHJcbiAgICB2YXIgdHJhbnNmb3JtT2JqID0gdHJhbnNmb3JtO1xyXG4gICAgdmFyIHR4dCA9ICcnO1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iail7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgIGlkID0gKCFpc05hTihwYXRoKT8nJzpwYXRoKSsoIWlzTmFOKGtleSk/Jyc6a2V5KTtcclxuICAgICAgICAgICAgaWYoaXNOYU4ocGF0aCkmJmlzTmFOKGtleSkpIGlkID0ga2V5O1xyXG4gICAgICAgICAgICAvL3ZhciBpZCA9ICcnO1xyXG4gICAgICAgICAgICBpZignb2JqZWN0JyA9PSB0eXBlb2Yob2JqW2tleV0pKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KG9ialtrZXldKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZCA9IHBhdGg7XHJcbiAgICAgICAgICAgICAgICAgIGlkID0gaWQrJ19hcnJheSc7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZCA9IGlkKydfb2JqZWN0JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0YWcgPSAodHJhbnNmb3JtW2lkXSA9PSB1bmRlZmluZWQ/J2Rpdic6dHJhbnNmb3JtW2lkXS50YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWdjbGFzcyA9ICh0cmFuc2Zvcm1baWRdID09IHVuZGVmaW5lZD8nJzp0cmFuc2Zvcm1baWRdLmNsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSAodHJhbnNmb3JtW2lkXSA9PSB1bmRlZmluZWQ/Jyc6dHJhbnNmb3JtW2lkXS5zdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFnX2tleSA9ICh0cmFuc2Zvcm1baWQrJ19rZXknXSA9PSB1bmRlZmluZWQ/J2Rpdic6dHJhbnNmb3JtW2lkKydfa2V5J10udGFnKTtcclxuICAgICAgICAgICAgICAgIHZhciB0YWdjbGFzc19rZXkgPSAodHJhbnNmb3JtW2lkKydfa2V5J10gPT0gdW5kZWZpbmVkPycnOnRyYW5zZm9ybVtpZCsnX2tleSddLmNsYXNzKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZV9rZXkgPSAodHJhbnNmb3JtW2lkKydfa2V5J10gPT0gdW5kZWZpbmVkPycnOnRyYW5zZm9ybVtpZCsnX2tleSddLnN0eWxlKTtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZV9rZXkgPSAodHJhbnNmb3JtW2lkKydfa2V5J10gPT0gdW5kZWZpbmVkPycnOnRyYW5zZm9ybVtpZCsnX2tleSddLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0eHQgKz0odHJhbnNmb3JtW2lkKydfa2V5J10gIT0gdW5kZWZpbmVkPyc8Jyt0YWdfa2V5KycgaWQ9XCInK2lkKydfa2V5XCIgY2xhc3M9XCInK3RhZ2NsYXNzX2tleSsnXCIgc3R5bGU9JytzdHlsZV9rZXkrJz4nICsgdmFsdWVfa2V5ICsgJzwvJyArIHRhZ19rZXkgKyAnPic6JycpO1xyXG4gICAgICAgICAgICAgICAgdHh0ICs9ICc8Jyt0YWcrJyBpZD1cIicraWQrJ1wiIGNsYXNzPVwiJyt0YWdjbGFzcysnXCIgc3R5bGU9JytzdHlsZSsnPicgKyBqc29uMmh0bWwob2JqW2tleV0sIHRyYW5zZm9ybU9iaiwga2V5KSArICc8LycgKyB0YWcgKyAnPic7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWQgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBpZCsnX3N0cmluZyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFnID0gKHRyYW5zZm9ybVtpZF0gPT0gdW5kZWZpbmVkPydkaXYnOnRyYW5zZm9ybVtpZF0udGFnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnY2xhc3MgPSAodHJhbnNmb3JtW2lkXSA9PSB1bmRlZmluZWQ/Jyc6dHJhbnNmb3JtW2lkXS5jbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gKHRyYW5zZm9ybVtpZF0gPT0gdW5kZWZpbmVkPycnOnRyYW5zZm9ybVtpZF0uc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgdHh0ICs9JzwnK3RhZysnIGlkPVwiJytpZCsnXCIgY2xhc3M9XCInK3RhZ2NsYXNzKydcIiBzdHlsZT0nK3N0eWxlKyc+JyArIG9ialtrZXldICsgJzwvJyt0YWcrJz4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR4dDtcclxufSJdfQ==
