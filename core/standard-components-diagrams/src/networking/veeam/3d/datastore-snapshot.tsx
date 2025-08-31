import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATASTORE_SNAPSHOT = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.datastore_snapshot;',
  _width: 54,
  _height: 34,
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
