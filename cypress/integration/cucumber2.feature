Feature: Demo de cucumber dos

    Esto es una demo de cómo utilizar Cucumber

    Scenario: Demo de cucumber dos
        Given Abrir el navegador principal
        When Cargando el nombre María
        When Cargando el email maria@gmail.com
        And Cargando la dirección Demo_Dirección_uno
        And Cargando la dirección dos Demo_Dirección_dos
        And Click en botón
        Then Validar el nombre de la página
    
    Scenario: Demo de cucumber dos caso dos
        Given Abrir el navegador principal
        When Cargando el nombre Pedro
        When Cargando el email pedro@gmail.com
        And Cargando la dirección Demo_Dirección_235
        And Cargando la dirección dos Demo_Dirección_142
        And Click en botón
        Then Validar el nombre de la página