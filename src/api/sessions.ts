import { toast } from "sonner";
import type { SessionPayload } from "../types/session.types";

export async function createSession(payload: SessionPayload) {
  return new Promise<{ status: number }>((resolve) => {
    setTimeout(() => {
      toast.success(
        `La sesión se guardó correctamente:
        ${JSON.stringify(payload, null, 2)}`,
      );

      resolve({
        status: 201,
      });
    }, 1000);
  });
}
