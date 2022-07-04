import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xaEFF5a7409989F5c039Cd6787C4C5E147113D102"
);

export default instance;
