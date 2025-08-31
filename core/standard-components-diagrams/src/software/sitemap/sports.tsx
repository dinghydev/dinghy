import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPORTS = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.sports;',
  },
  _width: 120,
  _height: 70,
}

export function Sports(props: DiagramNodeProps) {
  return <Shape {...SPORTS} {...props} _style={extendStyle(SPORTS, props)} />
}
