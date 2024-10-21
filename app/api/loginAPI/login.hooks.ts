import { login } from './login.api';
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};

