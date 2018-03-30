## builder with DOM createElement

~~~ javascript
   const createElem = function (arrElem) {
        const Elem = document.createElement(arrElem[0]);

        Object.keys(arrElem[1] || {}).forEach(function (key) {
            Elem.setAttribute(key, option[key]);
        });

        (arrElem[2] || []).forEach(function (elem) {
            Elem.appendChild(createElem(elem));
        });

        return Elem;
    };
    ...
    sceneEl.appendChild(createElem(['a-dodecahedron', {
        position: [currentPoint.x, 0, currentPoint.y].join(" "),
        color: "#CCC",
        radius: "0.1"
    }])) 
~~~
{: .language-javascript}

