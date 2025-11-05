import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER_REGISTRIES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Container_Registries.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 43,
}

export function ContainerRegistries(props: NodeProps) {
  return (
    <Shape
      {...CONTAINER_REGISTRIES}
      {...props}
      _style={extendStyle(CONTAINER_REGISTRIES, props)}
    />
  )
}
