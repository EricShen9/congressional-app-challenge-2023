import requests
import json

api_key = 'AIzaSyDX7fJhgMw6P86Mh1WxprExe2rOdEM5bSU'
address = "1523 Beacon St Waban MA"

url = f'https://www.googleapis.com/civicinfo/v2/representatives?address={address}&key={api_key}'

response = requests.get(url)

print('Status code:', response.status_code)

data = response.json()

for office in data['offices']:
    for official_index in office['officialIndices']:
        official = data['officials'][official_index]
        print(office['name'], official['name'])