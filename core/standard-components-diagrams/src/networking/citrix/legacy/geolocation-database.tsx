import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GEOLOCATION_DATABASE = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.geolocation_database;',
  _width: 53,
  _height: 49,
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
