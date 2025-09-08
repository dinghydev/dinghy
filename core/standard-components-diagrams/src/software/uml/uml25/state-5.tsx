import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STATE_5 = {
  _style: {
    entity:
      'shape=umlState;rounded=1;verticalAlign=top;spacingTop=5;umlStateSymbol=collapseState;absoluteArcSize=1;arcSize=10;html=1;whiteSpace=wrap;',
  },
  _original_width: 140,
  _original_height: 60,
}

export function State5(props: DiagramNodeProps) {
  return <Shape {...STATE_5} {...props} _style={extendStyle(STATE_5, props)} />
}
