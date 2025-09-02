import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AD_PRIVILEGED_IDENTITY_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/PIM.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 68,
}

export function AdPrivilegedIdentityManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...AD_PRIVILEGED_IDENTITY_MANAGEMENT}
      {...props}
      _style={extendStyle(AD_PRIVILEGED_IDENTITY_MANAGEMENT, props)}
    />
  )
}
