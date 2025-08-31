import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVOPS_STARTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/DevOps_Starter.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 63.75999999999999,
}

export function DevopsStarter(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVOPS_STARTER}
      {...props}
      _style={extendStyle(DEVOPS_STARTER, props)}
    />
  )
}
