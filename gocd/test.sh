#!/bin/sh

ls

export CYPRESS_username1=${username1}
export CYPRESS_password1=${password1}
export CYPRESS_username2=${username2}
export CYPRESS_password2=${password2}

echo "osman"

echo ${CYPRESS_username1}
echo ${CYPRESS_password1}


DEBUG=cypress:* npx cypress run

cd ~
ls
cd ..
ls

# mkdir ~/../go-working-dir/search-pss-metrics -p
# cp -r results ~/../go-working-dir/search-pss-metrics