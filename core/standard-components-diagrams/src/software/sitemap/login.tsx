import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIN = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.login;',
  },
  _original_width: 120,
  _original_height: 70,
}

export function Login(props: DiagramNodeProps) {
  return <Shape {...LOGIN} {...props} _style={extendStyle(LOGIN, props)} />
}
