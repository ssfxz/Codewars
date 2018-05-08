// https://www.codewars.com/kata/can-you-get-the-loop

const loop_size = (node) => {
    let step = 1;
    let slow = node;
    
    while (true) {
        let fast = slow.next;
        for (let i = 0; i < step; ++i, fast = fast.next) {
            if (slow === fast) return i + 1;
        }
        step *= 2;
        slow = fast;
    }
}