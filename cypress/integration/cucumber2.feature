Feature: Demo de cucumber dos

    Esto es una demo de cómo utilizar Cucumber

    #Scenario: Demo de cucumber dos
    #    Given Abrir el navegador principal
    #   When Cargando el nombre María
    #    When Cargando el email maria@gmail.com
    #    And Cargando la dirección Demo_Dirección_uno
    #    And Cargando la dirección dos Demo_Dirección_dos
    #    And Click en botón
    #    Then Validar el nombre de la página
    
    Scenario Outline: Scenario Outline name: Demo de cucumber dos caso dos
        Given Abrir el navegador principal
        When Cargando el nombre <username>
        When Cargando el email <email>
        And Cargando la dirección <dir1>
        And Cargando la dirección dos <dir2>
        And Click en botón
        Then Validar el nombre de la página

        Examples:
            | username | email | dir1 | dir2 |
            | Pedro  | pedro@gmail.com  | Demo_Dirección_uno | Demo_Dirección_dos |  
            | Sandra  | sandra@gmail.com  | Demo_Dirección_uno | Demo_Dirección_dos |
            | Cristina  | cristina@gmail.com  | Demo_Dirección_uno | Demo_Dirección_dos |
            | Rodrigo  | rodrigo@gmail.com  | Demo_Dirección_uno | Demo_Dirección_dos |
