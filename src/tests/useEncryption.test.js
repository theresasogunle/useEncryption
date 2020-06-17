import { renderHook, act } from "@testing-library/react-hooks";
import useEncryption from "../useEncryption";

const encryptionKey = ";.xy.se.";

test("it should return functions", () => {
  const { result } = renderHook(() => useEncryption(encryptionKey));

  expect(typeof result.current.decryptData).toBe("function");
  expect(typeof result.current.encryptData).toBe("function");
});

test("it should encrypt a string", () => {
  const { result } = renderHook(() => useEncryption(encryptionKey));
  let dataTobeEncrypted = "hello";
  let encryptedData;
  act(() => {
    encryptedData = result.current.encryptData(dataTobeEncrypted);
  });

  expect(encryptedData).toHaveLength(44);
});

test("it should decrypt a string", () => {
  const { result } = renderHook(() => useEncryption(encryptionKey));
  let dataTobeEncrypted = "hello";
  let encryptedData;
  let decryptedData;
  act(() => {
    encryptedData = result.current.encryptData(dataTobeEncrypted);
  });

  act(() => {
    decryptedData = result.current.decryptData(encryptedData);
  });

  expect(decryptedData).toBe(dataTobeEncrypted);
});

test("it should encrypt a number", () => {
  const { result } = renderHook(() => useEncryption(encryptionKey));
  let dataTobeEncrypted = 90;
  let encryptedData;
  let decryptedData;
  act(() => {
    encryptedData = result.current.encryptData(dataTobeEncrypted);
  });

  act(() => {
    decryptedData = result.current.decryptData(encryptedData);
  });

  expect(Number(decryptedData)).toBe(dataTobeEncrypted);
});
