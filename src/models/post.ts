import { DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "@sequelize/core";
import { Attribute, BelongsTo, Default, NotNull, PrimaryKey, Table } from "@sequelize/core/decorators-legacy";
import crypto from 'node:crypto'
import { User } from "./user";

@Table({
    paranoid: true,
    timestamps: true,
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt','deletedAt']
        }
    },
})
export class Post extends Model <InferAttributes<Post>, InferCreationAttributes<Post>> {
    @Attribute(DataTypes.STRING)
    @PrimaryKey
    @Default(() => crypto.randomUUID())
    declare postId: string

    @Attribute(DataTypes.STRING)
    declare title: string
    
    @Attribute(DataTypes.TEXT)
    declare description: string

    @BelongsTo(() => User, 'userId')
    declare user?: NonAttribute<User> 

    @Attribute(DataTypes.STRING)
    @NotNull
    declare userId: string

}