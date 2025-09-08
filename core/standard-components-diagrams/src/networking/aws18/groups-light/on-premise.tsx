import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ON_PREMISE = {
  _style: {
    group:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_on_premise;strokeColor=#AAB7B8;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;',
    entity: {
      strokeColor: '#AAB7B8',
      fontColor: '#AAB7B8',
    },
  },
}

export function OnPremise(props: DiagramNodeProps) {
  return (
    <Shape {...ON_PREMISE} {...props} _style={extendStyle(ON_PREMISE, props)} />
  )
}
