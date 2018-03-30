##  Asset Management System

~~~ javascript
<a-scene>
    <a-assets>
        <img id="window1" src="./assets/window.jpg">
        <img id="sky" src="./assets/sky.jpg">
    </a-assets>
</a-scene>
~~~
{: .language-javascript}
~~~ javascript
['a-plane', {
    //...
    material: "src: #window1; repeat: " + c + " " + l + "; side: double"
}]
~~~
{: .language-javascript}
~~~ javascript
['a-sky', {src: "#sky"}]
~~~
{: .language-javascript}
