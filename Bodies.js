AFRAME.registerComponent("coin", {
    init: function() {
        for (var i = 1; i < 20; i++) {
            var id = `coin${i}`;
            var x = (Math.random()*300 + (-100));
            var z = (Math.random()*300 + -100);
            var position = {
                x: x,
                y: 0,
                z: z
            }
            this.createCoin(id, position);
        }
    },
    createCoin: function(id, position) {
        var coin = document.createElement("a-entity");
        coin.setAttribute("id", id);
        coin.setAttribute("position", position);
        coin.setAttribute("material", "color", "#ff9100");
        coin.setAttribute("geometry", {
            primitive: "circle",
            radius: 1
        });
        coin.setAttribute("animation", {
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })
        coin.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 2
        });
        coin.setAttribute("collide", {
            collider: `#${id}`
        });
        var island = document.querySelector("#islandMap");
        island.appendChild(coin);
    }
});

AFRAME.registerComponent("fish", {
    init: function() {
        for (var i = 1; i < 20; i++) {
            var id = `fish${i}`;
            var x = (Math.random()*3000 + (-1000));
            var z = (Math.random()*3000 + -1000);
            var position = {
                x: x,
                y: 0,
                z: z
            }
            this.fish(id, position);
        }
    },
    fish: function(id, position) {
        var fish = document.createElement("a-entity");
        fish.setAttribute("id", id);
        fish.setAttribute("position", position);
        fish.setAttribute("gltf-model", './assets/models/fish/scene.gltf');
        fish.setAttribute("animation-mixer", {});
        fish.setAttribute("scale", {
            x: 0.05,
            y: 0.05,
            z: 0.05
        });
        fish.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 5
        });
        fish.setAttribute("collide", {
            collider: `#${id}`
        });
        var island = document.querySelector("#islandMap");
        island.appendChild(coin);
    }
});