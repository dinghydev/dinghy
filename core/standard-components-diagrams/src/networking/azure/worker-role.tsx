import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKER_ROLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.worker_role;',
  _width: 50,
  _height: 40,
}

export function WorkerRole(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKER_ROLE}
      {...props}
      _style={extendStyle(WORKER_ROLE, props)}
    />
  )
}
