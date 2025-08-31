import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_NUMBER = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;rotation=0;gradientColor=#223548;strokeColor=none;gradientDirection=east;fillColor=#5b738b;rounded=0;pointerEvents=0;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;spacingTop=4;spacingBottom=4;spacingLeft=4;spacingRight=4;points=[];fontStyle=1',
  _width: 30,
  _height: 30,
}

export function DefaultNumber(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFAULT_NUMBER}
      {...props}
      _style={extendStyle(DEFAULT_NUMBER, props)}
    />
  )
}
