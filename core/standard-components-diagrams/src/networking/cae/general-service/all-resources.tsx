import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALL_RESOURCES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Grid3x3.svg;',
  _width: 50,
  _height: 50,
}

export function AllResources(props: DiagramNodeProps) {
  return <Shape {...ALL_RESOURCES} {...props} />
}
