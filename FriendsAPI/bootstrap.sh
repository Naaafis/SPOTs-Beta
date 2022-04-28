#!/bin/sh
export FLASK_APP=./API/index.py
source $(pipenv --venv)/bin/activate
flask run -h 0.0.0.0 -p 6000