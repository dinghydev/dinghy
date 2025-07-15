import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_SLOTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Web_Slots.svg;',
  _width: 57.99999999999999,
  _height: 64,
}

export function WebSlots(props: DiagramNodeProps) {
  return <Shape {...WEB_SLOTS} {...props} />
}
