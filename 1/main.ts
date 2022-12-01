const input = await Deno.readTextFile("./input.txt");

const elves = input.replace(/\r/g, "").trim().split("\n\n");

const part1 = (elves: string[]) => {
    let max = 0;

    for (const elf of elves) {
        const sum = elf
            .split("\n")
            .reduce((prev, current) => prev + +current, 0);
        if (sum > max) max = sum;
    }

    console.log(max);
};

const part2 = (elves: string[]) => {
    const top = [0, 0, 0];

    for (const elf of elves) {
        const sum = elf
            .split("\n")
            .reduce((prev, current) => prev + +current, 0);

        top.push(sum);
        top.sort((a, b) => b - a);
        top.pop();
    }
    console.log(top.reduce((prev, current) => prev + current, 0));
};

part1(elves);
part2(elves);
