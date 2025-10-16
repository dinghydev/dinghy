import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXPANDED_APPLICATION = {
  _style: {
    container:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#A56EFF;fillColor=none;',
    entity: {
      strokeColor: '#A56EFF',
    },
  },
}

export function ExpandedApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPANDED_APPLICATION}
      {...props}
      _style={extendStyle(EXPANDED_APPLICATION, props)}
    />
  )
}
