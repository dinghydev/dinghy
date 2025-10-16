import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTAINER_REGISTRIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Container_Registries.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 61,
}

export function ContainerRegistries(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_REGISTRIES}
      {...props}
      _style={extendStyle(CONTAINER_REGISTRIES, props)}
    />
  )
}
