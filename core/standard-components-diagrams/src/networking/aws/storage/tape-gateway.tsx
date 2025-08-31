import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_GATEWAY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.tape_gateway;',
  },
  _width: 74,
  _height: 78,
}

export function TapeGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_GATEWAY}
      {...props}
      _style={extendStyle(TAPE_GATEWAY, props)}
    />
  )
}
