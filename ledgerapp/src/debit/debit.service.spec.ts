import { Test, TestingModule } from '@nestjs/testing';
import { DebitService } from './debit.service';

describe('DebitService', () => {
  let service: DebitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebitService],
    }).compile();

    service = module.get<DebitService>(DebitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
