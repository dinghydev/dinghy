import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANDROID = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.android;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Android(props: DiagramNodeProps) {
  return <Shape {...ANDROID} {...props} _style={extendStyle(ANDROID, props)} />
}
