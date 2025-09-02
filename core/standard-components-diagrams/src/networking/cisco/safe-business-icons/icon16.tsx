import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON16 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon16;',
  },
  _original_width: 50,
  _original_height: 37.5,
}

export function Icon16(props: DiagramNodeProps) {
  return <Shape {...ICON16} {...props} _style={extendStyle(ICON16, props)} />
}
