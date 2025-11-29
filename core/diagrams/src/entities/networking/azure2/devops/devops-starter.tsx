import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVOPS_STARTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/DevOps_Starter.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63.75999999999999,
}

export function DevopsStarter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVOPS_STARTER)} />
}
