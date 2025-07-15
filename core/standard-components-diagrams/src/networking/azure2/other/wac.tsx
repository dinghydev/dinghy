import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/WAC.svg;',
  _width: 62,
  _height: 68,
}

export function Wac(props: DiagramNodeProps) {
  return <Shape {...WAC} {...props} />
}
