import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET_GATEWAY = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.internet_gateway;',
  _width: 60,
  _height: 60,
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
