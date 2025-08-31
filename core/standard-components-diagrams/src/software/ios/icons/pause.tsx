import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PAUSE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.pause;pointerEvents=1',
  },
  _width: 15,
  _height: 24,
}

export function Pause(props: DiagramNodeProps) {
  return <Shape {...PAUSE} {...props} _style={extendStyle(PAUSE, props)} />
}
