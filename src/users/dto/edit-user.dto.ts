import { createUser } from "./register-user.dto";
import { PartialType } from "@nestjs/mapped-types";

export class editUser extends PartialType(createUser) {}
