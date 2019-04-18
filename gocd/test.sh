#!/bin/sh

ls

export CYPRESS_username1=${username1}
export CYPRESS_password1=${password1}
export CYPRESS_username2=${username2}
export CYPRESS_password2=${password2}

echo "osman"

echo ${CYPRESS_username1}
echo ${CYPRESS_password1}

npm i
npm install --save-dev cypress
apt-get install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
$(npm bin)/cypress verify
npx cypress run

cd ~
ls
cd ..
ls

# mkdir ~/../go-working-dir/search-pss-metrics -p
# cp -r results ~/../go-working-dir/search-pss-metrics