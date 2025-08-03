import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ERROR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Error.svg;strokeColor=none;',
  _width: 71,
  _height: 68,
}

export function Error(props: DiagramNodeProps) {
  return <Shape {...ERROR} {...props} />
}
