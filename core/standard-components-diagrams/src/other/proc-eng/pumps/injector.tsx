import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INJECTOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.injector;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 40,
}

export function Injector(props: DiagramNodeProps) {
  return (
    <Shape {...INJECTOR} {...props} _style={extendStyle(INJECTOR, props)} />
  )
}
