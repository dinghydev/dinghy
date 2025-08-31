import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEDICATED_PROCESS = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.manufacturing_process;fontSize=12;verticalAlign=middle;html=1;align=center;whiteSpace=wrap;',
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
