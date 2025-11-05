import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTINUOUS_DELIVERY = {
  _style: {
    entity:
      'shape=rect;fillColor=#EE5396;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _width: 0,
  _height: 48,
}

export function ContinuousDelivery(props: NodeProps) {
  return (
    <Shape
      {...CONTINUOUS_DELIVERY}
      {...props}
      _style={extendStyle(CONTINUOUS_DELIVERY, props)}
    />
  )
}
