import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AD_RISKY_USERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Azure_AD_Risky_Users.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function AdRiskyUsers(props: DiagramNodeProps) {
  return <Shape {...AD_RISKY_USERS} {...props} />
}
