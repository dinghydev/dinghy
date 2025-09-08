import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTELLIGENT_ORDER_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/IntelligentOrderManagement.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function IntelligentOrderManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTELLIGENT_ORDER_MANAGEMENT}
      {...props}
      _style={extendStyle(INTELLIGENT_ORDER_MANAGEMENT, props)}
    />
  )
}
