import {BodyParams, Controller, Post} from "@tsed/common";
import {Get} from "@tsed/common/mvc/decorators/method/route";
import {User} from "../../entity/User";
import {UsersService} from "../../services/UsersService";

@Controller("/users")
export class UsersCtrl {

  constructor(private usersService: UsersService) {

  }

  @Post("/")
  create(@BodyParams() user: User): Promise<User> {
    console.log("user=>", user);
    return this.usersService.create(user);
  }

  @Get("/")
  async getList(): Promise<User[]> {
    return this.usersService.find();
  }
}