import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.cloud_service;',
  },
  _width: 50,
  _height: 40,
}

export function CloudService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICE}
      {...props}
      _style={extendStyle(CLOUD_SERVICE, props)}
    />
  )
}
