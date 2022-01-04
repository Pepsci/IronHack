console.log(process.argv);


// let sum = 0;
// for (let i = 2; i < proceù.argv.length; i++) {
    //     sum += Number(process.argv[i]);
    // }
    
    // console.log(sum);


    const [,,...rest] = process.argv;
    console.log(rest);
    console.log(rest.reduce((a, v) => a + + v, 0));