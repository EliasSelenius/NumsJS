
namespace Nums {
    export class Vec2 implements IVec {
        public x: number = 0;
        public y: number = 0;

        constructor(x: number, y: number = x) {
            this.x = x; this.y = y;
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