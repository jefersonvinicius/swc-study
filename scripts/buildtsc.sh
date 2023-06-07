rm -rf ./buildtsc
tsc --skipLibCheck
cp src/banks.json buildtsc/src/banks.json
