import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DECIDER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.decider;fillColor=#D9A741;gradientColor=none;',
  },
  _width: 61.5,
  _height: 64.5,
}

export function Decider(props: DiagramNodeProps) {
  return <Shape {...DECIDER} {...props} _style={extendStyle(DECIDER, props)} />
}
