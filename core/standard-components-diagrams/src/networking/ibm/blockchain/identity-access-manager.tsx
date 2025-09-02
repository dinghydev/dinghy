import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTITY_ACCESS_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/identity_access_manager.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function IdentityAccessManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...IDENTITY_ACCESS_MANAGER}
      {...props}
      _style={extendStyle(IDENTITY_ACCESS_MANAGER, props)}
    />
  )
}
