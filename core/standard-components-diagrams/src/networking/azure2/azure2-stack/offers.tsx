import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OFFERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Offers.svg;',
  _width: 65,
  _height: 64,
}

export function Offers(props: DiagramNodeProps) {
  return <Shape {...OFFERS} {...props} />
}
