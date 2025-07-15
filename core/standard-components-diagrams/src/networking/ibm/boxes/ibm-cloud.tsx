import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IBM_CLOUD = {
  _style: {
    group:
      'shape=mxgraph.ibm.box;prType=cloud;fontStyle=0;verticalAlign=top;align=left;spacingLeft=32;spacingTop=4;fillColor=none;rounded=0;whiteSpace=wrap;html=1;strokeColor=#4376BB;strokeWidth=3;dashed=0;container=1;spacing=-4;collapsible=0;expand=0;recursiveResize=0;',
    entity: {
      strokeColor: '#4376BB',
    },
  },
}

export function IbmCloud(props: DiagramNodeProps) {
  return <Shape {...IBM_CLOUD} {...props} />
}
