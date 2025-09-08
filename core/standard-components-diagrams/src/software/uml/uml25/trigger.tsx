import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIGGER = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;align=center;verticalAlign=middle;fontSize=14;fontStyle=0;flipH=1;fillColor=#FFFFFF;whiteSpace=wrap;',
  },
  _original_width: 160,
  _original_height: 40,
}

export function Trigger(props: DiagramNodeProps) {
  return <Shape {...TRIGGER} {...props} _style={extendStyle(TRIGGER, props)} />
}
