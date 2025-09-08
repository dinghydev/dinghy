import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REGION = {
  _style: {
    group:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#879196;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#879196;dashed=1;',
    entity: {
      strokeColor: '#879196',
      fontColor: '#879196',
    },
  },
}

export function Region(props: DiagramNodeProps) {
  return <Shape {...REGION} {...props} _style={extendStyle(REGION, props)} />
}
