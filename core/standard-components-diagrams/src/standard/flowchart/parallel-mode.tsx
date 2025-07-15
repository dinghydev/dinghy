import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARALLEL_MODE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.parallel_mode;pointerEvents=1',
  _width: 95,
  _height: 40,
}

export function ParallelMode(props: DiagramNodeProps) {
  return <Shape {...PARALLEL_MODE} {...props} />
}
