import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATASTORE_VOLUME = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.datastore_volume;',
  },
  _width: 54,
  _height: 34,
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
