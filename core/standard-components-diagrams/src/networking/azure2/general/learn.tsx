import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LEARN = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Learn.svg;',
  _width: 48,
  _height: 70,
}

export function Learn(props: DiagramNodeProps) {
  return <Shape {...LEARN} {...props} />
}
