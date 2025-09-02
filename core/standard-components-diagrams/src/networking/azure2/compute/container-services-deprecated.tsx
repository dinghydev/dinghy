import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_SERVICES_DEPRECATED = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Container_Services_Deprecated.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function ContainerServicesDeprecated(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_SERVICES_DEPRECATED}
      {...props}
      _style={extendStyle(CONTAINER_SERVICES_DEPRECATED, props)}
    />
  )
}
