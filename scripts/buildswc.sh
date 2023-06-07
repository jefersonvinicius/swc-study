rm -rf ./buildswc
swc ./index.ts -o ./buildswc/index.js 
swc ./src -d ./buildswc/src
cp src/banks.json buildswc/src/banks.json
