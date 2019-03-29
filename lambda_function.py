import os
import json


def lambda_handler(event, context):
    lambda_cypress()

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }


def lambda_cypress():
    result_file = './cypress/results/mochawesome.json'

    try:
        if os.path.isdir('./cypress/results'):
            json_file = read_json_file(result_file)

            if json_file['stats']['failures'] != 0:
                os.remove(result_file)
                run_cypress()
        else:
            run_cypress()

    except Exception as ex:
        print("Exception: " + str(ex))


def read_json_file(result_file):
    with open(result_file) as json_file:
        return json.load(json_file)


def run_cypress():
    os.system("npm i")
    os.system("npm run cy-run")

