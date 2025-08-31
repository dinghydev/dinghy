import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORTFOLIO = {
  _style:
    'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.portfolio;',
  _width: 120,
  _height: 70,
}

export function Portfolio(props: DiagramNodeProps) {
  return (
    <Shape {...PORTFOLIO} {...props} _style={extendStyle(PORTFOLIO, props)} />
  )
}
