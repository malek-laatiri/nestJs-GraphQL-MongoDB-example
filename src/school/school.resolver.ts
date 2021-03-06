import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { SchoolService } from './school.service';
import { School } from './entities/school.entity';
import { CreateSchoolInput } from './dto/create-school.input';
import { UpdateSchoolInput } from './dto/update-school.input';
import { UserService } from 'src/user/user.service';

@Resolver(() => School)
export class SchoolResolver {
  constructor(private readonly schoolService: SchoolService,
    private readonly userService: UserService) {}

  @Mutation(() => School)
  async createSchool(@Args('createSchoolInput') createSchoolInput: CreateSchoolInput) {
    return await this.schoolService.create(createSchoolInput);
  }

  @Query(() => [School], { name: 'Allschools' })
  async findAll() {
    return await this.schoolService.findAll();
  }

  @Query(() => School, { name: 'school' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.schoolService.findOne(id);
  }

  @Mutation(() => School)
  updateSchool(@Args('updateSchoolInput') updateSchoolInput: UpdateSchoolInput) {
    return this.schoolService.update(updateSchoolInput.id, updateSchoolInput);
  }

  @Mutation(() => School)
  removeSchool(@Args('id', { type: () => Int }) id: number) {
    return this.schoolService.remove(id);
  }

  @ResolveField()
  async users(@Parent() parent:School){
    return this.userService.findBySchool(parent._id);
  }
}
