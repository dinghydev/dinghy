import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT_CORE_2 = {
  _style:
    'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  _width: 0,
  _height: 68,
}

export function IotCore2(props: DiagramNodeProps) {
  return <Shape {...IOT_CORE_2} {...props} />
}
