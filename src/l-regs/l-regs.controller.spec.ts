import { Test, TestingModule } from '@nestjs/testing';
import { LRegsController } from './l-regs.controller';

describe('LRegs Controller', () => {
  let controller: LRegsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LRegsController],
    }).compile();

    controller = module.get<LRegsController>(LRegsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
