import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IBM_TOWER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.ibm_tower;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 42,
  _original_height: 77,
}

export function IbmTower(props: DiagramNodeProps) {
  return (
    <Shape {...IBM_TOWER} {...props} _style={extendStyle(IBM_TOWER, props)} />
  )
}
