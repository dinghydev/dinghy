import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTENSIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Extensions.svg;',
  _width: 65,
  _height: 64,
}

export function Extensions(props: DiagramNodeProps) {
  return <Shape {...EXTENSIONS} {...props} />
}
