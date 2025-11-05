import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTEGRATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.integrator;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Integrator(props: NodeProps) {
  return (
    <Shape {...INTEGRATOR} {...props} _style={extendStyle(INTEGRATOR, props)} />
  )
}
