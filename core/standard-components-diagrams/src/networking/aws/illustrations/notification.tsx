import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOTIFICATION = {
  _style:
    'sketch=0;outlineConnect=0;gradientColor=none;fontColor=#545B64;strokeColor=none;fillColor=#879196;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.illustration_notification;pointerEvents=1',
  _width: 100,
  _height: 81,
}

export function Notification(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTIFICATION}
      {...props}
      _style={extendStyle(NOTIFICATION, props)}
    />
  )
}
