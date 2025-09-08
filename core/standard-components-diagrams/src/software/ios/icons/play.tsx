import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLAY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.play;',
  },
  _original_width: 21,
  _original_height: 24,
}

export function Play(props: DiagramNodeProps) {
  return <Shape {...PLAY} {...props} _style={extendStyle(PLAY, props)} />
}
