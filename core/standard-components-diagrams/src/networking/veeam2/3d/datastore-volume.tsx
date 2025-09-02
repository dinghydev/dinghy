import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATASTORE_VOLUME = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.datastore_volume;',
  },
  _original_width: 54,
  _original_height: 34,
}

export function DatastoreVolume(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATASTORE_VOLUME}
      {...props}
      _style={extendStyle(DATASTORE_VOLUME, props)}
    />
  )
}
