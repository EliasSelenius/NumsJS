
namespace Nums {
    export class Vec3 implements IVec<Vec3> {
        add(vec: Vec3): Vec3 {
            return new Vec3(this.x + vec.x, this.y + vec.y, this.z + vec.z);
        }
        sub(vec: Vec3): Vec3 {
            return new Vec3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
        }
        mul(vec: Vec3): Vec3 {
            return new Vec3(this.x * vec.x, this.y * vec.y, this.z * vec.z);
        }
        div(vec: Vec3): Vec3 {
            return new Vec3(this.x / vec.x, this.y / vec.y, this.z / vec.z);
        }
        Normalize(): Vec3 {
            throw new Error("Method not implemented.");
        }
        Normalized(): Vec3 {
            throw new Error("Method not implemented.");
        }
        Magnitude(): number {
            throw new Error("Method not implemented.");
        }
        public x: number = 0;
        public y: number = 0;
        public z: number = 0;

        constructor(x: number, y: number = x, z: number = x) {
            this.x = x; this.y = y; this.z = z;
        }


    }
}