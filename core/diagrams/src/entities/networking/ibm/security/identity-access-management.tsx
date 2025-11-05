import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDENTITY_ACCESS_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/security/identity_access_management.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function IdentityAccessManagement(props: NodeProps) {
  return (
    <Shape
      {...IDENTITY_ACCESS_MANAGEMENT}
      {...props}
      _style={extendStyle(IDENTITY_ACCESS_MANAGEMENT, props)}
    />
  )
}
