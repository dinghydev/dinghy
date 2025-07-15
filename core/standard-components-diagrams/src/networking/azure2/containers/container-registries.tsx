import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTAINER_REGISTRIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Container_Registries.svg;',
  _width: 68,
  _height: 61,
}

export function ContainerRegistries(props: DiagramNodeProps) {
  return <Shape {...CONTAINER_REGISTRIES} {...props} />
}
