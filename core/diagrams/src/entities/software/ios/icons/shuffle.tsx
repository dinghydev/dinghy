import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHUFFLE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.shuffle;pointerEvents=1',
  },
  _width: 30,
  _height: 21,
}

export function Shuffle(props: NodeProps) {
  return <Shape {...SHUFFLE} {...props} _style={extendStyle(SHUFFLE, props)} />
}
