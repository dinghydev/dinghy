import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FULL_DATASTORE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.full_datastore;',
  },
  _original_width: 43.2,
  _original_height: 44.4,
}

export function FullDatastore(props: DiagramNodeProps) {
  return (
    <Shape
      {...FULL_DATASTORE}
      {...props}
      _style={extendStyle(FULL_DATASTORE, props)}
    />
  )
}
