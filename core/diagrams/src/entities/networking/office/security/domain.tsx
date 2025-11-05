import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOMAIN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.domain;',
  },
  _original_width: 53,
  _original_height: 46,
}

export function Domain(props: NodeProps) {
  return <Shape {...DOMAIN} {...props} _style={extendStyle(DOMAIN, props)} />
}
