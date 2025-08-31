import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ON_PREMISE = {
  _style: {
    group:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_on_premise;strokeColor=#858B94;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#858B94;dashed=0;',
    entity: {
      strokeColor: '#858B94',
      fontColor: '#858B94',
    },
  },
}

export function OnPremise(props: DiagramNodeProps) {
  return (
    <Shape {...ON_PREMISE} {...props} _style={extendStyle(ON_PREMISE, props)} />
  )
}
