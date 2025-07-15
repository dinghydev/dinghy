import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROLLERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Controllers.svg;',
  _width: 50,
  _height: 44,
}

export function Controllers(props: DiagramNodeProps) {
  return <Shape {...CONTROLLERS} {...props} />
}
