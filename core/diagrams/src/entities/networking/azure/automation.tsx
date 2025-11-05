import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTOMATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.automation;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Automation(props: NodeProps) {
  return (
    <Shape {...AUTOMATION} {...props} _style={extendStyle(AUTOMATION, props)} />
  )
}
