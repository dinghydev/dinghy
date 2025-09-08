import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURITY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.security;',
  },
  _original_width: 40.5,
  _original_height: 71,
}

export function Security(props: DiagramNodeProps) {
  return (
    <Shape {...SECURITY} {...props} _style={extendStyle(SECURITY, props)} />
  )
}
