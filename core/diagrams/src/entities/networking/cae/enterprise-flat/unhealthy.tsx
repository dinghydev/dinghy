import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNHEALTHY = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.unhealthy;fillColor=#0078D7;',
  },
  _original_width: 50,
  _original_height: 41,
}

export function Unhealthy(props: NodeProps) {
  return (
    <Shape {...UNHEALTHY} {...props} _style={extendStyle(UNHEALTHY, props)} />
  )
}
