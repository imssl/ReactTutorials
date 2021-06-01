export const pi=3.14
export let aDemoDataArray=[10,20,30,-1,40];


export function max (arrayOfNumbers){
    let max =arrayOfNumbers[0];

    for (let elem of arrayOfNumbers){
        if (elem>max){
            max=elem
        }
    }
    return max;
}

