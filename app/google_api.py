import requests
from flask import Flask, request, jsonify

class Calls:
    @staticmethod
    def get_reps(address):
        params = {
            "address": address,
            "key": 'AIzaSyDX7fJhgMw6P86Mh1WxprExe2rOdEM5bSU'
        }
        response = requests.get('https://www.googleapis.com/civicinfo/v2/representatives', params=params)
        data = response.json()
        for office in data['offices']:
            for official_index in office['officialIndices']:
                official = data['officials'][official_index]
                print(office['name'], official['name'])

    @staticmethod
    def get_voter_info(address):
        params = {
            "address": address,
            "key": 'AIzaSyDX7fJhgMw6P86Mh1WxprExe2rOdEM5bSU'
        }
        response = requests.get("https://www.googleapis.com/civicinfo/v2/voterinfo", params=params)
        response_data = response.json()
        return response_data

    @staticmethod
    def get_elections():
        params = {
            "key": 'AIzaSyDX7fJhgMw6P86Mh1WxprExe2rOdEM5bSU'
        }
        response = requests.get("https://www.googleapis.com/civicinfo/v2/elections", params=params)
        response_data = response.json()
        return response_data

#testing
abc = Calls()
voter_info = abc.get_voter_info("1523 Beacon St Waban MA")
zz = abc.get_reps("1523 Beacon St Waban MA")
print(zz) 
print(voter_info)
print(abc.get_elections())

