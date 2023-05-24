import * as cdigit from "cdigit";

const cnmGenerator = (cns: string, number: string) => {
    const register = number.padStart(7, '0');
    const book = "2";
    const preCnm = cns + book + register;
    const digit = cdigit.mod97_10.compute(preCnm);

    return cns + "." + book + "." + number + "-" + digit;
}

const x = cnmGenerator("999999", "0000001");

console.log(x);