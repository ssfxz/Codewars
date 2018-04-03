// https://www.codewars.com/kata/simple-assembler-interpreter/javascript

const simple_assembler = (program) => {
    let registers = {};
    let instructionIndex = 0;
    
    const checkRegisters = x => registers[x] !== undefined ? registers[x] : parseInt(x);
    
    const mov = (x , y) => {
      registers[x] = checkRegisters(y);
      ++ instructionIndex;
    }
    
    const inc = x => {
      ++ registers[x];
      ++ instructionIndex;
    }
    
    const dec = x => {
      -- registers[x];
      ++ instructionIndex;
    }
    
    const jnz = (x, y) => {
      instructionIndex = checkRegisters(x) == 0 ? instructionIndex + 1 : instructionIndex + checkRegisters(y);
    }
    
    const instructionMap = {
      'mov' : mov,
      'inc' : inc,
      'dec' : dec,
      'jnz' : jnz
    }
    
    while (instructionIndex < program.length) {
      const instruction = program[instructionIndex].split(' ');
      instructionMap[instruction[0]](instruction[1],instruction[2]);
    }
    
    return registers;
  }