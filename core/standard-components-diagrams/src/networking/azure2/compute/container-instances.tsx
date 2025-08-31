import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_INSTANCES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Container_Instances.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 68,
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
