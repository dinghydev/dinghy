import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TELECOMMUTER_ICON = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.telecommuter_icon;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 62,
  _original_height: 53,
}

export function TelecommuterIcon(props: NodeProps) {
  return (
    <Shape
      {...TELECOMMUTER_ICON}
      {...props}
      _style={extendStyle(TELECOMMUTER_ICON, props)}
    />
  )
}
