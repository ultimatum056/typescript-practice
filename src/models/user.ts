import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "@sequelize/core";
import { AfterCreate, Attribute, Default, NotNull, PrimaryKey, Table } from "@sequelize/core/decorators-legacy";
import crypto from 'node:crypto'

@Table({
    timestamps: true,
    defaultScope: {
        attributes: {
            exclude: ['deletedAt']
        }
    },
    hooks: {
        beforeCreate: () =>{
            console.log('--this is before cerating')
        }
    }
})
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {

    @Attribute(DataTypes.STRING)
    @PrimaryKey
    @Default(() => crypto.randomUUID())
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