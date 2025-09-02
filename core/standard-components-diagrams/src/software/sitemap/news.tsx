import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEWS = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.news;',
  },
  _original_width: 120,
  _original_height: 70,
}

export function News(props: DiagramNodeProps) {
  return <Shape {...NEWS} {...props} _style={extendStyle(NEWS, props)} />
}
