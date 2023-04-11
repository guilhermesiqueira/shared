import { useApi } from "hooks/useApi";
import usersApi from "services/api/usersApi";
import CanDonate from "types/apiResponses/CanDonate";
import { emptyRequest } from "services/api";

function useCanDonate(integrationId: number | string | null, platform: string) {
  const {
    data: canDonate,
    isLoading,
    refetch,
  } = useApi<CanDonate>({
    key: "canDonate",
    fetchMethod: () => {
      if (integrationId) return usersApi.postCanDonate(integrationId, platform);

      return emptyRequest();
    },
    options: {
      enabled: !!integrationId,
    },
    criteria: [integrationId],
  });

  function formattedCanDonate() {
    if (canDonate === undefined) return true;

    return canDonate.canDonate;
  }

  return { canDonate: formattedCanDonate(), isLoading, refetch };
}

export default useCanDonate;
