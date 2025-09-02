import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ABOUT_US = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.about_us;',
  },
  _original_width: 120,
  _original_height: 70,
}

export function AboutUs(props: DiagramNodeProps) {
  return (
    <Shape {...ABOUT_US} {...props} _style={extendStyle(ABOUT_US, props)} />
  )
}
