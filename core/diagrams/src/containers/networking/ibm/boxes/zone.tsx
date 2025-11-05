import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ZONE = {
  _style: {
    container:
      'shape=mxgraph.ibm.box;prType=zone;fontStyle=0;verticalAlign=top;align=left;spacingLeft=32;spacingTop=4;fillColor=#E0E0E0;rounded=0;whiteSpace=wrap;html=1;strokeColor=#919191;strokeWidth=1;dashed=0;container=1;spacing=-4;collapsible=0;expand=0;recursiveResize=0;',
    entity: {
      strokeColor: '#919191',
      fillColor: '#E0E0E0',
    },
  },
}

export function Zone(props: NodeProps) {
  return <Shape {...ZONE} {...props} _style={extendStyle(ZONE, props)} />
}
