import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFAULT_NUMBER_6 = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;rotation=0;gradientColor=#256F3A;strokeColor=none;gradientDirection=east;fillColor=#5DC122;rounded=0;pointerEvents=0;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;spacingTop=4;spacingBottom=4;spacingLeft=4;spacingRight=4;points=[];fontStyle=1',
  _width: 30,
  _height: 30,
}

export function DefaultNumber6(props: DiagramNodeProps) {
  return <Shape {...DEFAULT_NUMBER_6} {...props} />
}
