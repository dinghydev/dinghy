import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_APP_ENVIRONMENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Container_App_Environments.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ContainerAppEnvironments(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_APP_ENVIRONMENTS}
      {...props}
      _style={extendStyle(CONTAINER_APP_ENVIRONMENTS, props)}
    />
  )
}
