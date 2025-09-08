import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DESKTOP_PC = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.desktop_pc;',
  },
  _original_width: 30,
  _original_height: 60,
}

export function DesktopPc(props: DiagramNodeProps) {
  return (
    <Shape {...DESKTOP_PC} {...props} _style={extendStyle(DESKTOP_PC, props)} />
  )
}
