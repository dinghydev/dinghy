import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOOGLE_PLAY_LIGHT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.google_play_light;fillColor=#66E8F3;gradientColor=#1C7CBA',
  },
  _width: 60,
  _height: 10.4,
}

export function GooglePlayLight(props: NodeProps) {
  return (
    <Shape
      {...GOOGLE_PLAY_LIGHT}
      {...props}
      _style={extendStyle(GOOGLE_PLAY_LIGHT, props)}
    />
  )
}
