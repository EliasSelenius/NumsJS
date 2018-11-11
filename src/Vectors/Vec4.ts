

namespace Nums {
    export class Vec4 extends Vec<Vec4> {
        protected get instance(): Vec4 {
            return this;
        }

        get Array(): number[] {
            return [ this.x, this.y, this.z, this.w ];
        }
        set Array(v: number[]) {
            this.x = v[0];
            this.x = v[1];
            this.x = v[2];
            this.x = v[3];
        } 


        add(vec: Vec4): Vec4 {
            return new Vec4(this.x + vec.x, this.y + vec.y, this.z + vec.z, this.w + vec.w);
        }
        sub(vec: Vec4): Vec4 {
            return new Vec4(this.x - vec.x, this.y - vec.y, this.z - vec.z, this.w - vec.w);
        }
        mulByVec(vec: Vec4): Vec4 {
            return new Vec4(this.x * vec.x, this.y * vec.y, this.z * vec.z, this.w * vec.w);
        }
        mulByNum(v: number): Vec4 {
            throw new Error("Method not implemented.");
        }
        divByVec(vec: Vec4): Vec4 {
            return new Vec4(this.x / vec.x, this.y / vec.y, this.z / vec.z, this.w / vec.w);
        }
        divByNum(v: number): Vec4 {
            throw new Error("Method not implemented.");
        }

        public x: number = 0;
        public y: number = 0;
        public z: number = 0;
        public w: number = 0;

        constructor(x: number = 0, y: number = x, z: number = x, w: number = x) {
            super();
            this.x = x; this.y = y; this.z = z; this.w = w;
        }


    }
}