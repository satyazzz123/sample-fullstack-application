#!/bin/bash

npx prisma migrate dev --name init
npx prisma generate
yarn run start