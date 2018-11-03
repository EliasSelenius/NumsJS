
namespace Nums {
    export class Vec3 implements IVec {
        public x: number = 0;
        public y: number = 0;
        public z: number = 0;

        constructor(x: number, y: number = x, z: number = x) {
            this.x = x; this.y = y; this.z = z;
        }

        add(): IVec {
            throw new Error("Method not implemented.");
        }
        sub(): IVec {
            throw new Error("Method not implemented.");
        }
        mul(): IVec {
            throw new Error("Method not implemented.");
        }
        div(): IVec {
            throw new Error("Method not implemented.");
        }
        Normalize(): IVec {
            throw new Error("Method not implemented.");
        }
        Normalized(): IVec {
            throw new Error("Method not implemented.");
        }
        Magnitude(): number {
            throw new Error("Method not implemented.");
        }
    }
}