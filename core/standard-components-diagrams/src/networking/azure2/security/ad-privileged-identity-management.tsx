import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AD_PRIVILEGED_IDENTITY_MANAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/PIM.svg;',
  _width: 60,
  _height: 68,
}

export function AdPrivilegedIdentityManagement(props: DiagramNodeProps) {
  return <Shape {...AD_PRIVILEGED_IDENTITY_MANAGEMENT} {...props} />
}
