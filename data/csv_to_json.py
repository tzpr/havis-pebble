__author__ = 'jimd'

import json
import csv
import sys

# 
# Script transforms CSV file to JSON format
#
# [
#   {
#     "suku": "ACC",
#     "birds": [
#       {
#         "nimi": "Accipiter gentilis",
#         "suku": "ACC",
#         "lyhenne": "ACCGEN"
#       },
#       {
#         "nimi": "Accipiter nisus",
#         "suku": "ACC",
#         "lyhenne": "ACCNIS"
#       }
#     ]
#   }	
#  ] 


taxon_list = []
bird_list = []
previous_genus = ''
BINOMIAL_ABBREVIATION_MAX_LENGTH = 10
BINOMIAL_ABBREVIATION_MIN_LENGTH = 6
BINOMIAL_ABBREVIATION_ILLEGAL_CHAR = '/'


def extract_genus(name):
    return name[0:3]


def add_to_bird_list(bird):
    bird_list.append(bird)


def add_to_taxon_list(taxon):
    taxon_list.append(taxon)


def taxon_list_to_json():
    print taxon_list


# print json.dumbs(taxon_list)

def not_relevant(row):
    if (len(row['lyhenne']) > BINOMIAL_ABBREVIATION_MAX_LENGTH):
        return True
    elif (len(row['lyhenne']) < BINOMIAL_ABBREVIATION_MIN_LENGTH):
        return True
    elif (BINOMIAL_ABBREVIATION_ILLEGAL_CHAR in row['lyhenne']):
        return True
    else:
        return False


csv.register_dialect('semicolon', delimiter=';')

with open(sys.argv[1], 'r') as f:
    reader = csv.DictReader(f, dialect='semicolon')

    for row in reader:

        if (not_relevant(row)):
            # print ' irrelevant : ', row['lyhenne']
            continue
        else:
            bird_object = {
                'suku': extract_genus(row['lyhenne']),
                'lyhenne': row['lyhenne'],
                'nimi': row['tieteellinen']}
            genus = extract_genus(row['lyhenne'])

            if previous_genus == '':
                add_to_bird_list(bird_object)
                previous_genus = genus

            elif previous_genus == genus:
                add_to_bird_list(bird_object)
                previous_genus = genus

            else:
                taxon_object = {
                    'suku': previous_genus,
                    'birds': bird_list}
                add_to_taxon_list(taxon_object)
                previous_genus = genus
                bird_list = []
                add_to_bird_list(bird_object)

    f.close()
    taxon_list_to_json()
print ' end'
