import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLAY_START = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.play_start',
  _width: 60,
  _height: 60,
}

export function PlayStart(props: DiagramNodeProps) {
  return (
    <Shape {...PLAY_START} {...props} _style={extendStyle(PLAY_START, props)} />
  )
}
