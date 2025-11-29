import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEPLOYMENT_ENVIRONMENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Deployment_Environments.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 65.28,
}

export function DeploymentEnvironments(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DEPLOYMENT_ENVIRONMENTS)} />
  )
}
