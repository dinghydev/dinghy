import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IDS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ids;',
  },
  _width: 46,
  _height: 35.5,
}

export function Ids(props: DiagramNodeProps) {
  return <Shape {...IDS} {...props} _style={extendStyle(IDS, props)} />
}
