import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TARGET_SIMPLE = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#10739E;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 0,
  _height: 350,
}

export function TargetSimple(props: DiagramNodeProps) {
  return (
    <Shape
      {...TARGET_SIMPLE}
      {...props}
      _style={extendStyle(TARGET_SIMPLE, props)}
    />
  )
}
