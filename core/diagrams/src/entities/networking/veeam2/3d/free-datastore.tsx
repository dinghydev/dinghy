import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FREE_DATASTORE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.free_datastore;',
  },
  _original_width: 44,
  _original_height: 60,
}

export function FreeDatastore(props: NodeProps) {
  return (
    <Shape
      {...FREE_DATASTORE}
      {...props}
      _style={extendStyle(FREE_DATASTORE, props)}
    />
  )
}
