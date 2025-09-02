import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_DESKTOP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Managed_Desktop.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63.2,
}

export function ManagedDesktop(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_DESKTOP}
      {...props}
      _style={extendStyle(MANAGED_DESKTOP, props)}
    />
  )
}
