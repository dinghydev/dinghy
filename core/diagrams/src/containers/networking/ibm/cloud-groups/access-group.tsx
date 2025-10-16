import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCESS_GROUP = {
  _style: {
    container:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#FA4D56;fillColor=none;dashed=1;dashPattern=1 3;strokeWidth=2',
    entity: {
      strokeColor: '#FA4D56',
    },
  },
}

export function AccessGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCESS_GROUP}
      {...props}
      _style={extendStyle(ACCESS_GROUP, props)}
    />
  )
}
