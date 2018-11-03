
namespace Nums {

    export interface IVec<Vec> {
        add(vec: Vec): Vec;
        sub(vec: Vec): Vec;
        mul(vec: Vec): Vec;
        div(vec: Vec): Vec;

        Normalize(): Vec;
        Normalized(): Vec;
        
        Magnitude(): number;

    }
}