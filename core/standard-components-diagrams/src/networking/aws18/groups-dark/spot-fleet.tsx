import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPOT_FLEET = {
  _style: {
    group:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_spot_fleet;strokeColor=#FFFFFF;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#FFFFFF;dashed=0;',
    entity: {
      strokeColor: '#FFFFFF',
      fontColor: '#FFFFFF',
    },
  },
}

export function SpotFleet(props: DiagramNodeProps) {
  return <Shape {...SPOT_FLEET} {...props} />
}
