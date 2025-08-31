import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENDPOINTS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.endpoints;fillColor=#F58536;gradientColor=none;',
  },
  _width: 69,
  _height: 72,
}

export function Endpoints(props: DiagramNodeProps) {
  return (
    <Shape {...ENDPOINTS} {...props} _style={extendStyle(ENDPOINTS, props)} />
  )
}
