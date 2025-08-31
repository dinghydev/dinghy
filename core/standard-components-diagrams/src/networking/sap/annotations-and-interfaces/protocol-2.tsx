import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROTOCOL_2 = {
  _style:
    'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#0070F2;strokeWidth=1.5;',
  _width: 1,
  _height: 16,
}

export function Protocol2(props: DiagramNodeProps) {
  return (
    <Shape {...PROTOCOL_2} {...props} _style={extendStyle(PROTOCOL_2, props)} />
  )
}
