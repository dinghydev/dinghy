import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_NUMBER_3 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;rotation=0;gradientColor=#470CED;strokeColor=none;gradientDirection=east;fillColor=#9B76FF;rounded=0;pointerEvents=0;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;spacingTop=4;spacingBottom=4;spacingLeft=4;spacingRight=4;points=[];fontStyle=1',
  },
  _width: 30,
  _height: 30,
}

export function DefaultNumber3(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFAULT_NUMBER_3}
      {...props}
      _style={extendStyle(DEFAULT_NUMBER_3, props)}
    />
  )
}
