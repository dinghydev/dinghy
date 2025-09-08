import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.amp;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Amp(props: DiagramNodeProps) {
  return <Shape {...AMP} {...props} _style={extendStyle(AMP, props)} />
}
