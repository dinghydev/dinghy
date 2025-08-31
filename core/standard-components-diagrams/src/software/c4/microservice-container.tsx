import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MICROSERVICE_CONTAINER = {
  _style:
    'shape=hexagon;size=50;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;rounded=1;labelBackgroundColor=none;fillColor=#23A2D9;fontSize=12;fontColor=#ffffff;align=center;strokeColor=#0E7DAD;metaEdit=1;points=[[0.5,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.5,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];resizable=0;',
  _width: 0,
  _height: 170,
}

export function MicroserviceContainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...MICROSERVICE_CONTAINER}
      {...props}
      _style={extendStyle(MICROSERVICE_CONTAINER, props)}
    />
  )
}
