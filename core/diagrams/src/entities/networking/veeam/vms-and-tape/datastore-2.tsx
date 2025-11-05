import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATASTORE_2 = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#75B4DB;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.datastore;',
  },
  _original_width: 43.2,
  _original_height: 44.4,
}

export function Datastore2(props: NodeProps) {
  return (
    <Shape
      {...DATASTORE_2}
      {...props}
      _style={extendStyle(DATASTORE_2, props)}
    />
  )
}
