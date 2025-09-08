import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTAINER_INSTANCES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Container_Instances.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 69,
}

export function ContainerInstances(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_INSTANCES}
      {...props}
      _style={extendStyle(CONTAINER_INSTANCES, props)}
    />
  )
}
