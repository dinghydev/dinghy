import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPENSHIFT = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#198038;fillColor=none;strokeWidth=1',
    entity: {
      strokeColor: '#198038',
    },
  },
}

export function Openshift(props: DiagramNodeProps) {
  return (
    <Shape {...OPENSHIFT} {...props} _style={extendStyle(OPENSHIFT, props)} />
  )
}
