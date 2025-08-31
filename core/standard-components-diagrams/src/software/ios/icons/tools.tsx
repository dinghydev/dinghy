import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOOLS = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.tools;pointerEvents=1',
  _width: 29.7,
  _height: 29.7,
}

export function Tools(props: DiagramNodeProps) {
  return <Shape {...TOOLS} {...props} _style={extendStyle(TOOLS, props)} />
}
