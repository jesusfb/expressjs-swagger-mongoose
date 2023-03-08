import { describe, expect, test } from "@jest/globals";
import axios from 'axios';

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});
describe("subtract module", () => {
    test("subtract 5-2 to equal 3", () => {
      expect(5 - 2).toBe(3);
    });
  });

  describe("first function",()=>{
    var config = {
      method: 'get',
    maxBodyLength: Infinity,
      url: 'localhost:8000/users',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  })