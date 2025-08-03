import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TOOLBOX = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Toolbox.svg;strokeColor=none;',
  _width: 64,
  _height: 56.00000000000001,
}

export function Toolbox(props: DiagramNodeProps) {
  return <Shape {...TOOLBOX} {...props} />
}
