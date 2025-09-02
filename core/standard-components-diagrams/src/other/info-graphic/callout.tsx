import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALLOUT = {
  _style: {
    entity:
      'endArrow=oval;html=1;fontSize=16;fontColor=#10739E;endFill=0;endSize=24;strokeWidth=5;labelBackgroundColor=none;verticalAlign=top;fontStyle=1;strokeColor=#10739E;',
  },
  _original_width: 0,
  _original_height: 100,
}

export function Callout(props: DiagramNodeProps) {
  return <Shape {...CALLOUT} {...props} _style={extendStyle(CALLOUT, props)} />
}
