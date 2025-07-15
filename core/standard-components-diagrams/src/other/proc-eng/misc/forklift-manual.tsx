import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORKLIFT_MANUAL = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.forklift_(manual);',
  _width: 140,
  _height: 100,
}

export function ForkliftManual(props: DiagramNodeProps) {
  return <Shape {...FORKLIFT_MANUAL} {...props} />
}
