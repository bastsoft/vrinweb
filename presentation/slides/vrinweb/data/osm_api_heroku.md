## osm-api-heroku xml to json and cors

[https://github.com/bastsoft/osm-api-heroku](https://github.com/bastsoft/osm-api-heroku)
~~~ javascript
    ctx.body = await fetch("https://www.openstreetmap.org" + ctx.url)
        .then(response => response.text()).then(function (xml) {
            const json = parser.xml2json(xml);

            json.bounds = [
                [json.osm.bounds.minlat, json.osm.bounds.minlon],
                [json.osm.bounds.maxlat, json.osm.bounds.maxlon]
            ];
            json.relation = _preprocessingReduce(json.osm.relation);
            json.way = _preprocessingReduce(json.osm.way);
            json.node = _preprocessingReduce(json.osm.node);
            delete(json.osm);

            return json;
        });
~~~
{: .language-javascript}

