import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TIMELINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.timeline2;dx1=0;dy1=1;dx2=30;dy2=0;dx3=160;dy3=1;dx4=230;dy4=0;dx5=310;dy5=1;dy6=0;',
  },
  _width: 400,
  _height: 40,
}

export function Timeline(props: DiagramNodeProps) {
  return (
    <Shape {...TIMELINE} {...props} _style={extendStyle(TIMELINE, props)} />
  )
}
