import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INITIAL_PREUDOSTATE_NODE = {
  _style: {
    entity: 'ellipse;fillColor=strokeColor;html=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function InitialPreudostateNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...INITIAL_PREUDOSTATE_NODE}
      {...props}
      _style={extendStyle(INITIAL_PREUDOSTATE_NODE, props)}
    />
  )
}
