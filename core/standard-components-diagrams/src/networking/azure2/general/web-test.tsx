import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_TEST = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Web_Test.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function WebTest(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_TEST} {...props} _style={extendStyle(WEB_TEST, props)} />
  )
}
