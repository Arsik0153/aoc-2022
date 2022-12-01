// deno run --watch --allow-read main.ts

const input = await Deno.readTextFile("./input.txt");

const list = input.replace(/\r/g, "").trim();

const part1 = (list: string) => {};

const part2 = (list: string) => {};

part1(list);
part2(list);
