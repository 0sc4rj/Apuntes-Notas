# Encabezados ⬇️

<!--
    Desde el h1 al h6 con el operador #.
    Siempre tenemos que dejar un espacio entre los operadores y el texto, ya que de otra forma no reconocerá el tipo de encabezado.
-->

# h1 Header

## h2 Header

### h3 Header

#### h4 Header

##### h5 Header

###### h6 Header

# Párrafo ⬇️

<!--
  Esto es un <p>
 -->

Nos basta solo con escribir sin más.

# Listas desordenadas ⬇️

<!--
    Listas desordenada, se puede utilizar los operadores: * , - , + cualquiera de esos tres.
 -->

- Elemento 1
- Elemento 2
- Elemento 3
  - Elemento 4, "Anidado dejando 4 espacios en blanco."
    - Otro Elemento, "Anidado dejando 8 espacios en blanco."

* Elemento 1
* Elemento 2
* Elemento 3
  - Elemento 4, "Anidado dejando 4 espacios en blanco."

- Elemento 1
- Elemento 2
- Elemento 3
  - Elemento 4, "Anidado dejando 4 espacios en blanco."

# Listas ordenadas ⬇️

<!--
    Listas ordenadas, hay que usar << número >> ejemplo: 1. y aquí el texto.
    también se puede utilizar en combinación con las lista desordenada.
 -->

1. Elemento 1
2. Elemento 2
   - Elemento, "Anidado dejando 4 espacios en blanco."
   - Elemento, "Anidado dejando 4 espacios en blanco."
3. Elemento 3
4. Elemento
   - Elemento, "Anidado dejando 4 espacios en blanco."
   - Elemento, "Anidado dejando 4 espacios en blanco."
     - Otro Elemento, "Anidado dejando 8 espacios en blanco."

---

# Lista de verificación ⬇️

<!--
  Creando listas de verificación con el operador [ ] = sin verificar, [X] = verificado. Hay que recordar que si los corchetes están vacíos sin verificar, hay que dejar un espacio en blanco.
-->

[x] A

[ ] B

[ ] C

# Citas ⬇️

<!--
    Creando Citas con el operador: >
 -->

> Esto es una cita en Markdown, es tan sencillo como colocar el operador mayor: > y se nos crea una cita automáticamente, si queremos tener un salto de linea pero seguir en la misma cita, hay que dejar otro operador
>
> Esto hace que podamos seguir en la misma cita sin la necesidad de crear otra.

# Citas anidadas ⬇️

<!--
    Creando Citas anidadas con el doble operador: >>
 -->

> Esta es la primera cita a la cual queremos anidar otra cita.
>
> > Y esta es la cita anidada.

---

# Bloque de código ⬇️

<!--
    Creando un bloque de texto, para definir código en Html por ejemplo. Se consigue con el operador ```, ~~~.
 -->

```
Esto es simulando un bloque en el cual podemos introducir código con etiquetas <h1>Hola mundo</h1> para presentar código ya que este no lo ejecuta.
```

---

# Filas de código ⬇️

<!--
    Código puro, se utiliza el operador `Texto`
 -->

`Esto son filas en las cuales podemos introducir código igual que en el ejemplo anterior, pudiendo comprobar así, su mayor diferencia <h1>Hola</h1>`

`Esto son filas en las cuales podemos introducir código igual que en el ejemplo anterior, pudiendo comprobar así, su mayor diferencia <h1>Hola</h1>`

---

# Estilos de texto ⬇️

<!--
    Aquí las diferentes formas de llamar a las negritas y cursivas con los operadores * o _.
 -->

_cursiva_ | _cursiva_ | **Negrita** | **_Cursiva y Negrita_**

---

# Links en linea ⬇️

<!--
    Links o Enlaces en linea , se crean con los operadores:[]() ejemplo:[Aquí el texto a mostrar](Aquí el enlace)
 -->

## [Link a una página web](https://github.com/0sc4rj)

[Link a una imagen](https://github.githubassets.com/images/modules/logos_page/Octocat.png)

---

# Mejorando los enlaces en linea ⬇️

<!--
    Mejorando los Links o Enlaces en linea, para poder reutilizarlo en cualquier parte del código. con el operador [nombre que quiero darle al enlace][nombre de la referencia].
 -->

[github]: https://github.com/0sc4rj

Si nos damos cuenta ahora podemos declarar el enlace en cualquier parte de nuestro código, [de esta forma nos aparecería este texto][github], o sin tener que incluir texto [github], con la primera mayúscula [Github] o incluso con todo mayúscula [GITHUB].

---

# Mostrando solo una URL ⬇️

<!--
  Links Automáticos, validos para mostrar una URL completa sin modificar y se utilizan los operadores <URL>
 -->

<http://github.com/0sc4rj>

---

# Insertando imágenes ⬇️

 <!-- 
    Insertando imágenes con el operador 

    ![Texto alternativo](/ruta/a/la/img.png "Titulo alternativo").

    Es muy parecido a insertarla con un enlace, pero en este caso el enlace sería la ubicación de la imagen dentro del proyecto. Como se ve se puede incluir texto alternativo: Es lo que aparecería en caso de no cargar la imagen y título alternativo: Es lo que aparece cuando se deja el ratón encima de la imagen .
  -->

![Esta es una imagen del logo de Ubuntu](/img/Groupgithub-green.svg "etiqueta alt")

![Esta es una imagen del logo de Ubuntu](/img/Groupgithub-red.svg "etiqueta alt")

![Esta es una imagen del logo de Ubuntu](/img/Groupgithub-orange.svg "etiqueta alt")

---

# Mejorando las imágenes ⬇️

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
  Podemos mostrar los operadores utilizados en Markdown markdown con el operador barra invertida \ delante del operador a mostrar.
 -->

\# Este Encabezado no es válido.

\> Esto no es una cita.

\- No hay lista desordenada.

\* Idéntico al anterior.

\+ Idéntico al anterior.

---

# Tablas de datos ⬇️

<!--
  Tablas en Markdown
 -->

Próximamente ( Tablas en Markdown )
