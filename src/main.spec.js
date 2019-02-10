describe('main', () => {
  it('given nothing, when called, then show result in console.log', () => {
    const spy = jest.spyOn(console, 'log');

    jest.spyOn(process, 'exit').mockImplementationOnce(() => {
      throw new Error('process.exit() was called.')
    });

    expect(() => {
      require('./main.js');
    }).toThrow('process.exit() was called.');
    expect(spy.mock.calls).toMatchSnapshot();
    expect(process.exit).toHaveBeenCalledWith(0);
  });
})