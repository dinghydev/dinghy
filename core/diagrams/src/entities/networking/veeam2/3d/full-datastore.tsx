import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FULL_DATASTORE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.full_datastore;',
  },
  _original_width: 44,
  _original_height: 60,
}

export function FullDatastore(props: NodeProps) {
  return (
    <Shape
      {...FULL_DATASTORE}
      {...props}
      _style={extendStyle(FULL_DATASTORE, props)}
    />
  )
}
