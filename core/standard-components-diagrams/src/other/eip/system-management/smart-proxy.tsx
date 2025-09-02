import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMART_PROXY = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.smart_proxy;fillColor=#c0f5a9',
  },
  _original_width: 70,
  _original_height: 90,
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
