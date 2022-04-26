#!/bin/bash

# Variables

#create docker folder if not exist
if [ ! -d ".docker/" ]
then
  mkdir .docker
  mkdir .docker/auth
  mkdir .docker/users
  mkdir .docker/todos
fi

