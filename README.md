# BreakingBadWiki

  Breaking Bad Wiki es un lugar donde podremos consultar información de la serie "Breaking Bad".

# Arranque del proyecto

  El gestor de paquetes utilizado es Yarn.
 
  Instalación de dependencias
 
      yarn
    
  Ejecución del proyecto
  
      yarn start
      
# Herramientas Utilizadas

  # Componentes funcionales
    
    Utilizados mayormente en los componentes que muestran información y no gestionan datos por ellos mismos. Reciben las props del componente padre y en el caso de algunos componentes es necesario de comunicar un cambio o una acción.
    
    Un ejemplo lo podemos ver en el componente OrderSwitch, que comunica a su componente padre para avisar de que se cambia el orden ascendente o descendiente del contador de aniquilación de un asesino. 
    QuoteCharacter también realiza una acción hacia el padre, avisando de que se ha creado un evento en el botón de refrescar "cita".
    
  # Hooks y Custom Hooks
  
    En algunos casos es necesario obtener una información en concreta para completar ciertos datos, como por ejemplo inyectar contenido adicional a un "personaje". Los episodios donde aparace dicho personaje, una "cita" aleatoria de un episodio, el numero de aniquilaciones que ha realizado... Todas estas cosas son interesantes de calcular, y cuando en un componente funcional quieres inyectar contenido a parte del recibido por el componente padre, hay que buscar la manera de compaginar e interactuar con la vista y los datos. 

    Estos casos comentados son los extrapolados en el proyecto, gracias a las funcionalidades de Hooks y su mejora en la gestión de los datos, se han podido llevar y tratar en componentes como lo es CardCharacter, que es el que va a repartir todos los datos del "personaje" subdividido en diferentes componentes pequeños y dotar de la vista de más valor.
    
    Los hooks propios de React también tienen un papel importante en el proyecto, y sobretodo se han utilizado para gestionar los estados de la carga de datos asociados a un spinner, para la gestión de la paginación de la lista de elementos en las diferentes secciones de la aplicación, para la gestión de las acciones de un componente de uso como el OrderSwitch, mostrar la lista de "citas" de un personaje, gestionar el formulario de autocompletado para las búsquedas... 
    
    Complicaciones sobretodo cuando hay que gestionar la montura de una vista y se intentan inyectar datos sin estar montado. Trabajar con useEffect() es un reto que para mí todavía tiene un recorrido experimental. Buscar la manera de gestionarlo como se hacen con los componentDidMount() y componentDidUpdate() es un concepto diferente de extrapolar a veces.
    
  # Componentes de clase con uso de su ciclo de vida
  
    Si bien es verdad que React Hooks nos puede facilitar y aprender más rápido el concepto de estado, no hay que olvidar que hay casos en los que no podremos utilizar dicha herramienta porque necesitamos controlar los datos de un componente desde su creación, evolución y fin de uso. Los lifecycles, como su propio nombre indica, es el concepto de la vida en si misma pero extrapolado para los componentes en React. 
    
    Su uso sobretodo han sido para las páginas principales de cada sección, para comenzar el ciclo de vida de un asesino, un personaje o una temporada. En estos componentes se recogen todos los datos disponibles para cada sección, y poder trabajar con ellos desde haberse montado la vista, o desde incluso tras una actualización de un valor, como podría ser el orden de los asesinos. Si cambia el orden de ascendente el numero de aniquilaciones a descendiente, hay que tratar dicho cambio y reconfigurarlo para que en la vista se muestre los datos que realmente queremos observar. Si el componente obtiene un cambio del estado que es diferente al actual que tenemos, hay que verificar de antemano que realmente ha cambiado el componente y tenemos que inyectarle nuevos tratamientos en sí mismos. Este caso lo vemos muy claro en el componente Killers.
    
  # High Order Component
  
    El proyecto en sí está envuelto de una herramienta interesante que nos permite poder acceder a los elementos de enrutamiento match, location e history, claves para poder interactuar entre vistas y accesos a rutas con las que poder consultar más datos. Esta herramienta facilita el poder inyectar desde un componente una serie de elementos como son las rutas, los filtros de búsqueda e incluso estados con los que poder consultar posteriormente en el otro componente al que se redirije. withRouter() está contemplado en las clases de ciclos de vida que realmente necesita obtener estos datos, como son Character, Killer, Quote, Season y Episode. 
    
    Para el uso de Redux en los componentes del proyecto, también se necesita "conectar" las vías por donde la aplicación dispara una acción y recoge de la store el estado a proporcionar. connect() nos facilita esa interacción con el manejo del estado de la aplicación de una forma más cómoda y sencilla.
    
  # Provider
  
    Cuando se busca realizar una aplicación, siempre se intenta hacerla lo más bonita, llamativa... y accesible. En la mayoría de aplicaciones web y móviles vemos una funcionalidad que hace unos años no se le daba tanta importancia, y es la de inyectar cambios de estilos globales en un proyecto, como puede ser el manejo del "Modo Oscuro" o el "Modo Noche". Aquí es donde actúa ThemeProvider y ThemeContext, que nos va a permitir poder gestionar desde cualquier parte de la aplicación cualquier cambio estético dependiendo del modo que elijamos. createContext() es el culpable de esta implementación, pero que hace que un proyecto tenga otros buenos ojos.
    
  # Render Props
  
    El concepto de Render Props en este proyecto ha sido utilizado para poder inyectar en componentes como en Card, otros componentes como nodos hijo. Una tarjeta Card podrá contener detalles de un "personaje", o una lista de "episodios", información sobre una "muerte"... Todas estas informaciones están compuestas, nunca mejor dicho, en componentes que acompañarán a su nodo padre en la representación de la misma en la vista, dotándolo de más contenido y cobrando más sentido el cuerpo de un componente.
    
  # React Router
  
    Como comentamos en otra sección, el enrutamiento es clave para la navegación en una aplicación web. Utilizando componentes de react-router-dom como son los Link, que te proporcionan el inyectar la siguiente página a la que visitar, es una de las claves de este proyecto. La gestión de todos los accesos a cada ruta están recogidos en el componente Sidebar, la barra lateral izquierda de la aplicación, y de forma interna a través de JavaScript, cuando realicemos una búsqueda, consultemos un dato de un listado, o acceder a un contenido relacionado que está en otra sección de la plataforma, React Router nos gestionará de una forma efectiva dicha transición.
    
  # Formulario Controlado
  
    En esta ocasión se generaba el reto de poder realizar un formulario donde consultar y acceder a los datos que se manejan en la aplicación. Siempre hay que hacerse la idea de cómo le gustaría a los usuarios ver la versión final de la aplicación, y como al propio desarrollador le gusta manejar nuevos conceptos. En este caso se ha optado por inyectar un Autocompletado categorizado por "Characters", "Episodes", "Killers" y "Quotes". Esta inyección y trazado de datos es complejo por la alta cantidad de datos que se manejan, aun así, en 2-3 segundos se obtienen los resultados y se podrán filtrar por nombres, y de forma automática por la categoría. 
    
    Todo esto desde cualquier parte de la aplicación, desde el NavBar, la barra de navegación superior, dotando de una accesibilidad inmediata a cualquier consulta necesaria. Por supuesto, si se pincha en un resultado a querer, se nos redirigirá al resultado gracias a React Router, pudiendo consultar de forma intuitiva.
    
  # Control de errores y carga de datos
  
    Cuando se lanza una petición para obtener un resultado, es posible que tarde en llegar, es posible que falle a la hora de la resolución de la misma... En la aplicación, cuando se quiere cargar datos necesarios para la vista, se inyecta un Loader que nos permitirá poder entender de que se están haciendo peticiones, y se están cargando datos. La importancia de un buen diseño y de una buena intuitividad por parte del usuario es imprescindible para alcanzar el objetivo del "seguir navegando". 
    
    Si se inyectan dichos datos pero hay secciones o partes de la misma que aún faltan por cargarse, dichos datos no se verán mostrados ni se quedarán colgados con "datos sucios". Es preferible mostrar los datos, pero que se muestren bien. También se intenta buscar que todo llegue a la misma vez, pero las peticiones asíncronas y las promesas, en mi defensa, ayudan a explotar más los datos y mostrar lo posible dentro del tiempo limitado que un usuario pueda tener.
    
    
  # Uso de Redux
  
    El motivo de esta implementación es el hecho de poder tener siempre a mano el filtrado de búsqueda realizado en el formulario de Autocompletado. Es muy importante almacenar dicha búsqueda porque a lo mejor lo que consultaste no era lo que querías saber, y no vamos de nuevo a realizar la consulta cuando ya teníamos resultados devueltos.
    
    La implementación de lo necesario para gestionar dicho filtrado está inyectado en el componente de Autocompletado, pero por motivos de falta de tiempo y por querer acercarme al producto final del proyecto, obtuve por dejarlo como "pendiente" para solucionar el problema de ciclo de vida que se estaba produciendo al teclear una letra: "Maximum update depth exceeded error". 
    
  # Uso de librerías externas 
  
    Es importante saber emplear las librerías adecuadas para un proyecto: que no estén deprecadas, que estén en continuo desarrollo, que se acerquen o resuelvan    el problema que necesitas cubrir y limpiar...
    
    react-animation permite poder dotar de animaciones interesantes a las imágenes de la Home principal. 
    react-loader-spinner hace que la espera en una sección sea más entretenida y elegante en esta wiki de Breaking Bad.
    trendmicro/react-sidenav hace que la navegación lateral sea recogida y ordenada, sin entorpecer a la vista.
    material-ui dota la aplicación de componentes material muy interesantes y acordes a mis pensamientos en cuanto a diseño se refiere.
    lodash es una herramienta bestial para trabajar con datos y entrelazarlos para poder obtener de forma más rápida la solución acorde a tus necesidades.
    
  # Uso aislado de los componentes
  
    Cuando empecé en el mundo del desarrollo de aplicaciones web, siempre buscaba una manera de poder reutilizar componentes en otras secciones de la aplicación. En los proyectos realizados en la empresa, siempre tengo en mente el siguiente concepto: "shared". Los Shared Components son para mí mi mayor reto, porque siempre busco dotar la información de un componente desde datos completamente diferentes, y desde cualquier parte de la aplicación. En este proyecto, he utilizado componentes desde otras vistas, con datos diferentes y buscando la manera de llegar de reutilización máxima.

    Motivos por los que me puedo quejar: La falta de tiempo a veces tiene la decisión de elegir que realizar, si una aplicación buena que funcione o una aplicación aún más buena y limpia. Seguro que se podría limpiar más, estoy segurísimo. 
    
  # Reutilización de los datos y minimizar las llamadas a la api
  
    En este proyecto, en la mayoría de los casos se pasan información entre nodos, todos relevantes para su correcto funcionamiento, gracias a las props y su comunicación. La reutilización de las mismas props desde el nodo más padre hasta el componente más nieto, hace que podamos interactuar con datos de un lado para otro, buscando la mejor forma de no repetir llamadas a funciones y creación de nuevos datos y/o peticiones entre medios. 
    
    Las llamadas a la API están separadas por cada sección, manteniendo un orden y una gestión mejor de las peticiones para futuros cambios y detectar posibles errores por parte de cambios en las mismas. Donde más he notado la problemática de dichas llamadas ha sido con React Hooks, el cual no llegaba a poder ser montado la vista que antes de tiempo estaban ya realizadas las llamadas, y sobretodo por el tacto que hay que tener con useEffect() para controlar dicha repetición de llamadas a través de cleanups.
    
    
  
  Todos los puntos a tratar en el enunciado deberían de estar disponibles en el proyecto para su correcto funcionamiento. 
  
  Cualquier pregunta, duda o correción, puedes contactar conmigo a través de mi email corporativo o por Microsoft Teams,
  
  Rubén González Membrilla
    
    
    
