import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPRAY_COOLER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.spray_cooler;',
  _width: 100,
  _height: 120,
}

export function SprayCooler(props: DiagramNodeProps) {
  return <Shape {...SPRAY_COOLER} {...props} />
}
