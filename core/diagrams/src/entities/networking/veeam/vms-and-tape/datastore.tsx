import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATASTORE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.datastore;',
  },
  _original_width: 44.4,
  _original_height: 45.2,
}

export function Datastore(props: NodeProps) {
  return (
    <Shape {...DATASTORE} {...props} _style={extendStyle(DATASTORE, props)} />
  )
}
