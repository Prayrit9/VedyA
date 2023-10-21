import { useEffect } from 'react';
import { useModalBaseContext } from './ModalBase.context.js';

function useModalTitle() {
  const ctx = useModalBaseContext();
  useEffect(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

export { useModalTitle };
//# sourceMappingURL=use-modal-title-id.js.map
