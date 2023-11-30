import { CardModel } from "./card-model";
import { CustomerModel } from "./customer-model";
import { UserModel } from "./user-model";
import { AppModel } from "./app-model";

CustomerModel.hasMany(CardModel);
CardModel.belongsTo(CustomerModel);

export { AppModel, UserModel, CustomerModel, CardModel };
