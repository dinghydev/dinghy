import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOOGLE_PLAY_LIGHT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.google_play_light;fillColor=#66E8F3;gradientColor=#1C7CBA',
  _width: 60,
  _height: 10.4,
}

export function GooglePlayLight(props: DiagramNodeProps) {
  return <Shape {...GOOGLE_PLAY_LIGHT} {...props} />
}
