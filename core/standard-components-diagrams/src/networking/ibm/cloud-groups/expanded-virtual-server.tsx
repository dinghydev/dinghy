import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXPANDED_VIRTUAL_SERVER = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#198038;fillColor=none;',
    entity: {
      strokeColor: '#198038',
    },
  },
}

export function ExpandedVirtualServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPANDED_VIRTUAL_SERVER}
      {...props}
      _style={extendStyle(EXPANDED_VIRTUAL_SERVER, props)}
    />
  )
}
