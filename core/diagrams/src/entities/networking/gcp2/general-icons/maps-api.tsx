import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAPS_API = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.maps_api',
  },
  _width: 61,
  _height: 100,
}

export function MapsApi(props: DiagramNodeProps) {
  return (
    <Shape {...MAPS_API} {...props} _style={extendStyle(MAPS_API, props)} />
  )
}
