---

layout: default

title: VR in web

---

# <span></span> {#splash}

## **{{ page.title }}**

<div class="info">
	<p class="author">{{ site.author.company.name }} <br/> {{ site.author.name }}</p>
</div>

## &nbsp;
{:.with-big-quote}
> как отобразить 3D в браузере?

{:.note}

## WebGL

![placeholder](pictures/webGL.png){:.right-image}

* API к GPU
    * HTML5 canvas
    * OpenGL ES 2.0
    * GLSL ES 1.1
    * 2D/3D

## caniuse webgl
{:.center}
[https://caniuse.com/#feat=webgl](https://caniuse.com/#feat=webgl)
![](pictures/caniusewebgl.png){:.tmp}

## ![](pictures/webGLPipeLine.png)
{:.cover}

## ![](pictures/webGLExample.png)
{:.cover}

## ![](pictures/treejsLib.png)
{:.cover}

## scene
{:.center}

![](pictures/tree-scene.png){:.tmp}

## mesh
{:.center}

![](pictures/tree-mesh.png){:.tmp}

## &nbsp;
{:.with-big-quote}
> как работать с VR в браузере?

{:.note}

## WebVR

![placeholder](pictures/webVR.png){:.right-image}

* navigator.getVRDisplays
    * VRDisplay.requestAnimationFrame
    * VRDisplay.getImmediatePose
    * VRPose.position
    * VRPose.orientation
    * Gamepad.displayId
* [https://webvr.info/](https://webvr.info/)
* [chrome://flags/#enable-webvr](chrome://flags/#enable-webvr)

## caniuse webVR
{:.center}
[https://caniuse.com/#search=WebVR](https://caniuse.com/#search=WebVR)
![](pictures/caniusewebVR.png){:.tmp}

## A-FRAME

![placeholder](pictures/aframe.png){:.right-image}

* [https://aframe.io/](https://aframe.io/)
* Features
    * Simple, Declarative HTML
    * entity-component-system (ECS)
    * visual 3D inspector
* Base on
    * three.js

## AFrame - 360° Image
[demo](https://www.codeseek.co/preview/KyNwpZ)
~~~ html
<!DOCTYPE html>
<html>
<head>
  <title>AFrame - 360° Image</title>
</head>
<body>
<a-scene>
  <a-sky src="puydesancy.jpg" rotation="0 -130 0"></a-sky>
</a-scene>
<script src='https://aframe.io/releases/0.7.0/aframe.min.js'></script>
</body>
</html>
~~~
{: .html}

## &nbsp;

- Martin Splitt - [WebVR is the next frontier](https://www.youtube.com/watch?v=39MiUkGSEks)
- Денис Радин - [web-приложение в виртуальную реальность](https://www.youtube.com/watch?v=8FLhLWzeKG0)
- Василика Климова — [vasilika.ru](https://www.vasilika.ru/)
- Мстислав Живодков 2GIS -  [Как мы ускоряли WebGL](https://www.youtube.com/watch?v=MeIJVg1z00A)
- Владимир Агафонкин - [Современные интерактивные карты](https://www.youtube.com/watch?v=yMmyzzApGy4)
- Александр Амосов - [Интерактивные 3D-карты своими руками](https://www.youtube.com/watch?v=YLFwkbTvb-4)
- Антон Корзунов - [способы показать "Hello, World!" в WebGL](https://www.youtube.com/watch?v=n3gtj7veL3I&feature=youtu.be&t=6541)

## **Контакты** {#contacts}

<div class="info">
<p class="author">{{ site.author.name }}</p>
    <p class="position">{{ site.author.position }}</p>

    <div class="contacts">
        <p class="contacts-left contacts-top phone">+7 (922) 755-66-59</p>
        <p class="contacts-left mail">compsober@yandex.ru</p>
        <p class="contacts-right contacts-top twitter">@bastsoft</p>
        <!-- <p class="contacts-right contacts-bottom vk">vk</p> -->
        <p class="contacts-right facebook">petrilaptev</p>
    </div>
</div>