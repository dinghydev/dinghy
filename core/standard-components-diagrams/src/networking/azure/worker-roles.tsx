import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKER_ROLES = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.worker_roles;',
  _width: 55.00000000000001,
  _height: 45,
}

export function WorkerRoles(props: DiagramNodeProps) {
  return <Shape {...WORKER_ROLES} {...props} />
}
