import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOAD_BALANCER = {
  _style: {
    entity:
      'shape=rect;fillColor=#1192E8;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _width: 0,
  _height: 48,
}

export function LoadBalancer(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_BALANCER}
      {...props}
      _style={extendStyle(LOAD_BALANCER, props)}
    />
  )
}
