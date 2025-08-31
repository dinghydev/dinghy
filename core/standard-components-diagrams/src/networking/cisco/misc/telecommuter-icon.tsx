import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TELECOMMUTER_ICON = {
  _style:
    'shape=mxgraph.cisco.misc.telecommuter_icon;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 62,
  _height: 53,
}

export function TelecommuterIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELECOMMUTER_ICON}
      {...props}
      _style={extendStyle(TELECOMMUTER_ICON, props)}
    />
  )
}
