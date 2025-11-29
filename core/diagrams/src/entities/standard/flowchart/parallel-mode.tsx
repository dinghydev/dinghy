import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARALLEL_MODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.parallel_mode;pointerEvents=1',
  },
  _width: 95,
  _height: 40,
}

export function ParallelMode(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PARALLEL_MODE)} />
}
