import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVOPS_STARTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/DevOps_Starter.svg;strokeColor=none;',
  _width: 68,
  _height: 63.75999999999999,
}

export function DevopsStarter(props: DiagramNodeProps) {
  return <Shape {...DEVOPS_STARTER} {...props} />
}
