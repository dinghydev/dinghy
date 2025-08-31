import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CONNECT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_cloud_connect;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function CloudConnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CONNECT}
      {...props}
      _style={extendStyle(CLOUD_CONNECT, props)}
    />
  )
}
