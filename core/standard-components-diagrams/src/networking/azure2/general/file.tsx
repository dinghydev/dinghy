import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/File.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 69,
}

export function File(props: DiagramNodeProps) {
  return <Shape {...FILE} {...props} />
}
