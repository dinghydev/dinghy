import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATE_5 = {
  _style:
    'shape=umlState;rounded=1;verticalAlign=top;spacingTop=5;umlStateSymbol=collapseState;absoluteArcSize=1;arcSize=10;html=1;whiteSpace=wrap;',
  _width: 140,
  _height: 60,
}

export function State5(props: DiagramNodeProps) {
  return <Shape {...STATE_5} {...props} _style={extendStyle(STATE_5, props)} />
}
