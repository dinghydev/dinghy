import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ZONE = {
  _style: {
    group:
      'shape=mxgraph.ibm.box;prType=zone;fontStyle=0;verticalAlign=top;align=left;spacingLeft=32;spacingTop=4;fillColor=#E0E0E0;rounded=0;whiteSpace=wrap;html=1;strokeColor=#919191;strokeWidth=1;dashed=0;container=1;spacing=-4;collapsible=0;expand=0;recursiveResize=0;',
    entity: {
      strokeColor: '#919191',
      fillColor: '#E0E0E0',
    },
  },
}

export function Zone(props: DiagramNodeProps) {
  return <Shape {...ZONE} {...props} />
}
