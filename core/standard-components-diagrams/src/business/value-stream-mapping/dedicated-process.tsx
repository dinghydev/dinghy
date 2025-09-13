import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEDICATED_PROCESS = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.manufacturing_process;fontSize=12;verticalAlign=middle;html=1;align=center;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 70,
}

export function DedicatedProcess(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEDICATED_PROCESS}
      {...props}
      _style={extendStyle(DEDICATED_PROCESS, props)}
    />
  )
}
