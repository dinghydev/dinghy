import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOLUME_2 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.volume_2;pointerEvents=1',
  },
  _width: 30.299999999999997,
  _height: 28.2,
}

export function Volume2(props: DiagramNodeProps) {
  return (
    <Shape {...VOLUME_2} {...props} _style={extendStyle(VOLUME_2, props)} />
  )
}
