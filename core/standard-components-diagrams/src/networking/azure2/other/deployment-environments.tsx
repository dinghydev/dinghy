import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEPLOYMENT_ENVIRONMENTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Deployment_Environments.svg;strokeColor=none;',
  _width: 68,
  _height: 65.28,
}

export function DeploymentEnvironments(props: DiagramNodeProps) {
  return <Shape {...DEPLOYMENT_ENVIRONMENTS} {...props} />
}
