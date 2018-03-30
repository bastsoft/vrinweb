## add buildingCover

~~~ javascript
elem.push(['a-entity', {
    geometry: "primitive: buildingCover; vertices: " + vRoof.join(", ") + "; height: " + (height + minHeight),
    material: 'color:orange; side:double'
}]);
~~~
{: .language-javascript}

