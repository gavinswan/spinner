let timer = 0;
const sentence = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\n'];
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 200)
};