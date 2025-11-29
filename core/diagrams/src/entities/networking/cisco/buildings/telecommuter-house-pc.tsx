import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TELECOMMUTER_HOUSE_PC = {
  _style: {
    entity:
      'shape=mxgraph.cisco.buildings.telecommuter_house_pc;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 104,
  _height: 88,
}

export function TelecommuterHousePc(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TELECOMMUTER_HOUSE_PC)} />
}
