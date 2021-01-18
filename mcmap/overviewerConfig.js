var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "BGB - overworld",
        "BGB - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1610937803",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "daytime",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "BGB - overworld",
            "last_rendertime": 1610937556,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -111,
                80,
                -167
            ],
            "minZoom": 0,
            "spawn": [
                -111,
                80,
                -167
            ],
            "north_direction": 0
        },
        {
            "name": "Nightime",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "nighttime",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "BGB - overworld",
            "last_rendertime": 1610937556,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -111,
                80,
                -167
            ],
            "minZoom": 0,
            "spawn": [
                -111,
                80,
                -167
            ],
            "north_direction": 0
        },
        {
            "name": "Nether",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "BGB - nether",
            "last_rendertime": 1610935254,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -111,
                80,
                -167
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "NetherSouth",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "nethersouth",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "BGB - nether",
            "last_rendertime": 1610935254,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -111,
                80,
                -167
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 2
        }
    ]
};
