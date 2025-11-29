import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WATSONX = {
  _style: {
    entity:
      'shape=rect;fillColor=#A56EFF;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _width: 0,
  _height: 48,
}

export function Watsonx(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WATSONX)} />
}
