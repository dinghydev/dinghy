import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HELP_ICON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.help_icon;',
  },
  _original_width: 32,
  _original_height: 32,
}

export function HelpIcon(props: DiagramNodeProps) {
  return (
    <Shape {...HELP_ICON} {...props} _style={extendStyle(HELP_ICON, props)} />
  )
}
