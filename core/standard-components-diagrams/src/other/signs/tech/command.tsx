import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMAND = {
  _style:
    'shape=mxgraph.signs.tech.command;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Command(props: DiagramNodeProps) {
  return <Shape {...COMMAND} {...props} _style={extendStyle(COMMAND, props)} />
}
