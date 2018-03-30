## Controllers in a-frame

~~~ javascript
//3 degrees of freedom (3DoF) 
<a-entity daydream-controls></a-entity>
<a-entity gearvr-controls></a-entity>
//6 degrees of freedom (6DoF)
<a-entity vive-controls="hand: left"></a-entity>
<a-entity vive-controls="hand: right"></a-entity>
<a-entity oculus-touch-controls="hand: left"></a-entity>
<a-entity oculus-touch-controls="hand: right"></a-entity>

<a-entity hand-controls="left"></a-entity>
<a-entity hand-controls="right"></a-entity>

//tracked-controls
<a-entity tracked-controls="controller: 0; idPrefix: OpenVR"></a-entity>
~~~
{: .language-javascript}

