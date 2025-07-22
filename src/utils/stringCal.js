export function AddValue(numbers){
    if(!numbers) return 0;

    let delimiter = /,|\n/;
    let numberStr = numbers;

    if(numbers.startsWith("//")){
        const match = numbers.match(/^\/\/(.+)\n(.*)/);
        if(match){
            delimiter = new RegExp(match[1]);
            numberStr = match[2];
        }
    }

    
}