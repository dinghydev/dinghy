import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANTIVIRUS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.antivirus;',
  },
  _width: 50,
  _height: 32.5,
}

export function Antivirus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANTIVIRUS)} />
}
