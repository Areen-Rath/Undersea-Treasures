AFRAME.registerComponent("rotate", {
    schema: {
        rotate: {
            type: "number",
            default: 0
        }
    },
    init: function() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                if (this.data.rotate < 0.1) {
                    this.data.rotate += 0.01
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.rotate > -0.1) {
                    this.data.rotate -= 0.01
                }
            }
        })
    },
    tick: function() {
        var rotation = this.el.getAttribute("rotation");
        rotation.y += this.data.rotate;
        this.el.setAttribute("rotation", {
            x: rotation.x,
            y: rotation.y,
            z: rotation.z
        });
    }
});

AFRAME.registerComponent("turn", {
    schema: {
        rotate: {
            type: "number",
            default: 0
        }
    },
    init: function() {
        this.data.rotate = this.el.getAttribute("rotation");
        this.data.altitude = this.el.getAttribute("position");
        var rotation = this.data.rotate;
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                if (rotation.y > 80) {
                    rotation.y -= 0.5
                    this.el.setAttribute("rotation", rotation);
                }
            }
            if (e.key === "ArrowLeft") {
                if (rotation.y < 100) {
                    rotation.y += 0.5
                    this.el.setAttribute("rotation", rotation);
                }
            }
        });
    }
});