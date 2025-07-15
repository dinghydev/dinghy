import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEY_VAULTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Key_Vaults.svg;',
  _width: 48,
  _height: 50,
}

export function KeyVaults(props: DiagramNodeProps) {
  return <Shape {...KEY_VAULTS} {...props} />
}
