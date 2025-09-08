import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NGFW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ngfw;',
  },
  _original_width: 52.5,
  _original_height: 46,
}

export function Ngfw(props: DiagramNodeProps) {
  return <Shape {...NGFW} {...props} _style={extendStyle(NGFW, props)} />
}
