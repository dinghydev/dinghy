import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICES = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.services;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 56,
  _original_height: 54,
}

export function Services(props: NodeProps) {
  return (
    <Shape {...SERVICES} {...props} _style={extendStyle(SERVICES, props)} />
  )
}
