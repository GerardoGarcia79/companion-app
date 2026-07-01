import { mockKits } from "../data/mockKits";
import type { Kit } from "../types/kit.types";

export async function getDevices(): Promise<Kit[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockKits);
    }, 1000);
  });
}
