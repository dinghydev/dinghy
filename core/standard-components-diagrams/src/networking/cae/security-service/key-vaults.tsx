import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEY_VAULTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Key_Vaults.svg;strokeColor=none;',
  },
  _width: 48,
  _height: 50,
}

export function KeyVaults(props: DiagramNodeProps) {
  return (
    <Shape {...KEY_VAULTS} {...props} _style={extendStyle(KEY_VAULTS, props)} />
  )
}
