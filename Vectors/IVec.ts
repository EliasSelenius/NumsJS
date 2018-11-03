
namespace Nums {

    export interface IVec {
        add(): IVec;
        sub(): IVec;
        mul(): IVec;
        div(): IVec;

        Normalize(): IVec;
        Normalized(): IVec;
        
        Magnitude(): number;

    }
}