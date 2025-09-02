import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON30 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon30;',
  },
  _original_width: 50,
  _original_height: 48.5,
}

export function Icon30(props: DiagramNodeProps) {
  return <Shape {...ICON30} {...props} _style={extendStyle(ICON30, props)} />
}
