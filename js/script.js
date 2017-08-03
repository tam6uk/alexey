    var link = document.querySelector(".login");//поиск кнопки
    var popup = document.querySelector(".modal_content");//поиск модального окна
    var overlay = document.querySelector(".modal_overlay");//поиск Overlay
    var close = popup.querySelector(".modal_content_close");//поиск кнопки закрытия
    var login = popup.querySelector(".user_log");//поиск поля ввода login
    var form = popup.querySelector(".login_form")//поиск формы
    var password = popup.querySelector(".user_pas");//поиск поля ввода password
    var storage = localStorage.getItem("login");//значение ллогина записываем в переменную
    var map_open = document.querySelectorAll(".map_btn");
    var map_popup = document.querySelector(".modal_content_map");
    var map_close = map_popup.querySelector(".modal_content_close");

        link.addEventListener("click", function(event) {//отлов события клика
            event.preventDefault(); //отмена стандартного дейстивия
            popup.classList.add("modal_content_show");//добавляем класс 
            overlay.classList.add("modal_overlay_show");
            if(storage) {
                login.value=storage; //значение логина записываем в поле логина при открытии модального окна, если значение существует
                password.focus(); // и фокус пароля
            } else {
                login.focus();//иначе фокус логина
            } 
            login.focus();
        });
          function show_map(map_open) { // сортировка елементов
              return Array.prototype.slice.call(map_open);
          }
        map_open.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            map_popup.classList.add("modal_content_map_show");
            overlay.classList.add("modal_overlay_show");
        });
    });
        map_close.addEventListener("click", function(event){
            event.preventDefault();
            map_popup.classList.remove("modal_content_map_show");
            overlay.classList.remove("modal_overlay_show");        
        });
        window.addEventListener("keydown", function(event){//отслеживание нажания кнопки клавиатуры
            if(event.keyCode===27) {//елси нажата кнопка esc
                if(map_popup.classList.contains("modal_content_map_show")) {//если открыто модальное окно
                    map_popup.classList.remove("modal_content_map_show");
                    overlay.classList.remove("modal_overlay_show");     
                }
            }
        })
        close.addEventListener("click", function(event) {//клик
            event.preventDefault();//отмена стандартного действия
            popup.classList.remove("modal_content_show");//удаление класса
            popup.classList.remove("modal_error");//удаление класса с анимацией ошибки
            overlay.classList.remove("modal_overlay_show");
        }); 
        form.addEventListener("submit", function(event){
            if(!login.value || !password.value) {//если не правильный ввод
                event.preventDefault();   
                popup.classList.remove("modal_error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal_error");//добавление класса с анимацией для ошибки
                if (!login.value) {
                    login.classList.add("invalid_input");
                 }
                if (!password.value) {
                  password.classList.add("invalid_input");
                 }
                if (login.value) {
                  login.classList.remove("invalid_input");
                 }
                if (password.value) {
                  password.classList.remove("invalid_input");
                }
            } else {
                localStorage.setItem("login", login.value);//добавить в LocalStorage Логин, если он правильно заполнен
            }
        });
        window.addEventListener("keydown", function(event){//отслеживание нажания кнопки клавиатуры
            if(event.keyCode===27) {//елси нажата кнопка esc
                if(popup.classList.contains("modal_content_show")) {//если открыто модальное окно
                    popup.classList.remove("modal_content_show");//удалить класс который показывает модальное окно
                    popup.classList.remove("modal_error");//по нажатию esc удаление класса с анимацией ошибки
                    overlay.classList.remove("modal_overlay_show");
                    map.classList.remove("modal_content_map_show");
                }
            }
        })