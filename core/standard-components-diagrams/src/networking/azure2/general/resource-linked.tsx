import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_LINKED = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Resource_Linked.svg;',
  _width: 72,
  _height: 72,
}

export function ResourceLinked(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_LINKED} {...props} />
}
