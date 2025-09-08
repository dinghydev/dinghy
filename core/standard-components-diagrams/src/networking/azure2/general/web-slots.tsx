import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEB_SLOTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Web_Slots.svg;strokeColor=none;',
  },
  _original_width: 57.99999999999999,
  _original_height: 64,
}

export function WebSlots(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_SLOTS} {...props} _style={extendStyle(WEB_SLOTS, props)} />
  )
}
