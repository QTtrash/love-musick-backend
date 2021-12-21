#!/usr/bin/env bash
docker-compose -f src/database/stack.yml rm -s -f
docker-compose -f src/database/stack.yml up