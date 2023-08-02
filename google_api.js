require('dotenv').config();

class Calls {
  static async getReps(address) {
    const params = new URLSearchParams({
      address: address,
      key: process.env.API_KEY
    });
    const response = await fetch('https://www.googleapis.com/civicinfo/v2/representatives?' + params.toString());
    const data = await response.json();
    for (const office of data.offices) {
      for (const officialIndex of office.officialIndices) {
        const official = data.officials[officialIndex];
        console.log(office.name, official.name);
      }
    }
  }

  static async getVoterInfo(address) {
    const params = new URLSearchParams({
      address: address,
      key: process.env.API_KEY
    });
    const response = await fetch('https://www.googleapis.com/civicinfo/v2/voterinfo?' + params.toString());
    const data = await response.json();
    return data;
  }

  static async getElections() {
    const params = new URLSearchParams({
      key: process.env.API_KEY
    });
    const response = await fetch('https://www.googleapis.com/civicinfo/v2/elections?' + params.toString());
    const data = await response.json();
    return data;
  }
}

//testing
const abc = new Calls();
Calls.getReps("1523 Beacon St Waban MA")
  .then(() => Calls.getVoterInfo("1523 Beacon St Waban MA"))
  .then(voterInfo => {
    console.log(voterInfo);
    return Calls.getElections();
  })
  .then(elections => console.log(elections));
