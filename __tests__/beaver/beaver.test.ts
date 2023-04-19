// @ts-ignore 
import { postCommand } from '../../src/beaver/index';


test('postCommand', () => {
    const mockAjax = jest.fn();
    global.$ = { ajax: mockAjax };  // mock $ 

    postCommand('test');
    expect(mockAjax).toBeCalledWith({
        url: 'beaver/test',
        type: 'POST'
    });
});