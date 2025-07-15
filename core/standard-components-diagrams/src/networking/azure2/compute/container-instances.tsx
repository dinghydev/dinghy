import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTAINER_INSTANCES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Container_Instances.svg;',
  _width: 64,
  _height: 68,
}

export function ContainerInstances(props: DiagramNodeProps) {
  return <Shape {...CONTAINER_INSTANCES} {...props} />
}
