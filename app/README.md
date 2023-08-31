HTTP запросы по CRUD операциям:

1.  вывод страницы Home
    GET /
2.  отправка формы со страницы AddRestaurant
    POST /addrest
3.  вывод на странице Restaurants карточек с ресторанами
    GET /restaurants
4.  редактировние карточки ресторана
    PUT /restaurants/restaurant-edit/${id} // указваю id, так как нужен конкретный ресторан
5.  переход на карту ресторана
    GET /restaurants/restaurant-map/${id} // указваю id, так как нужен конкретный ресторан
6.  удаление карточки ресторана  
    DELETE /restaurants/${id} // тут предполагаю, что нужно по id найти ресторан, т.е. то, что надо удалить
7.  страница ToMap
    GET /tomap
