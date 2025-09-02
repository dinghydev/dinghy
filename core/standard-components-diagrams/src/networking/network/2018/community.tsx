import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNITY = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.community;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function Community(props: DiagramNodeProps) {
  return (
    <Shape {...COMMUNITY} {...props} _style={extendStyle(COMMUNITY, props)} />
  )
}
