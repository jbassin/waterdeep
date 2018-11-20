#! /bin/bash

yarn build;
ssh dijk "rm -rf ~/dist";
scp dist dijk:~
ssh dijkroot "service waterdeep stop";
ssh dijk "rm -rf ~/waterdeep";
ssh dijk "mv ~/dist ~/waterdeep";
ssh dijkroot "service waterdeep start";