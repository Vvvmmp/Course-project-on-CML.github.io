ymaps.ready(init);

function init() {
  const address = "пр. Пушкина, 44";
  
  ymaps.geocode(address, {
    results: 1
  }).then(function (res) {
    const coordinates = res.geoObjects.get(0).geometry.getCoordinates();

    const map = new ymaps.Map("map", {
      center: coordinates,
      zoom: 14
    });

    const placemark = new ymaps.Placemark(coordinates, {
      hintContent: address,
    });

    map.geoObjects.add(placemark);
  });
}