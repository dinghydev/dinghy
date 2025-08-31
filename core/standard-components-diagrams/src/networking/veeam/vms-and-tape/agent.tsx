import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGENT = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.agent;pointerEvents=1;',
  _width: 44.8,
  _height: 44.8,
}

export function Agent(props: DiagramNodeProps) {
  return <Shape {...AGENT} {...props} _style={extendStyle(AGENT, props)} />
}
