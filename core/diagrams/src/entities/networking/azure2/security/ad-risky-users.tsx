import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AD_RISKY_USERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Azure_AD_Risky_Users.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AdRiskyUsers(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AD_RISKY_USERS)} />
}
