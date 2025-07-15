import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEST_BASE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Test_Base.svg;',
  _width: 68,
  _height: 48,
}

export function TestBase(props: DiagramNodeProps) {
  return <Shape {...TEST_BASE} {...props} />
}
