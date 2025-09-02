import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET_GATEWAY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.internet_gateway;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function InternetGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNET_GATEWAY}
      {...props}
      _style={extendStyle(INTERNET_GATEWAY, props)}
    />
  )
}
