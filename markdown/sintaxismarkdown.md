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

## [Link a una página web](https://developer.mozilla.org)

[Link a una imagen](https://www.noticierovallarta.com/wp-content/uploads/2022/03/Mozilla-lanza-MDN-Plus-la-version-mejorada-de-su-plataforma.jpg)

<!--
    Mejorando los Links o Enlaces en linea, para poder reutilizarlo en cualquier parte del código. con el operador [nombre que quiero darle al enlace][nombre de la referencia] Ejemplo: [][]
 -->

[mdn]: https://developer.mozilla.org

[Esto es un enlace a MDN][mdn]

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

![Esta es una imagen del logo de Ubuntu](/img/Logo-Ubuntu.png "Este es el Título alt")

<!--
    Reutilización de imágenes, mejorando el código

    ![texto Alternativo][esta es la etiqueta a reutilizar]
    [Esta es la etiqueta reutilizada]: ruta de imagen "Título Alt"
 -->

<!-- Este apartado lo podemos declarar cuantas veces queramos -->

![Imagen mdn][imgmdn]
![Imagen mdn][imgmdn]

<!-- Esto solo de declara una sola vez -->

[imgmdn]: /img/imagenmdn.jpeg "Este es el titulo Alt"

![Imagen mdnDos][imgmdndos]
![Imagen mdnDos][imgmdndos]

[imgmdndos]: /img/imagenmdnDos.png "este es titulo alt "

---

<!--
  Links Automáticos, validos para mostrar una URL completa y se utilizan los operadores <URL>
 -->

<http://developer.mozilla.org>

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
