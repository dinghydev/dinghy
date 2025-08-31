import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEY_VAULTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Key_Vaults.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function KeyVaults(props: DiagramNodeProps) {
  return (
    <Shape {...KEY_VAULTS} {...props} _style={extendStyle(KEY_VAULTS, props)} />
  )
}
