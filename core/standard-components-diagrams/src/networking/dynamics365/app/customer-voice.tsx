import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUSTOMER_VOICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CustomerVoice.svg;',
  _width: 68,
  _height: 68,
}

export function CustomerVoice(props: DiagramNodeProps) {
  return <Shape {...CUSTOMER_VOICE} {...props} />
}
