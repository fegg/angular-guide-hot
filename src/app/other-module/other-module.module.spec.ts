import { OtherModuleModule } from './other-module.module';

describe('OtherModuleModule', () => {
  let otherModuleModule: OtherModuleModule;

  beforeEach(() => {
    otherModuleModule = new OtherModuleModule();
  });

  it('should create an instance', () => {
    expect(otherModuleModule).toBeTruthy();
  });
});
