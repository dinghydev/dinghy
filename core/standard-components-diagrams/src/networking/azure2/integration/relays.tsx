import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RELAYS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Relays.svg;strokeColor=none;',
  _width: 67,
  _height: 60,
}

export function Relays(props: DiagramNodeProps) {
  return <Shape {...RELAYS} {...props} />
}
