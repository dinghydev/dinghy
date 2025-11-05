import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LAYERS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.layers;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 81,
  _original_height: 79.5,
}

export function Layers(props: NodeProps) {
  return <Shape {...LAYERS} {...props} _style={extendStyle(LAYERS, props)} />
}
