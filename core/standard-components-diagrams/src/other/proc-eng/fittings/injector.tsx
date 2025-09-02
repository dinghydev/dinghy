import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INJECTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.injector;',
  },
  _original_width: 80,
  _original_height: 40,
}

export function Injector(props: DiagramNodeProps) {
  return (
    <Shape {...INJECTOR} {...props} _style={extendStyle(INJECTOR, props)} />
  )
}
