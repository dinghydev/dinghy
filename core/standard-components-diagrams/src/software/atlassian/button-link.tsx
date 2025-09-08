import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_LINK = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontColor=#0057D8;align=left;fontSize=12;sketch=0;',
  },
  _original_width: 0,
  _original_height: 33,
}

export function ButtonLink(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_LINK}
      {...props}
      _style={extendStyle(BUTTON_LINK, props)}
    />
  )
}
