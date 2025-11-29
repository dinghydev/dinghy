import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_CLUSTER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.storage_cluster;',
  },
  _original_width: 55.6,
  _original_height: 56,
}

export function StorageCluster(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORAGE_CLUSTER)} />
}
