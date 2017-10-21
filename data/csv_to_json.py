'''
Script to transform CSV file into JSON format

    [
        {
            "suku": "ACC",
            "birds": [
                {
                "nimi": "Accipiter gentilis",
                "suku": "ACC",
                "lyhenne": "ACCGEN"
                },
                {
                "nimi": "Accipiter nisus",
                "suku": "ACC",
                "lyhenne": "ACCNIS"
                }
            ]
        }
        ...
    ]

Execute with Python 2.7
   virtualenv venv --python=python2.7
   . venv/bin/activate

'''
import json
import csv
import sys


BINOMIAL_ABBREVIATION_MAX_LENGTH = 10
BINOMIAL_ABBREVIATION_MIN_LENGTH = 6
BINOMIAL_ABBREVIATION_ILLEGAL_CHAR = '/'


def extract_genus(name):
    ''' Return first three letters from parameter, the genus '''
    return name[0:3]


def taxon_list_to_json(taxons):
    ''' Print the json to console '''
    print(json.dumps(taxons))


def not_relevant(row):
    ''' it's not relevant, it's irrelevant '''
    if len(row['lyhenne']) > BINOMIAL_ABBREVIATION_MAX_LENGTH:
        return True
    elif len(row['lyhenne']) < BINOMIAL_ABBREVIATION_MIN_LENGTH:
        return True
    elif BINOMIAL_ABBREVIATION_ILLEGAL_CHAR in row['lyhenne']:
        return True
    else:
        return False


def read_and_transform(file_name):
    ''' Read CSV file and transform into a custom JSON '''
    csv.register_dialect('semicolon', delimiter=';')
    previous_genus = ''
    taxon_list = []
    bird_list = []

    with open(file_name, 'r') as taxon_csv:
        reader = csv.DictReader(taxon_csv, dialect='semicolon')

        for row in reader:

            if not_relevant(row):
                continue
            else:
                bird_object = {
                    'suku': extract_genus(row['lyhenne']),
                    'lyhenne': row['lyhenne'],
                    'nimi': row['tieteellinen']}
                genus = extract_genus(row['lyhenne'])

                if previous_genus == '':
                    bird_list.append(bird_object)
                    previous_genus = genus

                elif previous_genus == genus:
                    bird_list.append(bird_object)
                    previous_genus = genus

                else:
                    taxon_object = {
                        'suku': previous_genus,
                        'birds': bird_list}
                    taxon_list.append(taxon_object)
                    previous_genus = genus
                    bird_list = []
                    bird_list.append(bird_object)

        taxon_list_to_json(taxon_list)


# guard to only execute code when a file is invoked as a script
if __name__ == '__main__':
    if len(sys.argv) > 1:
        read_and_transform(sys.argv[1])
    else:
        raise Exception('The CSV file name is needed as a parameter!')
