import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REGION = {
  _style: {
    group:
      'shape=mxgraph.ibm.box;prType=region;fontStyle=0;verticalAlign=top;align=left;spacingLeft=32;spacingTop=4;fillColor=none;rounded=0;whiteSpace=wrap;html=1;strokeColor=#919191;strokeWidth=2;dashed=0;container=1;spacing=-4;collapsible=0;expand=0;recursiveResize=0;',
    entity: {
      strokeColor: '#919191',
    },
  },
}

export function Region(props: DiagramNodeProps) {
  return <Shape {...REGION} {...props} _style={extendStyle(REGION, props)} />
}
