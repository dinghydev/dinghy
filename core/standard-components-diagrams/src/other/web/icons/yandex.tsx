import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YANDEX = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.yandex;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Yandex(props: DiagramNodeProps) {
  return <Shape {...YANDEX} {...props} _style={extendStyle(YANDEX, props)} />
}
