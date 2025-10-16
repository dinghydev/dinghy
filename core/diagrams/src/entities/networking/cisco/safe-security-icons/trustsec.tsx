import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRUSTSEC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.trustsec;',
  },
  _original_width: 41.5,
  _original_height: 50,
}

export function Trustsec(props: DiagramNodeProps) {
  return (
    <Shape {...TRUSTSEC} {...props} _style={extendStyle(TRUSTSEC, props)} />
  )
}
