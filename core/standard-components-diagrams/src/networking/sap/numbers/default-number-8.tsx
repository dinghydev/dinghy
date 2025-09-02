import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_NUMBER_8 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;rotation=0;gradientColor=#07838F;strokeColor=none;gradientDirection=east;fillColor=#00CEAC;rounded=0;pointerEvents=0;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;spacingTop=4;spacingBottom=4;spacingLeft=4;spacingRight=4;points=[];fontStyle=1',
  },
  _original_width: 30,
  _original_height: 30,
}

export function DefaultNumber8(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFAULT_NUMBER_8}
      {...props}
      _style={extendStyle(DEFAULT_NUMBER_8, props)}
    />
  )
}
