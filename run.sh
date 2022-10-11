#!/usr/bin/env bash

docker compose up --build --scale web=3 --remove-orphans