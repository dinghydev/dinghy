import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAINFRAME = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.mainframe;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Mainframe(props: DiagramNodeProps) {
  return (
    <Shape {...MAINFRAME} {...props} _style={extendStyle(MAINFRAME, props)} />
  )
}
