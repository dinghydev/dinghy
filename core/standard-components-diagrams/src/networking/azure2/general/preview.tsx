import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PREVIEW = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Preview.svg;strokeColor=none;',
  _width: 44,
  _height: 64,
}

export function Preview(props: DiagramNodeProps) {
  return <Shape {...PREVIEW} {...props} />
}
