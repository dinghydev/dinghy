import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_TESTING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Load_Testing.svg;strokeColor=none;',
  _width: 59.199999999999996,
  _height: 68,
}

export function LoadTesting(props: DiagramNodeProps) {
  return <Shape {...LOAD_TESTING} {...props} />
}
