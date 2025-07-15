import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RUNNING_PLAYING = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.running_playing;',
  _width: 21,
  _height: 21,
}

export function RunningPlaying(props: DiagramNodeProps) {
  return <Shape {...RUNNING_PLAYING} {...props} />
}
