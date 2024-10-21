import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "@sequelize/core";
import { AfterCreate, Attribute, AutoIncrement, NotNull, PrimaryKey } from "@sequelize/core/decorators-legacy";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {

    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<number>;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare firstName: string;

    @Attribute(DataTypes.STRING)
    declare lastName: string | null;
    
    @AfterCreate()
    static log() {
        console.log('---new entry created')
    }

}