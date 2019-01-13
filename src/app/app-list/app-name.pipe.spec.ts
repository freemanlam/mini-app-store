import { AppNamePipe } from './app-name.pipe';

describe('AppNamePipe', () => {

  it('create an instance', () => {
    const pipe = new AppNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform name right', () => {
    const pipe = new AppNamePipe();
    expect(pipe.transform(null)).toEqual('');

    expect(pipe.transform({
      'im:name': {
        label: 'test'
      }
    } as any)).toEqual('test');
  });

});
