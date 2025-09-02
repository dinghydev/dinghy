import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.error;',
  },
  _original_width: 120,
  _original_height: 70,
}

export function Error(props: DiagramNodeProps) {
  return <Shape {...ERROR} {...props} _style={extendStyle(ERROR, props)} />
}
