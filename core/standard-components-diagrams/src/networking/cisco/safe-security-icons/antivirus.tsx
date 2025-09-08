import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANTIVIRUS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.antivirus;',
  },
  _original_width: 50,
  _original_height: 32.5,
}

export function Antivirus(props: DiagramNodeProps) {
  return (
    <Shape {...ANTIVIRUS} {...props} _style={extendStyle(ANTIVIRUS, props)} />
  )
}
