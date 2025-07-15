import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOLUTIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Solutions.svg;',
  _width: 50,
  _height: 50,
}

export function Solutions(props: DiagramNodeProps) {
  return <Shape {...SOLUTIONS} {...props} />
}
