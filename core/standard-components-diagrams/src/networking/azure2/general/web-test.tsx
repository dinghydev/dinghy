import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_TEST = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Web_Test.svg;strokeColor=none;',
  _width: 72,
  _height: 72,
}

export function WebTest(props: DiagramNodeProps) {
  return <Shape {...WEB_TEST} {...props} />
}
