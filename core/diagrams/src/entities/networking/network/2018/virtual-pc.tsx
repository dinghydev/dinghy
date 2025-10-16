import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_PC = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.virtual_pc;',
  },
  _width: 115,
  _height: 85,
}

export function VirtualPc(props: DiagramNodeProps) {
  return (
    <Shape {...VIRTUAL_PC} {...props} _style={extendStyle(VIRTUAL_PC, props)} />
  )
}
