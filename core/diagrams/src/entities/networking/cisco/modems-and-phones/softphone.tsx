import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOFTPHONE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.softphone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 61,
  _original_height: 56,
}

export function Softphone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SOFTPHONE)} />
}
