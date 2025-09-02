import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_WITH_SEGMENTED_BUTTONS = {
  _style: {
    entity: 'shape=rect;fillColor=#BDBDBD;strokeColor=#eeeeee;shadow=1;',
  },
  _original_width: 342,
  _original_height: 522,
}

export function CardWithSegmentedButtons(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARD_WITH_SEGMENTED_BUTTONS}
      {...props}
      _style={extendStyle(CARD_WITH_SEGMENTED_BUTTONS, props)}
    />
  )
}
