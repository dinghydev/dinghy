import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FAQ = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.faq;',
  },
  _original_width: 120,
  _original_height: 70,
}

export function Faq(props: DiagramNodeProps) {
  return <Shape {...FAQ} {...props} _style={extendStyle(FAQ, props)} />
}
