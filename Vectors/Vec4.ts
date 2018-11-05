

namespace Nums {
    export class Vec4 {
        add(vec: Vec4): Vec4 {
            return new Vec4(this.x + vec.x, this.y + vec.y, this.z + vec.z, this.w + vec.w);
        }
        sub(vec: Vec4): Vec4 {
            return new Vec4(this.x - vec.x, this.y - vec.y, this.z - vec.z, this.w - vec.w);
        }
        mul(vec: Vec4): Vec4 {
            return new Vec4(this.x * vec.x, this.y * vec.y, this.z * vec.z, this.w * vec.w);
        }
        div(vec: Vec4): Vec4 {
            return new Vec4(this.x / vec.x, this.y / vec.y, this.z / vec.z, this.w / vec.w);
        }
        Normalize(): Vec4 {
            throw new Error("Method not implemented.");
        }
        Normalized(): Vec4 {
            throw new Error("Method not implemented.");
        }
        Magnitude(): number {
            throw new Error("Method not implemented.");
        }
        
        public x: number = 0;
        public y: number = 0;
        public z: number = 0;
        public w: number = 0;

        constructor(x: number = 0, y: number = x, z: number = x, w: number = x) {
            this.x = x; this.y = y; this.z = z; this.w = w;
        }


    }
}