import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SENTINEL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Azure_Sentinel.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 68,
}

export function Sentinel(props: DiagramNodeProps) {
  return <Shape {...SENTINEL} {...props} />
}
