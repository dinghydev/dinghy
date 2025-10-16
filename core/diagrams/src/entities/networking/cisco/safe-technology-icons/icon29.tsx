import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON29 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon29;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Icon29(props: DiagramNodeProps) {
  return <Shape {...ICON29} {...props} _style={extendStyle(ICON29, props)} />
}
