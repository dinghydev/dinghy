import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_INSTANCES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Container_Instances.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
