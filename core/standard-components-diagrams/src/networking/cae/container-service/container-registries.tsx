import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_REGISTRIES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Container_Registries.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 43,
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
