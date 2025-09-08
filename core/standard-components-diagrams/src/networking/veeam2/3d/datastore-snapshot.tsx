import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATASTORE_SNAPSHOT = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.datastore_snapshot;',
  },
  _original_width: 54,
  _original_height: 34,
}

export function DatastoreSnapshot(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATASTORE_SNAPSHOT}
      {...props}
      _style={extendStyle(DATASTORE_SNAPSHOT, props)}
    />
  )
}
