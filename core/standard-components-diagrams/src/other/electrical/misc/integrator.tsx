import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTEGRATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.integrator;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Integrator(props: DiagramNodeProps) {
  return (
    <Shape {...INTEGRATOR} {...props} _style={extendStyle(INTEGRATOR, props)} />
  )
}
