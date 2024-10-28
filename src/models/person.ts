import { CreationOptional, DataTypes, HasOneCreateAssociationMixin, HasOneSetAssociationMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "@sequelize/core";
import { Attribute, Default, HasOne, PrimaryKey, Table } from "@sequelize/core/decorators-legacy";
import crypto from "node:crypto";
import { DrivingLicense } from "./drivingLicense";


@Table({
    paranoid: true,
    timestamps: true,
})
export class Person extends Model<InferAttributes<Person>, InferCreationAttributes<Person>> {

    @Attribute(DataTypes.STRING)
    @PrimaryKey()
    @Default(() => crypto.randomUUID())
    declare personId: CreationOptional<string> 

    @Attribute(DataTypes.STRING)
    declare fullName: string

    @HasOne(DrivingLicense, 'ownerId')
    declare drivingLicense: NonAttribute<DrivingLicense>

    declare createDrivingLicense: HasOneCreateAssociationMixin<DrivingLicense, 'ownerId'>;
    declare setDrivingLicense: HasOneSetAssociationMixin<DrivingLicense, DrivingLicense['drivingLicId']>


}