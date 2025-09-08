import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WATSONX = {
  _style: {
    entity:
      'shape=rect;fillColor=#A56EFF;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 48,
}

export function Watsonx(props: DiagramNodeProps) {
  return <Shape {...WATSONX} {...props} _style={extendStyle(WATSONX, props)} />
}
