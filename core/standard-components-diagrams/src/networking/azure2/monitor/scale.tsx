import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCALE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Scale.svg;',
  _width: 68,
  _height: 68,
}

export function Scale(props: DiagramNodeProps) {
  return <Shape {...SCALE} {...props} />
}
