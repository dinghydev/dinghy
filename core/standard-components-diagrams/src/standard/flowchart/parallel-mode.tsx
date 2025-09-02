import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARALLEL_MODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.parallel_mode;pointerEvents=1',
  },
  _original_width: 95,
  _original_height: 40,
}

export function ParallelMode(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARALLEL_MODE}
      {...props}
      _style={extendStyle(PARALLEL_MODE, props)}
    />
  )
}
