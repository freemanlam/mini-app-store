import { AppIconPipe } from './app-icon.pipe';

describe('AppIconPipe', () => {

  it('create an instance', () => {
    const pipe = new AppIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform icon right', () => {
    const pipe = new AppIconPipe();
    expect(pipe.transform(null)).toEqual('');

    expect(pipe.transform({
      'im:image': [
        {} as any,
        {
          label: 'test'
        }
      ]
    } as any)).toEqual('test');
  });

});
