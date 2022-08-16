AFRAME.registerComponent("collide", {
    schema: {
        collider: {
            type: "string",
            default: "#coin1"
        }
    },
    update: function() {
        this.isCollided(this.data.collider);
    },
    isCollided: function(collider) {
        const element = document.querySelector(collider);
        element.addEventListener("collide", e => {
            if (collider.includes("#coin")) {
                console.log(collider + "Collision");
            } else if (collider.includes("#fish")) {
                console.log(collider + "Collision");
            }
        });
    }
});