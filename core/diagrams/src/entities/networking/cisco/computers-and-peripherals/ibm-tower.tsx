import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_TOWER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.ibm_tower;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 42,
  _height: 77,
}

export function IbmTower(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IBM_TOWER)} />
}
