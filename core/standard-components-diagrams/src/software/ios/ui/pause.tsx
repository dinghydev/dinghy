import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PAUSE = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.pause;strokeColor=#0080f0;sketch=0;',
  _width: 12,
  _height: 12,
}

export function Pause(props: DiagramNodeProps) {
  return <Shape {...PAUSE} {...props} _style={extendStyle(PAUSE, props)} />
}
