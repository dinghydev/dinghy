import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTELLIGENT_ORDER_MANAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/IntelligentOrderManagement.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
