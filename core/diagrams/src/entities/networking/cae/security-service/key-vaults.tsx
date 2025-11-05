import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEY_VAULTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Key_Vaults.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 50,
}

export function KeyVaults(props: NodeProps) {
  return (
    <Shape {...KEY_VAULTS} {...props} _style={extendStyle(KEY_VAULTS, props)} />
  )
}
