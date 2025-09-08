import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTAINER_APP_ENVIRONMENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Container_App_Environments.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
