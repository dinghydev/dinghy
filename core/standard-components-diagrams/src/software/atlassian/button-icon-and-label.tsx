import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_ICON_AND_LABEL = {
  _style: {
    entity:
      'rounded=1;align=left;fillColor=#F1F2F4;strokeColor=none;html=1;fontColor=#596780;fontSize=12;spacingLeft=26;',
  },
  _original_width: 0,
  _original_height: 33,
}

export function ButtonIconAndLabel(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_ICON_AND_LABEL}
      {...props}
      _style={extendStyle(BUTTON_ICON_AND_LABEL, props)}
    />
  )
}
