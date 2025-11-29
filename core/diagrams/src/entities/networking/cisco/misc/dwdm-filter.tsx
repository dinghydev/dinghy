import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DWDM_FILTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.dwdm_filter;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 51,
  _original_height: 70,
}

export function DwdmFilter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DWDM_FILTER)} />
}
