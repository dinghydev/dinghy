import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BIOGRAPHY = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.biography;',
  },
  _width: 120,
  _height: 70,
}

export function Biography(props: DiagramNodeProps) {
  return (
    <Shape {...BIOGRAPHY} {...props} _style={extendStyle(BIOGRAPHY, props)} />
  )
}
