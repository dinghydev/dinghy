import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATASTORE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.datastore;',
  },
  _original_width: 44,
  _original_height: 60,
}

export function Datastore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATASTORE)} />
}
