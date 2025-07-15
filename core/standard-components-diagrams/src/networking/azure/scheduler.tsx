import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCHEDULER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.scheduler;pointerEvents=1;',
  _width: 40,
  _height: 50,
}

export function Scheduler(props: DiagramNodeProps) {
  return <Shape {...SCHEDULER} {...props} />
}
