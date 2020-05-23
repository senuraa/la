import { Test, TestingModule } from '@nestjs/testing';
import { LRegsService } from './l-regs.service';

describe('LRegsService', () => {
  let service: LRegsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LRegsService],
    }).compile();

    service = module.get<LRegsService>(LRegsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
