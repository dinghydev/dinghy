import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_TESTING_2 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Load_Testing.svg;',
  _width: 59.199999999999996,
  _height: 68,
}

export function LoadTesting2(props: DiagramNodeProps) {
  return <Shape {...LOAD_TESTING_2} {...props} />
}
