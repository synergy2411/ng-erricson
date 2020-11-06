import { DataService } from './data.service';

describe('Testing Suite 1', () => {

  let ds : DataService;

  beforeEach(() => {
    ds = new DataService();
  })

  it('Should change the username to Bar', () => {
    ds.setName('Bar');
    let user = ds.getName();
    expect(user.name).toContain('Bar');
  })

  it('Should have username as Foo', () => {
    expect(ds.user.name).toEqual('Foo');
  })

  it('Should be truthy', () => {
    expect(true).toBeTruthy();
  });

  it('1 should be equal to 1', () => {
    expect(1).toEqual(1);
  })

  it("Should contain name 'Foo'", () => {
    const username = "Foo";
    expect(username).toContain('Foo');
  })

})
