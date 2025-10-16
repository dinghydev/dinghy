import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TARGET_SIMPLE_2 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#AE4132;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 2,
  _height: 350,
}

export function TargetSimple2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TARGET_SIMPLE_2}
      {...props}
      _style={extendStyle(TARGET_SIMPLE_2, props)}
    />
  )
}
