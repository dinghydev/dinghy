import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.wave2;dy=0.3;',
  },
  _width: 100,
  _height: 60,
}

export function Wave(props: NodeProps) {
  return <Shape {...WAVE} {...props} _style={extendStyle(WAVE, props)} />
}
