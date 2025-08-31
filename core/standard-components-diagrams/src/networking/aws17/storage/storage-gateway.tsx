import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_GATEWAY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.storage_gateway;fillColor=#E05243;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function StorageGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_GATEWAY}
      {...props}
      _style={extendStyle(STORAGE_GATEWAY, props)}
    />
  )
}
