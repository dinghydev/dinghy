import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEY_VAULTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Key_Vaults.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function KeyVaults(props: DiagramNodeProps) {
  return (
    <Shape {...KEY_VAULTS} {...props} _style={extendStyle(KEY_VAULTS, props)} />
  )
}
