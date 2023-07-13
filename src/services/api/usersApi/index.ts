import { AxiosResponse } from "axios";
import User from "types/entities/User";
import CanDonate from "types/apiResponses/CanDonate";
import CompletedTask from "types/apiResponses/CompletedTask";
import TasksStatistics from "types/apiResponses/TasksStatistics";
import FirstAccessToIntegration from "types/apiResponses/FirstAccessToIntegration";
import { apiPost, apiGet, apiDelete } from "..";

const usersApi = {
  postCreateUser: (email: string, language: string): Promise<AxiosResponse<User>> =>
    apiPost("users", { email, language }),

  postSearchUser: (email: string): Promise<AxiosResponse<User>> =>
    apiPost("users/search", { email }),

  getUserStatistics: (
    id?: number,
    walletAddress?: string,
  ): Promise<AxiosResponse<User>> =>
    apiGet(
      `users/statistics/?${id ? `id=${id}&` : ""}${
        walletAddress ? `wallet_address=${walletAddress}` : ""
      }`,
    ),

  getFirstAccessToIntegration: (
    integrationId: number | string | null,
  ): Promise<AxiosResponse<FirstAccessToIntegration>> =>
    apiGet(`users/first_access_to_integration/?integration_id=${integrationId}`),

  postCanDonate: (
    integrationId: number | string,
    platform: "app" | "web",
    voucherId?: string,
  ): Promise<AxiosResponse<CanDonate>> =>
    apiPost("users/can_donate", { integrationId, platform, voucherId }),

  getCompletedTasks: (): Promise<AxiosResponse<CompletedTask[]>> =>
    apiGet("users/completed_tasks"),

  postCompleteTask: (
    taskIdentifier: number | string,
  ): Promise<AxiosResponse<CompletedTask>> =>
    apiPost("users/complete_task", { taskIdentifier }),

  getTasksStatistics: (): Promise<AxiosResponse<TasksStatistics>> =>
    apiGet("users/tasks_statistics"),

  postCompletedAllTasks: (): Promise<AxiosResponse<TasksStatistics>> =>
    apiPost("users/completed_all_tasks", {}),

  postUpdateStreak: (): Promise<AxiosResponse<TasksStatistics>> =>
    apiPost("users/update_streak", {}),

  postSendDeleteAccountEmail: (): Promise<AxiosResponse<{}>> =>
    apiPost("users/send_delete_account_email", {}),

  deleteUser: (token: string): Promise<AxiosResponse<{}>> =>
    apiDelete(`users?token=${token}`, {}),
};

export default usersApi;
