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