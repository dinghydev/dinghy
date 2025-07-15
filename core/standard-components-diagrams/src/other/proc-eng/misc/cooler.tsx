import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COOLER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooler;',
  _width: 85,
  _height: 90,
}

export function Cooler(props: DiagramNodeProps) {
  return <Shape {...COOLER} {...props} />
}
