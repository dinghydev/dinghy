import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.process;',
  },
  _width: 60,
  _height: 30,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} _style={extendStyle(PROCESS, props)} />
}
