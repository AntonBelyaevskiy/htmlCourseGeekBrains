ymaps.ready(init);
var myMap, 
    f1;
function init(){ 
    myMap = new ymaps.Map("map", {
        center: [52.516506, 103.880339],
        zoom: 15
        }); 
            
    f1 = new ymaps.Placemark([52.516633, 103.880972], {
        hintContent: 'вход с главной стороны здания'}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.png',
        iconImageSize: [75, 65],
    });          
        myMap.geoObjects.add(f1);

}
