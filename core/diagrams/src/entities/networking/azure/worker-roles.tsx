import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKER_ROLES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.worker_roles;',
  },
  _original_width: 55.00000000000001,
  _original_height: 45,
}

export function WorkerRoles(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKER_ROLES}
      {...props}
      _style={extendStyle(WORKER_ROLES, props)}
    />
  )
}
