import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "@sequelize/core";
import { Attribute, Default, NotNull, PrimaryKey, Table, Unique } from "@sequelize/core/decorators-legacy";


@Table({
    timestamps: true,
})
export class DrivingLicense extends Model<InferAttributes<DrivingLicense>, InferCreationAttributes<DrivingLicense>> {

    @Attribute(DataTypes.STRING)
    @PrimaryKey()
    @Default(() => crypto.randomUUID())
    declare drivingLicId: CreationOptional<string> 

    @Attribute(DataTypes.DATE)
    declare expiryDate: CreationOptional<Date> 

    //Foreign key
    @Attribute(DataTypes.STRING)
    @NotNull()
    @Unique()
    declare ownerId: string;
} 