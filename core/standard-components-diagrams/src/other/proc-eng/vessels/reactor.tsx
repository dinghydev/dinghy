import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REACTOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.reactor;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 40,
  _original_height: 95,
}

export function Reactor(props: DiagramNodeProps) {
  return <Shape {...REACTOR} {...props} _style={extendStyle(REACTOR, props)} />
}
