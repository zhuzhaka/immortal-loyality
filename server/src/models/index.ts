import { CardModel } from "./card-model";
import { CustomerModel } from "./customer-model";
import { UserModel } from "./user-model";

CustomerModel.hasMany(CardModel);
CardModel.belongsTo(CustomerModel);

export { UserModel, CustomerModel, CardModel };