import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTUNE_APP_PROTECTION = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Intune_App_Protection.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function IntuneAppProtection(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTUNE_APP_PROTECTION)} />
}
