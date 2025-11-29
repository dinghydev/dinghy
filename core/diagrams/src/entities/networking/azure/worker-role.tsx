import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKER_ROLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.worker_role;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function WorkerRole(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WORKER_ROLE)} />
}
