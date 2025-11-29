import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_WITH_SEGMENTED_BUTTONS = {
  _style: {
    entity: 'shape=rect;fillColor=#BDBDBD;strokeColor=#eeeeee;shadow=1;',
  },
  _width: 342,
  _height: 522,
}

export function CardWithSegmentedButtons(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CARD_WITH_SEGMENTED_BUTTONS)}
    />
  )
}
