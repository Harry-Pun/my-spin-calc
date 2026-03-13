



class Calculation {


    constructor() {
        this.velocity = 0; // in meters per second
        this.radius = 0; // in meters

        this.rotation = 0; // in radians per second        

        this.Gravity = 0; // in meters per second squared
    }

    setRadius(radius) {
        if (radius < 0) {
            radius = -radius;
        }
        this.radius = radius;
    }

    setVelocity(velocity) {
        if (velocity < 0) {
            velocity = -velocity;
        }
        this.velocity = velocity;
    }

    setRotation(rotation) {
        if (rotation < 0) {
            rotation = -rotation;
        }
        this.rotation = rotation;
    }

    getRadius() {
        return this.radius;
    }

    getVelocity() {
        return this.velocity;
    }

    getRotation() {
        return this.rotation;
    }

    setGravity(gravity) {
        this.Gravity = gravity;
    }

    getGravity() {
        return this.Gravity;
    }

    calculateGravityByVelocity() {
        this.setGravity((this.velocity * this.velocity) / this.radius);
        //this.setRotation(this.velocity / this.radius);
    }

    calculateGravityByRotation() {
        this.setGravity(this.rotation * this.rotation * this.radius);
        //this.setVelocity(this.rotation * this.radius);
    }

    toString() {
        return `Velocity: ${this.velocity} m/s, Radius: ${this.radius} m, Rotation: ${this.rotation} rad/s
        Gravity: ${this.Gravity} m/s²`;
    }
}

export default Calculation;