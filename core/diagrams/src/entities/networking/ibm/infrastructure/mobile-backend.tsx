import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOBILE_BACKEND = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/mobile_backend.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function MobileBackend(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_BACKEND}
      {...props}
      _style={extendStyle(MOBILE_BACKEND, props)}
    />
  )
}
