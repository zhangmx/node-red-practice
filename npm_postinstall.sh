#!/usr/bin/env bash
for dir in *; do 
  if [ "${dir%node_modules*}" != "$dir" ]; then 
    continue 
  fi
  if [ -f "$dir/package.json" ]; then
    echo "$dir/package.json"
    npm install --prefix $dir
  fi 
done

for dir in */*; do 
  if [ "${dir%node_modules*}" != "$dir" ]; then 
    continue 
  fi
  if [ -f "$dir/package.json" ]; then
    echo "$dir/package.json"
    npm install --prefix $dir
  fi 
done

# for dir in main module1 module2
# do
#     npm install --prefix /project/$dir 
# done

# find . -type f -name package.json -exec bash -c 'yarn install --cwd $(dirname {})' \;

# find . -type f -name "package.json" -not -path "*/node_modules/*" -execdir npm install \;

# find . -type f -name "package.json" -not \( -path "*/node_modules/*" -or -path "." \) -execdir npm install \;

# # find all package.json files under all subdirectories except current directory and node_modules
# find . -type f -name "package.json" -not \( -path "*/node_modules/*" -or -path "." \) -execdir npm install \;



