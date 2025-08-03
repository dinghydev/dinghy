import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Image.svg;strokeColor=none;',
  _width: 64,
  _height: 44,
}

export function Image(props: DiagramNodeProps) {
  return <Shape {...IMAGE} {...props} />
}
