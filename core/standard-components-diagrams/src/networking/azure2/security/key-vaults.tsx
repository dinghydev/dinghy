import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEY_VAULTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Key_Vaults.svg;',
  _width: 68,
  _height: 68,
}

export function KeyVaults(props: DiagramNodeProps) {
  return <Shape {...KEY_VAULTS} {...props} />
}
