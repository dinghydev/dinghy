import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHYSICAL_SECURITY = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/security/physical_security.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function PhysicalSecurity(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHYSICAL_SECURITY}
      {...props}
      _style={extendStyle(PHYSICAL_SECURITY, props)}
    />
  )
}
