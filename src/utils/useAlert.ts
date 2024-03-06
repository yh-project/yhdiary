import { useRecoilState } from "recoil";
import { alertAtom } from "recoil/alertAtom";
import { AlertInterface } from "interface/UtilInterface";

export const useAlert = (): AlertInterface => {
  const [alertState, setAlertState] = useRecoilState(alertAtom);

  const alert: AlertInterface = {
    onAndOff: (msg: string) => {
      setAlertState({ msg: msg, state: true });
      setTimeout(() => setAlertState({ msg: "", state: false }), 2000);
    },
  };

  return alert;
};
