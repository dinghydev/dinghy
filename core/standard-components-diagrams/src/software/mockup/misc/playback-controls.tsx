import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLAYBACK_CONTROLS = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.playbackControls;sketch=0;strokeColor=#999999;fillColor2=#99ddff;strokeColor2=none;fillColor3=#ffffff;strokeColor3=none;',
  _width: 250,
  _height: 30,
}

export function PlaybackControls(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLAYBACK_CONTROLS}
      {...props}
      _style={extendStyle(PLAYBACK_CONTROLS, props)}
    />
  )
}
