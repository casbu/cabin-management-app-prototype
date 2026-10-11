function initData() {
  jimData.datamasters["Cabins"] = [
    {
      "id": 1,
      "datamaster": "Cabins",
      "userdata": {
        "449877ab-09d4-49b2-b7c1-ed82b255a138": "Crown Point",
        "7b3914af-0b24-44b3-a109-cd9637c8b84e": "./resources/jim/images/common/cross.svg",
        "11008e57-02fa-457c-947a-edc52251b21b": "Running Water,Bunk Beds",
        "38374bbf-8136-4b56-b2bc-8f94a3fd6a30": "$75/night",
        "db3103cc-e9c5-4578-b4af-b0e689430ad6": "11/05/2024",
        "78d97e1d-552e-405e-9025-0c83bfdcc7ae": "Sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "Cabins",
      "userdata": {
        "449877ab-09d4-49b2-b7c1-ed82b255a138": "Comanche Peak",
        "7b3914af-0b24-44b3-a109-cd9637c8b84e": "./resources/jim/images/common/cross.svg",
        "11008e57-02fa-457c-947a-edc52251b21b": "Electricity (LED),Bunk Beds",
        "38374bbf-8136-4b56-b2bc-8f94a3fd6a30": "$64/night",
        "db3103cc-e9c5-4578-b4af-b0e689430ad6": "11/05/2024",
        "78d97e1d-552e-405e-9025-0c83bfdcc7ae": "Sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "Cabins",
      "userdata": {
        "449877ab-09d4-49b2-b7c1-ed82b255a138": "Stormy Peaks",
        "7b3914af-0b24-44b3-a109-cd9637c8b84e": "./resources/jim/images/common/cross.svg",
        "11008e57-02fa-457c-947a-edc52251b21b": "Bunk Beds",
        "38374bbf-8136-4b56-b2bc-8f94a3fd6a30": "$120/night",
        "db3103cc-e9c5-4578-b4af-b0e689430ad6": "11/05/2024",
        "78d97e1d-552e-405e-9025-0c83bfdcc7ae": "Sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "Cabins",
      "userdata": {
        "449877ab-09d4-49b2-b7c1-ed82b255a138": "Signal Mountain",
        "7b3914af-0b24-44b3-a109-cd9637c8b84e": "./resources/jim/images/common/cross.svg",
        "11008e57-02fa-457c-947a-edc52251b21b": "Electricity (Solar)",
        "38374bbf-8136-4b56-b2bc-8f94a3fd6a30": "$96/night",
        "db3103cc-e9c5-4578-b4af-b0e689430ad6": "11/05/2024",
        "78d97e1d-552e-405e-9025-0c83bfdcc7ae": "Sample text"
      }
    }
  ];
  jimData.datamasters["Cabins"].category = {
    "1d6593d3-0fc1-4713-8c88-1d3f53c4a91a": ["Running Water","Electricity (Solar)","Electricity (LED)","Bunk Beds"]
  };

  jimData.isInitialized = true;
}