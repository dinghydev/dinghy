import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTINUOUS_DELIVERY = {
  _style:
    'shape=rect;fillColor=#EE5396;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  _width: 0,
  _height: 48,
}

export function ContinuousDelivery(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTINUOUS_DELIVERY}
      {...props}
      _style={extendStyle(CONTINUOUS_DELIVERY, props)}
    />
  )
}
