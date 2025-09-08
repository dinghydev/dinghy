import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATASTORE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.datastore;',
  },
  _original_width: 44,
  _original_height: 60,
}

export function Datastore(props: DiagramNodeProps) {
  return (
    <Shape {...DATASTORE} {...props} _style={extendStyle(DATASTORE, props)} />
  )
}
