import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_7500ARS_7513 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.7500ars_(7513);sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Component7500ars7513(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_7500ARS_7513)} />
  )
}
