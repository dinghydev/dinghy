import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Location.svg;',
  _width: 40,
  _height: 71,
}

export function Location(props: DiagramNodeProps) {
  return <Shape {...LOCATION} {...props} />
}
