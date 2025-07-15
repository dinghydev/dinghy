import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTAINER_SERVICES_DEPRECATED = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Container_Services_Deprecated.svg;',
  _width: 68,
  _height: 60,
}

export function ContainerServicesDeprecated(props: DiagramNodeProps) {
  return <Shape {...CONTAINER_SERVICES_DEPRECATED} {...props} />
}
