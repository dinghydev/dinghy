import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POST = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.post;',
  },
  _width: 120,
  _height: 70,
}

export function Post(props: DiagramNodeProps) {
  return <Shape {...POST} {...props} _style={extendStyle(POST, props)} />
}
