import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROTOCOL_5 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#07838f;strokeWidth=1.5;',
  },
  _width: 1,
  _height: 16,
}

export function Protocol5(props: DiagramNodeProps) {
  return (
    <Shape {...PROTOCOL_5} {...props} _style={extendStyle(PROTOCOL_5, props)} />
  )
}
