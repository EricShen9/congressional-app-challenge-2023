import requests
import json

address = "1523 Beacon St Waban MA"

url = f'https://www.googleapis.com/civicinfo/v2/representatives?address={address}&key=AIzaSyDX7fJhgMw6P86Mh1WxprExe2rOdEM5bSU'

response = requests.get(url)

#print('Status code:', response.status_code)

data = response.json()
def get_reps():
    for office in data['offices']:
        for official_index in office['officialIndices']:
            official = data['officials'][official_index]
            print(office['name'], official['name'])

base_url = "https://www.googleapis.com/civicinfo/v2/voterinfo"
def get_voter_info(address):
    params = {
        "address": address,
        "key": 'AIzaSyDX7fJhgMw6P86Mh1WxprExe2rOdEM5bSU'
    }

    response = requests.get(base_url, params=params)
    response_data = response.json()
    return response_data

voter_info = get_voter_info(address)
print(voter_info)

z = "https://www.googleapis.com/civicinfo/v2/elections"

def get_elections():
    params = {
        "key" : 'AIzaSyDX7fJhgMw6P86Mh1WxprExe2rOdEM5bSU'
    }
    response = requests.get(z, params = params)
    abc = response.json()
    return abc


print(get_elections())