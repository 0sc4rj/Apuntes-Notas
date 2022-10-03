# Markdown Sintaxis... ⬇️

<!--
    Desde el h1 al h6 con el operador #
    [ h1= # ],[ h2= ## ],[ h=3 ###] ,[ h=4 #### ],[ h=5 #####],[ h=6 ######]
-->

# h1 Header

## h2 Header

### h3 Header

#### h4 Header

##### h5 Header

###### h6 Header

---

<!--
  Esto es un <p>
 -->

Nos basta solo con escribir sin más.

---

<!--
    Listas desordenada, se puede utilizar los operadores: * , - , + cualquiera de esos tres.
 -->

- Elemento 1
- Elemento 2
- Elemento 3
  - Elemento 4, Comienzo lista anidada dejando 4 espacios en blanco.

* Elemento 1
* Elemento 2
* Elemento 3
  - Elemento 4, Comienzo lista anidada dejando 4 espacios en blanco.

- Elemento 1
- Elemento 2
- Elemento 3
  - Elemento 4, Comienzo lista anidada dejando 4 espacios en blanco.

<!--
    Listas ordenadas, hay que usar << número >> ejemplo: 1. y aquí el texto.
    también se puede utilizar en combinación con las lista desordenada.
 -->

1. Elemento 1
2. Elemento 2
   - Elemento, desordenado en medio
   - Elemento, desordenado en medio
3. Elemento 3
4. Elemento
   - Comienzo lista anidada dejando 4 espacios en blanco.
   - Elemento
     - Otro elemento

---

<!--
  Creando listas de verificación con el operador [x] Verificado, importante dejar un espacio vacía en las casillas vacías
-->

[ ] A
[ ] B
[ ] C

---

<!--
    Creando Citas con el operador: >
 -->

> Esto es una cita en MarkDown, se puede ver que es muy simple, colocando el operador matemático mayor que.

> Esta es la siguiente cita, siempre dejando un espacio, entre cita y cita.

<!--
    Creando Citas anidadas con el doble operador: >>
 -->

> Esto es una cita normal en MarkDown,

> > Y esta es la cita anidada con el doble operador matemático mayor que: >>

---

<!--
    Creando un bloque de texto, para definir código en Html por ejemplo. Se consigue con el operador ```, ~~~.
 -->

```
Esto es simulando un bloque de código <h1>Hola mundo</h1>
```

---

<!--
    Aquí las diferentes formas de llamar a las negritas y cursivas con los operadores * o _.
 -->

_cursiva_ | _cursiva_ | **Negrita** | **_Cursiva y Negrita_**

---

<!--
    Links o Enlaces en linea , se crean con los operadores:[]() ejemplo:[Aquí el texto a    mostrar](Aquí el enlace)
 -->

## [Link a una página web](https://github.com/0sc4rj)

[Link a una imagen](https://github.githubassets.com/images/modules/logos_page/Octocat.png)

<!--
    Mejorando los Links o Enlaces en linea, para poder reutilizarlo en cualquier parte del código. con el operador [nombre que quiero darle al enlace][nombre de la referencia] Ejemplo: [][]
 -->

[github]: https://github.com/0sc4rj

[Esto es un enlace a GitHub][github]

---

<!--
    Código puro, se utiliza el operador `Texto`
 -->

`Esto es una linea de código puro <h1>Hola mundo </h1>`

---

 <!-- 
    Insertando imágenes con el operador 

    ![Texto alternativo](/ruta/a/la/img.png "Titulo alternativo").

    Es muy parecido a insertarla con un enlace, pero en este caso el enlace sería la ubicación de la imagen dentro del proyecto. Como se ve se puede incluir texto alternativo: Es lo que aparecería en caso de no cargar la imagen y título alternativo: Es lo que aparece cuando se deja el ratón encima de la imagen .
  -->

![Esta es una imagen del logo de Ubuntu](/img/Groupgithub-green.svg "etiqueta alt")

![Esta es una imagen del logo de Ubuntu](/img/Groupgithub-red.svg "etiqueta alt")

![Esta es una imagen del logo de Ubuntu](/img/Groupgithub-orange.svg "etiqueta alt")

---

<!--
    Reutilización de imágenes, mejorando el código

    ![texto Alternativo][esta es la etiqueta a reutilizar]
    [Esta es la etiqueta reutilizada]: ruta de imagen "Título Alt"
 -->

<!-- Este apartado lo podemos declarar cuantas veces queramos -->

![Imagen][img]

<!-- Esto solo se declara una sola vez ⬇️ -->

[img]: /img/Groupgithub-pink.svg "etiqueta alt"

<!-- Esto solo se declara cuantas veces queramos ⬇️ -->

![Imagen Dos][imgdos]
![Imagen Dos][imgdos]

[imgdos]: /img/Groupgithub-blue.svg "etiqueta alt"

![Imagen Tres][imgtres]
![Imagen Tres][imgtres]
![Imagen Tres][imgtres]

[imgtres]: /img/Groupgithub-violet.svg "etiqueta alt"

![Imagen Cuatro][imgcuatro]
![Imagen Cuatro][imgcuatro]
![Imagen Cuatro][imgcuatro]
![Imagen Cuatro][imgcuatro]

[imgcuatro]: /img/Groupgithub-yellow.svg "etiqueta alt"

---

<!--
  Links Automáticos, validos para mostrar una URL completa y se utilizan los operadores <URL>
 -->

<http://github.com/0sc4rj>

<!--
  Podemos omitir markdown con el operador barra invertida \ Ejemplo \ # h1
 -->

# h1

\ # h1

---

<!--
  Tablas en Markdown
 -->

proximamente ( Tablas en Markdown )
