import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_TEST = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Load_Test.svg;',
  _width: 68,
  _height: 66,
}

export function LoadTest(props: DiagramNodeProps) {
  return <Shape {...LOAD_TEST} {...props} />
}
