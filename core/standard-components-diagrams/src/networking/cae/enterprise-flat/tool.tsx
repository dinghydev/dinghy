import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOOL = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.tool;',
  _width: 50,
  _height: 45,
}

export function Tool(props: DiagramNodeProps) {
  return <Shape {...TOOL} {...props} _style={extendStyle(TOOL, props)} />
}
