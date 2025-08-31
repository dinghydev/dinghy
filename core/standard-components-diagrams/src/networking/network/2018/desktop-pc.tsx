import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESKTOP_PC = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.desktop_pc;',
  _width: 30,
  _height: 60,
}

export function DesktopPc(props: DiagramNodeProps) {
  return (
    <Shape {...DESKTOP_PC} {...props} _style={extendStyle(DESKTOP_PC, props)} />
  )
}
