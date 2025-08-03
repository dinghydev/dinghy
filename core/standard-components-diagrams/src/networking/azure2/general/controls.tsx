import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Controls.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 69,
}

export function Controls(props: DiagramNodeProps) {
  return <Shape {...CONTROLS} {...props} />
}
