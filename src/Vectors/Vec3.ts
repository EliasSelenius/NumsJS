
namespace Nums {
    export class Vec3 extends Vec<Vec3>{
        
        protected get instance(): Vec3 {
            return this;
        }


        public x: number;
        public y: number;
        public z: number;

        get Array(): number[] {
            return [ this.x, this.y, this.z ];
        }
        set Array(v: number[]) {
            this.x = v[0];
            this.y = v[1];
            this.z = v[2];
        }

        constructor(x: number = 0, y: number = x, z: number = x) {
            super();
            this.x = x; this.y = y; this.z = z;
        }

        add(vec: Vec3): Vec3 {
            return new Vec3(this.x + vec.x, this.y + vec.y, this.z + vec.z);
        }
        sub(vec: Vec3): Vec3 {
            return new Vec3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
        }
        mulByVec(vec: Vec3): Vec3 {
            return new Vec3(this.x * vec.x, this.y * vec.y, this.z * vec.z);
        }
        mulByNum(v: number): Vec3 {
            return new Vec3(this.x * v, this.y * v, this.z * v);
        }
        divByVec(vec: Vec3): Vec3 {
            return new Vec3(this.x / vec.x, this.y / vec.y, this.z / vec.z);
        }
        divByNum(v: number): Vec3 {
            return new Vec3(this.x / v, this.y / v, this.z / v);
        }
    }
}