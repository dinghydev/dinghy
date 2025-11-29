import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEM_INSTANCES = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.mem_instances',
  },
  _original_width: 100,
  _original_height: 87,
}

export function MemInstances(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MEM_INSTANCES)} />
}
