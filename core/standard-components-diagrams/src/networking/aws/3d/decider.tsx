import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DECIDER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.decider;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 74,
  _height: 50,
}

export function Decider(props: DiagramNodeProps) {
  return <Shape {...DECIDER} {...props} _style={extendStyle(DECIDER, props)} />
}
