import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTAINER_INSTANCES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Container_Instances.svg;',
  _width: 50,
  _height: 50,
}

export function ContainerInstances(props: DiagramNodeProps) {
  return <Shape {...CONTAINER_INSTANCES} {...props} />
}
