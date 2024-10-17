import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  async create(payload: CreateUserDto) {
    return await this.userModel.create({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
    });
  }

  async findAll() {
    return await this.userModel.findAll();
  }

  async findOne(id: number) {
    return await this.userModel.findByPk(id);
  }

  async update(payload: UpdateUserDto) {
    return await this.userModel.update(
      { name: payload.name,
        email: payload.email,
        phone: payload.phone, },
      { where: { id: payload.id } },
    );
  }

  async remove(id: number) {
    return await this.userModel.destroy({ where: { id } });
  }
}