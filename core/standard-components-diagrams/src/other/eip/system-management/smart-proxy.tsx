import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMART_PROXY = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.smart_proxy;fillColor=#c0f5a9',
  },
  _width: 70,
  _height: 90,
}

export function SmartProxy(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMART_PROXY}
      {...props}
      _style={extendStyle(SMART_PROXY, props)}
    />
  )
}
