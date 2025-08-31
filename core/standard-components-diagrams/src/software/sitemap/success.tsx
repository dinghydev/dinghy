import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUCCESS = {
  _style:
    'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.success;',
  _width: 120,
  _height: 70,
}

export function Success(props: DiagramNodeProps) {
  return <Shape {...SUCCESS} {...props} _style={extendStyle(SUCCESS, props)} />
}
