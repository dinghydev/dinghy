import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const END_OFFICE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.buildings.end_office;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 54,
  _original_height: 56,
}

export function EndOffice(props: NodeProps) {
  return (
    <Shape {...END_OFFICE} {...props} _style={extendStyle(END_OFFICE, props)} />
  )
}
