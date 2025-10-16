import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEFAULT_NUMBER_5 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;rotation=0;gradientColor=#AA0808;strokeColor=none;gradientDirection=east;fillColor=#FF5C77;rounded=0;pointerEvents=0;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;spacingTop=4;spacingBottom=4;spacingLeft=4;spacingRight=4;points=[];fontStyle=1',
  },
  _original_width: 30,
  _original_height: 30,
}

export function DefaultNumber5(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFAULT_NUMBER_5}
      {...props}
      _style={extendStyle(DEFAULT_NUMBER_5, props)}
    />
  )
}
