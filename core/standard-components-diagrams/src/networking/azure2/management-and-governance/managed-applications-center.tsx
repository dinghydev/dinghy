import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_APPLICATIONS_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Managed_Applications_Center.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 54,
}

export function ManagedApplicationsCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_APPLICATIONS_CENTER}
      {...props}
      _style={extendStyle(MANAGED_APPLICATIONS_CENTER, props)}
    />
  )
}
