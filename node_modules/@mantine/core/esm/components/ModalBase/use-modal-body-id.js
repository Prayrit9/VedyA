import { useEffect } from 'react';
import { useModalBaseContext } from './ModalBase.context.js';

function useModalBodyId() {
  const ctx = useModalBaseContext();
  useEffect(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

export { useModalBodyId };
//# sourceMappingURL=use-modal-body-id.js.map
