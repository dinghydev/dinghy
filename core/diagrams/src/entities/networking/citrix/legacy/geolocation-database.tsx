import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GEOLOCATION_DATABASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.geolocation_database;',
  },
  _original_width: 53,
  _original_height: 49,
}

export function GeolocationDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...GEOLOCATION_DATABASE}
      {...props}
      _style={extendStyle(GEOLOCATION_DATABASE, props)}
    />
  )
}
