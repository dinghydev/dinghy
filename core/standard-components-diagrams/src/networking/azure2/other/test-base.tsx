import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEST_BASE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Test_Base.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function TestBase(props: DiagramNodeProps) {
  return (
    <Shape {...TEST_BASE} {...props} _style={extendStyle(TEST_BASE, props)} />
  )
}
